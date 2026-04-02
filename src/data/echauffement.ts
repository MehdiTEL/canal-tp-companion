import type { MetierGroupId } from './metierGroups';

interface EchauffementGroupData {
  description: string;
  thematiques: { id: string; label: string }[];
  hints: { id: string; exercice_id: string; index: number; text: string }[];
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
