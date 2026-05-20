# 托福核心词汇小程序

一个离线可用的单页学习小程序，包含 100 个托福高频学术词汇。

## 使用方式

直接打开 `index.html` 即可使用。

## 在 iPhone 上使用

### 临时在同一 Wi-Fi 使用

1. 在 Mac 上进入本目录：

   ```bash
   cd /Users/mac/Documents/Codex/2026-05-20/new-chat
   ```

2. 启动本机网页服务：

   ```bash
   python3 -m http.server 4173 --bind 0.0.0.0
   ```

3. 查看 Mac 的 Wi-Fi IP：

   ```bash
   ipconfig getifaddr en0
   ```

4. iPhone 和 Mac 连接同一个 Wi-Fi 后，在 Safari 打开：

   ```text
   http://你的Mac IP:4173
   ```

### 长期像 App 一样使用

把这个目录发布到 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages。用 iPhone Safari 打开 HTTPS 地址后，点分享按钮，选择“添加到主屏幕”。

## 功能

- 词卡翻面、上一词/下一词
- 单词发音
- 主题筛选与搜索
- 中文释义四选一测验
- 按词根/词族分组的全部词汇列表
- 每个词独立记录学习次数
- 答对测验或点击“认识”后进入已学会列表
- 未学会词汇持续进入滚动学习队列
- 本地保存学习次数、掌握状态和正确率

学习记录保存在浏览器 `localStorage` 中，重置记录按钮会清空本机进度。
