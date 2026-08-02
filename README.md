# 区晋名字评分工具

手机优先的静态网页：固定“区晋”作为前两字，从字库选择第三个字后，展示 100 分制评分和依据。

评分权重：八字结合度 30、寓意与气质 25、粤语听感 30、与哥哥“恺”的呼应 15。页面不包含孩子的出生日期、时间或地点；“金、水优先”仅作为传统命名参考。

除 40 个金、水候选字外，页面还提供 21 个兄弟呼应字。页面保留粤语读音按钮，使用设备的 `zh-HK/yue` 语音朗读“欧晋X”；“区”的粤语姓氏读音按“欧”处理。

## 亲友投票

投票功能直接放在评分页内：每位亲友可从字库中选择 3 个不同名字，匿名提交；每个名字各计 1 票，不分排名。页面以浏览器本地记录限制同一设备重复提交，不收集姓名、电话或地址；投票结果仅在发起人的数据表中查看。

投票收集采用 Supabase。运行 `supabase/schema.sql` 创建表和仅写入权限，再把项目 URL 与公开 `anon` key 填入 `vote-config.js`，即可开启投票。详细步骤见 [supabase/README.md](supabase/README.md)。

## 本地预览

直接双击 `index.html` 即可使用，或在目录内运行任意静态文件服务器。

## 验证

运行 `node tests/verify-data.mjs` 和 `node tests/verify-voting.mjs`，检查候选字数据、评分上限以及 3 名投票流程所需的页面与脚本结构。

## GitHub Pages

推送到 GitHub 的默认分支后，仓库内的 `.github/workflows/pages.yml` 会自动部署页面。首次启用时，请在仓库 **Settings → Pages → Build and deployment** 选择 **GitHub Actions**。
