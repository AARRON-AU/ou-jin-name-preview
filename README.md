# 区晋名字评分工具

手机优先的静态网页：固定“区晋”作为前两字，选择或输入第三个字后，展示 100 分制评分和依据。

评分权重：八字结合度 30、寓意与气质 30、粤语听感 30、与哥哥“恺”的呼应 10。页面不包含孩子的出生日期、时间或地点；“金、水优先”仅作为传统命名参考。

## 本地预览

直接双击 `index.html` 即可使用，或在目录内运行任意静态文件服务器。

## 验证

运行 `node tests/verify-data.mjs`，检查 40 个候选字、四项评分上限，以及“恺旋 / 凯旋”“恺风 / 凯风”关联。

## GitHub Pages

推送到 GitHub 的默认分支后，仓库内的 `.github/workflows/pages.yml` 会自动部署页面。首次启用时，请在仓库 **Settings → Pages → Build and deployment** 选择 **GitHub Actions**。
