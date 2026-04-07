import type { Exercise } from '../types';

export const echauffementMeta = {
  id: 'echauffement',
  title: 'Echauffement',
  color: 'var(--color-sprint-warmup)',
  duration: 10,
};

export const echauffementDescription =
  'En 10 minutes, utilisez Copilot Chat pour explorer un sujet et produire une synthese exploitable. Choisissez une thematique ci-dessous et lancez-vous !';

export const echauffementThematiques = [
  { id: 'theme-ia-info', label: "L'impact de l'IA sur la maniere de s'informer" },
  { id: 'theme-tv-jeunes', label: "L'evolution des usages TV chez les jeunes" },
];

export const echauffementExercise: Exercise = {
  id: 'echauffement-ex1',
  title: 'Synthese sur votre thematique',
  description:
    'Utilisez Copilot Chat pour explorer votre thematique et produire une synthese exploitable en 10 minutes. Donnez un role a Copilot, precisez le format de sortie attendu, et iterez pour affiner le resultat.',
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
    'Tu es un analyste media senior specialise en tendances numeriques, avec une expertise particuliere sur l\'industrie audiovisuelle francaise.\n\nPrepare-moi une synthese structuree en 5 points cles sur l\'impact de l\'IA sur la maniere de s\'informer.\n\nPour chaque point :\n- Le fait cle (1 phrase)\n- Son impact concret sur les medias et les groupes comme Canal+ (2-3 phrases)\n- Un exemple recent et verifiable (2024-2025)\n- Une recommandation actionnable pour un groupe media\n\nFormat : bullet points structures. Ton : professionnel, synthetique, oriente decision. Ajoute une conclusion en 3 lignes avec les 3 tendances a surveiller en priorite.',
  idealResult:
    'SYNTHESE — Impact de l\'IA sur l\'information (2024-2025)\n\n1. **Personnalisation algorithmique des flux d\'actualite**\n   - Fait cle : Les algorithmes IA determinent desormais 80% des contenus vus par les utilisateurs sur les plateformes d\'information.\n   - Impact : Les groupes medias perdent le controle editorial au profit des algorithmes de recommandation. Pour Canal+, cela signifie que la decouverte de contenus sur myCanal depend de plus en plus de la qualite du moteur de recommandation. Les utilisateurs s\'attendent a une experience "Netflix-like" avec des suggestions ultra-pertinentes.\n   - Exemple : Google Discover touche 800M d\'utilisateurs et genere jusqu\'a 50% du trafic de certains medias francais, sans que ceux-ci maitrisent la mise en avant de leurs contenus.\n   - Recommandation : Investir massivement dans un moteur de recommandation proprietaire pour myCanal, ne pas dependre des plateformes tierces.\n\n2. **Generation automatique de contenus editoriaux**\n   - Fait cle : L\'IA generative produit desormais des articles, des resumes et des newsletters a l\'echelle industrielle.\n   - Impact : Acceleration de la production de contenus factuels (sport, finance, meteo, resumes d\'episodes). Pour un groupe media, l\'IA peut generer des fiches programme, des resumes d\'episodes, des newsletters personnalisees a un cout marginal quasi nul.\n   - Exemple : Associated Press genere 40 000 articles financiers par trimestre via IA. Le Washington Post utilise "Heliograf" pour couvrir les resultats sportifs locaux (3 000 articles/an).\n   - Recommandation : Deployer l\'IA pour la production de contenus d\'accompagnement (resumes, fiches, recommandations) tout en preservant le contenu editorial premium humain.\n\n3. **Deepfakes et crise de confiance**\n   - Fait cle : La desinformation generee par IA est devenue indistinguable du contenu authentique pour 60% des internautes.\n   - Impact : Erosion de la confiance envers les medias traditionnels. Les groupes premium comme Canal+ ont une carte a jouer : la marque de confiance. Le label "contenu verifie" devient un avantage concurrentiel majeur.\n   - Exemple : Lors des elections europeennes 2024, plus de 500 deepfakes video de personnalites politiques ont circule sur les reseaux sociaux, dont certains vus plusieurs millions de fois.\n   - Recommandation : Mettre en avant la valeur "verification humaine" et "source fiable" comme differenciateur face aux contenus generes.\n\n4. **Fact-checking automatise et verification en temps reel**\n   - Fait cle : Les outils IA de fact-checking peuvent desormais verifier une affirmation en moins de 10 secondes contre des bases de donnees de millions de sources.\n   - Impact : Les redactions equipees d\'outils IA de verification gagnent en rapidite et en credibilite. C\'est un investissement strategique pour tout groupe media souhaitant rester une reference.\n   - Exemple : AFP Factuel a reduit de 40% le temps de verification d\'une rumeur grace a son outil IA de cross-referencing lance en 2024. ClaimBuster (IA) est utilise par 20+ redactions.\n   - Recommandation : Integrer des outils de fact-checking IA dans les workflows editoriaux et le communiquer aux audiences.\n\n5. **Assistants IA comme nouvelle porte d\'entree vers l\'information**\n   - Fait cle : 35% des 18-25 ans utilisent un chatbot IA (ChatGPT, Copilot, Gemini) comme source d\'information quotidienne, en remplacement de Google.\n   - Impact : Changement fondamental du modele de distribution. Les utilisateurs ne "cherchent" plus, ils "demandent". Pour Canal+, cela pose la question de la visibilite des contenus dans les reponses des assistants IA. Si Copilot recommande du contenu, est-ce que myCanal est bien reference ?\n   - Exemple : OpenAI a lance ChatGPT Search, concurrent direct de Google, avec des partenariats medias (Le Monde, AP, Axel Springer). Les medias non partenaires voient leur trafic baisser de 15-25%.\n   - Recommandation : Negocier des partenariats de reference avec les principaux assistants IA pour assurer la visibilite des contenus Canal+/STUDIOCANAL.\n\n**CONCLUSION — 3 tendances prioritaires a surveiller :**\n1. La course aux moteurs de recommandation proprietaires (enjeu de retention)\n2. Les partenariats medias x assistants IA (enjeu de distribution)\n3. La "marque de confiance" comme avantage concurrentiel face aux contenus generes (enjeu de differenciation)',
};
