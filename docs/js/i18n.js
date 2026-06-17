/**
 * Excellent Voyage Logistics - Internationalization (i18n) System
 * Supports Chinese (zh) and English (en) bilingual switching
 */

(function() {
    'use strict';

    // Default language
    const DEFAULT_LANG = 'zh';
    const STORAGE_KEY = 'ev_lang';

    // Translation dictionary
    const translations = {
        zh: {
            // Navigation
            nav_home: '首页',
            nav_about: '关于我们',
            nav_services: '服务项目',
            nav_tracking: '货物追踪',
            nav_training: '培训资料',
            nav_news: '新闻资讯',
            nav_contact: '联系我们',
            nav_contact_cta: '联系我们',

            // Language switcher
            lang_zh: '中文',
            lang_en: 'EN',

            // Footer common
            footer_quick_links: '快速链接',
            footer_services: '服务项目',
            footer_contact_us: '联系我们',
            footer_copyright: '深圳市嘉旅国际物流有限公司. 保留所有权利.',
            footer_icp: '粤ICP备XXXXXXXX号',

            // Floating buttons
            float_call: '拨打电话',
            float_wechat: '微信咨询',
            back_to_top: '回到顶部',

            // Service names
            service_ocean: '国际海运',
            service_air: '国际空运',
            service_express: '快递服务',
            service_warehouse: '仓储服务',
            service_customs: '报关服务',
            service_supply: '供应链管理',

            // Common buttons
            btn_learn_more: '了解详情',
            btn_contact: '立即联系',
            btn_quote: '免费获取报价',
            btn_view_services: '了解我们的服务',
            btn_online_inquiry: '在线咨询',
            btn_view_details: '查看服务详情',

            // Contact info
            contact_phone: '+86 13590173320',
            contact_email: 'sales06@excellent-voyage.cn',
            contact_address: '广东省深圳市龙岗区\n南湾街道三鼎电商文创园A612',
            contact_hours: '周一至周五 9:00-18:00\n周六 9:00-12:00',

            // Tracking page
            tracking_title: '货物追踪',
            tracking_subtitle: '输入运单号，实时查询您的货物运输状态和位置',
            tracking_search_title: '查询货物',
            tracking_search_placeholder: '请输入运单号 / 提单号 / 柜号',
            tracking_search_btn: '查询',
            tracking_loading: '正在查询...',
            tracking_not_found_title: '未找到该运单',
            tracking_not_found_desc: '请检查运单号是否正确，或联系客服查询',
            tracking_contact_service: '联系客服',
            tracking_waybill: '运单号',
            tracking_cargo_name: '货物名称',
            tracking_origin: '起运地',
            tracking_destination: '目的地',
            tracking_transport: '运输方式',
            tracking_location: '当前位置',
            tracking_eta: '预计到达',
            tracking_timeline: '运输轨迹',
            tracking_status_transit: '运输中',
            tracking_status_delivered: '已签收',
            tracking_status_pending: '待发货',
            tracking_status_exception: '异常',

            // Tracking page - additional keys
            tracking_page_title: '货物追踪 - 深圳市嘉旅国际物流有限公司 | 查询货物位置',
            tracking_breadcrumb_current: '货物追踪',
            tracking_search_desc: '请输入您的运单号或提单号进行查询',
            tracking_result_title_prefix: '运单号：',
            tracking_footer_copyright: '深圳市嘉旅国际物流有限公司. 保留所有权利.',

            // Breadcrumb
            breadcrumb_home: '首页',

            // Home Page - Hero Section
            hero_badge: '专业国际物流服务商',
            hero_title_line1: '连接全球贸易',
            hero_title_line2: '高效物流解决方案',
            hero_desc: '深圳市嘉旅国际物流有限公司，为您提供海运、空运、快递、仓储、报关一站式国际物流服务，覆盖全球50+国家和地区。',
            hero_stat_years: '年行业经验',
            hero_stat_countries: '覆盖国家',
            hero_stat_volume: '年货运量(TEU)',
            hero_stat_satisfaction: '客户满意度',
            hero_float_routes: '全球航线覆盖',
            hero_float_tracking: '实时货物追踪',
            hero_card_title: '实时货运追踪',
            hero_card_status: '系统运行中',
            hero_route_ocean: '深圳 → 洛杉矶',
            hero_route_ocean_desc: '海运整箱 · 预计15天到达',
            hero_route_air: '深圳 → 法兰克福',
            hero_route_air_desc: '空运直飞 · 预计3天到达',
            hero_route_express: '深圳 → 东京',
            hero_route_express_desc: '快递门到门 · 预计2天到达',
            hero_route_status_transit: '运输中',
            hero_route_status_customs: '已报关',
            hero_route_status_delivered: '已签收',

            // Home Page - Services Section
            services_label: '核心服务',
            services_title: '一站式国际物流解决方案',
            services_desc: '从海运到空运，从仓储到报关，我们提供全方位的专业物流服务',
            service_ocean_desc: '全球主要港口直达航线，整箱/拼箱灵活选择，专业处理各类货物运输需求。',
            service_air_desc: '快速可靠的空运服务，覆盖全球主要城市，确保高价值货物安全准时到达。',
            service_express_desc: '与国际知名快递公司合作，门到门快速配送，满足紧急货物运输需求。',
            service_warehouse_desc: '现代化仓储设施，专业库存管理，灵活配送方案，满足不同客户需求。',
            service_customs_desc: '专业报关团队，熟悉各国海关法规，提供高效便捷的进出口报关服务。',
            service_supply_desc: '定制化供应链解决方案，优化物流流程，降低运营成本，提升效率。',

            // Home Page - Why Choose Us
            whyus_label: '为什么选择我们',
            whyus_title: '值得信赖的物流合作伙伴',
            whyus_desc: '10年行业深耕，我们以专业和诚信赢得客户信赖',
            whyus_network_title: '全球服务网络',
            whyus_network_desc: '覆盖全球50多个国家和地区，与众多国际知名物流企业建立长期合作关系，确保货物安全准时到达。',
            whyus_efficiency_title: '高效快捷响应',
            whyus_efficiency_desc: '优化的物流流程和先进的信息系统，7×24小时在线服务，确保第一时间响应客户需求。',
            whyus_cost_title: '成本优化方案',
            whyus_cost_desc: '规模化运营和精细化管理，为客户提供最具竞争力的价格，持续优化物流成本。',
            whyus_security_title: '安全可靠保障',
            whyus_security_desc: '完善的质量管理体系和风险控制措施，ISO9001认证，全程货物保险保障。',

            // Home Page - CTA Section
            cta_title: '立即获取专属物流方案',
            cta_desc: '我们的专业团队将在24小时内为您提供定制化的物流解决方案和最优报价',
            cta_or_call: '或直接拨打：',

            // Home Page - Footer brand
            footer_brand_desc: '深圳市嘉旅国际物流有限公司，专业国际物流服务提供商，致力于为全球客户提供高效、安全、可靠的物流解决方案。',

            // Contact Page
            contact_page_title: '联系我们 - 深圳市嘉旅国际物流有限公司 | 获取免费物流报价',
            contact_banner_title: '联系我们',
            contact_banner_desc: '无论您有任何物流需求，我们的专业团队随时为您提供咨询与服务',
            contact_breadcrumb_current: '联系我们',
            contact_qc_phone_label: '业务咨询热线',
            contact_qc_email_label: '电子邮箱',
            contact_qc_wechat_label: '微信咨询',
            contact_info_company_name: '深圳市嘉旅国际物流有限公司',
            contact_info_company_en: 'Excellent Voyage Logistics',
            contact_info_address_label: '公司地址',
            contact_info_address_value: '广东省深圳市龙岗区南湾街道\n三鼎电商文创园A612',
            contact_info_phone_label: '联系电话',
            contact_info_phone_value: '销售总监 罗龙明 Davis\n+86 19128604658\n+86 13590173320',
            contact_info_email_label: '电子邮箱',
            contact_info_email_value: '381562675@qq.com\nsales06@excellent-voyage.cn',
            contact_info_website_label: '官方网站',
            contact_info_website_value: 'www.excellent-voyage.cn',
            contact_info_wechat_label: '微信咨询',
            contact_info_wechat_value: 'davis003',
            contact_hours_title: '营业时间',
            contact_hours_weekday: '周一至周五',
            contact_hours_saturday: '周六',
            contact_hours_sunday: '周日',
            contact_hours_closed: '休息',
            contact_hours_time_weekday: '09:00 - 18:00',
            contact_hours_time_saturday: '09:00 - 12:00',
            contact_form_title: '在线留言',
            contact_form_desc: '填写以下信息，我们将在24小时内与您联系',
            contact_form_name_label: '姓名',
            contact_form_phone_label: '电话',
            contact_form_email_label: '邮箱',
            contact_form_service_label: '服务类型',
            contact_form_message_label: '留言内容',
            contact_form_submit: '提交咨询',
            contact_form_placeholder_name: '请输入您的姓名',
            contact_form_placeholder_phone: '请输入您的联系电话',
            contact_form_placeholder_email: '请输入您的邮箱地址',
            contact_form_placeholder_service: '请选择服务类型',
            contact_form_placeholder_message: '请描述您的物流需求，如货物类型、起运地、目的地、预计发货时间等...',
            contact_form_error_name: '请输入您的姓名',
            contact_form_error_phone: '请输入有效的联系电话',
            contact_form_error_email: '请输入有效的邮箱地址',
            contact_form_error_message: '请输入留言内容',
            contact_form_service_ocean: '海运服务',
            contact_form_service_air: '空运服务',
            contact_form_service_express: '快递服务',
            contact_form_service_warehouse: '仓储服务',
            contact_form_service_customs: '报关服务',
            contact_form_service_supply: '供应链管理',
            contact_form_service_other: '其他服务',
            contact_success_title: '提交成功！',
            contact_success_desc: '感谢您的咨询，我们的业务经理将在24小时内与您联系。',
            contact_success_reset: '继续咨询',
            contact_map_title: '公司位置',
            contact_map_address: '广东省深圳市龙岗区南湾街道三鼎电商文创园A612',
            contact_map_directions: '导航前往',
            contact_map_note: '地图将在正式网站上线时嵌入，可点击上方"导航前往"获取路线',
            contact_map_company_name: '深圳市嘉旅国际物流有限公司',
            contact_footer_brand_desc: '深圳市嘉旅国际物流有限公司，专业国际物流服务提供商，致力于为全球客户提供高效、安全、可靠的物流解决方案。',
            contact_footer_copyright: '深圳市嘉旅国际物流有限公司. 保留所有权利.',
            contact_footer_icp: '粤ICP备XXXXXXXX号',

            // About Page
            about_title: '关于我们 - 深圳市嘉旅国际物流有限公司 | 专业国际物流服务商',
            about_breadcrumb_current: '关于我们',
            about_banner_title: '关于我们',
            about_banner_desc: '深圳市嘉旅国际物流有限公司，2015年成立于香港，2023年总部迁至深圳，始终致力于为全球客户提供专业、高效、可靠的国际物流解决方案。',
            about_overview_label: '公司概况',
            about_overview_title: '深耕国际物流十余载',
            about_overview_desc: '立足深圳，服务全球，以专业和诚信连接世界贸易',
            about_company_name: '深圳市嘉旅国际物流有限公司',
            about_company_intro1: '深圳市嘉旅国际物流有限公司于2015年在香港成立，2023年将总部迁至深圳，依托珠三角地区发达的制造业和贸易优势，已建立起覆盖全球50多个国家和地区的完善服务网络。公司注册资金200万元，在广州、宁波、上海、天津设有分支机构。',
            about_company_intro2: '作为一家综合性国际物流服务提供商，我们拥有专业的操作团队和先进的信息系统，能够为客户提供海运、空运、快递、仓储、报关等一站式物流服务。公司年货运量超过10万TEU，服务客户涵盖电子、机械、纺织、家居等多个行业领域。',
            about_company_intro3: '公司秉承"客户至上、服务为本"的经营理念，坚持"专业、高效、诚信、创新"的服务宗旨，通过精细化管理和技术创新，持续为客户创造价值，降低物流成本，提升供应链效率。',
            about_stat_years_label: '年行业经验',
            about_stat_countries_label: '覆盖国家',
            about_stat_volume_label: '年货运量(TEU)',
            about_stat_satisfaction_label: '客户满意度',
            about_advantage_title: '我们的',
            about_advantage_highlight: '核心优势',
            about_advantage_network: '全球服务网络',
            about_advantage_network_desc: '覆盖50+国家，与众多国际物流企业深度合作',
            about_advantage_efficiency: '高效响应机制',
            about_advantage_efficiency_desc: '7x24小时在线服务，第一时间响应客户需求',
            about_advantage_cost: '成本优化方案',
            about_advantage_cost_desc: '规模化运营，为客户提供最具竞争力的价格',
            about_advantage_security: '安全可靠保障',
            about_advantage_security_desc: 'ISO9001认证，完善的质量管理体系',
            about_culture_label: '企业文化',
            about_culture_title: '使命 · 愿景 · 价值观',
            about_culture_desc: '以使命驱动发展，以愿景引领未来，以价值观凝聚力量',
            about_mission_title: '企业使命',
            about_mission_desc: '为全球客户提供专业、高效、可靠的国际物流服务，助力客户业务发展，搭建连接世界贸易的桥梁，让物流更简单、更高效。',
            about_vision_title: '企业愿景',
            about_vision_desc: '成为全球领先的国际物流服务提供商，打造最受客户信赖的物流品牌，实现员工、客户与股东的共同发展，推动行业进步。',
            about_values_title: '核心价值观',
            about_values_desc: '诚信为本、客户至上、专业高效、创新发展。我们坚持诚信经营，以客户为中心，提供专业服务，持续创新改进，追求卓越。',
            about_team_label: '核心团队',
            about_team_title: '专业团队 值得信赖',
            about_team_desc: '汇聚行业精英，以专业能力和丰富经验为客户提供优质服务',
            about_team_member1_name: '罗龙明 Davis',
            about_team_member1_role: '销售总监 Sales Director',
            about_team_member1_desc: '拥有10年国际物流行业经验，精通海运、空运业务，负责公司销售团队管理和客户关系维护。',
            about_team_member2_name: '专业操作团队',
            about_team_member2_role: 'Operations Team',
            about_team_member2_desc: '经验丰富的操作团队，熟悉订舱、报关、单证等全流程操作，确保货物安全准时送达。',
            about_team_member3_name: '客服团队',
            about_team_member3_role: 'Customer Service',
            about_team_member3_desc: '7×24小时在线客服，及时响应客户需求，提供专业的物流咨询和售后服务。',
            about_team_member4_name: '市场拓展团队',
            about_team_member4_role: 'Business Development',
            about_team_member4_desc: '深耕珠三角及全国市场，积极拓展国内外业务，为客户提供定制化物流解决方案。',
            about_timeline_label: '发展历程',
            about_timeline_title: '砥砺前行 不忘初心',
            about_timeline_desc: '从初创企业到行业知名物流服务商，每一步都脚踏实地',
            about_timeline_2015_title: '公司成立',
            about_timeline_2015_desc: '嘉旅国际物流在香港正式成立，开始从事国际货运代理业务，注册资金200万元。',
            about_timeline_2017_title: '业务拓展',
            about_timeline_2017_desc: '业务范围扩展至海运、空运、快递等全方位物流服务，客户数量快速增长，建立专业操作团队。',
            about_timeline_2019_title: '网络扩张',
            about_timeline_2019_desc: '在广州、宁波设立分支机构，服务网络覆盖珠三角及长三角主要贸易区域。',
            about_timeline_2021_title: '系统升级',
            about_timeline_2021_desc: '引入先进的物流管理系统，提升操作效率和服务质量，与MSK、CMA、MSC等船公司建立合作关系。',
            about_timeline_2023_title: '总部迁至深圳',
            about_timeline_2023_desc: '总部迁至深圳龙岗区，在上海、天津增设分支机构，业务覆盖全球50多个国家和地区。',
            about_timeline_2025_title: '持续发展',
            about_timeline_2025_desc: '成为行业内知名的综合性物流服务提供商，年货运量持续增长，服务客户遍布全球。',
            about_cta_title: '与我们携手 共创未来',
            about_cta_desc: '无论您是需要海运、空运还是综合物流解决方案，我们的专业团队随时为您服务',
            about_cta_contact: '立即联系我们',
            about_cta_services: '查看服务详情',
            about_cta_or_call: '或直接拨打：',

            // Services Page
            services_page_title: '服务项目 - 深圳市嘉旅国际物流有限公司 | 海运空运快递仓储报关',
            services_breadcrumb_current: '服务项目',
            services_banner_title: '服务项目',
            services_banner_subtitle: '专业、高效、可靠的国际物流解决方案',
            services_detail_title: '六大核心服务板块',
            services_detail_desc: '从海运到空运，从仓储到报关，我们提供全方位的专业物流服务，满足您不同的国际贸易需求',

            // Services Page - Ocean Freight
            services_ocean_desc: '依托全球主要港口航线网络，提供整箱(FCL)和拼箱(LCL)海运服务，灵活满足不同货量需求。专业团队可处理危险品、冷链等特种货物运输，并提供门到门全程物流解决方案。',
            services_ocean_feature1: '整箱(FCL)与拼箱(LCL)灵活选择',
            services_ocean_feature2: '危险品海运专业操作',
            services_ocean_feature3: '冷链物流温控运输',
            services_ocean_feature4: '门到门全程物流服务',
            services_ocean_feature5: '覆盖全球主要港口航线',
            services_ocean_benefit1: '运量大成本低',
            services_ocean_benefit2: '航线覆盖广',
            services_ocean_benefit3: '特种货物保障',

            // Services Page - Air Freight
            services_air_desc: '与多家国际航空公司建立长期战略合作，提供稳定的舱位保障和极具竞争力的运价。涵盖常规航班、包机运输及加急空运服务，确保高价值、时效性强的货物安全准时送达。',
            services_air_feature1: '常规航班与包机运输',
            services_air_feature2: '加急空运快速通道',
            services_air_feature3: '危险品空运资质齐全',
            services_air_feature4: '高价值货物专项保障',
            services_air_feature5: '全球主要机场直达',
            services_air_benefit1: '时效快',
            services_air_benefit2: '安全可靠',
            services_air_benefit3: '舱位保障',

            // Services Page - Express Delivery
            services_express_desc: '与国际知名快递品牌深度合作，提供DDP(双清包税到门)和DDU(双清不包税)等多种服务模式。涵盖文件快递、包裹快递及电商小包，全程物流追踪，让每一件货物都尽在掌握。',
            services_express_feature1: 'DDP/DDU双清包税到门',
            services_express_feature2: '文件快递加急服务',
            services_express_feature3: '包裹及电商小包专线',
            services_express_feature4: '全程物流实时追踪',
            services_express_feature5: '多渠道比价最优方案',
            services_express_benefit1: '门到门便捷',
            services_express_benefit2: '全程可追踪',
            services_express_benefit3: '多渠道选择',

            // Services Page - Warehousing
            services_warehouse_desc: '拥有现代化仓储设施，配备WMS智能仓储管理系统，实现库存精准管理。提供入库验收、分拣配货、包装贴标、库存盘点等一站式仓储服务，灵活满足不同客户的个性化需求。',
            services_warehouse_feature1: '现代化仓储设施',
            services_warehouse_feature2: 'WMS智能仓储管理系统',
            services_warehouse_feature3: '专业分拣与包装服务',
            services_warehouse_feature4: '库存管理与盘点',
            services_warehouse_feature5: '定制化仓储解决方案',
            services_warehouse_benefit1: '智能管理',
            services_warehouse_benefit2: '灵活高效',
            services_warehouse_benefit3: '降低库存成本',

            // Services Page - Customs Clearance
            services_customs_desc: '专业报关团队熟悉各国海关法规和进出口政策，提供高效的进出口报关、商检代理、产地证代办及货运保险等服务。与海关保持良好沟通，确保货物快速通关，降低通关风险。',
            services_customs_feature1: '进出口报关代理',
            services_customs_feature2: '商检/卫检/动植检代理',
            services_customs_feature3: '产地证/保险代办',
            services_customs_feature4: '海关政策咨询与指导',
            services_customs_feature5: '特殊商品归类与合规',
            services_customs_benefit1: '专业高效',
            services_customs_benefit2: '合规保障',
            services_customs_benefit3: '快速通关',

            // Services Page - Supply Chain
            services_supply_desc: '为客户提供端到端的供应链管理解决方案，涵盖供应链咨询诊断、流程优化设计、供应商管理协调等。通过数据驱动和精细化管理，帮助客户降低整体物流成本，提升供应链运营效率。',
            services_supply_feature1: '供应链咨询与诊断',
            services_supply_feature2: '物流流程优化设计',
            services_supply_feature3: '供应商管理与协调',
            services_supply_feature4: '数据驱动决策支持',
            services_supply_feature5: '持续改进与成本优化',
            services_supply_benefit1: '端到端管理',
            services_supply_benefit2: '数据驱动',
            services_supply_benefit3: '持续优化',

            // Services Page - Advantages
            services_advantages_label: '核心优势',
            services_advantages_title: '为什么选择嘉旅物流',
            services_advantages_desc: '10年行业深耕，我们以专业、高效、安全的服务赢得全球客户的信赖',
            services_advantage_network_title: '全球网络',
            services_advantage_network_desc: '覆盖全球50多个国家和地区，与众多国际知名物流企业建立长期战略合作，确保货物安全准时到达世界每个角落。',
            services_advantage_efficiency_title: '高效快捷',
            services_advantage_efficiency_desc: '优化的物流流程和先进的信息系统，7x24小时在线服务，确保第一时间响应客户需求，让物流更高效。',
            services_advantage_cost_title: '成本优化',
            services_advantage_cost_desc: '规模化运营和精细化管理，为客户提供最具竞争力的价格方案，持续优化物流成本，提升贸易竞争力。',
            services_advantage_security_title: '安全可靠',
            services_advantage_security_desc: '完善的质量管理体系和风险控制措施，ISO9001认证，全程货物保险保障，让每一次运输都安心无忧。',

            // Services Page - CTA
            services_cta_contact: '查看联系方式',
        },
        en: {
            // Navigation
            nav_home: 'Home',
            nav_about: 'About Us',
            nav_services: 'Services',
            nav_tracking: 'Tracking',
            nav_training: 'Training',
            nav_news: 'News',
            nav_contact: 'Contact',
            nav_contact_cta: 'Contact Us',

            // Language switcher
            lang_zh: '中文',
            lang_en: 'EN',

            // Footer common
            footer_quick_links: 'Quick Links',
            footer_services: 'Services',
            footer_contact_us: 'Contact Us',
            footer_copyright: 'Shenzhen Excellent Voyage Logistics Co., Ltd. All Rights Reserved.',
            footer_icp: 'Guangdong ICP No. XXXXXXXX',

            // Floating buttons
            float_call: 'Call Us',
            float_wechat: 'WeChat',
            back_to_top: 'Back to Top',

            // Service names
            service_ocean: 'Ocean Freight',
            service_air: 'Air Freight',
            service_express: 'Express Delivery',
            service_warehouse: 'Warehousing',
            service_customs: 'Customs Clearance',
            service_supply: 'Supply Chain',

            // Common buttons
            btn_learn_more: 'Learn More',
            btn_contact: 'Contact Now',
            btn_quote: 'Get Free Quote',
            btn_view_services: 'Our Services',
            btn_online_inquiry: 'Inquiry',
            btn_view_details: 'View Details',

            // Contact info
            contact_phone: '+86 13590173320',
            contact_email: 'sales06@excellent-voyage.cn',
            contact_address: 'A612, Sanding E-commerce Park\nNanwan Street, Longgang District\nShenzhen, Guangdong, China',
            contact_hours: 'Mon-Fri 9:00-18:00\nSat 9:00-12:00',

            // Tracking page
            tracking_title: 'Cargo Tracking',
            tracking_subtitle: 'Enter your tracking number to check shipment status and location in real-time',
            tracking_search_title: 'Track Shipment',
            tracking_search_placeholder: 'Enter tracking / B/L / container number',
            tracking_search_btn: 'Track',
            tracking_loading: 'Searching...',
            tracking_not_found_title: 'Shipment Not Found',
            tracking_not_found_desc: 'Please check your tracking number or contact customer service',
            tracking_contact_service: 'Contact Service',
            tracking_waybill: 'Tracking No.',
            tracking_cargo_name: 'Cargo Name',
            tracking_origin: 'Origin',
            tracking_destination: 'Destination',
            tracking_transport: 'Transport Mode',
            tracking_location: 'Current Location',
            tracking_eta: 'ETA',
            tracking_timeline: 'Shipment History',
            tracking_status_transit: 'In Transit',
            tracking_status_delivered: 'Delivered',
            tracking_status_pending: 'Pending',
            tracking_status_exception: 'Exception',

            // Tracking page - additional keys
            tracking_page_title: 'Cargo Tracking - Shenzhen Excellent Voyage Logistics | Track Your Shipment',
            tracking_breadcrumb_current: 'Tracking',
            tracking_search_desc: 'Please enter your tracking number or B/L number to search',
            tracking_result_title_prefix: 'Tracking No.: ',
            tracking_footer_copyright: 'Shenzhen Excellent Voyage Logistics Co., Ltd. All Rights Reserved.',

            // Breadcrumb
            breadcrumb_home: 'Home',

            // Home Page - Hero Section
            hero_badge: 'Professional International Logistics',
            hero_title_line1: 'Connecting Global Trade',
            hero_title_line2: 'Efficient Logistics Solutions',
            hero_desc: 'Shenzhen Excellent Voyage Logistics provides one-stop international logistics services including ocean freight, air freight, express delivery, warehousing, and customs clearance, covering 50+ countries and regions worldwide.',
            hero_stat_years: 'Years Experience',
            hero_stat_countries: 'Countries Covered',
            hero_stat_volume: 'Annual Volume (TEU)',
            hero_stat_satisfaction: 'Client Satisfaction',
            hero_float_routes: 'Global Route Coverage',
            hero_float_tracking: 'Real-time Cargo Tracking',
            hero_card_title: 'Real-time Freight Tracking',
            hero_card_status: 'System Online',
            hero_route_ocean: 'Shenzhen → Los Angeles',
            hero_route_ocean_desc: 'FCL Ocean Freight · ETA 15 days',
            hero_route_air: 'Shenzhen → Frankfurt',
            hero_route_air_desc: 'Direct Air Freight · ETA 3 days',
            hero_route_express: 'Shenzhen → Tokyo',
            hero_route_express_desc: 'Door-to-Door Express · ETA 2 days',
            hero_route_status_transit: 'In Transit',
            hero_route_status_customs: 'Customs Cleared',
            hero_route_status_delivered: 'Delivered',

            // Home Page - Services Section
            services_label: 'Core Services',
            services_title: 'One-Stop International Logistics Solutions',
            services_desc: 'From ocean to air, from warehousing to customs clearance, we provide comprehensive professional logistics services',
            service_ocean_desc: 'Direct routes to major global ports, flexible FCL/LCL options, professional handling of all cargo types.',
            service_air_desc: 'Fast and reliable air freight services covering major cities worldwide, ensuring safe and on-time delivery of high-value cargo.',
            service_express_desc: 'Partnered with world-renowned express companies, providing door-to-door fast delivery for urgent shipments.',
            service_warehouse_desc: 'Modern warehousing facilities with professional inventory management and flexible distribution solutions.',
            service_customs_desc: 'Professional customs team familiar with regulations worldwide, providing efficient import/export customs clearance.',
            service_supply_desc: 'Customized supply chain solutions to optimize logistics processes, reduce costs, and improve efficiency.',

            // Home Page - Why Choose Us
            whyus_label: 'Why Choose Us',
            whyus_title: 'Your Trusted Logistics Partner',
            whyus_desc: '10 years of industry expertise, earning client trust through professionalism and integrity',
            whyus_network_title: 'Global Service Network',
            whyus_network_desc: 'Covering 50+ countries and regions, with long-term partnerships with renowned international logistics companies, ensuring safe and on-time delivery.',
            whyus_efficiency_title: 'Fast & Efficient Response',
            whyus_efficiency_desc: 'Optimized logistics processes and advanced information systems, 7×24 online service, ensuring immediate response to client needs.',
            whyus_cost_title: 'Cost Optimization',
            whyus_cost_desc: 'Large-scale operations and refined management, providing the most competitive prices while continuously optimizing logistics costs.',
            whyus_security_title: 'Safe & Reliable',
            whyus_security_desc: 'Comprehensive quality management system and risk control measures, ISO9001 certified, with full cargo insurance coverage.',

            // Home Page - CTA Section
            cta_title: 'Get Your Custom Logistics Solution',
            cta_desc: 'Our professional team will provide you with customized logistics solutions and the best quote within 24 hours',
            cta_or_call: 'Or call us at: ',

            // Home Page - Footer brand
            footer_brand_desc: 'Shenzhen Excellent Voyage Logistics Co., Ltd. is a professional international logistics service provider, dedicated to delivering efficient, safe, and reliable logistics solutions to clients worldwide.',

            // Contact Page
            contact_page_title: 'Contact Us - Shenzhen Excellent Voyage Logistics | Get Free Quote',
            contact_banner_title: 'Contact Us',
            contact_banner_desc: 'No matter what your logistics needs are, our professional team is always ready to provide consultation and service',
            contact_breadcrumb_current: 'Contact Us',
            contact_qc_phone_label: 'Business Hotline',
            contact_qc_email_label: 'Email',
            contact_qc_wechat_label: 'WeChat',
            contact_info_company_name: 'Shenzhen Excellent Voyage Logistics Co., Ltd.',
            contact_info_company_en: 'Excellent Voyage Logistics',
            contact_info_address_label: 'Address',
            contact_info_address_value: 'A612, Sanding E-commerce Park\nNanwan Street, Longgang District\nShenzhen, Guangdong, China',
            contact_info_phone_label: 'Phone',
            contact_info_phone_value: 'Sales Director Davis Luo\n+86 19128604658\n+86 13590173320',
            contact_info_email_label: 'Email',
            contact_info_email_value: '381562675@qq.com\nsales06@excellent-voyage.cn',
            contact_info_website_label: 'Website',
            contact_info_website_value: 'www.excellent-voyage.cn',
            contact_info_wechat_label: 'WeChat',
            contact_info_wechat_value: 'davis003',
            contact_hours_title: 'Business Hours',
            contact_hours_weekday: 'Monday - Friday',
            contact_hours_saturday: 'Saturday',
            contact_hours_sunday: 'Sunday',
            contact_hours_closed: 'Closed',
            contact_hours_time_weekday: '09:00 - 18:00',
            contact_hours_time_saturday: '09:00 - 12:00',
            contact_form_title: 'Online Inquiry',
            contact_form_desc: 'Fill in the information below and we will contact you within 24 hours',
            contact_form_name_label: 'Name',
            contact_form_phone_label: 'Phone',
            contact_form_email_label: 'Email',
            contact_form_service_label: 'Service Type',
            contact_form_message_label: 'Message',
            contact_form_submit: 'Submit Inquiry',
            contact_form_placeholder_name: 'Please enter your name',
            contact_form_placeholder_phone: 'Please enter your phone number',
            contact_form_placeholder_email: 'Please enter your email address',
            contact_form_placeholder_service: 'Please select service type',
            contact_form_placeholder_message: 'Please describe your logistics needs, such as cargo type, origin, destination, estimated shipping date, etc.',
            contact_form_error_name: 'Please enter your name',
            contact_form_error_phone: 'Please enter a valid phone number',
            contact_form_error_email: 'Please enter a valid email address',
            contact_form_error_message: 'Please enter your message',
            contact_form_service_ocean: 'Ocean Freight',
            contact_form_service_air: 'Air Freight',
            contact_form_service_express: 'Express Delivery',
            contact_form_service_warehouse: 'Warehousing',
            contact_form_service_customs: 'Customs Clearance',
            contact_form_service_supply: 'Supply Chain Management',
            contact_form_service_other: 'Other Services',
            contact_success_title: 'Submitted Successfully!',
            contact_success_desc: 'Thank you for your inquiry. Our sales manager will contact you within 24 hours.',
            contact_success_reset: 'Continue Inquiry',
            contact_map_title: 'Our Location',
            contact_map_address: 'A612, Sanding E-commerce Park, Nanwan Street, Longgang District, Shenzhen, Guangdong',
            contact_map_directions: 'Get Directions',
            contact_map_note: 'Map will be embedded when the website goes live. Click "Get Directions" above for route guidance',
            contact_map_company_name: 'Shenzhen Excellent Voyage Logistics Co., Ltd.',
            contact_footer_brand_desc: 'Shenzhen Excellent Voyage Logistics Co., Ltd. is a professional international logistics service provider, dedicated to delivering efficient, safe, and reliable logistics solutions to clients worldwide.',
            contact_footer_copyright: 'Shenzhen Excellent Voyage Logistics Co., Ltd. All Rights Reserved.',
            contact_footer_icp: 'Guangdong ICP No. XXXXXXXX',

            // About Page
            about_title: 'About Us - Shenzhen Excellent Voyage Logistics | Professional International Logistics Service Provider',
            about_breadcrumb_current: 'About Us',
            about_banner_title: 'About Us',
            about_banner_desc: 'Shenzhen Excellent Voyage Logistics Co., Ltd., founded in Hong Kong in 2015 and relocated headquarters to Shenzhen in 2023, is committed to providing professional, efficient, and reliable international logistics solutions for global clients.',
            about_overview_label: 'Company Overview',
            about_overview_title: 'Over a Decade in International Logistics',
            about_overview_desc: 'Based in Shenzhen, serving the world, connecting global trade with professionalism and integrity',
            about_company_name: 'Shenzhen Excellent Voyage Logistics Co., Ltd.',
            about_company_intro1: 'Shenzhen Excellent Voyage Logistics Co., Ltd. was established in Hong Kong in 2015 and relocated its headquarters to Shenzhen in 2023. Leveraging the developed manufacturing and trade advantages of the Pearl River Delta region, the company has built a comprehensive service network covering over 50 countries and regions worldwide. With a registered capital of 2 million RMB, the company has branch offices in Guangzhou, Ningbo, Shanghai, and Tianjin.',
            about_company_intro2: 'As a comprehensive international logistics service provider, we have a professional operations team and advanced information systems, capable of providing one-stop logistics services including ocean freight, air freight, express delivery, warehousing, and customs clearance. The company handles an annual cargo volume of over 100,000 TEU, serving clients across multiple industries including electronics, machinery, textiles, and home furnishings.',
            about_company_intro3: 'The company adheres to the business philosophy of "Customer First, Service Oriented" and the service tenet of "Professional, Efficient, Honest, and Innovative." Through refined management and technological innovation, we continuously create value for clients, reduce logistics costs, and improve supply chain efficiency.',
            about_stat_years_label: 'Years of Experience',
            about_stat_countries_label: 'Countries Covered',
            about_stat_volume_label: 'Annual Volume (TEU)',
            about_stat_satisfaction_label: 'Client Satisfaction',
            about_advantage_title: 'Our ',
            about_advantage_highlight: 'Core Advantages',
            about_advantage_network: 'Global Service Network',
            about_advantage_network_desc: 'Covering 50+ countries with deep partnerships with numerous international logistics enterprises',
            about_advantage_efficiency: 'Efficient Response Mechanism',
            about_advantage_efficiency_desc: '7x24 online service, responding to client needs at the first moment',
            about_advantage_cost: 'Cost Optimization Solutions',
            about_advantage_cost_desc: 'Large-scale operations providing the most competitive prices for clients',
            about_advantage_security: 'Safe & Reliable Guarantee',
            about_advantage_security_desc: 'ISO9001 certified with a comprehensive quality management system',
            about_culture_label: 'Corporate Culture',
            about_culture_title: 'Mission · Vision · Values',
            about_culture_desc: 'Driven by mission, guided by vision, united by values',
            about_mission_title: 'Our Mission',
            about_mission_desc: 'To provide professional, efficient, and reliable international logistics services for global clients, facilitate business growth, build bridges connecting world trade, and make logistics simpler and more efficient.',
            about_vision_title: 'Our Vision',
            about_vision_desc: 'To become a world-leading international logistics service provider, build the most trusted logistics brand, achieve common development of employees, clients, and shareholders, and drive industry progress.',
            about_values_title: 'Core Values',
            about_values_desc: 'Integrity first, customer oriented, professional and efficient, innovative development. We adhere to honest business practices, center on customers, provide professional services, continuously innovate and improve, and pursue excellence.',
            about_team_label: 'Core Team',
            about_team_title: 'Professional Team You Can Trust',
            about_team_desc: 'Gathering industry elites to provide quality services with professional capabilities and extensive experience',
            about_team_member1_name: 'Davis Luo',
            about_team_member1_role: 'Sales Director',
            about_team_member1_desc: 'With 10 years of experience in international logistics, proficient in ocean and air freight operations, responsible for sales team management and client relationship maintenance.',
            about_team_member2_name: 'Professional Operations Team',
            about_team_member2_role: 'Operations Team',
            about_team_member2_desc: 'Experienced operations team familiar with the full process of booking, customs clearance, and documentation, ensuring safe and on-time delivery of cargo.',
            about_team_member3_name: 'Customer Service Team',
            about_team_member3_role: 'Customer Service',
            about_team_member3_desc: '7×24 online customer service, promptly responding to client needs and providing professional logistics consulting and after-sales service.',
            about_team_member4_name: 'Business Development Team',
            about_team_member4_role: 'Business Development',
            about_team_member4_desc: 'Deeply rooted in the Pearl River Delta and national markets, actively expanding domestic and international business, providing customized logistics solutions for clients.',
            about_timeline_label: 'Our History',
            about_timeline_title: 'Pressing Forward with Original Aspiration',
            about_timeline_desc: 'From a startup to a renowned logistics service provider, every step is grounded and steady',
            about_timeline_2015_title: 'Company Founded',
            about_timeline_2015_desc: 'Excellent Voyage Logistics was formally established in Hong Kong, beginning international freight forwarding business with a registered capital of 2 million RMB.',
            about_timeline_2017_title: 'Business Expansion',
            about_timeline_2017_desc: 'Business scope expanded to comprehensive logistics services including ocean freight, air freight, and express delivery. Client numbers grew rapidly and a professional operations team was established.',
            about_timeline_2019_title: 'Network Expansion',
            about_timeline_2019_desc: 'Branch offices established in Guangzhou and Ningbo, with service network covering major trading regions in the Pearl River Delta and Yangtze River Delta.',
            about_timeline_2021_title: 'System Upgrade',
            about_timeline_2021_desc: 'Introduced advanced logistics management systems to improve operational efficiency and service quality, established partnerships with MSK, CMA, MSC and other shipping companies.',
            about_timeline_2023_title: 'HQ Relocated to Shenzhen',
            about_timeline_2023_desc: 'Headquarters relocated to Longgang District, Shenzhen, with additional branch offices in Shanghai and Tianjin, business covering over 50 countries and regions worldwide.',
            about_timeline_2025_title: 'Continuous Growth',
            about_timeline_2025_desc: 'Became a well-known comprehensive logistics service provider in the industry, with continuously growing annual cargo volume and clients worldwide.',
            about_cta_title: 'Partner with Us to Create the Future',
            about_cta_desc: 'Whether you need ocean freight, air freight, or comprehensive logistics solutions, our professional team is ready to serve you',
            about_cta_contact: 'Contact Us Now',
            about_cta_services: 'View Service Details',
            about_cta_or_call: 'Or call us at: ',

            // Services Page
            services_page_title: 'Services - Shenzhen Excellent Voyage Logistics | Ocean Air Express Warehouse Customs',
            services_breadcrumb_current: 'Services',
            services_banner_title: 'Our Services',
            services_banner_subtitle: 'Professional, Efficient & Reliable International Logistics Solutions',
            services_detail_title: 'Six Core Service Areas',
            services_detail_desc: 'From ocean to air, from warehousing to customs clearance, we provide comprehensive professional logistics services to meet your diverse international trade needs',

            // Services Page - Ocean Freight
            services_ocean_desc: 'Leveraging global port route networks, we provide FCL and LCL ocean freight services with flexible options for different cargo volumes. Our professional team handles special cargo such as dangerous goods and cold chain shipments, offering end-to-end door-to-door logistics solutions.',
            services_ocean_feature1: 'Flexible FCL & LCL Options',
            services_ocean_feature2: 'Professional Dangerous Goods Handling',
            services_ocean_feature3: 'Cold Chain Temperature-Controlled Transport',
            services_ocean_feature4: 'Door-to-Door Full Logistics Service',
            services_ocean_feature5: 'Coverage of Major Global Port Routes',
            services_ocean_benefit1: 'High Volume, Low Cost',
            services_ocean_benefit2: 'Extensive Route Coverage',
            services_ocean_benefit3: 'Special Cargo Protection',

            // Services Page - Air Freight
            services_air_desc: 'Established long-term strategic partnerships with multiple international airlines, providing stable space guarantees and highly competitive rates. Covering scheduled flights, charter services, and expedited air freight to ensure safe and on-time delivery of high-value, time-sensitive cargo.',
            services_air_feature1: 'Scheduled Flights & Charter Transport',
            services_air_feature2: 'Expedited Air Freight Fast Track',
            services_air_feature3: 'Full Dangerous Goods Air Transport Certification',
            services_air_feature4: 'High-Value Cargo Special Protection',
            services_air_feature5: 'Direct Access to Major Global Airports',
            services_air_benefit1: 'Fast Transit Time',
            services_air_benefit2: 'Safe & Reliable',
            services_air_benefit3: 'Space Guarantee',

            // Services Page - Express Delivery
            services_express_desc: 'Deep cooperation with internationally renowned express brands, providing DDP (Delivered Duty Paid) and DDU (Delivered Duty Unpaid) service models. Covering document express, parcel delivery, and e-commerce small packets with full logistics tracking, keeping every shipment under control.',
            services_express_feature1: 'DDP/DDU Duty-Included Door-to-Door',
            services_express_feature2: 'Document Express Urgent Service',
            services_express_feature3: 'Parcel & E-Commerce Packet Lines',
            services_express_feature4: 'Real-Time Full Logistics Tracking',
            services_express_feature5: 'Multi-Channel Rate Comparison',
            services_express_benefit1: 'Convenient Door-to-Door',
            services_express_benefit2: 'Full Trackability',
            services_express_benefit3: 'Multiple Channel Options',

            // Services Page - Warehousing
            services_warehouse_desc: 'Modern warehousing facilities equipped with WMS intelligent warehouse management system for precise inventory control. Providing one-stop warehousing services including inbound inspection, sorting, packaging, labeling, and inventory counting, flexibly meeting diverse customer needs.',
            services_warehouse_feature1: 'Modern Warehousing Facilities',
            services_warehouse_feature2: 'WMS Intelligent Warehouse Management',
            services_warehouse_feature3: 'Professional Sorting & Packaging',
            services_warehouse_feature4: 'Inventory Management & Counting',
            services_warehouse_feature5: 'Customized Warehousing Solutions',
            services_warehouse_benefit1: 'Smart Management',
            services_warehouse_benefit2: 'Flexible & Efficient',
            services_warehouse_benefit3: 'Reduced Inventory Costs',

            // Services Page - Customs Clearance
            services_customs_desc: 'Professional customs clearance team familiar with customs regulations and import/export policies worldwide, providing efficient import/export declaration, inspection agency, certificate of origin, and cargo insurance services. Maintaining good communication with customs to ensure rapid clearance and minimize risks.',
            services_customs_feature1: 'Import & Export Customs Declaration',
            services_customs_feature2: 'Commodity Inspection Agency',
            services_customs_feature3: 'Certificate of Origin & Insurance',
            services_customs_feature4: 'Customs Policy Consultation',
            services_customs_feature5: 'Special Commodity Classification & Compliance',
            services_customs_benefit1: 'Professional & Efficient',
            services_customs_benefit2: 'Compliance Assurance',
            services_customs_benefit3: 'Rapid Clearance',

            // Services Page - Supply Chain
            services_supply_desc: 'Providing end-to-end supply chain management solutions for clients, covering supply chain consulting, process optimization, and supplier management coordination. Through data-driven and refined management, helping clients reduce overall logistics costs and improve supply chain operational efficiency.',
            services_supply_feature1: 'Supply Chain Consulting & Diagnosis',
            services_supply_feature2: 'Logistics Process Optimization',
            services_supply_feature3: 'Supplier Management & Coordination',
            services_supply_feature4: 'Data-Driven Decision Support',
            services_supply_feature5: 'Continuous Improvement & Cost Optimization',
            services_supply_benefit1: 'End-to-End Management',
            services_supply_benefit2: 'Data-Driven',
            services_supply_benefit3: 'Continuous Optimization',

            // Services Page - Advantages
            services_advantages_label: 'Core Advantages',
            services_advantages_title: 'Why Choose Excellent Voyage Logistics',
            services_advantages_desc: 'With 10 years of industry expertise, we have earned the trust of global clients through professional, efficient, and secure services',
            services_advantage_network_title: 'Global Network',
            services_advantage_network_desc: 'Covering 50+ countries and regions worldwide, with long-term strategic partnerships with renowned international logistics companies, ensuring safe and on-time delivery to every corner of the world.',
            services_advantage_efficiency_title: 'Fast & Efficient',
            services_advantage_efficiency_desc: 'Optimized logistics processes and advanced information systems, with 7x24 online service, ensuring immediate response to client needs for more efficient logistics.',
            services_advantage_cost_title: 'Cost Optimization',
            services_advantage_cost_desc: 'Large-scale operations and refined management provide clients with the most competitive pricing, continuously optimizing logistics costs and enhancing trade competitiveness.',
            services_advantage_security_title: 'Safe & Reliable',
            services_advantage_security_desc: 'Comprehensive quality management system and risk control measures, ISO9001 certified, with full cargo insurance coverage, ensuring peace of mind for every shipment.',

            // Services Page - CTA
            services_cta_contact: 'View Contact Info',
        }
    };

    // Get current language
    function getLanguage() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    // Set language
    function setLanguage(lang) {
        if (translations[lang]) {
            localStorage.setItem(STORAGE_KEY, lang);
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
            applyTranslations();
            updateLangSwitcherUI();
            return true;
        }
        return false;
    }

    // Get translation
    function t(key, fallback) {
        const lang = getLanguage();
        return translations[lang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? fallback ?? key;
    }

    // Apply translations to all elements with data-i18n attribute
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const attr = el.getAttribute('data-i18n-attr');
            const value = t(key);

            if (attr) {
                // Handle specific attribute translations (placeholder, aria-label, etc.)
                if (attr === 'placeholder' && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
                    el.placeholder = value;
                } else {
                    el.setAttribute(attr, value);
                }
            } else {
                // For input placeholders without explicit data-i18n-attr
                if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
                    el.placeholder = value;
                } else if (el.tagName === 'META') {
                    el.content = value;
                } else {
                    el.textContent = value;
                }
            }
        });

        // Update page titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            document.title = t(key, document.title);
        });
    }

    // Update language switcher UI
    function updateLangSwitcherUI() {
        const lang = getLanguage();
        document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // Toggle language
    function toggleLanguage() {
        const current = getLanguage();
        const next = current === 'zh' ? 'en' : 'zh';
        setLanguage(next);
    }

    // Initialize
    function init() {
        // Set initial HTML lang attribute
        document.documentElement.lang = getLanguage() === 'zh' ? 'zh-CN' : 'en';

        // Apply translations on DOM ready
        function onReady() {
            applyTranslations();
            updateLangSwitcherUI();

            // Bind click events to language switcher buttons (event delegation)
            document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');
                    if (lang && translations[lang]) {
                        setLanguage(lang);
                    }
                });
            });
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', onReady);
        } else {
            onReady();
        }
    }

    // Expose API
    window.EVI18n = {
        getLanguage,
        setLanguage,
        toggleLanguage,
        t,
        applyTranslations,
        init
    };

    // Auto-init
    init();
})();
