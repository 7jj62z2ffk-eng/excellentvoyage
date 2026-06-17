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
