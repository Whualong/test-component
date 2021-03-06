const api_test = 'zsys.zuoshouyisheng.com';

module.exports = {
    service : {
        merck_by_yt : {
            // host : 'zsys.zuoshouyisheng.com/tangge/api',
            // host : '211.154.163.93:22345/merck/',
            host : `${api_test}/tangge/api/merck/`,
            protocol : 'https',
            api : {
                create : {
                    method : 'POST',
                    path : 'diet_record/create',
                },
                diet_save : {
                    method : 'POST',
                    path : 'diet_record/create',
                },
                aimessage : {
                    method : 'GET',
                    path : 'aimessage',
                },
                login : {
                    method : 'POST',
                    path : 'login',
                },
                getUser : {
                    method : 'GET',
                    path : 'user/get',
                },
                updateUser : {
                    method : 'POST',
                    path : 'user/update',
                },
                getCalorie : {
                    method : 'POST',
                    path : 'diet/calorie',
                },
                getEvaluate : {
                    method : 'POST',
                    path : 'diet/evaluate',
                },
                getDatetab : {
                    method : 'POST',
                    path : 'diet_record/find_by_date_tab',
                },
                recommend : {
                    method : 'POST',
                    path : 'diet/recommend',
                },
                find_by_date_tab : {
                    method : 'POST',
                    path : 'diet_record/find_by_date_tab',
                },
                deleteRecord : {
                    method : 'POST',
                    path : 'diet_record/delete',
                },
                addIndex : {
                    method : 'POST',
                    path : 'index_record/create',
                },
                updateIndex : {
                    method : 'POST',
                    path : 'index_record/update',
                },
                // ??????????????????
                sugarAnalysis : {
                    method : 'POST',
                    path : 'index_record/sugar_analyse',
                },
                // ???????????????????????????????????????????????????
                showType : {
                    method : 'POST',
                    path : 'index_record/show_type',
                },
                // ?????????????????? ?????????????????? ?????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????
                showTypeTime : {
                    method : 'POST',
                    path : 'index_record/show_type_time',
                },
                defaultRecord : {
                    method : 'POST',
                    path : 'index_record/show_userid',
                },
                indexRoute : {
                    method : 'POST',
                    path : 'index/route',
                },
                // ???????????????
                sportDatabase : {
                    method : 'POST',
                    path : 'sport_record/database',
                },
                // ?????????????????? - ?????????????????????????????????
                sportCalorie : {
                    method : 'POST',
                    path : 'sport_record/calcu',
                },
                // ????????????????????????
                multiSportCalorie : {
                    method : 'POST',
                    path : 'sport_record/calcu_list',
                    headers : {
                        'content-type' : 'application/json'
                    }
                },
                // ??????????????????
                sportRecordSave : {
                    method : 'POST',
                    path : 'sport_record/batch_create',
                    headers : {
                        'content-type' : 'application/json'
                    }
                },
                // ???????????????
                sportInit : {
                    method : 'POST',
                    // path : 'sport_record/check_cycle',
                    path : 'sport_record/check_cycle'
                },
                // ??????????????????
                createPlan : {
                    method : 'POST',
                    path : 'sport/plan/create',
                },
                // ??????????????????
                deletePlan : {
                    method : 'POST',
                    path : 'sport/recommend/delete',
                },
                // ??????????????????
                getPlan : {
                    method : 'POST',
                    path : 'sport/recommend/detail',
                },
                // ??????????????????
                usePlan : {
                    method : 'POST',
                    path : 'sport/recommend/create',
                    headers : {
                        'content-type' : 'application/json'
                    }
                },
                // ????????????
                sportAnalysis : {
                    method : 'POST',
                    path : 'sport_record/analyse',
                },
                // ????????????
                sportRecord : {
                    method : 'POST',
                    path : 'sport_record/record_analyse',
                },
                // ????????????
                sportEdit : {
                    method : 'POST',
                    path : 'sport_record/update',
                },
                // ????????????
                sportDelete : {
                    method : 'POST',
                    path : 'sport_record/delete',
                },
                // ????????????
                sportSummary : {
                    method : 'POST',
                    path : 'sport_record/summary',
                },
                // ??????????????????
                addSport : {
                    method : 'POST',
                    path : 'sport_record/create',
                },
                // ????????????????????????
                batchAddSport : {
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    path : 'sport_record/batch_create',
                },
                // ?????????????????????
                sportCunsume : {
                    method : 'POST',
                    path : 'sport_record/calcu',
                },
                // ???????????????
                sportTarget : {
                    method : 'POST',
                    path : 'sport_record/target_consume',
                },
                // ????????????
                sportDetail : {
                    method : 'POST',
                    path : 'sport_record/sport_detail',
                },
                // ??????????????????????????????
                oldSport : {
                    method : 'POST',
                    path : 'sport/recommend/basics',
                },
                // ?????????????????????????????????
                renewSport : {
                    method : 'POST',
                    path : 'sport/recommend/renew',
                },
                getHome : {
                    method : 'GET',
                    path : 'home'
                },
                // ??????????????????
                imgSwipe : {
                    method : 'GET',
                    path : 'home'
                },
                // ??????????????????
                avatorUpload : {
                    method : 'POST',
                    path : 'user/avatar/upload'
                },
                // ?????? ??????????????????
                personList : {
                    method : 'GET',
                    path : 'user/personal_center'
                },
                // ?????? ??????????????????
                homeDiet : {
                    method : 'POST',
                    path : 'home/today_recipe'
                },
                // ?????? ??????????????????
                homeSport : {
                    method : 'POST',
                    path : 'home/today_sport'
                },
                // ?????? ??????????????????
                homeBlood : {
                    method : 'POST',
                    path : 'home/today_bloodsuger'
                },
                // ?????? ??????????????????
                homeHealth : {
                    method : 'POST',
                    path : 'home/home_health_indicator'
                },
                // ??????????????????????????????
                addSugar : {
                    method : 'POST',
                    path : 'sugarcontrol_record/create'
                },
                // ???????????????????????????
                showSugar : {
                    method : 'POST',
                    path : 'sugarcontrol_record/show_by_user'
                },

            },
        },
       
        merck_by_dh : {
            // host : 'zsys.zuoshouyisheng.com/tangge/zhongda',
            // host : '211.154.163.93:8099',
            host : `${api_test}/tangge/zhongda/`,
            protocol : 'https',
            headers : {
                'content-type' : 'application/json',
            },
            api : {
                foodDetail : {
                    method : 'GET',
                    path : 'diet_food_detail',
                },
                getFoodDetial : {
                    method : 'POST',
                    path : 'diet_food_detail',
                },
                diet_recognize_image : {
                    method : 'POST',
                    path : 'diet_recognize_image',
                    timeout : 60000,
                },
                // ======================
                diet_commend : {
                    method : 'GET',
                    path : 'diet_common_food',
                },
                shopcar_hot : {
                    method : 'POST',
                    path : 'diet_calorie_calcu_shop',
                },
            },
        },
        merck_by_dh1 : {
            // host 'zsys-test.zuoshouyisheng.com/'
            // host : '211.154.163.93:22345/merck/',
            host : `${api_test}/`,
            protocol : 'https',
            headers : {
                'content-type' : 'application/json',
            },
            api : {
                diet_sug : {
                    method : 'GET',
                    path : 'sug',
                },
            },
        },
        mobile_login : {
            host : `${api_test}/`,
            protocol : 'https',
            headers : {
                'content-type' : 'application/json',
            },
            api : {
                checkNum : {
                    method : 'POST',
                    path : 'authorization/merck_get_sms',
                    headers : {
                        'content-type' : 'form-data'
                    }
                },
                getEnc : {
                    method : 'POST',
                    path : 'authorization/merck_phone_login',
                    headers : {
                        'content-type' : 'form-data'
                    }
                }
            },
        },
        // ??????????????????
        avator : {
            host : 'avatar.zuoshouyisheng.com/',
            protocol : 'https',
            headers : {
                'content-type' : 'application/json',
            },
            api : {
                recommend : {
                    method : 'POST',
                    path : 'recommend',
                    headers : {
                        'content-type' : 'form-data'
                    }
                }
            }
        }
    }
};