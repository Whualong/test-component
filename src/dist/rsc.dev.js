"use strict";

var api_test = 'zsys.zuoshouyisheng.com';
module.exports = {
  service: {
    merck_by_yt: {
      // host : 'zsys.zuoshouyisheng.com/tangge/api',
      // host : '211.154.163.93:22345/merck/',
      host: "".concat(api_test, "/tangge/api/merck/"),
      protocol: 'https',
      api: {
        create: {
          method: 'POST',
          path: 'diet_record/create'
        },
        diet_save: {
          method: 'POST',
          path: 'diet_record/create'
        },
        aimessage: {
          method: 'GET',
          path: 'aimessage'
        },
        login: {
          method: 'POST',
          path: 'login'
        },
        getUser: {
          method: 'GET',
          path: 'user/get'
        },
        updateUser: {
          method: 'POST',
          path: 'user/update'
        },
        getCalorie: {
          method: 'POST',
          path: 'diet/calorie'
        },
        getEvaluate: {
          method: 'POST',
          path: 'diet/evaluate'
        },
        getDatetab: {
          method: 'POST',
          path: 'diet_record/find_by_date_tab'
        },
        recommend: {
          method: 'POST',
          path: 'diet/recommend'
        },
        find_by_date_tab: {
          method: 'POST',
          path: 'diet_record/find_by_date_tab'
        },
        deleteRecord: {
          method: 'POST',
          path: 'diet_record/delete'
        },
        addIndex: {
          method: 'POST',
          path: 'index_record/create'
        },
        updateIndex: {
          method: 'POST',
          path: 'index_record/update'
        },
        // 血糖统计分析
        sugarAnalysis: {
          method: 'POST',
          path: 'index_record/sugar_analyse'
        },
        // 查看指定用户指定指标大类最新的数据
        showType: {
          method: 'POST',
          path: 'index_record/show_type'
        },
        // 查看指定用户 指定日期间隔 指定指标大类的数据， 如果没有日期则默认返回指定用户指定指标大类最近一周指标记录结果
        showTypeTime: {
          method: 'POST',
          path: 'index_record/show_type_time'
        },
        defaultRecord: {
          method: 'POST',
          path: 'index_record/show_userid'
        },
        indexRoute: {
          method: 'POST',
          path: 'index/route'
        },
        // 活动库接口
        sportDatabase: {
          method: 'POST',
          path: 'sport_record/database'
        },
        // 快速记录看板 - 计算运动消耗卡路里接口
        sportCalorie: {
          method: 'POST',
          path: 'sport_record/calcu'
        },
        // 计算多个运动消耗
        multiSportCalorie: {
          method: 'POST',
          path: 'sport_record/calcu_list',
          headers: {
            'content-type': 'application/json'
          }
        },
        // 运动记录存储
        sportRecordSave: {
          method: 'POST',
          path: 'sport_record/batch_create',
          headers: {
            'content-type': 'application/json'
          }
        },
        // 运动初始化
        sportInit: {
          method: 'POST',
          // path : 'sport_record/check_cycle',
          path: 'sport_record/check_cycle'
        },
        // 生成运动计划
        createPlan: {
          method: 'POST',
          path: 'sport/plan/create'
        },
        // 删除运动计划
        deletePlan: {
          method: 'POST',
          path: 'sport/recommend/delete'
        },
        // 查询运动推荐
        getPlan: {
          method: 'POST',
          path: 'sport/recommend/detail'
        },
        // 使用运动计划
        usePlan: {
          method: 'POST',
          path: 'sport/recommend/create',
          headers: {
            'content-type': 'application/json'
          }
        },
        // 运动分析
        sportAnalysis: {
          method: 'POST',
          path: 'sport_record/analyse'
        },
        // 运动记录
        sportRecord: {
          method: 'POST',
          path: 'sport_record/record_analyse'
        },
        // 运动修改
        sportEdit: {
          method: 'POST',
          path: 'sport_record/update'
        },
        // 运动删除
        sportDelete: {
          method: 'POST',
          path: 'sport_record/delete'
        },
        // 汇总数据
        sportSummary: {
          method: 'POST',
          path: 'sport_record/summary'
        },
        // 存储运动记录
        addSport: {
          method: 'POST',
          path: 'sport_record/create'
        },
        // 批量添加运动记录
        batchAddSport: {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          path: 'sport_record/batch_create'
        },
        // 计算消耗卡路里
        sportCunsume: {
          method: 'POST',
          path: 'sport_record/calcu'
        },
        // 运动目标值
        sportTarget: {
          method: 'POST',
          path: 'sport_record/target_consume'
        },
        // 运动详情
        sportDetail: {
          method: 'POST',
          path: 'sport_record/sport_detail'
        },
        // 查询旧方案的运动选择
        oldSport: {
          method: 'POST',
          path: 'sport/recommend/basics'
        },
        // 继续使用之前的运动方案
        renewSport: {
          method: 'POST',
          path: 'sport/recommend/renew'
        },
        getHome: {
          method: 'GET',
          path: 'home'
        },
        // 获取首页轮播
        imgSwipe: {
          method: 'GET',
          path: 'home'
        },
        // 上传用户头像
        avatorUpload: {
          method: 'POST',
          path: 'user/avatar/upload'
        },
        // 首页 个人中心列表
        personList: {
          method: 'GET',
          path: 'user/personal_center'
        },
        // 首页 获取今日食谱
        homeDiet: {
          method: 'POST',
          path: 'home/today_recipe'
        },
        // 首页 获取今日运动
        homeSport: {
          method: 'POST',
          path: 'home/today_sport'
        },
        // 首页 获取今日血糖
        homeBlood: {
          method: 'POST',
          path: 'home/today_bloodsuger'
        },
        // 首页 获取健康指标
        homeHealth: {
          method: 'POST',
          path: 'home/home_health_indicator'
        },
        // 添加控糖方案记录数据
        addSugar: {
          method: 'POST',
          path: 'sugarcontrol_record/create'
        },
        // 查询是否有控糖计划
        showSugar: {
          method: 'POST',
          path: 'sugarcontrol_record/show_by_user'
        }
      }
    },
    merck_by_dh: {
      // host : 'zsys.zuoshouyisheng.com/tangge/zhongda',
      // host : '211.154.163.93:8099',
      host: "".concat(api_test, "/tangge/zhongda/"),
      protocol: 'https',
      headers: {
        'content-type': 'application/json'
      },
      api: {
        foodDetail: {
          method: 'GET',
          path: 'diet_food_detail'
        },
        getFoodDetial: {
          method: 'POST',
          path: 'diet_food_detail'
        },
        diet_recognize_image: {
          method: 'POST',
          path: 'diet_recognize_image',
          timeout: 60000
        },
        // ======================
        diet_commend: {
          method: 'GET',
          path: 'diet_common_food'
        },
        shopcar_hot: {
          method: 'POST',
          path: 'diet_calorie_calcu_shop'
        }
      }
    },
    merck_by_dh1: {
      // host 'zsys-test.zuoshouyisheng.com/'
      // host : '211.154.163.93:22345/merck/',
      host: "".concat(api_test, "/"),
      protocol: 'https',
      headers: {
        'content-type': 'application/json'
      },
      api: {
        diet_sug: {
          method: 'GET',
          path: 'sug'
        }
      }
    },
    mobile_login: {
      host: "".concat(api_test, "/"),
      protocol: 'https',
      headers: {
        'content-type': 'application/json'
      },
      api: {
        checkNum: {
          method: 'POST',
          path: 'authorization/merck_get_sms',
          headers: {
            'content-type': 'form-data'
          }
        },
        getEnc: {
          method: 'POST',
          path: 'authorization/merck_phone_login',
          headers: {
            'content-type': 'form-data'
          }
        }
      }
    },
    // 首页推荐文章
    avator: {
      host: 'avatar.zuoshouyisheng.com/',
      protocol: 'https',
      headers: {
        'content-type': 'application/json'
      },
      api: {
        recommend: {
          method: 'POST',
          path: 'recommend',
          headers: {
            'content-type': 'form-data'
          }
        }
      }
    }
  }
};