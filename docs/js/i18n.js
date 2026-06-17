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
                el.setAttribute(attr, value);
            } else {
                // For input placeholders
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
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
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applyTranslations);
        } else {
            applyTranslations();
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
