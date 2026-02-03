# GitHub Pages 上传说明

## 网站状态
- 当前网站URL: https://7jj62z2ffk-eng.github.io
- 对应仓库: https://github.com/7jj62z2ffk-eng/7jj62z2ffk-eng.github.io

## 已完成的更新
已完成以下文件的创建和更新，需要上传到GitHub Pages仓库：

### 新增的培训资料页面（32个）
- training.html (培训资料主页)
- basic-concepts.html (基本概念)
- trade-terms.html (贸易术语)
- freight-pricing.html (货运定价)
- documentation.html (单证管理)
- regulations.html (法规)
- ocean-freight.html (海运)
- air-cargo.html (空运)
- express-delivery.html (快递)
- rail-transport.html (铁路运输)
- multimodal-transport.html (多式联运)
- cargo-insurance.html (货物保险)
- customs-clearance.html (报关报检)
- warehouse-management.html (仓储管理)
- packaging-tech.html (包装技术)
- tracking-systems.html (追踪系统)
- supply-chain.html (供应链)
- cost-control.html (成本控制)
- performance-metrics.html (绩效指标)
- customer-service.html (客户服务)
- quality-management.html (质量管理)
- logistics-it.html (物流IT)
- blockchain.html (区块链)
- big-data.html (大数据)
- automation.html (自动化)
- ai-iot.html (AI与IoT)
- emerging-trends.html (发展趋势)
- market-analysis.html (市场分析)
- client-dev.html (客户开发)
- negotiation.html (商务谈判)
- contract-writing.html (合同撰写)
- dispute-resolution.html (争议解决)

### 更新的现有页面
- index.html (首页)
- about.html (关于我们)
- services.html (服务项目)
- contact.html (联系我们)
- news.html (新闻资讯)
- sitemap.html (网站地图)

### 新增的配置文件
- CNAME (自定义域名配置)
- .nojekyll (禁用Jekyll处理)
- _config.yml (Jekyll配置文件)
- check-integrity.js (完整性检查脚本)
- system-health-check.sh (系统健康检查脚本)
- maintenance-log.txt (维护日志)
- site-structure.txt (网站结构文档)

## 上传步骤
1. 访问 https://github.com/7jj62z2ffk-eng/7jj62z2ffk-eng.github.io
2. 点击 "Code" 按钮，选择 "Upload files"
3. 将以上列出的所有文件上传到仓库根目录
4. 提交更改

## 验证步骤
上传完成后，等待几分钟让GitHub Pages刷新，然后访问：
- https://7jj62z2ffk-eng.github.io/training.html

## 解决部署问题
如果遇到GitHub Pages部署错误（如"Failed to deploy to github-pages by ... via pages-build-deployment"），请确保上传以下两个重要配置文件：

1. `.nojekyll` - 告诉GitHub不要使用Jekyll引擎处理文件
2. `_config.yml` - Jekyll配置文件

这些文件可以防止GitHub Pages尝试处理您的HTML文件为Jekyll站点，从而避免构建错误。

## 自定义域名设置
如果要启用自定义域名，请确保CNAME文件内容正确配置了您的域名。