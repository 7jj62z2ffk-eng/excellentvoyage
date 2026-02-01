#!/bin/bash

# 系统健康检查脚本
echo "====================================="
echo "系统健康检查报告"
echo "检查时间: $(date)"
echo "====================================="

echo
echo "1. 培训资料库完整性检查:"
cd "/Users/luolongming/Davis专属文件夹/国际物流专业知识培训资料"
node check-integrity.js

echo
echo "====================================="
echo "2. 系统状态检查:"
clawdbot status --deep

echo
echo "====================================="
echo "3. 文件权限检查:"
ls -la "/Users/luolongming/Davis专属文件夹/国际物流专业知识培训资料/" | head -5

echo
echo "====================================="
echo "4. 存储空间检查:"
df -h "/Users/luolongming/Davis专属文件夹/"

echo
echo "系统健康检查完成。"
echo "====================================="