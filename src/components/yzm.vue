<template>
  <div id="app">
    <div class="text-capture">
        <span>短信验证</span>
        <p> 验证码已发送至手机号（+86）{{phone}}</p>
    </div>
    <div class="captcha">
        <!-- 验证码框子 -->
        <div class='input-box'>
             <input v-for="(c, index) in ct" :key="index"
              type="number" v-model="ct[index]" ref="input" 
              :class="{'active-input':index <= cIndex}"
              @input="e => {onInput(e.target.value, index)}" 
              @keydown.delete="e=>{onKeydown(e.target.value, index)}"
              @focus="onFocus"
              :disabled="loading"
            >
            <!-- 文案 -->
            <div class='textValue'>
                <div v-show='mesShow' class='getYzm' @click='getYzm'>获取验证码</div>
                <div v-show='!mesShow' class='reSend' @click='reSend'>重新发送{{" ("+second+")"}}</div>
            </div>
        </div>
        
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      ct: ['', '', '', '', '', ''],
      loading: false,
      msg: '',
      second:60,
      mesShow:true,
      timer:null,
      phone:18604958375
    }
  },
  computed: {
    ctSize() {
      return this.ct.length;
    },
    cIndex() {
      let i = this.ct.findIndex(item => item === '');
      i = (i + this.ctSize) % this.ctSize;
      return i;
    },
    lastCode() {
      return this.ct[this.ctSize - 1];
    }
  },
  watch: {
    cIndex() {
      this.resetCaret();
    },
    lastCode(val) {
      if (val) {
        console.log('this.ctSize', this.ctSize)
        this.$refs.input[this.ctSize - 1].blur();
        this.sendCaptcha();
      }
    }
  },
  mounted() {
    this.resetCaret();
    this.initPaste()
  },
  methods: {
    // 监听粘贴
    initPaste(){
      document.addEventListener('paste', async (e) => {
        e.preventDefault();
        const text = await navigator.clipboard.readText();
        if(text.length == this.ct.length){
          this.ct = []
          Array.prototype.forEach.call(text,(item)=>{   
              this.ct.push(Number(item))
              // this.ct[index]=Number(item)
          })
        }
      });
    },
    // 获取验证码
    getYzm(){
        this.mesShow=false;
        this.reduceMsg()
    },
    reSend(){
        setTimeout(()=>{
          if(this.second== 60)
          this.mesShow=true;
        },1000)
    },
    // 设置一分钟定时器
    reduceMsg(){
        !this.timer&&(this.timer= setInterval(()=>{
            if(this.second!=1){
                this.second--
            }else
            {
                clearInterval(this.timer)
                this.mesShow=true;
                this.timer=null
                this.second=60
            }
        },1000))
    },
    // 控制输入逻辑
    onInput(val, index) {
      this.msg = ''
      val = val.replace(/\s/g, '');
      if(isNaN(val)){ //非数字
        val = '' 
      }
      if (index == this.ctSize - 1) {
        this.ct[this.ctSize - 1] = val[0];   // 最后一个码，只允许输入一个字符。
      } else if(val.length > 1) {
        let i = index;
        for (i = index; i < this.ctSize && i - index < val.length; i++) {
          this.ct[i] = val[i];
        }
        this.resetCaret();
      }
    },
    // 重置光标位置。
    resetCaret() {
      this.$refs.input[this.ctSize-1].focus();
    },
    // 监听光标
    onFocus() {
      // 监听 focus 事件，将光标重定位到“第一个空白符的位置”。
      let index = this.ct.findIndex((item) => item === '');
      index = (index + this.ctSize) % this.ctSize;
      console.log(this.$refs.input)
      this.$refs.input[index].focus();
    },
    // 删除
    onKeydown(val, index) {
      if (val === '') {
        // 删除上一个input里的值，并对其focus。
        if (index > 0) {
          this.ct[index - 1] = '';
          this.$refs.input[index - 1].focus();
        }
      }
    },
    sendCaptcha() {
      console.log();
      this.msg = `发送验证码到服务器：${this.ct.join('')}`;
      // 此时无法操作 input。。
     // this.loading = true;
      setTimeout(() => {
        this.msg = ('验证码错误')
       // this.loading = false;
        this.$nextTick(() => {
          // this.reset();
        })
      }, 3000)
    },
    reset() {
      // 重置。一般是验证码错误时触发。
      this.ct = this.ct.map(() => '');
      this.resetCaret();
    }
  }
}

</script>

<style>
.captcha {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 80px;
}
.input-box{
  position: relative;
}
input {
  margin-right: 10px;
  width: 20px;
  height: 40px;
  text-align: center;
  border: none;
  border: 2px solid lightgray;
  font-size: 24px;
  outline: none;

  border-radius: 8px;
  transition: border 0.3s linear;
}
input:last-of-type {
  margin-right: 0;
}
.active-input{
    transition: border 0.3s linear;
    border-color:skyblue;
}
input:disabled {
  color: #000;
  background-color: #fff;
}
.msg {
  text-align: center;
}
.textValue{
   position: absolute;
   top:60px;
   right: 0;
   user-select: none;
}
.getYzm{
    color:#333;
    cursor: pointer;
}
.reSend{
    color:lightgray;
    cursor: pointer;
}
</style>