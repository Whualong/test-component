<template>
  <div class="form-app">
      <el-form ref="form" :model="form" label-width="140px" label-position="right">
          <el-row>
              <el-col :span='12'>
                <el-form-item label="血液最大含氧量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span='12'>
                <el-form-item label="有效肺循环血流量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
          </el-row>
        
        <el-row>
              <el-col :span='12'>
                <el-form-item label="肺循环血流量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span='12'>
                <el-form-item label="体循环血流量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span='12'>
                <el-form-item label="左到右分流量">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span='12'>
                <el-form-item label="Qp/Qs">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span='12'>
                <el-form-item label="全肺阻力">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              
          </el-row>
     
            <el-row>
                <el-form-item label="描述及结论">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
            </el-row>
        
        
    </el-form>
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
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>
.form-app{
    width:50%;
    margin:auto;
}
</style>