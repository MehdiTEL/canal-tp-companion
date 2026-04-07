import type { CasUsage } from '../types';

/* ------------------------------------------------------------------ */
/*  Sprint 2 — Challenge collectif (30 min)                           */
/*  Preparer une reunion de lancement de projet                       */
/* ------------------------------------------------------------------ */

export const sprint2Meta = {
  id: 'sprint-2',
  title: 'Sprint 2 — Challenge collectif',
  color: 'var(--color-sprint-2)',
  duration: 30,
};

export const sprint2Data: CasUsage = {
  id: 'sprint2-reunion-lancement',
  title: 'Preparer une reunion de lancement de projet',
  description:
    'Vous devez preparer une reunion de lancement pour un nouveau projet strategique. Utilisez Copilot Chat pour structurer, rediger et anticiper chaque etape de cette reunion.',
  consignes: [
    'Commencez par donner un maximum de contexte a Copilot Chat sur le projet : objectif, parties prenantes, enjeux, deadline. Plus le briefing est riche, plus le resultat sera exploitable.',
    'Pour chaque exercice, precisez le format de sortie attendu (nombre de mots, structure, ton). Copilot Chat produit de meilleurs resultats quand les contraintes sont explicites.',
    'N\'hesitez pas a iterer : relancez Copilot Chat pour affiner, reformuler ou approfondir un livrable. C\'est la cle d\'un bon prompting.',
  ],
  exercises: [
    /* ---------- Exercice 1 ---------- */
    {
      id: 'sprint2-ex1',
      title: 'Definir l\'ordre du jour structure',
      description:
        'Demandez a Copilot Chat de vous proposer un ordre du jour structure pour la reunion de lancement. Incluez les sujets cles, la duree de chaque point, et les responsables.',
      hints: [
        {
          id: 's2-e1-hint1',
          exercice_id: 'sprint2-ex1',
          index: 0,
          text: 'Donnez du contexte : "Je dois preparer une reunion de lancement d\'1h30 pour un projet de refonte de l\'experience myCanal. 12 participants (product, tech, design, marketing). Propose un ordre du jour structure avec : sujet, duree, responsable, objectif de chaque point."',
        },
      ],
      idealPrompt:
        'Tu es un chef de projet senior dans un groupe media. Je dois preparer une reunion de lancement d\'1h30 pour un projet de refonte de l\'experience myCanal. 12 participants : product owner, lead tech, UX designer, responsable marketing, 2 devs, 1 data analyst, directeur produit, et 4 stakeholders. Propose un ordre du jour structure avec : sujet, duree, responsable, objectif de chaque point. Inclus un ice-breaker et un temps de Q&A.',
      idealResult:
        'Ordre du jour — Reunion de lancement : Refonte myCanal\n\n| # | Sujet | Duree | Responsable | Objectif |\n|---|---|---|---|---|\n| 1 | Ice-breaker : "Votre fonctionnalite myCanal preferee" | 5 min | Product Owner | Creer de la cohesion et lancer la discussion |\n| 2 | Contexte et vision du projet | 15 min | Directeur Produit | Aligner tous les participants sur le "pourquoi" |\n| 3 | Perimetre et objectifs mesurables | 15 min | Product Owner | Definir ce qui est in/out scope et les KPIs |\n| 4 | Architecture technique et contraintes | 15 min | Lead Tech | Poser les bases techniques et identifier les risques |\n| 5 | Experience utilisateur cible | 10 min | UX Designer | Presenter les parcours utilisateurs prioritaires |\n| 6 | Plan marketing et communication | 10 min | Resp. Marketing | Aligner la strategie de lancement |\n| 7 | Planning macro et jalons | 10 min | Product Owner | Partager le retroplanning et les deadlines cles |\n| 8 | Q&A et prochaines etapes | 10 min | Tous | Repondre aux questions et definir les actions |',
    },

    /* ---------- Exercice 2 ---------- */
    {
      id: 'sprint2-ex2',
      title: 'Rediger la note de cadrage du projet',
      description:
        'Utilisez Copilot Chat pour produire une note de cadrage synthetique a partager avant la reunion : contexte, objectifs, perimetre, risques et planning.',
      hints: [
        {
          id: 's2-e2-hint1',
          exercice_id: 'sprint2-ex2',
          index: 0,
          text: 'Demandez un format precis : "Redige une note de cadrage d\'une page max. Structure : Contexte (5 lignes), Objectifs (3 bullet points), Perimetre (in/out), Risques identifies (top 3), Planning macro (4 jalons). Ton : factuel et synthetique."',
        },
      ],
      idealPrompt:
        'Redige une note de cadrage pour le projet de refonte myCanal a partager aux participants avant la reunion de lancement. Structure obligatoire : 1) Contexte strategique (5 lignes max), 2) Objectifs du projet (3 bullet points mesurables), 3) Perimetre (ce qui est inclus / ce qui est hors perimetre), 4) Risques identifies (top 3 avec niveau de criticite), 5) Planning macro (4 jalons cles avec dates). Maximum 1 page. Ton factuel et synthetique.',
      idealResult:
        'NOTE DE CADRAGE — Projet Refonte myCanal\n\n1. CONTEXTE\nmyCanal est la plateforme digitale phare du groupe Canal+ avec 8M d\'utilisateurs actifs mensuels. Face a l\'evolution des usages (mobile-first, personnalisation) et a la concurrence accrue des plateformes SVOD, une refonte de l\'experience est strategique pour maintenir l\'engagement et reduire le churn.\n\n2. OBJECTIFS\n- Augmenter le temps de session moyen de 15% d\'ici Q4 2025\n- Reduire le taux de churn mensuel de 4.2% a 3.5%\n- Atteindre un NPS de 45+ sur l\'experience mobile (actuellement 38)\n\n3. PERIMETRE\nInclus : refonte du parcours de decouverte, nouveau moteur de recommandation, redesign mobile-first, integration des contenus STUDIOCANAL STORIES\nHors perimetre : refonte du player video, migration backend, changement d\'offres commerciales\n\n4. RISQUES\n- [Critique] Dependance au nouveau moteur de recommandation (equipe Data) — deadline serree\n- [Moyen] Adoption par les utilisateurs existants — risque de friction au changement\n- [Faible] Compatibilite TV connectees — parc heterogene a tester\n\n5. PLANNING\n- Avril 2025 : Kick-off et cadrage UX\n- Juin 2025 : Livraison MVP (mobile)\n- Septembre 2025 : Beta ouverte (10% du trafic)\n- Novembre 2025 : Deploiement complet multi-devices',
    },

    /* ---------- Exercice 3 ---------- */
    {
      id: 'sprint2-ex3',
      title: 'Preparer les slides de la reunion',
      description:
        'Demandez a Copilot Chat de structurer le contenu d\'une presentation de 8 slides pour la reunion de lancement, avec le titre et les points cles de chaque slide.',
      hints: [
        {
          id: 's2-e3-hint1',
          exercice_id: 'sprint2-ex3',
          index: 0,
          text: 'Precisez le nombre de slides et le contenu : "Propose le plan d\'une presentation de 8 slides pour la reunion de lancement. Pour chaque slide : titre, 3-4 bullet points, et une note pour le speaker. La presentation doit etre claire et impactante."',
        },
      ],
      idealPrompt:
        'Propose le plan detaille d\'une presentation PowerPoint de 8 slides pour la reunion de lancement du projet refonte myCanal. Pour chaque slide : numero, titre, 3-4 bullet points de contenu, et une note pour le speaker (ce qu\'il doit dire/insister sur). La presentation doit etre claire, impactante et tenir en 30 minutes de speech.',
      idealResult:
        'Plan de presentation — Reunion de lancement Refonte myCanal (8 slides)\n\nSlide 1 : Page de titre\n- "Refonte myCanal — Reunion de lancement"\n- Date, logo Canal+, nom du projet\n- Note speaker : Accueil, remerciements, rappel de la duree (1h30)\n\nSlide 2 : Pourquoi cette refonte ?\n- 8M d\'utilisateurs actifs mais engagement en baisse (-8% en 6 mois)\n- Concurrence SVOD : Netflix, Disney+, Prime Video investissent massivement en UX\n- Attentes utilisateurs : personnalisation, mobile-first, fluidite\n- Note speaker : Insister sur l\'urgence strategique, montrer le benchmark concurrentiel\n\nSlide 3 : Vision et objectifs\n- Vision : "Faire de myCanal la meilleure experience de decouverte de contenus premium"\n- Objectif 1 : +15% temps de session\n- Objectif 2 : Churn mensuel de 4.2% a 3.5%\n- Objectif 3 : NPS mobile 45+\n- Note speaker : Ces objectifs sont mesurables et seront suivis mensuellement\n\nSlide 4 : Perimetre du projet\n- In : parcours decouverte, recommandation, redesign mobile, STUDIOCANAL STORIES\n- Out : player video, backend, offres commerciales\n- Note speaker : Etre clair sur le "out" pour eviter le scope creep\n\nSlide 5 : Architecture et choix techniques\n- Nouveau moteur de recommandation ML\n- Design system unifie (mobile, web, TV)\n- API-first pour flexibilite future\n- Note speaker : Le lead tech detaille les implications techniques\n\nSlide 6 : Parcours utilisateur cible\n- 3 parcours prioritaires : decouverte, reprise, live\n- Wireframes basse fidelite\n- Note speaker : L\'UX designer presente les maquettes et recueille les feedbacks\n\nSlide 7 : Planning et jalons\n- Avril : Kick-off\n- Juin : MVP mobile\n- Septembre : Beta 10%\n- Novembre : Deploiement complet\n- Note speaker : Insister sur les dates non-negociables vs. ajustables\n\nSlide 8 : Prochaines etapes et questions\n- Action 1 : Chaque responsable envoie son plan detaille sous 5 jours\n- Action 2 : Weekly meeting chaque mardi 10h\n- Action 3 : Slack channel #refonte-mycanal\n- Note speaker : Terminer par un Q&A ouvert de 10 minutes',
    },

    /* ---------- Exercice 4 ---------- */
    {
      id: 'sprint2-ex4',
      title: 'Anticiper les questions difficiles',
      description:
        'Utilisez le role-play : demandez a Copilot Chat de jouer le role d\'un stakeholder exigeant qui pose des questions difficiles sur votre projet. Preparez vos reponses.',
      hints: [
        {
          id: 's2-e4-hint1',
          exercice_id: 'sprint2-ex4',
          index: 0,
          text: 'Utilisez le role-play : "Joue le role d\'un directeur financier sceptique qui assiste a ma reunion de lancement. Pose-moi 5 questions difficiles sur le projet (budget, ROI, risques, alternatives). Sois exigeant et factuel."',
        },
      ],
      idealPrompt:
        'Joue le role d\'un directeur financier sceptique et exigeant qui assiste a la reunion de lancement du projet refonte myCanal. Pose-moi 5 questions difficiles que ce profil poserait typiquement. Apres chaque question, propose une reponse argumentee que je pourrais donner. Les questions doivent couvrir : le budget, le ROI, les risques, le timing, et les alternatives.',
      idealResult:
        'Questions du Directeur Financier & Reponses preparees\n\n1. "Quel est le budget total et comment se decompose-t-il ?"\nReponse : Le budget total est de 1.2M euros repartis en : 40% developpement (equipe interne + 2 prestataires), 25% UX/design (agence + outils), 20% infrastructure (scaling, tests), 15% conduite du changement. Ce budget est 30% inferieur a la refonte de 2021 grace a la reutilisation du design system.\n\n2. "Quel ROI attendez-vous et sur quel horizon ?"\nReponse : ROI estime a 18 mois. La reduction du churn de 0.7 points represente environ 15 000 abonnes retenus/an, soit 2.7M euros de revenus preserves. Le gain en engagement (+15% temps de session) devrait generer +8% de revenus publicitaires sur myCanal.\n\n3. "Que se passe-t-il si le moteur de recommandation n\'est pas pret a temps ?"\nReponse : C\'est notre risque #1. Plan B : le MVP peut se lancer avec le moteur actuel ameliore. L\'equipe Data s\'est engagee sur un prototype fonctionnel pour juin. Un point de go/no-go est prevu le 15 mai.\n\n4. "Pourquoi ne pas simplement ameliorer l\'existant au lieu de refondre ?"\nReponse : Nous avons evalue cette option. La dette technique accumulee rend les evolutions incrementales 3x plus couteuses qu\'une refonte ciblee. De plus, le redesign mobile-first n\'est pas possible sur l\'architecture actuelle.\n\n5. "Le timing est-il realiste avec les ressources actuelles ?"\nReponse : Le planning a ete valide par le lead tech et le PO avec 15% de marge. Les 2 prestataires supplementaires couvrent le pic de charge en phase de dev (mai-aout). Un point de charge est prevu chaque sprint.',
    },

    /* ---------- Exercice 5 ---------- */
    {
      id: 'sprint2-ex5',
      title: 'Rediger le compte-rendu type',
      description:
        'Demandez a Copilot Chat de vous produire un template de compte-rendu a remplir pendant/apres la reunion, avec les rubriques essentielles.',
      hints: [
        {
          id: 's2-e5-hint1',
          exercice_id: 'sprint2-ex5',
          index: 0,
          text: 'Demandez un template pret a l\'emploi : "Genere un template de compte-rendu de reunion de lancement de projet. Rubriques : participants, decisions cles, actions (qui/quoi/quand), risques remontes, prochaine reunion. Format : pret a copier dans un doc Word ou OneNote."',
        },
      ],
      idealPrompt:
        'Genere un template de compte-rendu pour la reunion de lancement du projet refonte myCanal. Rubriques obligatoires : 1) Informations generales (date, lieu, participants), 2) Rappel de l\'objectif de la reunion, 3) Decisions prises (format tableau), 4) Actions definies (qui fait quoi pour quand), 5) Risques et points d\'attention remontes, 6) Prochaine reunion. Le template doit etre pret a copier dans Word ou OneNote. Inclus des placeholders [A COMPLETER] la ou c\'est necessaire.',
      idealResult:
        'COMPTE-RENDU DE REUNION\nProjet : Refonte myCanal — Reunion de lancement\n\n1. INFORMATIONS GENERALES\n- Date : [A COMPLETER]\n- Lieu : [A COMPLETER]\n- Duree : 1h30\n- Participants presents : [A COMPLETER]\n- Participants excuses : [A COMPLETER]\n- Redacteur du CR : [A COMPLETER]\n\n2. OBJECTIF DE LA REUNION\nAligner l\'ensemble des parties prenantes sur la vision, le perimetre, le planning et les roles du projet de refonte myCanal.\n\n3. DECISIONS PRISES\n| # | Decision | Portee | Validee par |\n|---|---|---|---|\n| 1 | [A COMPLETER] | [A COMPLETER] | [A COMPLETER] |\n| 2 | [A COMPLETER] | [A COMPLETER] | [A COMPLETER] |\n\n4. ACTIONS\n| # | Action | Responsable | Deadline | Statut |\n|---|---|---|---|---|\n| 1 | Envoyer le plan detaille par stream | Chaque lead | J+5 | A faire |\n| 2 | Creer le channel Slack #refonte-mycanal | Product Owner | J+1 | A faire |\n| 3 | Planifier les weekly meetings | Product Owner | J+2 | A faire |\n| 4 | [A COMPLETER] | [A COMPLETER] | [A COMPLETER] | A faire |\n\n5. RISQUES ET POINTS D\'ATTENTION\n- [A COMPLETER]\n- [A COMPLETER]\n\n6. PROCHAINE REUNION\n- Date : [A COMPLETER]\n- Objectif : [A COMPLETER]\n\nDiffusion : [liste des destinataires]',
    },
  ],
};
