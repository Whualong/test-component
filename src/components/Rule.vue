<template>
  <div
    v-if="!unitChange"
    class="zy-ruler"
    @touchstart="$_startDrag"
    @touchend="$_stopDrag"
  >
    <div style="width: 1px; height: 10px; background: red; position: absolute; left: 548px; z-index: 10000" />
    <canvas
      ref="canvas"
      class="zy-ruler-canvas"
    />
    <div
      class="zy-ruler-cursor"
      :class="[isStepTextBottom && 'zy-ruler-cursor-bottom']"
    />
  </div>
</template>

<script >
import Scroller from 'utils/scroller';
import { throttle, noop } from 'utils/index.js';

export default {
    name : 'ZyRuler',

    components : {},

    props : {
        value : {
            type : Number,
            default : 0
        },
        scope : {
            type : Array,
            default : () => [ 0, 100 ]
        },
        step : { // 多少步显示数值
            type : Number,
            default : 10
        },
        stepInterval : { // 步之前间隔多少跳转
            type : Number,
            default : 1
        },
        unit : {
            type : Number,
            default : 1
        },
        min : {
            type : Number,
            default : 0
        },
        max : {
            type : Number,
            default : 100
        },
        stepTextPosition : {
            type : String,
            default : 'top',
            validator : val => !!~[ 'top', 'bottom' ].indexOf( val )
        },
        stepTextRender : {
            type : Function,
            default : noop
        },
        pointerColor : {
            type : String,
            default : '#C6CDD6'
        },
        lineWidth : {
            type : Number,
            default : 2
        },
        blank : {
            type : Number,
            default : 40
        }
    },

    data() {
        return {
            clientHeight : 90,
            scroller : null,
            ratio : 2,
            isInitialed : false,
            isDragging : false,
            isScrolling : false,
            x : 0,
            scrollingX : 0,
            i:0,
            unitChange:false
        };
    },

    computed : {
        unitCount() {
            const { scope : [ min, max ], unit } = this;
            return Math.ceil( ( max - min ) / unit );
        },

        canvasWidth() {
            return this.$refs.canvas.clientWidth * this.ratio;
        },

        realMin() {
            const { scope, min } = this;
            const [ left, right ] = scope;
            if( min > right ) {
                return left;
            }
            return min > left ? min : left;
        },

        realMax() {
            let { scope, max } = this;
            const [ left, right ] = scope;
            if( left > max ) {
                return right;
            }
            return max > right ? right : max;
        },

        blankLeft() {
            const { scope, realMin, unit, blank } = this;
            const [ min ] = scope;
            return Math.ceil( ( realMin - min ) / unit ) * blank;
        },

        blankRight() {
            const { scope, realMax, unit, blank } = this;
            const [ , max ] = scope;
            return Math.ceil( ( max - realMax ) / unit ) * blank;
        },
        isStepTextBottom() {
            return this.stepTextPosition === 'bottom';
        }
    },

    watch : {
        value() {
              console.log('value change',true)
            if( this.isScrolling ) {
                return;
            }
            
              console.log('value chage',false)
            this.scrollingX = 0;
            this.isScrolling = true;
            const x = this.$_initX();
            this.$_draw( x );
            this.scroller.scrollTo( x, 0, true );
        },
        isScrolling(n,val){
            console.log('isScorll new old',n,val)
        },
        unit(newD,old) {
            this.$emit('changeUnit')
         
        }
    },

    mounted() {
        const { $refs } = this;
        // without watch ctx
        this.ctx = $refs.canvas.getContext( '2d' );
        console.log('哈哈哈',1)
        this.$_initCanvas();
        this.x = this.canvasWidth;
        this.$_initScroller();
    },

    methods : {
        initValue(){
            this.clientHeight = 90
            this.scroller = null 
            this.ratio = 2
            this.isInitialed  = false
            this.isDragging  = false
            this.isScrolling = false
            this.x = 0
            this.scrollingX = 0
            this.i=0
        },
        // MARK: private methods canvas放大且缩小维持清晰
        $_initCanvas() {
            const { ratio, ctx, canvasWidth, clientHeight, $refs } = this;
            const { canvas } = $refs;

            canvas.width = canvasWidth;
            canvas.height = clientHeight * ratio;

            const scale = 1 / ratio;
            ctx.scale( scale, scale );
        },

        $_initScroller() {
            const { blankLeft, blankRight, blank, unitCount, canvasWidth, clientHeight, stepInterval } = this;

            const drawFn = throttle( this.$_draw, 10 );
            const scroller = new Scroller(
                left => {
                    if( this.isInitialed ) {
                        drawFn( left );
                    } else {
                        this.$_draw( left );
                    }
                },
                {
                    scrollingX : true,
                    scrollingY : false,
                    snapping : true,
                    snappingVelocity : 1,
                    animationDuration : 200,
                    inRequestAnimationFrame : true,
                    scrollingComplete : () => {
                        this.isScrolling = false;
                    }
                }
            );

            // set real scroll width
            const innerWidth = unitCount * blank + canvasWidth - blankLeft - blankRight;
            const x = this.$_initX();
            console.log('initX',x)
            this.$_draw( x );
            console.log('setDimensions',canvasWidth,clientHeight,innerWidth,clientHeight)
            scroller.setDimensions( canvasWidth, clientHeight, innerWidth, clientHeight );
            scroller.setSnapSize( blank * stepInterval, 0 );
            scroller.scrollTo( x, 0, false );

            this.scroller = scroller;
            this.isInitialed = true;
        },

        $_initX() {
            const { value, scope, realMin, realMax, unit, blank, unitCount, canvasWidth } = this;
            const [ min ] = scope;

            this.x = canvasWidth - Math.ceil( ( realMin - min ) / unit ) * blank;

            if( value <= realMin ) {
                return 0;
            } else if( value >= realMax ) {
                return unitCount * blank;
            }
            return Math.ceil( ( value - realMin ) / unit ) * blank;

        },

        $_draw( left ) {
            left = +left.toFixed( 2 );
            const { ctx, ratio, scrollingX, canvasWidth, clientHeight } = this;

            this.scrollingX = left;
            this.x += scrollingX - left;

            // clear canvas
            const scale = ratio * ratio;
            ctx.clearRect( 0, 0, canvasWidth * scale, clientHeight * scale );

            this.$_drawLine();
        },

        $_drawLine() {
            const { ctx, x, scope, step, unit, ratio, blank, unitCount, isStepTextBottom, pointerColor } = this;
            const { blankLeft, blankRight, canvasWidth } = this;
            const [ scopeLeft ] = scope;

            const _fontSize = 28;
            const _y = 180 - ( isStepTextBottom ? _fontSize + 24 : 0 );
            const _stepUnit = Math.round( step / unit );

            ctx.lineWidth = this.lineWidth * ratio;
            ctx.font = `${_fontSize *
            ratio}px -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif`;
           
            for( let i = 0; i <= unitCount; i++ ) {
                const _x = x + i * blank;

                if( _x < 0 || _x > canvasWidth * 2 ) {
                    continue;
                }

                // over range use another color
                const outRange = _x < x + blankLeft || _x > x + 1 + unitCount * blank - blankRight;
                if( outRange ) {
                    ctx.fillStyle = pointerColor;
                    ctx.strokeStyle = pointerColor;
                } else {
                    ctx.fillStyle = pointerColor;
                    ctx.strokeStyle = pointerColor;
                }

                ctx.beginPath();

                if( i % _stepUnit === 0 ) {
                    // draw text
                    let text = this.$_matchStepText( scopeLeft + unit * i );
                    const stepDecimal = String( step ).split( '.' )[ 1 ];
                    text = stepDecimal ? text.toFixed( stepDecimal ? stepDecimal.length : 0 ) : text;
                    const textOffset = String( text ).length * _fontSize / 2;
                    ctx.fillText( text, _x - textOffset, _fontSize * ratio + ( isStepTextBottom ? 235 : 0 ) );
                    ctx.moveTo( _x, 0 );
                    // draw line
                    ctx.lineTo( _x, ratio * 32 * 2 );
                } else {
                    ctx.moveTo( _x, 0 );
                    ctx.lineTo( _x, 21 * ratio * 2 );
                }
                ctx.stroke();
            }

            this.$_updateValue();
        },

        $_matchStepText( step ) {
            const match = this.stepTextRender( step );
            return match !== undefined && match !== null ? match : step;
        },

        $_startDrag( event ) {
            if( this.isDragging ) {
                return;
            }

            this.scroller.doTouchStart( event.touches, event.timeStamp );

            this.isDragging = true;
            this.isScrolling = true;
            console.log('dragStart')
            window.addEventListener( 'touchmove', this.$_onDrag, { passive : false } );
        },

        $_onDrag( event ) {
            event.preventDefault();
            event.stopPropagation();
            if( !this.isDragging ) {
                return;
            }
            this.scroller.doTouchMove( event.touches, event.timeStamp, event.scale );
        },

        $_stopDrag( event ) {
            event.preventDefault();
            event.stopPropagation();
            this.isDragging = false;

            this.scroller.doTouchEnd( event.timeStamp );

            window.removeEventListener( 'touchmove', this.$_onDrag );
        },

        $_updateValue() {
            if( !this.isInitialed ) {
                return;
            }

            const { x, scope : [ min ], realMin, realMax, unit, blank, canvasWidth } = this;

            if( x > canvasWidth ) {
                this.$_onInput( realMin );
                return;
            }

            const _x = x >= 0 ? Math.abs( x - canvasWidth ) : Math.abs( x ) + canvasWidth;
            let value = min + Math.round( _x / blank ) * unit;

            value > realMax && ( value = realMax );
            value < realMin && ( value = realMin );
            const decimal = unit.toString().split( '.' )[ 1 ];
            this.$_onInput( parseFloat( value.toFixed( decimal ? decimal.length : 0 ) ) );
        },

        // MARK: events handler, 如 $_onButtonClick
        $_onInput( value ) {
            this.$emit( 'input', value );
            this.$emit( 'change', value );
        }
    }
};

</script>

<style scope>
.zy-ruler {
    position: relative;
    width: 100%;
    height: 90px;
    box-sizing: border-box;
    /*font-family: font-family-number;*/
}

.zy-ruler .zy-ruler-canvas {
    width: 100%;
    background-color: #F5F5F5;
}

.zy-ruler .zy-ruler-cursor {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 70px;
    transform: translate(-50%);
    background-color: #4865FF;
}

.zy-ruler .zy-ruler-cursor:after {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4865FF;
    left: -3px;
    top: 16px;
}

.zy-ruler .zy-ruler-cursor-bottom {
    height: 46px;
}

</style>
