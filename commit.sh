#!/bin/bash
###
 # @Author: XJN
 # @Date: 2024-01-30 09:27:19
 # @LastEditors: xiaojunnanya
 # @LastEditTime: 2024-01-30 09:27:45
 # @FilePath: \demo\commit.sh
 # @Description: 
 # @前端实习生: 鲸落
### 

# 提示用户输入提交信息，如果未输入，则使用默认值
read -p "请输入提交信息 (默认: 修复问题): " commit_message

# 如果用户未输入，使用默认值
if [ -z "$commit_message" ]; then
  commit_message="修复问题"
fi

# 执行git add
git add .

# 执行git commit，使用用户输入的提交信息或默认值
git commit -m "$commit_message"

# 执行git push
git push
