
export const STAGE_POINTS = { QF: 2, SF: 3, F: 5, WIN: 8 } as const;
export const AWARD_POINTS = { 1: 7, 2: 5, 3: 3 } as const;

export function scoreGroup(user: string[], actual: string[]) {
  let correct = 0;
  for (let i = 0; i < 4; i++) if (user[i] === actual[i]) correct++;
  return correct + (correct === 4 ? 2 : 0);
}

export function scoreStages(
  user: Record<keyof typeof STAGE_POINTS, string[]>,
  actual: Record<keyof typeof STAGE_POINTS, Set<string>>
) {
  let pts = 0;
  (Object.keys(STAGE_POINTS) as (keyof typeof STAGE_POINTS)[]).forEach((st) => {
    user[st].forEach((team) => {
      if (actual[st].has(team)) pts += STAGE_POINTS[st];
    });
  });
  return pts;
}

export function scoreAwards(
  user: { category: "TOP_SCORER"|"GOLDEN_BALL"|"ASSISTS"; playerId: string; rank: 1|2|3 }[],
  actual: Record<"TOP_SCORER"|"GOLDEN_BALL"|"ASSISTS", string>
) {
  return user.reduce((sum, p) => sum + (actual[p.category] === p.playerId ? AWARD_POINTS[p.rank] : 0), 0);
}
