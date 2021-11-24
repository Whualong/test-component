<template>
    <div class='mobile-app'>
        <div class='header'>
            <div class='logo'>
                <img src='../assets/tange-logo.png'>
            </div>
        </div>
        <div class='phone'>
            <label>+86</label><input @change="checkInput" v-model.trim="phone" placeholder="请输入手机号" type='number'>
        </div>
        <div class='protocal' @click='checkIt=!checkIt'>
            <div class='unread' v-if='!checkIt'></div><img class='read' src='../assets/active-p-4.png' v-else>
            <div class='content'>已阅读并同意<a class='link'>服务协议</a>和<a class='link'>个人信息保护政策</a></div>
        </div>
        <div class='btn-yzm'>
            <button @click="getYzm" :class="{'active':true}">获取验证码</button>
        </div>
    </div>
</template>

<script>
import {Toast} from 'vant';
export default {
    data(){
        return{
            checkIt:false,
            phone:'',
            isOk:false,
        }
    },
    watch:{
        checkIt(){
            this.checkInput()
        }
    },
    methods:{
        checkInput(){
            if((this.check())&& this.checkIt ){
                this.isOk =true
            }else{
                this.isOk=false;
            }
        },
        check(){
            let reg = /^\d{11}$/;
            return reg.test(this.phone)
        },
        getYzm(){
            if(this.check()){
                if(!this.checkIt){
                    Toast.fail('请阅读并勾选用户协议');
                }else{
                    this.isOk=true;
                    this.$router.push({
                        path:'/yzm'
                    })
                }
            }else{
                if(this.phone==''){
                    Toast.fail('手机号输入不能为空');
                }else{
                    Toast.fail('请输入正确的手机号，否则无法接收验证码');
                }
                
            }
        }
    }
}
</script>

<style scoped>
.mobile-app{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}
.header{
    background: url('../assets/home-bg.png');
    height: 346px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.logo{
    text-align: center;
}
.logo>img{
    width: 72px;
    height: 92px;
    margin-top:211px;
}
.phone{
    padding:16px 40px 16px;
    background-clip: content-box;
    height: 48px;
    background-color: #F4F4F4;
    border-radius: 4px;
    line-height: 48px;
    text-align: left;
    display: flex;
    flex-direction: row;
}
.phone >label{
    height: inherit;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    display: inline-block;
    padding:0px 14px;
    position: relative;
    flex: 0 0 28px;
}
.phone >label::after{
    position: absolute;
    right: 7px;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: #DFDFDF;
}
.phone >input{
    flex:1;
    background: transparent;
    outline: none;
    border: none;
    font-size: 16px;
    color: #333333;
    padding:0;
    margin:0;
    line-height: 48px;;
}
.phone>input::placeholder{
    font-size: 16px;
    color: #999999;
    line-height: 48px;;
}
.protocal{
    display: flex;
    padding:0px 40px 0px;
}
.read{
    width:12px;
    height: 12px;
    margin-top:4px;
}
.unread{
    width: 10px;
    height: 10px;
    border: 1px solid #979797;
    border-radius: 50%;
    margin-top: 4px;
}
.protocal>.content{
    margin-left: 6px;
    font-size: 14px;
    line-height: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
}
.link{
    color:#4865FF;
    list-style: none;
}
.btn-yzm{
    padding:0 40px;
    margin-top: 50px;;
}
.btn-yzm>button{
    height: 44px;
    width: 100%;
    color: #FFFFFF;
    background: #DEDEDE;
    font-weight: bolder;
    border:none;

    font-size: 17px;    
    border-radius: 22px;
}
.btn-yzm>button.active{
    background: linear-gradient(257deg, #4865FF 0%, #658BFF 100%);
    box-shadow: 0px 2px 4px 0px rgba(72, 101, 255, 0.5);
}
</style>