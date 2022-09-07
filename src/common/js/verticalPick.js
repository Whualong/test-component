export default class Picker {
    constructor(options) {
        this.options = Object.assign({activeIndex:0}, options);
        this.isPointerdown = false;
        this.itemHeight = 40; // 列表项高度
        this.maxY = this.itemHeight * 2;
        this.minY = this.itemHeight * (3 - this.options.list.length);
        this.lastY = 0;
        this.diffY = 0;
        this.translateY = 0; // 当前位置
        this.friction = 0.95; // 摩擦系数
        this.distanceY = 0; // 滑动距离
        this.result = this.options.list[0];
        this.render();
        this.bindEventListener();
    }
    render() {
        // let html = '';
        // for (const item of this.options.list) {
        //     html += '<li class="opt-item">' + item + '</li>';
        // }
        // this.options.pickerContent.innerHTML = html;
        this.options.pickerContent.style.transform = 'translate3d(0px, ' + this.maxY + 'px, 0px)';
        let initY = this.maxY - this.options.activeIndex*40
        this.options.pickerContent.style.transform = 'translate3d(0px, ' + initY + 'px, 0px)';
    }
    handlePointerdown(e) {
        // 如果是鼠标点击，只响应左键
        if (e.pointerType === 'mouse' && e.button !== 0) {
            return;
        }
        this.options.pickerColumn.setPointerCapture(e.pointerId);
        this.isPointerdown = true;
        this.lastY = e.clientY;
        this.diffY = 0;
        this.distanceY = 0;
        this.getTransform();
        this.options.pickerContent.style.transform = 'translate3d(0px, ' + this.translateY + 'px, 0px)';
        this.options.pickerContent.style.transition = 'none';
    }
    handlePointermove(e) {
        if (this.isPointerdown) {
            this.diffY = e.clientY - this.lastY;
            this.translateY += this.diffY;
            this.lastY = e.clientY;
            this.options.pickerContent.style.transform = 'translate3d(0px, ' + this.translateY + 'px, 0px)';
        }
    }
    handlePointerup(e) {
        if (this.isPointerdown) {
            this.isPointerdown = false;
            this.getTranslateY();
            // 滑动距离与时长成正比且最短时长为300ms
            const duration = Math.max(Math.abs(this.distanceY) * 1.5, 300);
            this.options.pickerContent.style.transition = 'transform ' + duration + 'ms ease';
            this.options.pickerContent.style.transform = 'translate3d(0px, ' + this.translateY + 'px, 0px)';
        }
    }
    handlePointercancel(e) {
        if (this.isPointerdown) {
            this.isPointerdown = false;
        }
    }
    bindEventListener() {
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handlePointercancel = this.handlePointercancel.bind(this);
        this.options.pickerColumn.addEventListener('pointerdown', this.handlePointerdown);
        this.options.pickerColumn.addEventListener('pointermove', this.handlePointermove);
        this.options.pickerColumn.addEventListener('pointerup', this.handlePointerup);
        this.options.pickerColumn.addEventListener('pointercancel', this.handlePointercancel);
    }
    getTransform() {
        const transform = window.getComputedStyle(this.options.pickerContent).getPropertyValue('transform');
        this.translateY = parseFloat(transform.split(',')[5]);
    }
    getTranslateY() {
        let speed = this.diffY;

        while (Math.abs(speed) > 1) {
            speed *= this.friction;
            this.distanceY += speed;
        }
        // 边界判断

        let y = this.translateY + this.distanceY;
        if (y > this.maxY) {
            this.translateY = this.maxY;
            this.distanceY = this.maxY - this.translateY;
        } else if (y < this.minY) {
            this.translateY = this.minY;
            this.distanceY = this.minY - this.translateY;
        } else {
            this.translateY = y;
        }
        // 计算停止位置使其为itemHeight的整数倍
        let i = Math.round(this.translateY / this.itemHeight);
        let oldResult = this.result
        this.translateY = i * this.itemHeight;
        this.result = this.options.list[2 - this.translateY / this.itemHeight];
        if(this.result != oldResult && this.options.change){
            this.options.change(this.result)
        }
    }
}

