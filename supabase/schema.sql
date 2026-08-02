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
  ),
  constraint name_votes_allowed_candidates check (
    selection_1 in ('旋', '铎', '钧', '铭', '铮', '锐', '锡', '铨', '钊', '钰', '锴', '锟', '镕', '锵', '钟', '锋', '风', '泓', '泽', '湛', '涵', '淳', '渊', '澜', '瀚', '源', '浩', '沛', '潇', '澈', '清', '润', '洋', '航', '沅', '洵', '淮', '沐', '澍', '溯', '歌', '捷', '乐', '瑞', '模', '书', '体', '法', '则', '切', '悌', '然', '叹', '慷', '愉', '安', '宁', '康')
    and selection_2 in ('旋', '铎', '钧', '铭', '铮', '锐', '锡', '铨', '钊', '钰', '锴', '锟', '镕', '锵', '钟', '锋', '风', '泓', '泽', '湛', '涵', '淳', '渊', '澜', '瀚', '源', '浩', '沛', '潇', '澈', '清', '润', '洋', '航', '沅', '洵', '淮', '沐', '澍', '溯', '歌', '捷', '乐', '瑞', '模', '书', '体', '法', '则', '切', '悌', '然', '叹', '慷', '愉', '安', '宁', '康')
    and selection_3 in ('旋', '铎', '钧', '铭', '铮', '锐', '锡', '铨', '钊', '钰', '锴', '锟', '镕', '锵', '钟', '锋', '风', '泓', '泽', '湛', '涵', '淳', '渊', '澜', '瀚', '源', '浩', '沛', '潇', '澈', '清', '润', '洋', '航', '沅', '洵', '淮', '沐', '澍', '溯', '歌', '捷', '乐', '瑞', '模', '书', '体', '法', '则', '切', '悌', '然', '叹', '慷', '愉', '安', '宁', '康')
  )
);

alter table public.name_votes enable row level security;

grant insert on table public.name_votes to anon;

create policy "anonymous visitors can insert valid ballots"
  on public.name_votes
  for insert
  to anon
  with check (true);

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
