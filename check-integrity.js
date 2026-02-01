#!/usr/bin/env node

// 检查培训资料库完整性的脚本
const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const expectedFiles = [
  'index.html',
  'basic-concepts.html',
  'trade-terms.html',
  'freight-pricing.html',
  'documentation.html',
  'regulations.html',
  'ocean-freight.html',
  'air-cargo.html',
  'express-delivery.html',
  'rail-transport.html',
  'multimodal-transport.html',
  'cargo-insurance.html',
  'customs-clearance.html',
  'warehouse-management.html',
  'packaging-tech.html',
  'tracking-systems.html',
  'supply-chain.html',
  'cost-control.html',
  'performance-metrics.html',
  'customer-service.html',
  'quality-management.html',
  'logistics-it.html',
  'blockchain.html',
  'ai-iot.html',
  'big-data.html',
  'automation.html',
  'market-analysis.html',
  'client-dev.html',
  'negotiation.html',
  'contract-writing.html',
  'dispute-resolution.html'
];

console.log('国际物流专业知识培训资料库完整性检查');
console.log('=====================================');

let missingFiles = [];
let existingFiles = [];

expectedFiles.forEach(file => {
  const filePath = path.join(trainingDir, file);
  if (fs.existsSync(filePath)) {
    existingFiles.push(file);
    console.log(`✓ ${file}`);
  } else {
    missingFiles.push(file);
    console.log(`✗ ${file} - 缺失`);
  }
});

console.log('\n总结:');
console.log(`总文件数: ${expectedFiles.length}`);
console.log(`存在文件: ${existingFiles.length}`);
console.log(`缺失文件: ${missingFiles.length}`);

if (missingFiles.length === 0) {
  console.log('\n✅ 所有文件均存在，资料库完整');
} else {
  console.log('\n⚠️  发现缺失文件，请检查:');
  missingFiles.forEach(file => console.log(`  - ${file}`));
}