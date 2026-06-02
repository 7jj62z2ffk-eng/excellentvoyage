# 货物追踪系统配置指南

## 概述

货物追踪页面已创建完成，数据存储使用 Google Sheets + Google Apps Script 实现。

---

## 配置步骤

### 第一步：创建 Google Sheets 表格

1. 打开 [Google Sheets](https://sheets.google.com)
2. 创建一个新的电子表格，命名为"嘉旅物流货物追踪"
3. 按以下格式创建表头（第一行）：

| A列 | B列 | C列 | D列 | E列 | F列 | G列 | H列 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 运单号 | 货物名称 | 起运地 | 目的地 | 运输方式 | 当前位置 | 预计到达 | 状态 |

4. 从第二行开始录入货物数据，例如：

| 运单号 | 货物名称 | 起运地 | 目的地 | 运输方式 | 当前位置 | 预计到达 | 状态 |
|--------|----------|--------|--------|----------|----------|----------|------|
| EV2024001 | 电子产品 | 深圳 | 洛杉矶 | 海运 | 海上运输中 | 2024-12-25 | transit |
| EV2024002 | 服装 | 广州 | 汉堡 | 空运 | 已到达目的港 | 2024-12-20 | delivered |

**状态说明：**
- `transit` - 运输中
- `delivered` - 已签收
- `pending` - 待发货
- `exception` - 异常

---

### 第二步：创建 Google Apps Script

1. 在 Google Sheets 中，点击 **扩展程序** → **Apps Script**
2. 删除默认代码，粘贴以下代码：

```javascript
function doGet(e) {
  // 设置CORS头
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  // 获取查询参数
  var trackingNumber = e.parameter.trackingNumber;
  
  if (!trackingNumber) {
    output.setContent(JSON.stringify({
      found: false,
      message: '请提供运单号'
    }));
    return output;
  }
  
  // 获取表格数据
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // 查找运单号（从第二行开始，跳过表头）
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == trackingNumber) {
      // 找到货物信息
      var result = {
        found: true,
        trackingNumber: data[i][0],
        cargoName: data[i][1],
        origin: data[i][2],
        destination: data[i][3],
        transportMode: data[i][4],
        currentLocation: data[i][5],
        eta: data[i][6],
        status: data[i][7],
        // 模拟运输轨迹（实际可从另一张表读取）
        timeline: [
          {
            time: new Date().toLocaleString('zh-CN'),
            title: '当前状态',
            description: data[i][5]
          },
          {
            time: '2024-12-01 10:00',
            title: '已发货',
            description: '货物已从' + data[i][2] + '发出'
          }
        ]
      };
      
      output.setContent(JSON.stringify(result));
      return output;
    }
  }
  
  // 未找到
  output.setContent(JSON.stringify({
    found: false,
    message: '未找到该运单号'
  }));
  return output;
}
```

3. 点击 **保存**（Ctrl+S），项目名称命名为"货物追踪API"

---

### 第三步：部署为 Web App

1. 点击 **部署** → **新建部署**
2. 点击齿轮图标 **选择类型** → **Web 应用**
3. 填写描述："货物追踪查询接口"
4. **执行身份**：选择"我"
5. **谁可以访问**：选择"任何人"
6. 点击 **部署**
7. 授权访问（按提示点击"允许"）
8. 复制 **Web 应用 URL**（类似：`https://script.google.com/macros/s/xxxxxxxxxx/exec`）

---

### 第四步：更新网站代码

1. 打开 `tracking.html` 文件
2. 找到第 752 行的代码：
   ```javascript
   const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. 将 `YOUR_SCRIPT_ID` 替换为您的实际 Web 应用 URL
4. 保存文件

---

### 第五步：推送到 GitHub

```bash
cd excellentvoyage
git add docs/tracking.html docs/tracking-setup-guide.md
git commit -m "Add cargo tracking feature"
git push origin main
```

---

## 使用说明

### 添加新货物

1. 打开 Google Sheets
2. 在表格最后一行添加新数据
3. 网站会自动同步（实时查询）

### 修改货物信息

直接在 Google Sheets 中编辑对应行的数据即可。

### 删除货物

在 Google Sheets 中删除对应行即可。

---

## 高级功能（可选）

### 添加详细运输轨迹

如需显示完整的运输轨迹，可以创建第二张表：

1. 在 Google Sheets 中添加新工作表，命名为"轨迹"
2. 表头：运单号 | 时间 | 标题 | 描述
3. 修改 Apps Script 代码，从"轨迹"表中读取对应运单号的所有记录

---

## 注意事项

1. **权限**：确保 Google Sheets 和 Apps Script 的访问权限设置正确
2. **配额**：Google Apps Script 有每日执行配额，一般足够使用
3. **安全**：Web 应用 URL 不要泄露，建议定期更换
4. **备份**：定期备份 Google Sheets 数据

---

## 技术支持

如有问题，请联系网站开发人员或参考 [Google Apps Script 文档](https://developers.google.com/apps-script)。
