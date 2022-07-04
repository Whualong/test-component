<template>
    <div>
        <canvas id="pie"  :width="width" :height="height"></canvas>
        <div class="parent" @click="parent($event)">
            <div>
                <span class="child">
                    潘勇哟昂
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        width : {
            type : String,
            default : '250px'
        },
        height : {
            type : String,
            default : '250px'
        },
        chartOption : {
            type : Object,
            default : () =>{
                return {
                    lineWidth : 50,
                    radius : 80,
                    data : [
                        { color : '#ff599b', shadowColor : 'RGBA(255, 200, 222, 1)', value : 100 },
                        { color : '#00E8F1', shadowColor : 'RGBA(191, 249, 252, 1)', value : 1 },
                        { color : '#506EFF', shadowColor : 'RGBA(162, 202, 253, 1)', value : 2 }
                    ]
                }
            }
        }
    },
    data(){
        return {
            context : null,
            lineWidth : 40,
            radius : 100,
            shadowOffsetX : 2,
            shadowOffsetY : 6,
            shadowBlur : 5,
            circleX : 100,
            circleY : 100,
        }
    },
    mounted(){
        this.context = document.getElementById('pie').getContext('2d');
        this.init()
        this.render()
    },
    methods:{
        child(){

        },
        parent(e){
            console.log(e.target.parentElement.parentElement)
        },
        init(){
            this.context.lineWidth = this.chartOption.lineWidth || this.lineWidth;
            this.radius = this.chartOption.radius || this.radius;
            this.circleX = Math.floor( this.width.replace('px','') / 2 );
            this.circleY = this.circleX;
            this.context.lineCap = 'round';
            this.context.shadowOffsetX = this.shadowOffsetX;
            this.context.shadowOffsetY = this.shadowOffsetY ;
            this.context.shadowBlur = this.shadowBlur;
        },
        render(){
            let all = 0;
            this.chartOption.data.forEach((item) =>{
                item.value = Number (item.value)
                all = all +  item.value 
            })
            let data = this.chartOption.data;
            if ( all === 0 ){
                let jd = Math.PI * 2 / data.length
                for(let i = 0;i < data.length; i++ ){
                    this.context.save()
                    this.context.shadowColor = data[i].shadowColor
                    this.context.strokeStyle = data[i].color;
                    this.context.beginPath();
                    this.context.arc(this.circleX, this.circleY, this.radius, i * jd ,jd *(i+1), false);
                    this.context.stroke();
                    this.context.restore()
                }
                this.lastRender(data)
            }else{
                let startRadius = 0;
                let endRadius = 0;
                data = this.chartOption.data.filter((item)=>{
                    return item.value > 0 ;
                })
                data.sort((a,b)=>{
                    return b.value - a.value; 
                })
                for(let j = 0;j < data.length; j++ ){
                    this.context.save()
                    this.context.shadowColor = data[j].shadowColor
                    this.context.strokeStyle = data[j].color;
                    this.context.beginPath();
                    startRadius = endRadius;
                    endRadius = Math.PI * 2 * (data[j].value / all) + startRadius
                    this.context.arc(this.circleX, this.circleY, this.radius, startRadius ,endRadius, false);
                    this.context.stroke();
                    this.context.restore()
                }
                this.lastRender(data)
            }
        },
        lastRender(data){
            this.context.save()
            this.context.strokeStyle = data[0].color;
            this.context.beginPath();
            this.context.arc(this.circleX, this.circleY, this.radius, 0 ,Math.PI * 1/12, false);
            this.context.stroke();
            this.context.restore()
        },
        //
        hexTorgb(a){
            if (a == ""){
                return ""
            }
            a=a.substring(1);
            a=a.toLowerCase();
            let b=new Array();
            for(let x=0;x<3;x++){
                b[0]=a.substr(x*2,2);
                b[3]="0123456789abcdef";
                b[1]=b[0].substr(0,1);
                b[2]=b[0].substr(1,1);
                b[20+x]=b[3].indexOf(b[1])*16+b[3].indexOf(b[2]);
            }
            return "rgb(" +  b[20]+","+b[21]+","+b[22] + ")";
        }
    }

}
</script>

<style>
.parent{
    width: 200px;
    height: 100px;
    background: orange;
}
.child{
    display: inline-block;
    width: 80px;
    height: 50px;
    background: red;
}
</style>