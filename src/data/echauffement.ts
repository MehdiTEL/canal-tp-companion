import type { Exercise } from '../types';

export const echauffementMeta = {
  id: 'echauffement',
  title: 'Echauffement',
  color: 'var(--color-sprint-warmup)',
  duration: 10,
};

export const echauffementDescription =
  'En 5 minutes, utilisez Copilot Chat pour explorer un sujet et produire une synthese exploitable. Choisissez une thematique ci-dessous et lancez-vous !';

export const echauffementThematiques = [
  { id: 'theme-ia-info', label: "L'impact de l'IA sur la maniere de s'informer" },
  { id: 'theme-tv-jeunes', label: "L'evolution des usages TV chez les jeunes" },
];

export const echauffementExercise: Exercise = {
  id: 'echauffement-ex1',
  title: 'Synthese sur votre thematique',
  description:
    'Utilisez Copilot Chat pour explorer votre thematique et produire une synthese exploitable en 5 minutes. Donnez un role a Copilot, precisez le format de sortie attendu, et iterez pour affiner le resultat.',
  hints: [
    {
      id: 'ech-hint1',
      exercice_id: 'echauffement-ex1',
      index: 0,
      text: 'Donnez un role a Copilot pour cadrer sa reponse. Par exemple : "Tu es un analyste media specialise en tendances numeriques. Prepare-moi une synthese structuree en 5 points cles sur [ton sujet]." Plus le role est precis, plus la reponse sera pertinente.',
    },
    {
      id: 'ech-hint2',
      exercice_id: 'echauffement-ex1',
      index: 1,
      text: 'Demandez un format de sortie precis : "Presente ta synthese sous forme de 5 bullet points avec pour chacun : le fait cle, son impact concret, et un exemple." Cela evite les reponses trop generiques.',
    },
    {
      id: 'ech-hint3',
      exercice_id: 'echauffement-ex1',
      index: 2,
      text: 'Si le resultat est trop vague, iterez ! Relancez avec : "C\'est un bon debut. Maintenant, approfondis le point 2 et ajoute des chiffres recents. Rends le ton plus professionnel." L\'iteration est la cle d\'un bon prompting.',
    },
  ],
  idealPrompt:
    'Tu es un analyste media specialise en tendances numeriques. Prepare-moi une synthese structuree en 5 points cles sur l\'impact de l\'IA sur la maniere de s\'informer. Pour chaque point, indique : le fait cle, son impact concret sur les medias, et un exemple recent. Format bullet points, ton professionnel et synthetique.',
  idealResult:
    'Voici une synthese sur l\'impact de l\'IA sur l\'information :\n\n1. Personnalisation algorithmique des flux d\'actualite — Impact : les utilisateurs recoivent des contenus sur-mesure, creant des bulles informationnelles. Ex : Google Discover et Apple News utilisent le ML pour personnaliser a 100%.\n2. Generation automatique d\'articles — Impact : acceleration de la production d\'articles factuels (finance, sport, meteo). Ex : Associated Press utilise l\'IA pour generer 40 000 articles financiers par trimestre.\n3. Deepfakes et desinformation — Impact : difficulte croissante a distinguer le vrai du faux, erosion de la confiance. Ex : proliferation de videos deepfake lors des elections 2024.\n4. Fact-checking automatise — Impact : les redactions deployent des outils IA pour verifier les sources en temps reel. Ex : AFP Factuel utilise des outils IA pour accelerer la verification.\n5. Assistants IA comme nouvelle porte d\'entree — Impact : les utilisateurs interrogent ChatGPT/Copilot au lieu de googler, changeant le modele de distribution. Ex : 30% des 18-25 ans utilisent un chatbot IA comme source d\'information quotidienne.',
};
