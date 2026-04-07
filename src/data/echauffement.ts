import type { Exercise } from '../types';

export const echauffementMeta = {
  id: 'echauffement',
  title: 'Echauffement',
  color: 'var(--color-sprint-warmup)',
  duration: 10,
};

export const echauffementDescription =
  'En 10 minutes, utilisez Copilot Chat pour explorer un sujet strategique pour Canal+ et produire une synthese exploitable. Lancez-vous !';

export const echauffementThematique = "L'impact de l'IA generative sur l'industrie audiovisuelle et les groupes medias comme Canal+";

export const echauffementExercise: Exercise = {
  id: 'echauffement-ex1',
  title: 'Synthese : IA et industrie audiovisuelle',
  description:
    'Utilisez Copilot Chat pour produire une synthese exploitable sur l\'impact de l\'IA generative sur l\'industrie audiovisuelle et les groupes medias comme Canal+. Donnez un role a Copilot, precisez le format de sortie attendu, et iterez pour affiner le resultat.',
  hints: [
    {
      id: 'ech-hint1',
      exercice_id: 'echauffement-ex1',
      index: 0,
      text: 'Donnez un role a Copilot pour cadrer sa reponse. Par exemple : "Tu es un analyste media specialise dans l\'industrie audiovisuelle. Prepare-moi une synthese structuree en 5 points cles sur l\'impact de l\'IA generative sur les groupes medias." Plus le role est precis, plus la reponse sera pertinente.',
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
    'Tu es un analyste media senior specialise dans l\'industrie audiovisuelle francaise, avec une expertise particuliere sur les groupes comme Canal+, TF1, France Televisions et les plateformes de streaming.\n\nPrepare-moi une synthese structuree en 5 points cles sur l\'impact de l\'IA generative sur l\'industrie audiovisuelle et les groupes medias comme Canal+.\n\nPour chaque point :\n- Le fait cle (1 phrase)\n- Son impact concret sur Canal+ et l\'industrie audiovisuelle (2-3 phrases)\n- Un exemple recent et verifiable (2024-2025)\n- Une recommandation actionnable pour un groupe comme Canal+\n\nFormat : bullet points structures. Ton : professionnel, synthetique, oriente decision. Ajoute une conclusion en 3 lignes avec les 3 tendances a surveiller en priorite.',
  idealResult:
    'SYNTHESE — Impact de l\'IA generative sur l\'industrie audiovisuelle (2024-2025)\n\n1. **Recommandation de contenus et personnalisation de l\'experience**\n   - Fait cle : Les algorithmes IA determinent desormais 80% des contenus regardes sur les plateformes de streaming.\n   - Impact : Pour Canal+ et myCanal, la qualite du moteur de recommandation est devenue un facteur cle de retention. Les abonnes s\'attendent a des suggestions ultra-pertinentes, comme sur Netflix ou Amazon Prime. Un mauvais algorithme = du churn. L\'IA permet aussi de personnaliser les bandes-annonces et les miniatures selon le profil de l\'utilisateur.\n   - Exemple : Netflix utilise l\'IA pour generer des miniatures personnalisees pour chaque utilisateur, augmentant le taux de clic de 20-30%. Disney+ a deploye un moteur de recommandation IA qui a reduit le churn de 4% en 2024.\n   - Recommandation : Investir dans un moteur de recommandation proprietaire pour myCanal et tester la personnalisation des visuels promotionnels.\n\n2. **Production assistee par IA : scripts, doublage, sous-titrage**\n   - Fait cle : L\'IA generative accelere la production audiovisuelle a toutes les etapes, du script au post-production.\n   - Impact : STUDIOCANAL peut utiliser l\'IA pour generer des premiers jets de scripts, automatiser le sous-titrage multilingue, et produire des doublages synthetiques de qualite. Cela reduit les couts de localisation de 40-60% et accelere la distribution internationale des contenus.\n   - Exemple : Canal+ a teste le sous-titrage automatique par IA pour ses contenus sportifs en direct, reduisant le delai de publication de 2h a 15 minutes. ITV au Royaume-Uni utilise l\'IA pour generer des resumes automatiques de matchs.\n   - Recommandation : Deployer le sous-titrage IA en production pour tous les contenus STUDIOCANAL et tester le doublage synthetique sur les marches secondaires.\n\n3. **Creation de contenus marketing et bandes-annonces**\n   - Fait cle : L\'IA peut generer des bandes-annonces, des teasers et des assets marketing en quelques heures au lieu de plusieurs semaines.\n   - Impact : Les equipes marketing de Canal+ peuvent multiplier les variations de bandes-annonces pour tester differents angles sur les reseaux sociaux (A/B testing a grande echelle). L\'IA permet aussi de creer des contenus promotionnels adaptes a chaque plateforme (format vertical pour TikTok, carre pour Instagram, etc.).\n   - Exemple : 20th Century Studios a utilise l\'IA pour generer 100+ variations de teasers pour la promotion d\'un film, multipliant par 5 l\'engagement sur les reseaux sociaux. Warner Bros. utilise l\'IA pour predire le potentiel commercial d\'un film avant sa sortie.\n   - Recommandation : Former les equipes marketing a l\'utilisation d\'outils IA pour la creation d\'assets multi-formats et le A/B testing automatise.\n\n4. **IA conversationnelle et relation abonne**\n   - Fait cle : Les chatbots IA de nouvelle generation resolvent 70% des demandes clients sans intervention humaine, avec un taux de satisfaction equivalent.\n   - Impact : Pour Canal+, l\'IA conversationnelle peut transformer le service client (gestion d\'abonnement, assistance technique myCanal, recommandations personnalisees). Elle peut aussi creer de nouveaux formats interactifs : imaginez un assistant IA qui recommande un film en fonction de votre humeur.\n   - Exemple : Orange France a deploye un assistant IA qui traite 65% des appels entrants, reduisant le temps d\'attente moyen de 8 a 2 minutes. Spotify a lance un DJ IA personnalise qui commente les playlists.\n   - Recommandation : Tester un assistant IA conversationnel sur myCanal pour la recommandation de contenus et l\'assistance technique.\n\n5. **Protection du droit d\'auteur et enjeux juridiques**\n   - Fait cle : L\'entrainement des modeles IA sur des contenus proteges souleve des questions juridiques majeures pour l\'industrie audiovisuelle.\n   - Impact : Les groupes comme Canal+ et STUDIOCANAL doivent proteger leurs catalogues contre l\'utilisation non autorisee par les modeles IA, tout en exploitant l\'IA pour leur propre creation. C\'est un equilibre strategique entre protection et innovation.\n   - Exemple : Le New York Times a poursuivi OpenAI pour utilisation non autorisee de ses articles. En France, la SACD a negocie un cadre pour l\'utilisation de scripts par l\'IA. Getty Images a obtenu gain de cause contre Stability AI pour l\'utilisation de ses photos.\n   - Recommandation : Definir une politique claire de protection du catalogue STUDIOCANAL vis-a-vis de l\'IA, et negocier des licences avec les fournisseurs d\'IA pour monetiser les contenus.\n\n**CONCLUSION — 3 tendances prioritaires a surveiller :**\n1. La personnalisation IA de l\'experience spectateur (enjeu de retention et reduction du churn)\n2. L\'automatisation de la production et de la localisation (enjeu de competitivite internationale pour STUDIOCANAL)\n3. La monetisation du catalogue face aux modeles IA (enjeu juridique et financier)',
};
