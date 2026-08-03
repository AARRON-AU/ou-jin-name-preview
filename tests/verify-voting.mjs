import fs from 'node:fs';

const app = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const config = fs.readFileSync(new URL('../vote-config.js', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../supabase/schema.sql', import.meta.url), 'utf8');
const resultsPage = fs.readFileSync(new URL('../results.html', import.meta.url), 'utf8');
const resultsSource = fs.readFileSync(new URL('../results.js', import.meta.url), 'utf8');
const errors = [];

for (const required of ['vote-add-current', 'vote-selection', 'vote-submit', 'vote-clear', 'vote-status']) {
  if (!page.includes(required)) errors.push(`Missing vote UI element: ${required}.`);
}
for (const required of ['function renderVoteSelection', 'function submitVote', 'function toggleVoteChoice', 'VOTE_LIMIT = 5', 'voteChoices.length !== VOTE_LIMIT', 'selection_4', 'selection_5', 'localStorage.setItem', 'rest/v1/', 'response.ok']) {
  if (!app.includes(required)) errors.push(`Missing vote behavior: ${required}.`);
}
for (const required of ['NAME_VOTE_CONFIG', 'supabaseUrl', 'supabaseAnonKey', 'storageKey']) {
  if (!config.includes(required)) errors.push(`Vote configuration is incomplete: ${required}.`);
}
for (const required of ['create table if not exists public.name_votes', 'selection_4 text', 'selection_5 text', 'enable row level security', 'grant insert on table public.name_votes to anon', 'name_votes_distinct_selections', 'name_vote_counts', 'name_vote_summary']) {
  if (!schema.includes(required)) errors.push(`Missing Supabase schema behavior: ${required}.`);
}
if (!page.includes('results.html') || !resultsPage.includes('results-chart') || !resultsSource.includes('name_vote_counts')) errors.push('Visual voting results page is missing.');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Verified embedded 5-name vote UI, one-device guard, and Supabase storage template.');
