export const MS_PER_SEC = 1000;
export const SEC_PER_MIN = 60;
export const SEC_PER_HOUR = 60 * 60;
export const SEC_PER_DAY = 24 * 60 * 60;

export type CountdownState = {
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

export function getOfferEndMs(): number {
  const now = new Date();
  const year = now.getFullYear();
  const march31 = new Date(year, 2, 31, 23, 59, 59, 999);
  return march31.getTime() > now.getTime()
    ? march31.getTime()
    : new Date(year + 1, 2, 31, 23, 59, 59, 999).getTime();
}

function pad2(n: number) {
  return String(Math.max(0, Math.floor(n))).padStart(2, '0');
}

export function getCountdownState(msLeft: number): CountdownState {
  const totalSecs = Math.max(0, Math.floor(msLeft / MS_PER_SEC));
  const days = Math.floor(totalSecs / SEC_PER_DAY);
  const remainderAfterDays = totalSecs % SEC_PER_DAY;
  const hours = Math.floor(remainderAfterDays / SEC_PER_HOUR);
  const remainderAfterHours = remainderAfterDays % SEC_PER_HOUR;
  const mins = Math.floor(remainderAfterHours / SEC_PER_MIN);
  const secs = remainderAfterHours % SEC_PER_MIN;
  return {
    days: pad2(days),
    hours: pad2(hours),
    mins: pad2(mins),
    secs: pad2(secs),
  };
}
