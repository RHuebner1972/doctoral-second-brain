create extension if not exists pgcrypto;

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  stripe_customer_id text unique,
  auth_user_id text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  stripe_subscription_id text not null unique,
  status text not null,
  price_id text,
  current_period_end timestamptz,
  grace_until timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists entitlements (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  feature_key text not null,
  active boolean not null default false,
  source_subscription_id uuid references subscriptions(id) on delete set null,
  license_token text unique,
  updated_at timestamptz not null default now(),
  unique (customer_id, feature_key)
);

create table if not exists github_links (
  customer_id uuid primary key references customers(id) on delete cascade,
  github_id text not null unique,
  github_username text not null,
  created_at timestamptz not null default now()
);

create table if not exists access_grants (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id) on delete cascade,
  github_username text not null,
  state text not null,
  last_granted_at timestamptz,
  last_revoked_at timestamptz,
  last_error text,
  updated_at timestamptz not null default now()
);

create table if not exists stripe_events (
  id text primary key,
  type text not null,
  processed_at timestamptz not null default now()
);

create index if not exists subscriptions_customer_idx on subscriptions (customer_id);
create index if not exists entitlements_customer_idx on entitlements (customer_id);
create index if not exists access_grants_customer_idx on access_grants (customer_id);
