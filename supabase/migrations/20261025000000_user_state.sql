-- Per-user app state (journey position, XP, cards, favourites, streak, SRS, exercise progress).
-- One row per user; the client merges local and remote state and upserts the result.
create table if not exists public.user_state (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint user_state_size check (octet_length(data::text) < 500000)
);

alter table public.user_state enable row level security;

create policy "user_state_select_own" on public.user_state
  for select using (auth.uid() = user_id);
create policy "user_state_insert_own" on public.user_state
  for insert with check (auth.uid() = user_id);
create policy "user_state_update_own" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "user_state_delete_own" on public.user_state
  for delete using (auth.uid() = user_id);
