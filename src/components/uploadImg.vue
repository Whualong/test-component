<template>
    <div class="upload-img">
        <input ref='file' @change="triggerChange" type="file">
        <div>
            <button @click="sendImg"> 上传 </button>
        </div>
        <p>
            {{progress}}
        </p>
    </div>
</template>
d
<script>
export default {
    data(){
        return {
            files : '',
            progress:''
        }
    },
    mounted(){
        this.testGet()
    },
    methods:{
        triggerChange(){
            this.files = this.$refs.file.files[0]
            console.log(this.files)
        },
        testGet(){
            let xhr = new XMLHttpRequest();
            let url ="http://localhost:3001/api/demo?name=panyongyog"
            xhr.open("get", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
            xhr.send(null)
        },
        sendImg(){
            let paramForm =new FormData()
            paramForm.append( 'img', this.files )
            let xhr = new XMLHttpRequest();
            let url ="http://localhost:3001/api/uploadImg"
            xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
            xhr.onload = uploadComplete; //请求完成
            xhr.onerror =  uploadFailed; //请求失败
            xhr.upload.onprogress = progressFunction;//【上传进度调用方法实现】
            xhr.upload.onloadstart = function(){//上传开始执行方法
                
            };
            let _this = this;

            xhr.send(paramForm)

            function progressFunction(evt){
                 if (evt.lengthComputable) {//
                    console.log("load----->",evt.loaded)
                    _this.progress = Math.round(evt.loaded / evt.total * 100) + "%";
                }
            }

            function uploadComplete(evt) {
            //服务断接收完文件返回的结果
            //    alert(evt.target.responseText);
                console.log("上传成功！");
            }
            //上传失败
            function uploadFailed(evt) {
                console.log("上传失败！");
            }
            //取消上传
            function cancleUploadFile(){
                xhr.abort();
            }

        }
    }
}
</script>

<style>

</style>