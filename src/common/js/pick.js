export default class Picker {
    constructor(options) {
        this.options = Object.assign({}, options);
        console.log(options, 'options')
        this.isPointerdown = false;
        this.itemHeight = 40; // 列表项高度
        this.maxY = this.itemHeight * 2;
        this.minY = this.itemHeight * (3 - this.options.list.length);
        console.log('mixX',this.minY)
        console.log('maxY',this.maxY)
        this.lastY = 0;
        this.diffY = 0;
        this.translateY = 0; // 当前位置
        this.friction = 0.95; // 摩擦系数
        this.distanceY = 0; // 滑动距离
        this.active = this.options.activeIndex
        this.result = this.options.list[this.active];
        this.render();
        this.bindEventListener();
    }
    render() {
        let html = '';
        for (const item of this.options.list) {
            html += '<li>' + item + '</li>';
        }
        this.options.pickerContent.innerHTML = html;
        let initY = this.maxY - (this.itemHeight* this.active)
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
        console.log('down触发')
        this.distanceY = 0;
        this.getTransform();
        this.options.pickerContent.style.transform = 'translate3d(0px, ' + this.translateY + 'px, 0px)';
        this.options.pickerContent.style.transition = 'none';
    }
    handlePointermove(e) {
        if (this.isPointerdown) {
            this.diffY = e.clientY - this.lastY;
            console.log('move触发')
            console.log('diffy',this.diffY)
            this.translateY += this.diffY;
            this.lastY = e.clientY;
            this.options.pickerContent.style.transform = 'translate3d(0px, ' + this.translateY + 'px, 0px)';
        }
    }
    handlePointerup(e) {
        if (this.isPointerdown) {
            this.isPointerdown = false;
            console.log('弹起时间')
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
        console.log('当前的translateY', this.translateY)
    }
    getTranslateY() {
        let speed = this.diffY;
        console.log('speed',speed)
        while (Math.abs(speed) > 1) {
            speed *= this.friction;
            this.distanceY += speed;
        }
        console.log(this.distanceY, 'distanceY')
        // 边界判断
        console.log(this.translateY, this.distanceY)
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
        console.log(this.minY, 'miny', y, 'y')
        // 计算停止位置使其为itemHeight的整数倍
        let i = Math.round(this.translateY / this.itemHeight);
        this.translateY = i * this.itemHeight;
        this.result = this.options.list[2 - this.translateY / this.itemHeight];
    }
}