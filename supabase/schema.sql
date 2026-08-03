create table if not exists public.name_votes (
  vote_id text primary key check (vote_id ~* '^[a-z0-9-]{16,80}$'),
  selection_1 text not null,
  selection_2 text not null,
  selection_3 text not null,
  created_at timestamptz not null default now(),
  constraint name_votes_three_different check (
    selection_1 <> selection_2
    and selection_1 <> selection_3
    and selection_2 <> selection_3
  )
);

alter table public.name_votes drop constraint if exists name_votes_allowed_candidates;

alter table public.name_votes add constraint name_votes_allowed_candidates check (
  array[selection_1, selection_2, selection_3] <@ ARRAY[
    '旋', '铎', '钧', '铭', '铮', '锐', '锡', '铨', '钊', '钰', '锴', '锟', '镕', '锵', '钟', '锋',
    '鑫', '锦', '钦', '铠', '镇', '铸', '镜', '鉴', '铿', '思', '诗', '新', '辛', '成', '承', '昌', '常', '川', '初', '靖', '静', '信', '宣', '星', '先', '素', '绍', '舒', '尚', '善', '睿', '胜', '朝', '修',
    '珩', '琛', '琦', '琪', '琨', '瑾', '瑜', '玮', '玥', '佩', '珊', '珑', '璟', '璋', '璞', '瑄', '瑛', '瑀', '玠', '玺', '玖', '玲', '颖', '纯', '琰', '瑶', '琬', '瑗', '璇', '琮',
    '风', '泓', '泽', '湛', '涵', '淳', '渊', '澜', '瀚', '源', '浩', '沛', '潇', '澈', '清', '润', '洋', '航', '沅', '洵', '淮', '沐', '澍', '溯',
    '冰', '雨', '云', '雪', '露', '霜', '霞', '雯', '霏', '霓', '霄', '霆', '霁', '恒', '鸿', '宏', '博', '凡', '方', '弘', '民', '鸣', '斌', '子', '贝', '含',
    '玄', '墨', '默', '慧', '敏', '和', '飞', '雷', '霭', '霈', '震', '雁', '雍', '寒', '冬', '北', '凌', '凝', '凛', '牧', '帆', '斐', '翰', '灵', '盈', '曼', '妍', '欢', '映', '梦',
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

drop view if exists public.name_vote_counts;

create view public.name_vote_counts with (security_invoker = true) as
select name, count(*)::integer as votes
from (
  select selection_1 as name from public.name_votes
  union all
  select selection_2 as name from public.name_votes
  union all
  select selection_3 as name from public.name_votes
) as choices
group by name
order by votes desc, name;
