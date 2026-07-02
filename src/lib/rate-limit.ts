const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

/**
 * Minimal in-memory rate limiter — fine for a single-instance dev/small
 * deployment. Replace with a durable store (Redis, Upstash) behind a real
 * CRM integration if traffic or multi-instance hosting warrants it.
 */
export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return false;
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}
