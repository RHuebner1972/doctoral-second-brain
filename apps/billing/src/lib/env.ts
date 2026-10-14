import { z } from "zod";

const schema = z.object({
  APP_URL: z.string().url(),
  AUTH_SECRET: z.string().min(16),
  AUTH_GITHUB_ID: z.string().min(1),
  AUTH_GITHUB_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  STRIPE_SECRET_KEY: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  STRIPE_PRICE_MONTHLY: z.string().min(1).optional(),
  STRIPE_PRICE_ANNUAL: z.string().min(1).optional(),
  STRIPE_PORTAL_CONFIGURATION_ID: z.string().optional(),
  STRIPE_AUTOMATIC_TAX: z.enum(["true", "false"]).optional(),
  GITHUB_TOKEN: z.string().optional(),
  GITHUB_OWNER: z.string().default("RHuebner1972"),
  GITHUB_REPO: z.string().default("doctoral-second-brain"),
  GITHUB_TEAM_SLUG: z.string().optional(),
  PLUGIN_MARKETPLACE: z.string().default("RHuebner1972/doctoral-second-brain"),
  PLUGIN_INSTALL_REF: z.string().default("doctoral-brain@doctoral-brain"),
});

export type AppEnv = z.infer<typeof schema>;

let cached: AppEnv | null = null;

export function env(): AppEnv {
  if (cached) return cached;
  const parsed = schema.safeParse(process.env);
  if (!parsed.success) {
    throw new Error(`Invalid environment: ${parsed.error.message}`);
  }
  cached = parsed.data;
  return cached;
}

export const FEATURE_KEY = "doctoral_brain_full";
export const PAST_DUE_GRACE_DAYS = 3;
