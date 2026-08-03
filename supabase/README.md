# 投票数据服务设置

投票页面使用 Supabase 保存匿名的 5 个选择，并兼容此前已经提交的 3 选投票。页面只公开汇总统计，不公开原始选票；结果图表可直接打开 `results.html` 查看。

1. 新建一个 Supabase 项目。
2. 打开项目的 **SQL Editor**，粘贴并运行 `schema.sql` 全部内容。
3. 在项目的 API 设置中复制 **Project URL** 和 **anon / publishable key**。不要使用或发送 `service_role` key。
4. 把两项填入网站根目录的 `vote-config.js`：

```js
window.NAME_VOTE_CONFIG = {
  supabaseUrl: 'https://你的项目.supabase.co',
  supabaseAnonKey: '你的 anon key',
  table: 'name_votes',
  storageKey: 'ou-jin-name-vote-v1'
};
```

提交后，新投票会写入 `name_votes` 的五列选择。`name_vote_counts` 视图会把非空选择合并并按票数排序；`name_vote_summary` 提供投票张数汇总。浏览器只保存一个随机投票编号，用于尽量阻止同一设备重复提交，不包含姓名、电话或地址。
