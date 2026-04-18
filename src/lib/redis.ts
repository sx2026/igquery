import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL;
const KEY_PREFIX = "igquery_";

let redis: Redis | null = null;

if (!redis && REDIS_URL) {
  redis = new Redis(REDIS_URL, {
    maxRetriesPerRequest: 3,
  });
}

/**
 * Checks if a given identifier (e.g., IP) is within the rate limit.
 * Uses Redis INCR and EXPIRE with fixed windows.
 * 
 * @param id The unique identifier (usually IP)
 * @param limit Max number of requests allowed
 * @param windowSeconds Window size in seconds
 * @returns {Promise<{ allowed: boolean, current: number }>}
 */
export async function checkRateLimit(id: string, limit: number, windowSeconds: number) {
  if (!redis) {
    console.warn("Redis is not configured. Falling back to allowed.");
    return { allowed: true, current: 0 };
  }

  const key = `${KEY_PREFIX}ratelimit:${id}`;

  try {
    const current = await redis.incr(key);

    if (current === 1) {
      await redis.expire(key, windowSeconds);
    }

    return {
      allowed: current <= limit,
      current,
    };
  } catch (error) {
    console.error("Redis rate limit error:", error);
    // Fail open or closed? For rate limiting, usually fail open or use local fallback
    return { allowed: true, current: 0 };
  }
}

export default redis;
