<template>
  <div class="form-app">
      <el-form ref="form" :model="form" label-width="140px" label-position="right">
          <el-row>
              <el-col :span='12'>
                
                    <label>血液最大含氧量：</label>
                    <el-input v-model="form.name"></el-input>
                     <span class='unit'>ml%</span>
              </el-col>
              <el-col :span='12'>
                
                  <label>有效肺循环血流量：</label>
                    <el-input v-model="form.name"></el-input>
              <span class='unit'>升/分</span>
              </el-col>
          </el-row>
        
        <el-row>
              <el-col :span='12'>
                
                  <label>肺循环血流量：</label>
                  <el-input v-model="form.name"></el-input>
                  <span class='unit'>升/分</span>
              </el-col>
              <el-col :span='12'>
                
                  <label>体循环血流量：</label>
                    <el-input v-model="form.name"></el-input>
                <span class='unit'>升/分</span>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span='12'>
            
                  <label>左到右分流量：</label>
                    <el-input v-model="form.name"></el-input>
  <span class='unit'>升/分</span>
              </el-col>
              <el-col :span='12'>
                
                <label>Qp/Qs：</label>
                    <el-input v-model="form.name"></el-input>
              <span class='unit'>升/分</span>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span='12'>
              
                  <label>全肺阻力：</label>
                    <el-input v-model="form.name"></el-input>
                  <span class='unit'></span>
              </el-col>
              <el-col :span='12'>
                <span class='unit-1'>Wood阻力单位</span>
              </el-col>
              
          </el-row>
     
            <el-row>
               <el-col :span='24'>
                    <label>描述及结论：</label>
                    <el-input type="textarea" v-model="form.desc"></el-input>
               </el-col>   
            </el-row>
    </el-form>
    <div class='btn-container'>
      <button class='save'>保存</button>
      <button class='submit'>提交<i class="el-icon-right"></i></button>
    </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    created(){
        console.log('form created');
    },
    beforeMount(){
        console.log('form beforeMount')
    },
    mounted(){
        console.log('form mounted')
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>
.form-app{
    width:50%;
    margin:auto;
    margin-top:30px;
    min-width: 660px;
}
.form-app .el-col{
    display: flex;
}
.form-app .el-col label{
    flex: 0 0 150px;
    text-align: left;
    height: 40px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #5E6D82;
    line-height: 40px;
}
.form-app .el-col .unit{
   line-height: 40px;
   height: 40px;
    flex:0 0 50px; 
    text-align: left;
    padding-left: 8px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #5E6D82;
}
.form-app .el-col .el-input,.form-app .el-col .el-textarea{
    flex:1;
  
}
.form-app .el-col .el-textarea /deep/.el-textarea__inner{
  resize: none;
  height: 78px;
}
.form-app .el-row{
  margin-bottom: 16px;
}
.form-app .el-row .el-col:nth-of-type(even){
  padding-left: 10px;
}
.unit-1{
  margin-left: -60px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #5E6D82;
}
.btn-container{
  text-align: right;
  padding-bottom: 40px;
}
.save{
  width: 200px;
  height: 50px;
  background: rgba(72, 101, 255, 0.08);
  border-radius: 25px;
  border: 1px solid #4865FF;

  color: #4865FF;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}
.submit{
  width: 200px;
  border: none;
  height: 50px;
  background: linear-gradient(135deg, #658BFF 0%, #4865FF 100%);
  box-shadow: 0px 3px 6px 0px rgba(72, 101, 255, 0.7);
  border-radius: 25px;
  font-weight: bold;
  color: #FFFFFF;
  font-size: 18px;
  margin-left: 42px;
  cursor: pointer;
}
</style>