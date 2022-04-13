<template>
    <div class="watch">
        <!-- <div class="nav-tab">
            <div
                class="nav-item h5"
                :class="{ 'nav-active': navInd == 0 }"
                @click="switchNav(0)"
            >
                普通方案
            </div>
            <div
                class="nav-item h5"
                :class="{ 'nav-active': navInd == 1 }"
                @click="switchNav(1)"
            >
                定制方案
            </div>
        </div> -->
        <div class="p32">
            <!-- 普通版计划 -->
            <div class="mb40">
                <template>
                    随访方案状态:
                    <span
                        class="menu-option"
                        :class="{ active: index == -1 }"
                        @click="switchTab(-1)"
                        >全部</span
                    >
                    <span
                        class="menu-option"
                        :class="{ active: index == 0 }"
                        @click="switchTab(0)"
                        >待执行</span
                    >
                    <span
                        class="menu-option"
                        :class="{ active: index == 1 }"
                        @click="switchTab(1)"
                        >进行中</span
                    >
                    <span
                        class="menu-option"
                        :class="{ active: index == 2 }"
                        @click="switchTab(2)"
                        >已删除</span
                    >
                </template>
                <el-button type="primary" round class="fr" @click="goCreate"
                        >添加方案</el-button>
            </div>
            <div class="content">
                <template v-if="plans.length">
                    <div class="item" v-for="(v, k) in plans" :key="k">
                        <div class="item-main">
                            <div class="item-title">
                                <svg-icon :name="titles[0]" class="mr10"></svg-icon>
                                <span class="h4">{{ v.task_name }}</span>
                            </div>
                            <div class="inline ml26">
                                <div class="number">
                                    {{ v.finished_count
                                    }}<span class="tip" v-if="v.all_count"
                                        >/{{ v.all_count }}</span
                                    >
                                </div>
                                <div class="tip">
                                    完成人数<span v-if="v.all_count">/参与人数</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-foot">
                            <span
                                :class="{
                                    status3: v.task_status == 1,
                                    status1: v.task_status == 2,
                                    status2: v.task_status == 0 || v.task_status == 3
                                }"
                                >{{ getCurrentStatus(v.task_status) }}</span
                            >
                            <el-dropdown
                                v-if="v.task_status !== 4"
                                @command="bindOp($event)"
                                type="primary"
                            >
                                <!-- <el-button
                                    :disabled="v.task_status === 1"
                                    size="mini"
                                    type="primary"
                                >
                                    操作<i
                                        class="el-icon-arrow-down el-icon--right"
                                    ></i>
                                </el-button> -->

                                <el-dropdown-menu
                                    v-if="false"
                                    slot="dropdown"
                                >
                                    <el-dropdown-item
                                        v-if="v.task_status === 2 && v.task_status !== 0"
                                        :command="k + '|' + '2'"
                                        >暂停</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        v-if="(v.task_status === 0 || v.task_status === 3)"
                                        :command="k + '|' + '1'"
                                        >启动</el-dropdown-item
                                    >
                                    <el-dropdown-item :command="k + '|' + '3'"
                                        >删除</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        :status="v.task_status"
                                        :command="k + '|' + 'edit'"
                                        >编辑模板</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        :command="k + '|' + 'code'"
                                        >二维码</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        :command="k + '|' + 'export'"
                                        >导出
                                        <!-- <GExport txt="导出" :tid="(v.tid + '')"/> -->
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <el-button
                              type="primary"
                              size="mini"
                              class="fr mr16"
                              @click="detail(v)">详情</el-button>
                            <!-- <el-button size="mini" class="fr mr16" @click="detail(v.tid)">详情</el-button> -->
                            <!-- <svg-icon name="arrow-r" class="fr"></svg-icon> -->
                        </div>
                        <!-- <div class="item-footer" v-else @click="toDetailPage(v)">
                            详情
                            <svg-icon name="arrow-r" class="fr"></svg-icon>
                        </div> -->
                    </div>
                </template>
                <div class="tc" v-if="!plans.length">
                    <img src="" class="pb32" />
                    <p class="txt-msg fz20">
                        {{
                            index == -1
                                ? '点击“添加随访方案”按钮添加随访方案'
                                : '暂无筛选结果'
                        }}
                    </p>
                </div>
            </div>
        </div>

        <!-- <div class="p32" v-if="navInd == 1 && loaded">
            
            <div class="mb40" v-if="!(indexC === '' && !plans.length)">
                随访方案状态:
                <span
                    class="menu-option"
                    :class="{ active: indexC === '' }"
                    @click="switchC('')"
                    >全部</span
                >
                <span
                    class="menu-option"
                    :class="{ active: indexC === 0 }"
                    @click="switchC(0)"
                    >进行中</span
                >
                <span
                    class="menu-option"
                    :class="{ active: indexC === 1 }"
                    @click="switchC(1)"
                    >已结束</span
                >
            </div>

            <div class="content">
                <template v-if="plans.length">
                    <div class="item" v-for="(v, k) of plans" :key="k">
                        <div class="item-main">
                            <div class="item-title">
                                <svg-icon name="title" class="mr10"></svg-icon>
                                <span class="h4">{{ v.name }}</span>
                            </div>
                            <div class="inline ml26">
                                <div class="number">
                                    {{ v.finished
                                    }}<span class="tip" v-if="v.all"
                                        >/{{ v.all }}</span
                                    >
                                </div>
                                <div class="tip">
                                    完成人数<span v-if="v.all">/参与人数</span>
                                </div>
                            </div>
                            <div class="inline ml20">
                                <div class="number">{{ v.hiatus }}</div>
                                <div class="tip">缺失记录人数</div>
                            </div>
                        </div>
                        <div class="item-footer" @click="toDetailPage(v)">
                            详情
                            <svg-icon name="arrow-r" class="fr"></svg-icon>
                        </div>
                    </div>
                </template>
                <div class="tc" v-if="!plans.length">
                    <img src="../../assets/images/no-plan.png" class="pb32" />
                    <p class="txt-msg fz20"></p>
                    <p class="txt-msg fz20">
                        {{
                            indexC === ''
                                ? '可联系客服人员添加定制方案'
                                : '暂无筛选结果'
                        }}
                    </p>
                </div>
            </div>
        </div> -->

        <!-- <confirm
            :showConfirm="showConfirm"
            :text="text"
            @intoHide="showConfirm = false"
            @confirm="execHandle"
        ></confirm>
        <qrcode-mask
            :url="qrCodeUrl"
            :title="planName"
            @qrcodeMaskHide="hideMask"
        /> -->
        <a :href="excelUrl" id="exportA"></a>
    </div>
