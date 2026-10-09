-- Supabase Dashboard > SQL Editor > New query > Run
-- Cada usuário autenticado só acessa seus próprios jogos.
create table if not exists public.minha_lista (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  titulo text not null check (char_length(trim(titulo)) between 1 and 100),
  plataforma text not null default 'PC',
  status text not null default 'Quero jogar' check (status in ('Quero jogar', 'Jogando', 'Concluído')),
  criado_em timestamptz not null default now()
);

create index if not exists minha_lista_user_id_idx on public.minha_lista(user_id);
alter table public.minha_lista enable row level security;

revoke all on public.minha_lista from anon;
grant select, insert, update, delete on public.minha_lista to authenticated;

-- Nomes de políticas específicos para execução idempotente.
drop policy if exists "minha_lista_select" on public.minha_lista;
create policy "minha_lista_select" on public.minha_lista for select to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "minha_lista_insert" on public.minha_lista;
create policy "minha_lista_insert" on public.minha_lista for insert to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "minha_lista_update" on public.minha_lista;
create policy "minha_lista_update" on public.minha_lista for update to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "minha_lista_delete" on public.minha_lista;
create policy "minha_lista_delete" on public.minha_lista for delete to authenticated
using ((select auth.uid()) = user_id);
