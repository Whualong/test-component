<template>
    <div>
        <button @click="openCamera">打开摄像头</button>
        <button @click="openLibrary">打开系统相册</button>
        <input ref="camera" type="file" accept="image/*" capture="camera" hidden>
         <input ref="photo" type="file" accept="image/*" hidden>
    </div>
</template>

<script>
export default {
    methods : {
        openCamera(){
            this.$refs.camera.click()
        },
        openLibrary(){
            this.$refs.photo.click()
        }
    }
}
</script>

<style>

</style>