</template>

<script>
// import Confirm from 'components/Modal/Confirm.vue';
// import QrcodeMask from 'components/Modal/QrcodeMask.vue';
// import util from 'common/js/util.js'

export default {
  data() {
    return {
      excelUrl: '',
      action: '',
      loaded: false, // 页面数据加载完毕
      navInd: 0, // tab切换
      index: 1, // 默认展示进行中计划
      indexC: '', // 默认展示定制计划的全部
      showConfirm: false,
      plans: [],
      planing: [], // 需要一直查询状态的计划
      planInd: null, // 操作的某个计划
      text: {},
      timeOut: '',
      qrCode: '',
      qrCodeUrl: '',
      planName: '',
      titles: {
        2: 'title_dz',
        1: 'title',
        0: 'title_zb'
      },
      plan_list_all: []
    };
  },
  components: {
    Confirm,
    QrcodeMask
  },
  watch: {
    excelUrl: function() {
        this.excelUrl && this.$nextTick(() => {
            document.querySelector('#exportA').click()
        })
    }
  },
  created() {
    this.getPlan(1)
    // this.$http.getPlanList({
    //   types:'normal',
    //   status: 1
    // }).then(res => {
    //   if (res.status === 0 && res.plan_list.length) {
    //     this.plans = res.plan_list;
    //     res.plan_list.map(v => {
    //       if (v.status === 1 && this.planing.indexOf(v.cid) < 0) this.planing.push(v.cid);
    //     });
    //     if (this.planing.length) {
    //       clearTimeout(this.timeOut);
    //       this.timeOut = setTimeout(() => {
    //         this.getStatus();
    //       }, 3000);
    //     }
    //     this.loaded = true;
    //   } else {
    //     this.$http.getPlanCustom().then(res => {
    //       if (res.status === 0 && res.plan_list.length) {
    //         this.plans = res.plan_list;
    //         this.navInd = 1;
    //       } else {
    //         this.plans = [];
    //       }
    //       this.loaded = true;
    //     });
    //   }
    // });
  },
  methods: {
    goCreate() {
      // /plan/create?from=/watch/index
       const origin = new URL('/plan/AI_create', util.getOrigin()).href
        window.open(origin)
    },
    getCurrentStatus(v) {
      //0待启动
      //1启动中
      //2已启动
      //3已停止
      //4已删除
      switch (v) {
        case 1:
          return '启动中'
        case 2:
          return '进行中'
        case 4:
          return '已删除'
        default:
          return '待执行'
      }
    },
    //点击操作按钮
    bindOp(c) {
      let s0 = c.split('|')[0]
      let s1 = c.split('|')[1]
      let id = parseInt(s0);
      let nan = isNaN(parseInt(s1));
      this.changePlan(id, nan ? true : s1);
      //跳转页面
      if (nan) {
        // let status = this.plans[this.planInd].status;
        let planId = this.plans[this.planInd].cid
        let tid = this.plans[this.planInd].task_id
        if (s1 === 'edit') {
          // 产品要求统一跳转到配置页
          const origin = new URL(`/patient/index?id=${planId}&self_service=1&tid=${tid}&active_name=config`, util.getOrigin()).href
          window.open(origin)
          // if (status === 0 || status === 2) {
          //   //this.$router.push({ path: `/plan/create?from=${escape('/plan/model?id=' + planId)}` })
          //   // this.$router.push({ path: `/plan/model?id=${planId}` })
          //   const origin = util.getOrigin();
          //   window.open(origin + `/patient/index?id=${planId}&self_service=1&tid=${tid}&active_name=config`)
          // } else if (status === 3) {
          //   this.$router.push({ path: `/plan/create?id=${planId}&from=${escape('/plan/model?id=' + planId)}` })
          // }
          return
        }
        if (s1 === 'code') {
          // this.$router.push({ path: `/plan/QRCode?fid=${planId}&tid=${tid}` })
          return this.getQrCode(this.plans[this.planInd]);
        }
        if (s1 === 'export') {
          this.doExport(tid, planId);
          // this.$router.push({ path: `/export?tid=${tid}` })
        }
      }
    },
    doExport(tid, planId) {
      this.exportExcel(tid, planId);
    },
    exportExcel(tid, planId) {
      if (!this.downloading) {
          this.downloading = true
          this.$http.planExcel({ action: 'request_to_dump', tid: tid || '', cid: planId || '' }).then(res => {
              if (res.status === 0) {
                  this.file = res.file_name
                  this.$message({
                      message: '导出成功，请等待浏览器下载',
                      type: 'success'
                  })
                  setTimeout(() => {
                      this.downExcel()
                  }, 3000)
              } else {
                this.downloading = false;
              }
          })
      } else {
          document.querySelector('#exportA').click()
      }
    },
    downExcel() {
        this.$http.planExcel({ action: 'check_file_is_ready', file_name: this.file }).then(res => {
            if (res.status === 0) {
                if (!res.url) {
                    setTimeout(() => {
                        this.downExcel()
                    }, 2000)
                } else {
                    this.excelUrl = res.downloadLink;
                    this.downloading = false
                    this.haved = true
                }
            }
        })
    },

    async getQrCode(plan) { // 通过tid获取二维码
      this.planName = plan.name;
      this.qrCodeUrl = await this.$http.getQrCodeByTid({
          cid: plan.cid,
          tid: plan.tid
        }).then(res => {
          !res.url.length && (this.$message.warning('请绑定公共号或启动随访方案'))
          return res.url;
        })
    },
    getEval(v) {
      switch (v) {
        case 'edit':
          return 1;
        default:
          return 0
      }
    },
    toDetailPage(v) {
      // this.$router.push('/patient/index?tid=' + item);
      const origin = new URL('/patient/index?tid=' + v.tid + '&id=' + v.cid + '&self_service=' + v.self_service + `&hideConfig=${this.navInd}`, util.getOrigin()).href;
      window.open( origin );
    },
    getPlan(status) {
        // this.$http.getAiplanList({
        //     task_status: status
        // }).then(res => {
        //     this.plans = res.tasks
        // })
        setTimeout(()=>{
            if(status == 1)
           this.plans = []
           else
           this.plans = [{
                all_count: 1,
                finished_count: 0,
                task_id: "2",
                task_name: "1",
                task_status: "0",
                tid: "727"
           },]
        },50)
    //   this.$http.getPlanList({
    //     types:'normal',
    //     status: status
    //   }).then(res => {
    //     if (res.status === 0) {
    //       this.plans = res.plan_list;
    //       res.plan_list.map(v => {
    //         if (v.status === 1 && this.planing.indexOf(v.cid) < 0) this.planing.push(v.cid);
    //       });
    //       this.loaded = true;
    //       // 如果获取的计划中有正在修改状态的计划 则触发轮询 重新获取这几个
    //       if (this.planing.length) {
    //         clearTimeout(this.timeOut);
    //         this.timeOut = setTimeout(() => {
    //           this.getStatus();
    //         }, 3000);
    //       }
    //     }
    //   });
    },
    getPlanCustom(status) {
      let param = {};
      if (status !== '') param.status = status;
      this.$http.getPlanCustom(param).then(res => {
        if (res.status === 0) {
          this.plans = res.plan_list;
          this.loaded = true;
        }
      });
    },
    switchNav(i) {
      if (i !== this.navInd) {
        this.loaded = false;
        this.navInd = i;
        this.navInd === 0 ? this.getPlan(this.index) : this.getPlanCustom(this.indexC);
      }
    },
    switchTab(i) {
      if (i !== this.index) {
        this.index = i;
        this.getPlan(i);
      }
    },
    switchC(i) {
      if (i !== this.indexC) {
        this.indexC = i;
        this.getPlanCustom(i);
      }
    },
    detail(v) {
      // if (!t) {
      //   return
      // }
      // const origin = new URL('/patient/index?tid=' + v.tid + '&id=' + v.cid + '&self_service=' + v.self_service, util.getOrigin()).href;
      // window.open( origin );
      // 普通跳转
      this.$router.push( {
        path: '/patient/AI_index?task_id=' + v.task_id + '&plan_name=' + v.task_name + '&tid=' + v.tid 
      } )
      // 专病跳转
    //   v.types === 0 && this.$router.push({
    //     path: '/zbManage/detail?tid=' + v.tid + '&id=' + v.cid + '&self_service=' + v.self_service + '&plan_name=' + v.name
    //   })

      // if (type === this.$globalConfig.APP_TYPE_EP) {
      //   this.$router.push('/resident/list?tid=' + t);
      // } else {
      //   if (t > 0) {
      //     this.$router.push('/patient/index?tid=' + t);
      //   } else {
      //     this.$message.error('无患者加入计划，默认跳转到模板编辑页面。');
      //     this.$router.push('/plan/model?id=' + i);
      //   }
      // }
    },
    changePlan(i, s) {
      if (s !== true) {
        switch (s) {
          case '2':
            this.action = 2;
            this.text = {
              title: '停止说明',
              txt: '停止后患者将停止随访方案，医生可在停止后编辑随访内容'
            };
            break;
          case '1':
            this.action = 1;
            this.text = {
              title: '启动说明',
              txt: '随访方案启动后，患者开始随访方案。医生不能编辑随访方案直到方案停止'
            };
            break;
          case '3':
            this.action = 3;
            this.text = {
              title: '删除说明',
              txt: '随访方案删除后，可以浏览患者提交数据，但是不能再次使用此方案'
            };
            break;
          default:
            return 0
        }

        this.showConfirm = true;
      }
      this.planInd = i;
    },
    execHandle() {
      let plan = this.plans[this.planInd];
      this.showConfirm = false;
      if (plan.status === 0 || plan.status === 3) {
        this.plans[this.planInd].status = 1;
        this.planing.push(plan.cid);
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
          this.getStatus();
        }, 3000);
      }

      this.$http.updatePlanList({
        id: plan.cid,
        action: this.action
      }).then(res => {
        this.action = ''
        if (plan.status === 2) {
          this.getPlan(this.index);
        }
      });
    },
    getStatus() {
      this.$http.getPlanStatus({
        id_list: JSON.stringify(this.planing)
      }).then(res => {
        let flag = false; // 标识是否有计划状态有了改变 如果有 需要重新拉取页面数据
        let going = false; // 标识有计划状态还是启动中 如果有 需要继续轮询
        for (var i = 0; i < res.plan_status.length; i++) {
          if (res.plan_status[i].status === 1) {
            going = true;
          } else {
            flag = true;
            this.planing.splice(this.planing.indexOf(res.plan_status[i].cid), 1);
          }
        }
        if (flag) {
          this.getPlan(this.index);
        } else if (going) {
          clearTimeout(this.timeOut);
          this.timeOut = setTimeout(() => {
            this.getStatus();
          }, 3000);
        }
      });
    },
    hideMask() {
      this.qrCodeUrl = '';
    }
  }
};
</script>
<style type="text/css" >

</style>
