<template>
    <div class="export-page">
        <div class="header">
            <p>模拟罗氏导出案例为图片功能</p>
            <button @click="createPicture">导出</button>
        </div>
        <div class="cover" v-if="true">

        </div>
        <div  ref="jpgDom" class="canvas-con">
            <Pie />
            <p>操作者：张琪  机构：测试机构 导出时间：2022.03.12</p>
            <h2>临床背景</h2>
            <!-- 表格 -->
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
            <h2>指标结果</h2>
            <!-- 表格 -->
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
            <h2>基于展示图谱的结果解读</h2>
            <pre>
                <h4>影响因素</h4>
                <h5>都是垃圾分类啥逻辑费德里科士大夫</h5>
                <p>
                    沙拉酱东方丽景了离开家阿拉山口就发刘科金坷垃手机打开浪费进口量吉林科技弗利萨空间大分类
                    拉萨缴费单啦凯撒奖励大家来看解放啦洒进来蜂聚拉就拉到时间都发了看见了了解了撒酒疯拉菲李经理咖啡
                    拉萨极度分裂卡所军多绿绿绿绿绿绿绿绿发绿付大所军绿多军付绿卡军所多绿付军绿军拉萨快递费记录的撒娇llasdjfl
                    拉萨的解放路看看；放假了；奥斯卡江东父老科技阿是劳动纠纷；拉丝机垃圾分类卡时间段冷风机拉萨就打开了房间拉拉萨肯定发了就
                    拉萨的解放路洒进来蜂聚拉克的时间分类记录卡撒旦教联芳街道拉菲拉萨大家两件事大力开发大克拉时间放假了
                </p>
            </pre>
        </div>
        <img :src="exportSrc">
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
import Pie from '@/components/ZyPie.vue'
export default {
    components : {
        Pie,
    },
    data(){
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }],
          imgUrl : '',
          exportSrc : ''
        }
    },
    methods:{
        exportJpg(){

        },
        getPixelRatio() {
            if (window.devicePixelRatio && window.devicePixelRatio > 1) {
            return window.devicePixelRatio
            }
            return 1
        },
        baseToBlob(dataurl, filename = '案例.jpg') {
            var arr = dataurl.split(',');
            var mime = arr[0].match(/:(.*?);/)[1];
            var bstr = atob(arr[1]);
            var n = bstr.length;
            var u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new Blob([u8arr], { type: mime })
        },

        createPicture(){
            this.$nextTick(() => {
            // 获取要转换的元素
            const imgDom  = this.$refs.jpgDom
            // 解决转换出来的图片的清晰度问题
            // 手动创建一个 canvas 标签
            const canvas = document.createElement("canvas")
            // 获取父级的宽高
            const width = parseInt(window.getComputedStyle(imgDom).width)
            const height = parseInt(window.getComputedStyle(imgDom).height)
            // 定义放大倍数，可支持小数
            let scale = this.getPixelRatio()
            // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
            canvas.width = width * scale
            canvas.height = height * scale
            // 设定 canvas css宽高为 DOM 节点宽高
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'
            // 获取content,设置scale
            const context = canvas.getContext("2d")
            // context.scale(scale, scale)
            // 拿到目标dom调用一下html2canvas方法就能生成canvas对象了
            // 获取要转换的元素
                html2canvas(imgDom, {
                    canvas: canvas,
                    scale: 1,// scale,
                    useCORS: true // 开启跨域设置，需要后台设置cors
                }).then((canvas) => {
                    // toDataURL函数生成img标签的可用数据  图片格式转成 base64
                    let dataURL = canvas.toDataURL("image/png")
                    
                    this.imgUrl = dataURL
                    // this.exportSrc = dataURL
                    // 生成2进制图片
                    let imgBlob = this.baseToBlob(dataURL)
                    // let imgBlob = new Blob([this.imgUrl], {type:'image/jpg'})
                    let vLink = document.createElement('a')
                    vLink.href = window.URL.createObjectURL(imgBlob)
                    vLink.download = '案例'
                    vLink.click()
                    //window.URL.revokeObjectURL(imgBlob)
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
.export-page{
    position: relative;
    height: 100%;
    .cover{
        position: absolute;
        z-index: 1;
        height: 90%;
        top:68px;
        left:0;
        right:0;
        width:100%;
        background: #fff;
    }
    .canvas-con{
        position: fixed;
        z-index: 0;
        width:100%;
        opacity: 1;

    }
}
</style>