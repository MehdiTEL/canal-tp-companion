import type { CasUsage } from '../types';

/* ------------------------------------------------------------------ */
/*  Sprint 2 — Analyser les audiences et produire un rapport (30 min) */
/* ------------------------------------------------------------------ */

export const sprint2Meta = {
  id: 'sprint-2',
  title: 'Sprint 2 — Challenge collectif',
  color: 'var(--color-sprint-2)',
  duration: 30,
};

export const sprint2Data: CasUsage = {
  id: 'sprint2-analyse-audiences',
  title: 'Analyser les audiences et produire un rapport',
  description:
    'Vous etes charge de suivi editorial au sein du studio. Les donnees d\'audience de la premiere semaine de diffusion des series STUDIOCANAL viennent de tomber. Uploadez le fichier Excel dans Copilot Chat, analysez les donnees sous plusieurs angles et produisez un rapport clair et actionnable pour la direction.',
  consignes: [
    'Commencez par uploader le fichier Excel "audiences-series-studiocanal.xlsx" dans Copilot Chat. Ce fichier contient 4 onglets : audiences detaillees (329 lignes), synthese par serie, profil demographique et benchmark concurrentiel.',
    'Pour chaque exercice, demandez a Copilot Chat de s\'appuyer sur les donnees reelles du fichier. Plus vous etes precis sur les colonnes et les metriques a analyser, meilleurs seront les resultats.',
    'Iterez pour affiner les analyses : demandez des graphiques, des comparaisons, des zooms sur des segments specifiques. C\'est la puissance de l\'analyse conversationnelle.',
  ],
  exercises: [
    /* ---------- Exercice 1 ---------- */
    {
      id: 'sprint2-ex1',
      title: 'Poser le contexte et explorer les donnees',
      description:
        'Uploadez le fichier Excel dans Copilot Chat. Demandez-lui d\'analyser la structure des donnees, d\'identifier les series presentes, et de faire ressortir les premieres tendances globales (quelle serie performe le mieux, quelle evolution sur la semaine).',
      documents: [
        {
          name: 'Audiences séries STUDIOCANAL',
          type: 'xlsx',
          path: 'documents/audiences-series-studiocanal.xlsx',
          description: 'Données d\'audience détaillées (329 lignes, 4 onglets) — à uploader dans Copilot Chat',
        },
      ],
      hints: [
        {
          id: 's2-e1-hint1',
          exercice_id: 'sprint2-ex1',
          index: 0,
          text: 'Donnez du contexte a Copilot : "Je suis analyste editorial chez Canal+. Voici les donnees d\'audience de la premiere semaine de diffusion de nos series STUDIOCANAL. Analyse la structure du fichier, identifie les series presentes, et fais ressortir les 5 tendances principales (audience, completion, part de marche)."',
        },
      ],
      idealPrompt:
        'Tu es un analyste editorial senior chez Canal+. Je t\'envoie le fichier Excel des audiences de la premiere semaine de diffusion des series STUDIOCANAL.\n\nAnalyse le fichier et produis :\n1. Un resume de la structure des donnees (nombre de series, episodes, jours couverts)\n2. Le classement des series par audience moyenne Jour (du plus au moins performant)\n3. Les 5 tendances principales que tu identifies (evolution, completion, part de marche)\n4. Les premiers signaux d\'alerte ou de succes a remonter immediatement\n\nFormat : synthese structuree en bullet points.',
      idealResult:
        'ANALYSE PRELIMINAIRE — Audiences STUDIOCANAL S1 2025\n\n1. STRUCTURE DES DONNEES\n- 8 series analysees sur la periode du 3 au 30 mars 2025\n- 47 episodes au total (de 4 a 8 episodes par serie)\n- 329 lignes de donnees quotidiennes (7 jours par episode)\n- 4 onglets : audiences detaillees, synthese, profil demographique, benchmark concurrentiel\n- Metriques : audience J, audience J+7, part de marche, duree moyenne, taux de completion, tranche d\'age\n\n2. CLASSEMENT PAR AUDIENCE MOYENNE JOUR\n| Rang | Serie | Audience moy. J (000) |\n|------|-------|-----------------------|\n| 1 | Les Heritiers S3 | 478 |\n| 2 | Les Ombres du Canal | 412 |\n| 3 | Paris 2050 | 385 |\n| 4 | Le Dernier Mot S2 | 342 |\n| 5 | Signal Perdu | 298 |\n| 6 | Voix Libres | 245 |\n| 7 | Terre Promise | 218 |\n| 8 | Noir Desir | 187 |\n\n3. TOP 5 TENDANCES\n- **Les Heritiers S3 domine** avec la plus forte audience moyenne et un taux de completion de 85% — la franchise fidele tient ses promesses\n- **Les Ombres du Canal surperforme** pour un lancement de S1, avec une part de marche de 12.3% — signal tres positif pour une nouvelle IP\n- **Noir Desir sous-performe** avec l\'audience la plus basse et une completion de 58% — le positionnement Canal+ Cinema ne semble pas porteur\n- **Le J+7 est massif** (+80% en moyenne) : le catch-up est le mode de consommation dominant, confirmant le virage non-lineaire\n- **Les 25-34 ans** sont la tranche dominante sur 5 series sur 8, signe que le catalogue STUDIOCANAL rajeunit l\'audience Canal+\n\n4. SIGNAUX D\'ALERTE ET SUCCES\n- 🟢 Succes : Les Ombres du Canal — a pousser en recommandation myCanal et reseaux sociaux\n- 🟢 Succes : Les Heritiers S3 — renouvellement S4 a valider rapidement\n- 🟡 Vigilance : Paris 2050 — bonne audience mais completion en baisse sur les derniers episodes (fatigue narrative ?)\n- 🔴 Alerte : Noir Desir — repositionnement necessaire, la case Cinema ne genere pas assez de trafic',
    },

    /* ---------- Exercice 2 ---------- */
    {
      id: 'sprint2-ex2',
      title: 'Multiplier les angles d\'analyse',
      description:
        'Demandez a Copilot Chat d\'analyser les donnees sous plusieurs axes : evolution jour par jour, profil demographique des audiences (onglet "Profil audience"), et comparaison avec la concurrence (onglet "Benchmark concurrentiel").',
      hints: [
        {
          id: 's2-e2-hint1',
          exercice_id: 'sprint2-ex2',
          index: 0,
          text: 'Demandez des analyses croisees : "A partir des donnees du fichier, analyse les audiences sous 3 angles : 1) L\'evolution jour par jour de chaque serie (y a-t-il un pic le jour de sortie ? quel est le ratio J/J+7 ?), 2) Le profil demographique (quelle serie attire les jeunes ? les CSP+ ? le mobile ?), 3) La comparaison avec Netflix, Disney+ et TF1+ dans l\'onglet benchmark."',
        },
      ],
      idealPrompt:
        'A partir du fichier Excel, realise une analyse multi-axes des audiences STUDIOCANAL :\n\n**Axe 1 — Evolution temporelle :**\nPour chaque serie, analyse la courbe J vs J+7. Quel est le ratio moyen catch-up ? Y a-t-il des series avec un catch-up anormalement eleve (signe de buzz decale) ?\n\n**Axe 2 — Profil demographique (onglet "Profil audience") :**\nQuelle serie attire le plus les 15-24 ans ? Les CSP+ ? Quel est le device dominant (mobile vs TV connectee) par serie ?\n\n**Axe 3 — Benchmark concurrentiel (onglet "Benchmark concurrentiel") :**\nCompare les audiences Canal+ aux series concurrentes de Netflix, Amazon, Disney+ et TF1+. Ou se situe Canal+ en part de marche et en taux de completion ?\n\nFormat : un rapport structure avec tableaux comparatifs.',
      idealResult:
        'ANALYSE MULTI-AXES — Audiences STUDIOCANAL\n\n**AXE 1 — EVOLUTION TEMPORELLE**\n\nRatio catch-up moyen (J+7 / J) par serie :\n| Serie | Ratio J+7/J | Interpretation |\n|-------|-------------|----------------|\n| Voix Libres | 2.6x | Buzz decale fort — format podcast narratif se decouvre via bouche-a-oreille |\n| Les Ombres du Canal | 2.3x | Tres bon catch-up — la serie genere de la conversation sociale |\n| Paris 2050 | 2.1x | Solide — le genre sci-fi attire un public non-lineaire |\n| Les Heritiers S3 | 1.7x | Plus faible ratio — audience fidele qui regarde en live |\n| Noir Desir | 1.4x | Faible catch-up — la serie ne genere pas de buzz |\n\nConstat : Les series nouvelles ont un catch-up plus fort que les franchises etablies. Le J+7 represente en moyenne 80% de l\'audience additionnelle.\n\n**AXE 2 — PROFIL DEMOGRAPHIQUE**\n\nAttraction par tranche d\'age :\n- 15-24 ans : Paris 2050 (42%) et Voix Libres (38%) — le genre sci-fi et podcast attire les jeunes\n- 25-34 ans : Les Ombres du Canal (45%) — le thriller urbain domine chez les actifs\n- 50-64 ans : Les Heritiers S3 (52%) — franchise historique fidelisante\n\nDevice dominant :\n- Mobile : Voix Libres (55%), Paris 2050 (48%) — les jeunes regardent sur smartphone\n- TV connectee : Les Heritiers S3 (62%), Le Dernier Mot S2 (58%) — consommation familiale\n- Desktop : Marginal partout (<15%)\n\nCSP+ : Les Ombres du Canal (68%) et Le Dernier Mot S2 (64%) — les thrillers et drames attirent les CSP+\n\n**AXE 3 — BENCHMARK CONCURRENTIEL**\n\n| Plateforme | Audience moy. (000) | PdM moy. (%) | Completion moy. (%) |\n|------------|---------------------|--------------|----------------------|\n| Netflix | 620 | 18.2 | 78 |\n| Canal+ | 340 | 9.5 | 74 |\n| Amazon Prime | 310 | 8.8 | 71 |\n| Disney+ | 285 | 7.5 | 82 |\n| TF1+ | 450 | 14.5 | 69 |\n\nConstat : Canal+ se situe en 3e position en audience derriere Netflix et TF1+, mais en 2e position en taux de completion (74%) — signe d\'un public plus engage. Les Ombres du Canal rivalise avec les lancements Netflix en part de marche sur les 25-34 ans.',
    },

    /* ---------- Exercice 3 ---------- */
    {
      id: 'sprint2-ex3',
      title: 'Identifier les enseignements cles',
      description:
        'Demandez a Copilot Chat de synthetiser les points forts, les points de vigilance et les recommandations concretes a retenir pour la suite. Quelles series renouveler ? Lesquelles repositionner ? Quels formats privilegier ?',
      hints: [
        {
          id: 's2-e3-hint1',
          exercice_id: 'sprint2-ex3',
          index: 0,
          text: 'Guidez Copilot vers des recommandations actionnables : "A partir de toutes les analyses precedentes, synthetise en 3 categories : POINTS FORTS (ce qui marche), POINTS DE VIGILANCE (ce qui inquiete), et RECOMMANDATIONS (actions concretes a prendre). Pour chaque recommandation, indique la serie concernee, l\'action, et l\'impact attendu."',
        },
      ],
      idealPrompt:
        'A partir de toutes les analyses precedentes sur les audiences STUDIOCANAL, produis une synthese strategique en 3 parties :\n\n1. **POINTS FORTS** (top 5) — Ce qui fonctionne bien et pourquoi\n2. **POINTS DE VIGILANCE** (top 5) — Ce qui doit etre surveille ou corrige\n3. **RECOMMANDATIONS ACTIONNABLES** (top 5) — Pour chaque recommandation : la serie ou le sujet concerne, l\'action concrete a prendre, le responsable suggere, et l\'impact attendu\n\nFormat : tableaux structures. Ton : direct, factuel, oriente decision.',
      idealResult:
        'SYNTHESE STRATEGIQUE — Audiences STUDIOCANAL S1 2025\n\n**1. POINTS FORTS**\n| # | Constat | Detail |\n|---|---------|--------|\n| 1 | Les Ombres du Canal est un hit de lancement | PdM 12.3%, catch-up 2.3x, CSP+ 68% — la nouvelle IP la plus prometteuse du catalogue |\n| 2 | Les Heritiers S3 confirme la franchise | Audience la plus haute (478k), completion 85% — le public est fidele et engage |\n| 3 | Le rajeunissement fonctionne | Paris 2050 et Voix Libres attirent les 15-34 ans sur mobile — le pari des nouveaux formats paie |\n| 4 | Le catch-up est devenu le mode dominant | Ratio J+7/J moyen de 2.0x — myCanal est la premiere fenetre de consommation |\n| 5 | Canal+ surperforme en engagement | Taux de completion 74% vs 69% pour TF1+ — le public Canal+ regarde jusqu\'au bout |\n\n**2. POINTS DE VIGILANCE**\n| # | Signal | Risque |\n|---|--------|--------|\n| 1 | Noir Desir sous-performe | Audience la plus basse (187k), completion 58%, catch-up 1.4x — la case Cinema ne genere pas de trafic |\n| 2 | Paris 2050 s\'essouffle | Completion en baisse sur les ep. 4-5 — possible fatigue narrative ou probleme de rythme |\n| 3 | Ecart avec Netflix reste important | 620k vs 340k en audience moyenne — Canal+ doit accelerer pour combler le gap |\n| 4 | Le desktop disparait | <15% partout — les investissements UX desktop deviennent questionnable |\n| 5 | Terre Promise ne decolle pas | 218k d\'audience, malgre un bon sujet (environnement) — le format documentaire peine |\n\n**3. RECOMMANDATIONS ACTIONNABLES**\n| # | Serie/Sujet | Action | Responsable | Impact attendu |\n|---|-------------|--------|-------------|----------------|\n| 1 | Les Ombres du Canal | Valider le renouvellement S2 et lancer le tournage avant Q3 | Direction editoriale | Capitaliser sur le buzz avant qu\'il retombe |\n| 2 | Les Heritiers S3 | Renouveler S4 et communiquer des maintenant aux abonnes | Communication | Retention des abonnes fideles |\n| 3 | Noir Desir | Repositionner sur myCanal (hors case Cinema) avec push recommandation | Marketing digital | +30% de decouverte attendue |\n| 4 | Paris 2050 | Analyser les ep. 4-5 (rythme, longueur) et ajuster le montage S2 | Production | Maintenir la completion au-dessus de 75% |\n| 5 | Mobile-first | Prioriser l\'experience mobile sur myCanal pour les nouvelles series | Produit | Capter les 15-34 ans qui representent 40% du public |',
    },

    /* ---------- Exercice 4 ---------- */
    {
      id: 'sprint2-ex4',
      title: 'Faire critiquer l\'analyse',
      description:
        'Utilisez le role-play : demandez a Copilot Chat de se mettre dans la peau d\'un directeur editorial exigeant et de challenger vos conclusions. Que manque-t-il ? Que faudrait-il approfondir ? Quels biais dans l\'analyse ?',
      hints: [
        {
          id: 's2-e4-hint1',
          exercice_id: 'sprint2-ex4',
          index: 0,
          text: 'Utilisez le role-play : "Joue le role d\'un directeur editorial Canal+ tres exigeant. Tu as lu mon analyse des audiences STUDIOCANAL. Pose-moi 5 questions difficiles pour challenger mes conclusions. Sois critique et factuel : quels biais dans mon analyse ? Quelles donnees manquent ? Quelles conclusions sont trop hatives ?"',
        },
      ],
      idealPrompt:
        'Joue le role d\'un directeur editorial Canal+ exigeant et sceptique. Tu as lu mon analyse complete des audiences de la premiere semaine des series STUDIOCANAL.\n\nChallenge mes conclusions en posant 5 questions difficiles :\n- Quels biais dans mon analyse ?\n- Quelles donnees manquent pour etre vraiment conclusif ?\n- Quelles conclusions sont trop hatives apres seulement 1 semaine ?\n- Que ferais-tu differemment ?\n\nApres chaque question, propose la reponse que je devrais donner pour etre credible face a la direction.',
      idealResult:
        'CHALLENGE DU DIRECTEUR EDITORIAL\n\n1. "Une semaine de donnees, c\'est tres court pour tirer des conclusions. Comment justifiez-vous vos recommandations de renouvellement ?"\nReponse : Vous avez raison, une semaine ne suffit pas pour valider une tendance de fond. Cependant, les donnees J+7 et le taux de completion sont des indicateurs precoces fiables. Les Ombres du Canal affiche un profil similaire a celui de "Le Bureau des Legendes" lors de sa S1 (catch-up eleve, CSP+ dominant). Je recommande un "pre-renouvellement" conditionne aux chiffres S1 completes.\n\n2. "Vous dites que Noir Desir sous-performe, mais avez-vous pris en compte la saisonnalite et la case horaire ?"\nReponse : C\'est un point que je n\'ai pas assez creuse. La case Canal+ Cinema diffuse le vendredi soir, en concurrence directe avec Netflix. Il faudrait comparer avec les performances historiques de cette case et tester un repositionnement en semaine sur myCanal avant de conclure.\n\n3. "Le benchmark avec Netflix est-il vraiment comparable ? Leurs budgets marketing sont 10x superieurs."\nReponse : Effectivement, la comparaison brute des audiences n\'est pas equitable. En revanche, le taux de completion et la part de marche ciblee (25-34 ans CSP+) sont des metriques comparables. Canal+ surperforme Netflix en completion (74% vs 78%) malgre un investissement marketing bien moindre — c\'est un signal d\'efficacite.\n\n4. "Vous negligez l\'impact des reseaux sociaux. Avez-vous des donnees de conversation sociale ?"\nReponse : Non, le fichier ne contient pas de donnees sociales. C\'est une lacune importante. Je recommande d\'integrer les mentions Twitter/X, les trending topics et les discussions Reddit dans la prochaine iteration du rapport. Le catch-up eleve de Voix Libres et Les Ombres du Canal suggere un buzz social fort, mais sans donnees, c\'est une hypothese.\n\n5. "Paris 2050 s\'essouffle selon vous, mais ne serait-ce pas simplement le rythme normal d\'une serie sci-fi dense ?"\nReponse : C\'est possible. Les series sci-fi ont souvent une courbe de completion en U (forte au debut, baisse au milieu, remontee au final). Il faudrait attendre les episodes 7-8 pour confirmer. Je nuance ma recommandation : surveiller plutot qu\'agir immediatement sur le montage.',
    },

    /* ---------- Exercice 5 ---------- */
    {
      id: 'sprint2-ex5',
      title: 'Produire le rapport final',
      description:
        'Rassemblez tous les elements pour generer un rapport d\'audience structure, clair et pret a etre partage avec la direction. Demandez a Copilot Chat de produire un document de synthese complet.',
      hints: [
        {
          id: 's2-e5-hint1',
          exercice_id: 'sprint2-ex5',
          index: 0,
          text: 'Demandez un livrable pret a l\'emploi : "Produis un rapport d\'audience complet et structure pour la direction. Inclus : resume executif (5 lignes), classement des series, analyse demographique, benchmark concurrentiel, recommandations, et prochaines etapes. Format professionnel avec tableaux, pret a copier dans PowerPoint."',
        },
      ],
      idealPrompt:
        'Produis le rapport d\'audience final pour la direction de STUDIOCANAL. Structure obligatoire :\n\n1. **Resume executif** (5 lignes max — l\'essentiel pour un DG presse)\n2. **Classement des series** (tableau : serie, audience J, J+7, PdM, completion, tendance)\n3. **Analyse demographique** (qui regarde quoi, sur quel device)\n4. **Benchmark concurrentiel** (Canal+ vs Netflix, Amazon, Disney+, TF1+)\n5. **Top 5 recommandations** (tableau : action, serie, responsable, deadline, impact)\n6. **Prochaines etapes** (quelles donnees collecter pour la semaine 2)\n\nTon : executif, factuel, oriente decision. Format : pret a copier dans un support PowerPoint.',
      idealResult:
        'RAPPORT D\'AUDIENCE — Series STUDIOCANAL\nPremiere semaine de diffusion — Mars 2025\n\n1. RESUME EXECUTIF\nLa premiere semaine de diffusion confirme le potentiel du catalogue STUDIOCANAL. Les Ombres du Canal est le hit de lancement avec une PdM de 12.3% et un catch-up record. Les Heritiers S3 consolide sa position de franchise phare. Le rajeunissement de l\'audience est en marche (40% de 15-34 ans). Deux series necessitent une attention immediate : Noir Desir (repositionnement) et Paris 2050 (suivi de la completion). Le catch-up represente 80% de l\'audience additionnelle, confirmant la priorite strategique de myCanal.\n\n2. CLASSEMENT DES SERIES\n| Rang | Serie | Aud. J (000) | Aud. J+7 (000) | PdM (%) | Completion (%) | Tendance |\n|------|-------|-------------|----------------|---------|----------------|----------|\n| 1 | Les Heritiers S3 | 478 | 812 | 15.2 | 85 | → Stable |\n| 2 | Les Ombres du Canal | 412 | 948 | 12.3 | 79 | ↗ Forte hausse |\n| 3 | Paris 2050 | 385 | 809 | 10.8 | 72 | ↘ Legere baisse |\n| 4 | Le Dernier Mot S2 | 342 | 581 | 9.1 | 76 | → Stable |\n| 5 | Signal Perdu | 298 | 477 | 7.5 | 71 | ↗ En hausse |\n| 6 | Voix Libres | 245 | 637 | 6.2 | 68 | ↗ Forte hausse |\n| 7 | Terre Promise | 218 | 349 | 4.8 | 65 | → Stable |\n| 8 | Noir Desir | 187 | 262 | 3.5 | 58 | ↘ En baisse |\n\n3. ANALYSE DEMOGRAPHIQUE\n- Audience jeune (15-34 ans) : Paris 2050 (42%), Voix Libres (38%), Les Ombres du Canal (35%)\n- CSP+ : Les Ombres du Canal (68%), Le Dernier Mot S2 (64%)\n- Mobile-first : Voix Libres (55%), Paris 2050 (48%)\n- TV connectee : Les Heritiers S3 (62%), Le Dernier Mot S2 (58%)\n- Ile-de-France surrepresentee sur Les Ombres du Canal (42%) et Noir Desir (38%)\n\n4. BENCHMARK CONCURRENTIEL\nCanal+ se classe 3e en volume (340k moy.) mais 2e en engagement (completion 74%). Les Ombres du Canal rivalise avec les lancements Netflix sur les 25-34 CSP+. L\'ecart de volume avec Netflix (620k) reste le principal defi.\n\n5. TOP 5 RECOMMANDATIONS\n| # | Action | Serie | Responsable | Deadline | Impact attendu |\n|---|--------|-------|-------------|----------|----------------|\n| 1 | Pre-renouveler S2 | Les Ombres du Canal | Dir. editoriale | Avril 2025 | Capitaliser sur le buzz |\n| 2 | Renouveler S4 | Les Heritiers | Dir. editoriale | Avril 2025 | Retention abonnes |\n| 3 | Repositionner sur myCanal | Noir Desir | Marketing | Immédiat | +30% decouverte |\n| 4 | Pousser en recommandation | Signal Perdu | Produit myCanal | S+2 | Accelerer la tendance haussiere |\n| 5 | Campagne TikTok/Instagram | Voix Libres | Social media | S+1 | Amplifier le buzz jeune |\n\n6. PROCHAINES ETAPES\n- Collecter les donnees S2 pour confirmer les tendances\n- Integrer les donnees de conversation sociale (Twitter/X, Reddit, TikTok)\n- Analyser les donnees de retention myCanal (taux de desabonnement par serie)\n- Croiser avec les donnees de satisfaction (NPS par serie)\n- Preparer le comite editorial S1 bilan avec ces donnees consolidees',
    },
  ],
};
