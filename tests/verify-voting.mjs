import fs from 'node:fs';

const app = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const config = fs.readFileSync(new URL('../vote-config.js', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../supabase/schema.sql', import.meta.url), 'utf8');
const errors = [];

for (const required of ['vote-add-current', 'vote-selection', 'vote-submit', 'vote-clear', 'vote-status']) {
  if (!page.includes(required)) errors.push(`Missing vote UI element: ${required}.`);
}
for (const required of ['function renderVoteSelection', 'function submitVote', 'function toggleVoteChoice', 'voteChoices.length !== 3', 'localStorage.setItem', 'rest/v1/', 'response.ok']) {
  if (!app.includes(required)) errors.push(`Missing vote behavior: ${required}.`);
}
for (const required of ['NAME_VOTE_CONFIG', 'supabaseUrl', 'supabaseAnonKey', 'storageKey']) {
  if (!config.includes(required)) errors.push(`Vote configuration is incomplete: ${required}.`);
}
for (const required of ['create table if not exists public.name_votes', 'enable row level security', 'grant insert on table public.name_votes to anon', 'name_votes_three_different', 'name_vote_counts']) {
  if (!schema.includes(required)) errors.push(`Missing Supabase schema behavior: ${required}.`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Verified embedded 3-name vote UI, one-device guard, and Supabase storage template.');
