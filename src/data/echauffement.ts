import type { MetierGroupId } from './metierGroups';

interface EchauffementGroupData {
  description: string;
  thematiques: { id: string; label: string }[];
  hints: { id: string; exercice_id: string; index: number; text: string }[];
  idealPrompt: string;
  idealResult: string;
}

export const echauffementMeta = {
  id: 'echauffement',
  title: 'Echauffement',
  color: 'var(--color-sprint-warmup)',
  duration: 10,
};

export const echauffementByGroup: Record<MetierGroupId, EchauffementGroupData> = {
  'contenu-creation': {
    description:
      'Vous travaillez dans la creation de contenus chez Canal+. En 5 minutes, utilisez Copilot Chat pour explorer un sujet lie a votre quotidien et produire une synthese exploitable (brief, note editoriale, pitch...).',
    idealPrompt: "Tu es un directeur editorial specialise en contenus premium pour une chaine comme Canal+. Prepare-moi un brief structure en 5 points cles sur les tendances narratives des series a succes en 2025. Pour chaque point, indique le fait cle, son impact sur la creation de contenus Canal+ Originals, et un exemple concret de serie.",
    idealResult: "Voici un brief editorial structure sur les tendances narratives 2025 :\n\n1. Le retour des anthologies thematiques — Impact : opportunite pour Canal+ de capitaliser sur des mini-series evenementielles. Ex : The White Lotus.\n2. Les recits non-lineaires et interactifs — Impact : differenciation par l'innovation narrative. Ex : Black Mirror.\n3. L'hyper-localisme a portee universelle — Impact : valoriser les histoires francaises a l'international. Ex : Engrenages.\n4. L'integration de l'IA dans le processus creatif — Impact : accelerer le developpement de projets. Ex : outils de pre-ecriture.\n5. Le format court premium (20-30 min) — Impact : capter l'audience mobile et jeune. Ex : Fleabag.",
    thematiques: [
      { id: 'cc-theme-1', label: 'Comment l\'IA generative transforme l\'ecriture de scenarios de series' },
      { id: 'cc-theme-2', label: 'Les tendances narratives des series a succes en 2025' },
      { id: 'cc-theme-3', label: 'L\'evolution du documentaire : du lineaire au format court digital' },
      { id: 'cc-theme-4', label: 'L\'impact des reseaux sociaux sur la promotion des contenus originaux' },
      { id: 'cc-theme-5', label: 'Le role de la direction artistique dans l\'identite d\'une chaine premium' },
      { id: 'cc-theme-libre', label: 'Sujet libre (a votre choix)' },
    ],
    hints: [
      {
        id: 'ech-cc-hint1',
        exercice_id: 'echauffement-ex1',
        index: 0,
        text: 'Donnez un role a Copilot pour cadrer sa reponse. Par exemple : "Tu es un directeur editorial specialise en contenus premium pour une chaine comme Canal+. Prepare-moi un brief de 5 points cles sur [ton sujet]." Plus le role est precis, plus la reponse sera pertinente.',
      },
      {
        id: 'ech-cc-hint2',
        exercice_id: 'echauffement-ex1',
        index: 1,
        text: 'Demandez un format de sortie precis : "Presente ta synthese sous forme de 5 bullet points avec pour chacun : le fait cle, son impact sur la creation de contenus Canal+, et un exemple concret." Cela evite les reponses trop generiques.',
      },
      {
        id: 'ech-cc-hint3',
        exercice_id: 'echauffement-ex1',
        index: 2,
        text: 'Si le resultat est trop vague, iterez ! Relancez avec : "C\'est un bon debut. Maintenant, approfondis le point 2 et ajoute des exemples de series Canal+ Originals concernees. Rends le ton plus editorial." L\'iteration est la cle d\'un bon prompting.',
      },
    ],
  },

  'diffusion-programmation': {
    description:
      'Vous travaillez dans la diffusion ou la programmation chez Canal+. En 5 minutes, utilisez Copilot Chat pour explorer un sujet lie a votre quotidien et produire une synthese exploitable (note de programmation, analyse d\'audience...).',
    idealPrompt: "Tu es responsable de programmation chez Canal+. Prepare-moi une note structuree sur l'impact du streaming sur les grilles de programmation lineaire. Presente sous forme de tableau avec 5 lignes : Tendance | Impact sur la grille Canal+ | Action recommandee. Appuie-toi sur des donnees d'audience recentes.",
    idealResult: "Voici une note de programmation structuree :\n\n| Tendance | Impact sur la grille Canal+ | Action recommandee |\n|---|---|---|\n| Baisse du lineaire chez les 18-35 | Erosion du prime time classique | Renforcer le simulcast et le replay immediat |\n| Binge watching dominant | Les rendez-vous hebdomadaires perdent en attractivite | Tester des drops de 3 episodes au lancement |\n| Sport en direct comme ancrage | Le live reste le pilier d'audience (+15% en 2024) | Securiser les droits premium et etendre le pre/post match |\n| Contenus courts viraux | Les 18-25 decouvrent les programmes via les reseaux sociaux | Creer des extraits optimises TikTok/Instagram en amont |\n| Personnalisation algorithmique | L'audience attend une experience sur-mesure | Investir dans la recommandation sur myCanal |",
    thematiques: [
      { id: 'dp-theme-1', label: 'L\'impact du streaming sur les grilles de programmation lineaire' },
      { id: 'dp-theme-2', label: 'Comment optimiser le prime time face a la concurrence SVOD' },
      { id: 'dp-theme-3', label: 'L\'evolution des droits sportifs et leur impact sur les audiences' },
      { id: 'dp-theme-4', label: 'Les nouvelles habitudes de consommation TV chez les 18-35 ans' },
      { id: 'dp-theme-5', label: 'La programmation evenementielle comme levier de differenciation' },
      { id: 'dp-theme-libre', label: 'Sujet libre (a votre choix)' },
    ],
    hints: [
      {
        id: 'ech-dp-hint1',
        exercice_id: 'echauffement-ex1',
        index: 0,
        text: 'Donnez un role a Copilot : "Tu es responsable de programmation chez Canal+. Prepare-moi une note de 5 points cles sur [ton sujet] avec des donnees d\'audience recentes." Un role precis donne un meilleur cadrage.',
      },
      {
        id: 'ech-dp-hint2',
        exercice_id: 'echauffement-ex1',
        index: 1,
        text: 'Demandez un format structure : "Presente sous forme de tableau : Tendance | Impact sur la grille Canal+ | Action recommandee." Les tableaux sont plus exploitables que du texte libre.',
      },
      {
        id: 'ech-dp-hint3',
        exercice_id: 'echauffement-ex1',
        index: 2,
        text: 'Iterez en precisant : "Approfondis l\'analyse sur le creneau 21h-23h et compare avec les strategies de TF1 et France TV. Ajoute des chiffres d\'audience quand c\'est possible." L\'iteration cible donne des resultats precis.',
      },
    ],
  },

  'commercial-marketing': {
    description:
      'Vous travaillez dans le marketing, la vente ou la relation client chez Canal+. En 5 minutes, utilisez Copilot Chat pour explorer un sujet lie a votre quotidien et produire une synthese exploitable (brief marketing, analyse marche...).',
    idealPrompt: "Tu es directeur marketing de Canal+ France, segment 25-45 ans. Analyse-moi les 5 principaux leviers d'acquisition d'abonnes face a Netflix et Disney+. Pour chaque levier, indique : le constat marche, l'opportunite specifique pour Canal+, et une action concrete a mettre en place au prochain trimestre.",
    idealResult: "Voici l'analyse des leviers d'acquisition Canal+ vs. concurrence SVOD :\n\n1. Le sport exclusif comme porte d'entree — Constat : 38% des nouveaux abonnes citent le sport comme motif principal. Opportunite : Canal+ est le seul a combiner Ligue 1, Top 14 et Premier League. Action : lancer une offre d'essai sport de 7 jours avant chaque temps fort.\n2. Le bundling contenus + telecom — Constat : les offres groupees representent 45% des acquisitions. Opportunite : partenariats exclusifs avec Free et Bouygues. Action : creer une offre Canal+ Essentiel a prix reduit en bundle operateur.\n3. Les Canal+ Originals comme differenciant — Constat : les exclusivites locales fidelisent mieux (+20% de retention). Opportunite : capitaliser sur le savoir-faire fiction francaise. Action : promouvoir 2 Originals phares par trimestre via campagne digitale ciblee.\n4. L'experience myCanal premium — Constat : la qualite de l'app influence la perception de valeur. Opportunite : UX superieure a la concurrence sur Smart TV. Action : mettre en avant les fonctionnalites exclusives (multi-ecrans, telechargement, 4K).\n5. Le parrainage et la recommandation — Constat : le bouche-a-oreille reste le canal le plus credible. Opportunite : base d'abonnes fideles et engages. Action : relancer un programme de parrainage avec 1 mois offert pour le parrain et le filleul.",
    thematiques: [
      { id: 'cm-theme-1', label: 'Les leviers d\'acquisition d\'abonnes face a Netflix et Disney+' },
      { id: 'cm-theme-2', label: 'L\'evolution du parcours client digital dans le secteur SVOD' },
      { id: 'cm-theme-3', label: 'Comment fideliser les abonnes Canal+ grace au contenu exclusif' },
      { id: 'cm-theme-4', label: 'Les strategies de communication de Canal+ en Afrique' },
      { id: 'cm-theme-5', label: 'L\'impact de l\'IA sur la personnalisation des offres commerciales' },
      { id: 'cm-theme-libre', label: 'Sujet libre (a votre choix)' },
    ],
    hints: [
      {
        id: 'ech-cm-hint1',
        exercice_id: 'echauffement-ex1',
        index: 0,
        text: 'Donnez un role a Copilot : "Tu es directeur marketing Canal+ International. Prepare-moi une analyse de 5 points cles sur [ton sujet] avec des benchmarks concurrentiels." Le contexte business renforce la pertinence.',
      },
      {
        id: 'ech-cm-hint2',
        exercice_id: 'echauffement-ex1',
        index: 1,
        text: 'Demandez un format actionnable : "Pour chaque point, indique : le constat, l\'opportunite pour Canal+, et une action concrete a mettre en place. Format bullet points." Le marketing a besoin de livrables actionnables.',
      },
      {
        id: 'ech-cm-hint3',
        exercice_id: 'echauffement-ex1',
        index: 2,
        text: 'Iterez pour cibler : "Concentre-toi maintenant sur le marche francais 25-45 ans. Quels sont les 3 arguments cles qui differencient Canal+ de la concurrence SVOD ?" La precision du segment amplifie la qualite.',
      },
    ],
  },

  'tech-it': {
    description:
      'Vous travaillez dans la tech, l\'IT ou les telecoms chez Canal+. En 5 minutes, utilisez Copilot Chat pour explorer un sujet lie a votre quotidien et produire une synthese exploitable (veille techno, note d\'architecture...).',
    idealPrompt: "Tu es CTO d'un groupe media international comme Canal+. Prepare-moi une veille technologique structuree sur l'impact de l'IA sur les infrastructures de streaming a grande echelle. Pour chaque point, indique : la technologie concernee, son niveau de maturite (emergent/adopte/mature), l'impact potentiel pour Canal+, et une action recommandee. Format tableau.",
    idealResult: "Voici la veille technologique IA x Streaming :\n\n| Technologie | Maturite | Impact Canal+ | Action recommandee |\n|---|---|---|---|\n| Encodage video par IA (per-title encoding) | Adopte | Reduction de 30% de la bande passante sans perte de qualite | Deployer Netflix-style per-title sur myCanal d'ici Q3 |\n| CDN predictif par ML | Emergent | Pre-cacher les contenus populaires en edge, reduire la latence | POC avec Akamai/Cloudflare sur les directs sport |\n| Moderation automatique des contenus live | Adopte | Securiser les chats et commentaires en direct | Integrer un modele de moderation temps reel sur les flux live |\n| Recommandation hybride (collaborative + contenu) | Mature | +15% d'engagement sur la plateforme myCanal | Migrer vers un modele hybride avec embeddings de contenu |\n| Transcription et sous-titrage automatique | Adopte | Accessibilite et referencement des catalogues | Generaliser Whisper/equivalent sur 100% du catalogue |",
    thematiques: [
      { id: 'ti-theme-1', label: 'L\'impact de l\'IA sur les infrastructures de streaming a grande echelle' },
      { id: 'ti-theme-2', label: 'La cybersecurite dans le secteur des medias et du divertissement' },
      { id: 'ti-theme-3', label: 'Les enjeux de la migration cloud pour un groupe media' },
      { id: 'ti-theme-4', label: 'L\'evolution des CDN et de la qualite de streaming video' },
      { id: 'ti-theme-5', label: 'Le role des donnees et du machine learning dans la recommandation' },
      { id: 'ti-theme-libre', label: 'Sujet libre (a votre choix)' },
    ],
    hints: [
      {
        id: 'ech-ti-hint1',
        exercice_id: 'echauffement-ex1',
        index: 0,
        text: 'Donnez un role a Copilot : "Tu es CTO d\'un groupe media international. Prepare-moi une veille technologique de 5 points cles sur [ton sujet] avec les implications pour l\'infrastructure Canal+." Un role technique donne des reponses techniques.',
      },
      {
        id: 'ech-ti-hint2',
        exercice_id: 'echauffement-ex1',
        index: 1,
        text: 'Demandez un format structure : "Pour chaque point : technologie concernee, maturite (emergent/adopte/mature), impact potentiel (faible/moyen/fort), action recommandee. Format tableau." Les DSI aiment les matrices de decision.',
      },
      {
        id: 'ech-ti-hint3',
        exercice_id: 'echauffement-ex1',
        index: 2,
        text: 'Iterez en creusant : "Zoom sur le point 3. Compare les approches de Netflix, Disney+ et Canal+ sur ce sujet. Quels sont les risques si Canal+ n\'investit pas ?" L\'analyse concurrentielle technique est tres eclairante.',
      },
    ],
  },

  'support-corporate': {
    description:
      'Vous travaillez dans les fonctions support ou corporate chez Canal+ (RH, finance, juridique, logistique...). En 5 minutes, utilisez Copilot Chat pour explorer un sujet lie a votre quotidien et produire une synthese exploitable.',
    idealPrompt: "Tu es directeur des ressources humaines d'un groupe media comme Canal+. Redige-moi une note executive sur l'impact de l'IA sur la gestion des talents dans le secteur des medias. Structure : contexte (3 lignes), 5 points cles avec pour chacun un exemple concret du secteur (Canal+, Netflix, Disney, Warner), et une recommandation finale en 2 lignes. Ton synthetique et factuel.",
    idealResult: "Note executive — IA et gestion des talents dans les medias\n\nContexte : L'intelligence artificielle transforme en profondeur les metiers du media et du divertissement. Les fonctions RH doivent anticiper l'evolution des competences, accompagner la transformation et attirer les nouveaux profils hybrides tech/creatif.\n\n1. Emergence de nouveaux metiers hybrides — Les postes de 'prompt designer' et 'AI content producer' se multiplient. Ex : Netflix a cree une equipe dediee ML for Creative en 2024.\n2. Upskilling massif des equipes existantes — 60% des collaborateurs medias devront monter en competence IA d'ici 2027. Ex : Disney a lance un programme interne 'AI Academy' pour 5000 employes.\n3. Automatisation des taches repetitives RH — Le tri de CV, la planification et le reporting sont les premiers impactes. Ex : Warner Bros utilise un assistant IA pour le pre-screening des candidatures.\n4. Risque de fracture numerique interne — Les equipes les moins digitalisees risquent d'etre marginalisees. Ex : Canal+ doit porter une attention particuliere aux equipes techniques legacy.\n5. Attractivite employeur et marque tech — Les talents tech privilegient les entreprises perçues comme innovantes. Ex : Canal+ peut valoriser myCanal et ses projets IA pour recruter.\n\nRecommandation : Lancer un plan 'IA & Talents Canal+ 2026' combinant formation interne, recrutement cible de profils IA, et creation d'un lab interne d'experimentation pour les fonctions support.",
    thematiques: [
      { id: 'sc-theme-1', label: 'L\'impact de l\'IA sur la gestion des talents dans les medias' },
      { id: 'sc-theme-2', label: 'Les enjeux juridiques du droit d\'auteur face a l\'IA generative' },
      { id: 'sc-theme-3', label: 'L\'optimisation des processus achats dans un groupe media' },
      { id: 'sc-theme-4', label: 'La transformation des metiers support par l\'automatisation' },
      { id: 'sc-theme-5', label: 'La gestion de projet agile dans un environnement media' },
      { id: 'sc-theme-libre', label: 'Sujet libre (a votre choix)' },
    ],
    hints: [
      {
        id: 'ech-sc-hint1',
        exercice_id: 'echauffement-ex1',
        index: 0,
        text: 'Donnez un role a Copilot : "Tu es directeur des operations d\'un groupe media. Prepare-moi une note de 5 points cles sur [ton sujet] avec des exemples concrets du secteur." Le role cadre le niveau de discours.',
      },
      {
        id: 'ech-sc-hint2',
        exercice_id: 'echauffement-ex1',
        index: 1,
        text: 'Demandez un format adapte a votre direction : "Presente sous forme de note executive : contexte (3 lignes), 5 points cles, recommandation (2 lignes). Ton : synthetique et factuel." Les fonctions support doivent convaincre en peu de mots.',
      },
      {
        id: 'ech-sc-hint3',
        exercice_id: 'echauffement-ex1',
        index: 2,
        text: 'Iterez pour ancrer dans le reel : "Ajoute pour chaque point un exemple concret tire de Canal+ ou d\'un concurrent media (Warner, Disney, Netflix). Ca rend l\'analyse plus tangible." Le concret convainc mieux que l\'abstrait.',
      },
    ],
  },
};
