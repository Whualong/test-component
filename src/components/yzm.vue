<template>
  <div id="yzm-app">
    <div class="text-capture">
        <div class='left-icon' @click="forward">
          <img src='../assets/icon-left.png'>
        </div>
        <div class='yzm-title'>输入短信验证码</div>
        <div class='yzm-content'>验证码已发送至手机号（+86）{{phone}}</div>
        <!--begin 验证码  -->
        <div class="captcha">
          <!-- 验证码框子 -->
            <input v-for="(c, index) in ct" :key="index"
              type="number" v-model="ct[index]" ref="input" 
              :class="{'active-input':index <= cIndex}"
              @input="e => {onInput(e.target.value, index)}" 
              @keydown.delete="e=>{onKeydown(e.target.value, index)}"
              @focus="onFocus"
              :disabled="loading"
            >
        </div>
        <!-- 文案 -->
        <div class='textValue'>
            <div v-show='mesShow' class='getYzm' @click='getYzm'>重新发送</div>
            <div v-show='!mesShow' class='reSend' @click='reSend'>{{second}}秒后重新发送</div>
        </div>
        <!-- end  -->
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
    this.getYzm()
    this.resetCaret();
    this.initPaste()
  },
  methods: {
    forward(){
      history.back()
    },
    // 监听粘贴
    initPaste(){
      document.addEventListener('paste', async (e) => {
        
        e.preventDefault();
        const text = await navigator.clipboard.readText();
        //检测粘贴内容是否合法
        let reg=/^\d{6}$/;
        if( reg.test(text)){
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
    checkInput(str = '',index){
        let reg =/^\d{1}$/;
        if(!reg.test(str)){
            this.$refs.input[index].value=''
            this.$set(this.ct,index,'');
        }
        else{
          this.$set(this.ct,index,str);
        }
    },
    // 控制输入逻辑
    onInput(val, index) {
      this.msg = ''
      val = val.replace(/\s/g, '');
      if (index == this.ctSize - 1) { // 最后一个输入框
        this.checkInput(val[0],index)
       // this.ct[this.ctSize - 1] = val[0];   // 最后一个，只允许输入一个字符。
      } else if(val.length > 1) {
        let i = index;
        for (i = index; i < this.ctSize && i - index < val.length; i++) {
          // 自动追加输入
          this.checkInput(val[i],i)
          //this.ct[i] = val[i];
        }
        this.resetCaret();
      }else{// 校验数字非数字清空
        this.checkInput(val,index)
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

<style scoped>
#yzm-app{
  height: 100%;
  overflow: hidden;
  text-align: left;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.text-capture{
  background-image: url('../assets/home-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 346px;
}
.left-icon{
  padding: 13px 10px 8px;
  text-align: left;
}
.left-icon>img{
  width: 23px;
  height: 21px;

}
.yzm-title{
  padding:25px 16px 10px;
  font-size: 26px;
  font-weight: bolder;
}
.yzm-content{
  font-size: 14px;
  color: #999999;
  line-height: 20px;
  padding-left: 16px;
}
.captcha {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px 16px 0;
}
input {
  padding:0;
  flex:1;
  margin-right: 10px;
  width: 36px;
  height: 40px;
  text-align: center;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid lightgray;
  background-color: transparent;
  font-size: 24px;
  outline: none;
  transition: border 0.3s linear;
}
input:last-of-type {
  margin-right: 0;
}
.active-input{
    transition: border 0.3s linear;
    border-color:#333;
}
input:disabled {
  color: #000;
  background-color: #fff;
}
.msg {
  text-align: center;
}
.textValue{
   padding:28px 16px 0;
   user-select: none;
}
.getYzm{
    cursor: pointer;
    font-size: 14px;
    color: #4865FF;
}
.reSend{
    cursor: pointer;
    font-size: 14px;
    color: rgba(72, 101, 255, 0.5);
}
</style>