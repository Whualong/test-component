<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-08 15:47:33
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-08 15:48:39
 * @FilePath: /eleapp/src/components/Oto.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->

<template>
    <div id="vueapp">
		<video ref="video" autoplay width="400" height="300"></video>
		<button @click="btnTakePhotoClicked()">Take photo</button>
		<canvas ref="canvas" width="400" height="300"></canvas>
		
		<a href="" download="canvas.jpeg" id="save_herf">
		<img src="" id="save_img" alt="">
		</a>
		</div>
</template>
<script>
export default  {
	el:"#vueapp",
	mounted(){
		this._initVueApp();
		this.btnTakePhotoClicked();
	},
	
	methods:{
		async _initVueApp(){
			this.$refs.video.srcObject= await navigator.mediaDevices.getUserMedia({video:true,audio:false});			
			this._context2d=this.$refs.canvas.getContext("2d");
			this.canvas=this.$refs.canvas;
		},
		
		btnTakePhotoClicked(){
			this._context2d.drawImage(this.$refs.video,0,0,400,300)
			var img = document.createElement("img"); // 创建img元素
			img.src =this.canvas.toDataURL("image/png"); // 截取视频第一帧
			var svaeHref = document.getElementById("save_herf");
			console.log(img.src)
			
			var sd=document.getElementById("save_img");
			svaeHref.href = img.src;
			sd.src=img.src
			
		},
	}
};
</script>

		
