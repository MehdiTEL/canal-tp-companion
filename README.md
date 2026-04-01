# Canal+ TP Companion

Application web interactive pour la formation **IA / Copilot Chat** — session pilote **Lecko x Canal+ 2026**.

Guide les participants a travers 4 sprints d'exercices pratiques avec Copilot Chat, collecte leurs prompts/resultats, et fournit un tableau de bord formateur.

## Stack technique

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** (PostCSS)
- **Supabase** (persistance optionnelle, fallback localStorage)
- **Lucide React** (icones)
- **DM Sans** + **Source Sans 3** (typographie)

## Demarrage rapide

```bash
# Installer les dependances
npm install

# Lancer le serveur de dev
npm run dev

# Build production
npm run build

# Type-check
npx tsc --noEmit
```

## Variables d'environnement

Copier `.env.example` vers `.env` et renseigner :

| Variable | Description | Requis |
|----------|-------------|--------|
| `VITE_SUPABASE_URL` | URL du projet Supabase | Non (fallback localStorage) |
| `VITE_SUPABASE_ANON_KEY` | Cle anonyme Supabase | Non |
| `VITE_FORMATEUR_CODE` | Code d'acces espace formateur | Non (defaut: `lecko2026`) |

## Structure des sprints

| Sprint | Duree | Contenu |
|--------|-------|---------|
| Echauffement | 10 min | Veille rapide sur une thematique avec Copilot Chat |
| Sprint 1 | 25 min | Cas pratique guide en 5 etapes |
| Sprint 2 | 30 min | Challenge collectif — 3 exercices |
| Sprint 3 | 30 min | Conception d'un Agent Lite |

Les sprints se debloquent sequentiellement : chaque sprint necessite la completion du precedent.

## Deploiement

L'application est configuree pour **GitHub Pages** avec le base path `/canal-tp-companion/`.

```bash
npm run build
# Deployer le contenu de dist/
```

## Base de donnees

Le schema Supabase est dans `supabase/migrations/001_init.sql`. Il inclut :
- Table `participants` (metier, lang, session)
- Table `submissions` (prompts, resultats, auto-evaluation)
- Table `feedback`
- RLS policies pour acces public en lecture/ecriture
