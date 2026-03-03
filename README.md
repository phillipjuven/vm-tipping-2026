
# VM Tipping 2026 (Gratis)

En enkel Next.js 14-app for tippespill under VM 2026. Alt satt opp for gratisbruk:
- Vercel (hosting + cron)
- Supabase (Postgres)
- NextAuth (Google OAuth)
- football-data.org (Free plan – forsinkede live-data)

## Hurtigstart
1. Opprett Supabase-prosjekt og kopier `DATABASE_URL`.
2. Hent gratis API token fra football-data.org.
3. Opprett Google OAuth-klient (Web) og legg til redirect-URI:
   - `https://<ditt-vercel-prosjekt>.vercel.app/api/auth/callback/google`
4. I Vercel → Project Settings → Environment Variables, legg inn verdier fra `.env.local.example`.
5. Deploy fra GitHub.

## Miljøvariabler
Se `.env.local.example` for komplett liste.

## Poengregler
- Gruppespill: 1 poeng pr korrekt plassering +2 bonus for perfekt gruppe.
- Sluttspill: QF=+2, SF=+3, F=+5, WIN=+8.
- Priser: 1./2./3.-valg = 7/5/3.

