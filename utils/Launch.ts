// utils/launch.ts
export function parseTargetDate(
  input: string | Date,
  useUTC = false
): Date {
  if (input instanceof Date) return input;

  // Supports "DD-MM-YYYY"
  const m = input.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (m) {
    const [, dd, mm, yyyy] = m.map(Number);
    return useUTC
      ? new Date(Date.UTC(yyyy, mm - 1, dd, 0, 0, 0))
      : new Date(yyyy, mm - 1, dd, 0, 0, 0);
  }

  // Fallback: let Date parse (works for ISO like "2025-10-10T18:00:00Z")
  return new Date(input);
}

/** true once we reach/past the target moment */
export function hasLaunched(target: string | Date, useUTC = false): boolean {
  const t = parseTargetDate(target, useUTC).getTime();
  return Date.now() >= t;
}

/** handy if you also want remaining ms */
export function getCountdown(target: string | Date, useUTC = false) {
  const t = parseTargetDate(target, useUTC).getTime();
  const diff = t - Date.now();
  return { msRemaining: Math.max(0, diff), launched: diff <= 0 };
}
