create table if not exists public.name_votes (
  vote_id text primary key check (vote_id ~* '^[a-z0-9-]{16,80}$'),
  selection_1 text not null,
  selection_2 text not null,
  selection_3 text not null,
  selection_4 text,
  selection_5 text,
  created_at timestamptz not null default now()
);

-- 兼容此前已提交的三选票；新页面会提交五个名字。
alter table public.name_votes add column if not exists selection_4 text;
alter table public.name_votes add column if not exists selection_5 text;

alter table public.name_votes drop constraint if exists name_votes_three_different;
alter table public.name_votes drop constraint if exists name_votes_distinct_selections;
alter table public.name_votes add constraint name_votes_distinct_selections check (
  selection_1 <> selection_2
  and selection_1 <> selection_3
  and selection_2 <> selection_3
  and (
    (selection_4 is null and selection_5 is null)
    or (
      selection_4 is not null
      and selection_5 is not null
      and selection_1 <> selection_4
      and selection_1 <> selection_5
      and selection_2 <> selection_4
      and selection_2 <> selection_5
      and selection_3 <> selection_4
      and selection_3 <> selection_5
      and selection_4 <> selection_5
    )
  )
);

alter table public.name_votes drop constraint if exists name_votes_allowed_candidates;
alter table public.name_votes add constraint name_votes_allowed_candidates check (
  array_remove(array[selection_1, selection_2, selection_3, selection_4, selection_5], null) <@ ARRAY[
    '旋', '铎', '钧', '铭', '铮', '锐', '锡', '铨', '钊', '钰', '锴', '锟', '镕', '锵', '钟', '锋',
    '鑫', '锦', '钦', '铠', '镇', '铸', '镜', '鉴', '铿', '思', '宗', '新', '辛', '成', '承', '昌', '常', '川', '初', '靖', '毅', '信', '宣', '星', '先', '素', '绍', '舒', '尚', '善', '睿', '胜', '朝', '修',
    '珩', '琛', '琦', '琪', '琨', '瑾', '瑜', '玮', '珏', '佩', '璜', '珑', '璟', '璋', '璞', '瑄', '瑛', '瑀', '玠', '玺', '玖', '珀', '颖', '纯', '琰', '琅', '璨', '瑗', '璇', '琮',
    '风', '泓', '泽', '湛', '涵', '淳', '渊', '澜', '瀚', '源', '浩', '沛', '潇', '澈', '清', '润', '洋', '航', '沅', '洵', '淮', '沐', '澍', '溯',
    '冰', '雨', '云', '学', '怀', '霜', '武', '孝', '平', '华', '霄', '霆', '霁', '恒', '鸿', '宏', '博', '凡', '方', '弘', '民', '鸣', '斌', '子', '品', '含',
    '玄', '墨', '默', '慧', '敏', '和', '飞', '雷', '霭', '霈', '震', '雁', '雍', '寒', '冬', '北', '凌', '凝', '凛', '牧', '帆', '斐', '翰', '灵', '远', '朋', '禹', '欢', '映', '梦',
    '旋', '风', '歌', '捷', '乐', '泽', '瑞', '模', '书', '体', '法', '则', '切', '悌', '然', '叹', '慷', '愉', '安', '宁', '康', '文', '恩', '伦', '利', '迪', '达', '丰', '明', '诚'
  ]::text[]
);

alter table public.name_votes enable row level security;
grant insert on table public.name_votes to anon;

drop policy if exists "anonymous visitors can insert valid ballots" on public.name_votes;
create policy "anonymous visitors can insert valid ballots"
  on public.name_votes
  for insert
  to anon
  with check (true);

-- 公开的仅是汇总统计；原始选票表没有匿名读取权限。
drop view if exists public.name_vote_summary;
drop view if exists public.name_vote_counts;

create view public.name_vote_counts as
select name, count(*)::integer as votes
from (
  select selection_1 as name from public.name_votes
  union all
  select selection_2 as name from public.name_votes
  union all
  select selection_3 as name from public.name_votes
  union all
  select selection_4 as name from public.name_votes where selection_4 is not null
  union all
  select selection_5 as name from public.name_votes where selection_5 is not null
) as choices
group by name
order by votes desc, name;

create view public.name_vote_summary as
select
  count(*)::integer as ballots,
  count(*) filter (where selection_4 is not null)::integer as five_name_ballots,
  count(*) filter (where selection_4 is null)::integer as legacy_three_name_ballots
from public.name_votes;

grant select on table public.name_vote_counts, public.name_vote_summary to anon;
