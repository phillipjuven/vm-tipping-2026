
export async function fd(path: string, init: RequestInit = {}) {
  const API = process.env.FOOTBALL_DATA_API_BASE!;
  const TOKEN = process.env.FOOTBALL_DATA_API_TOKEN!;
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { 'X-Auth-Token': TOKEN, ...(init.headers||{}) },
    next: { revalidate: 30 }
  });
  if (!res.ok) throw new Error(`FD ${res.status}`);
  return res.json();
}
