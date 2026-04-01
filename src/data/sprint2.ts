import type { CasUsage } from '../types';

export const sprint2Data = {
  id: 'sprint-2',
  title: 'Sprint 2 — Challenge collectif',
  color: 'var(--color-sprint-2)',
  duration: 30,
  description: 'Votre equipe choisit UN cas d\'usage parmi 6. Chaque cas comporte 3 exercices. Format : 20 min experimentation + 10 min confrontation.',
  casUsages: [
    {
      id: 'cu1',
      title: 'Produire un plan de communication multi-canal',
      description: 'Lancement d\'une serie Canal+ : plan de com, post social media, critique.',
      consignes: [
        'Preciser l\'idee, l\'objectif, la cible, le ton, la longueur.',
        'Rediger le prompt.',
        'Iterer a partir du resultat.',
      ],
      exercises: [
        {
          id: 'sprint2-cu1-ex1',
          title: 'Plan de communication',
          description: 'Canal+ lance "Sables rouges", un thriller politique tourne en Afrique de l\'Ouest, diffuse dans 15 pays africains et en France. Vous etes l\'equipe marketing-communication en charge du lancement. Utilisez Copilot Chat pour produire un plan de communication comprenant : trois messages cles, les canaux de diffusion retenus, un calendrier d\'action sur quatre semaines sous forme de tableau. Choisissez votre marche cible : France ou marche africain.',
          hints: [
            {
              id: 'sprint2-cu1-ex1-hint1',
              exercice_id: 'sprint2-cu1-ex1',
              index: 0,
              text: 'Commencez par definir le persona et le contexte : "Tu es directeur marketing Canal+ International. Le marche cible est [France/Afrique]. Propose un plan de communication pour le lancement de Sables rouges, un thriller politique." Plus le contexte est riche, plus le plan sera pertinent.',
            },
            {
              id: 'sprint2-cu1-ex1-hint2',
              exercice_id: 'sprint2-cu1-ex1',
              index: 1,
              text: 'Demandez un livrable structure : "Format attendu : 1) Trois messages cles differencies 2) Tableau des canaux de diffusion avec justification 3) Calendrier semaine par semaine sur 4 semaines." Copilot est meilleur quand on lui donne la structure de sortie.',
            },
          ],
        },
        {
          id: 'sprint2-cu1-ex2',
          title: 'Post social media',
          description: 'Pour le lancement de Sables rouges sur le canal de votre choix (Instagram, LinkedIn, ou X), le ton doit etre premium et evocateur, adapte a une cible de 25-45 ans. Soyez percutant.',
          hints: [
            {
              id: 'sprint2-cu1-ex2-hint1',
              exercice_id: 'sprint2-cu1-ex2',
              index: 0,
              text: 'Precisez tout : "Redige un post [Instagram] de 150 mots max pour le lancement de Sables rouges. Ton : premium et cinematographique. Cible : 25-45 ans. Inclus : accroche percutante, 3-5 hashtags strategiques, call-to-action clair." Chaque contrainte guide l\'IA vers un meilleur resultat.',
            },
            {
              id: 'sprint2-cu1-ex2-hint2',
              exercice_id: 'sprint2-cu1-ex2',
              index: 1,
              text: 'Si le ton est trop generique, iterez : "C\'est trop plat. Rends le ton plus cinematographique : imagine que tu ecris la bande-annonce en mots. Commence par une phrase choc qui cree le suspense." L\'iteration est normale, pas un echec !',
            },
          ],
        },
        {
          id: 'sprint2-cu1-ex3',
          title: 'Critique du plan',
          description: 'Demandez a Copilot Chat de critiquer votre propre plan de communication en se mettant dans la peau d\'un directeur marketing.',
          hints: [
            {
              id: 'sprint2-cu1-ex3-hint1',
              exercice_id: 'sprint2-cu1-ex3',
              index: 0,
              text: 'Le role-play est une technique puissante : "Tu es un directeur marketing senior avec 15 ans d\'experience. Critique ce plan [coller] sans complaisance. Identifie : 3 faiblesses majeures, 3 ameliorations concretes, et ce qui manque." Faire critiquer par l\'IA permet de renforcer votre travail.',
            },
          ],
        },
      ],
    },
    {
      id: 'cu2',
      title: 'Structurer un dossier de pre-production',
      description: 'Fiche projet, estimation tournage, note d\'intention, challenge production.',
      consignes: [
        'Detaillez le projet (format, episodes, univers, ambiance).',
        'Demandez des livrables structures : fiches, tableaux, listes.',
      ],
      exercises: [
        {
          id: 'sprint2-cu2-ex1',
          title: 'Fiche projet et estimation',
          description: 'Un realisateur soumet un pitch : un polar en 6 episodes dans le milieu de la haute gastronomie parisienne. Utilisez Copilot Chat pour produire une fiche projet (genre, format, cible, ton), une estimation des jours de tournage, les postes cles a recruter et les principaux risques de production avec pistes de mitigation.',
          hints: [
            {
              id: 'sprint2-cu2-ex1-hint1',
              exercice_id: 'sprint2-cu2-ex1',
              index: 0,
              text: 'Structurez en sections claires : "Produis une fiche projet avec : Genre | Format | Nombre d\'episodes | Duree | Cible | Ton | Pitch en 3 lignes. Puis un tableau d\'estimation de tournage et un tableau des postes cles a recruter." Les tableaux sont plus exploitables que du texte libre.',
            },
            {
              id: 'sprint2-cu2-ex1-hint2',
              exercice_id: 'sprint2-cu2-ex1',
              index: 1,
              text: 'Pour les risques, soyez specifique au contexte : "Identifie les risques specifiques au tournage dans des restaurants etoiles parisiens : contraintes horaires, bruit, autorisations, impact sur le service. Pour chaque risque, propose une mitigation concrete."',
            },
          ],
        },
        {
          id: 'sprint2-cu2-ex2',
          title: 'Note d\'intention production',
          description: 'Redigez une note d\'intention production de 15 lignes pour le comite de validation : faisabilite, elements differenciants, ton factuel et convaincant.',
          hints: [
            {
              id: 'sprint2-cu2-ex2-hint1',
              exercice_id: 'sprint2-cu2-ex2',
              index: 0,
              text: 'Cadrez precisement : "Redige une note d\'intention production de 15 lignes pour un comite de validation exigeant. Structure : accroche (pourquoi ce projet), concept differenciateur, faisabilite technique, atouts Canal+, conclusion convaincante. Ton : factuel et ambitieux."',
            },
            {
              id: 'sprint2-cu2-ex2-hint2',
              exercice_id: 'sprint2-cu2-ex2',
              index: 1,
              text: 'Si le resultat est trop generique : "C\'est trop lisse. Ajoute des elements concrets qui montrent que tu connais le sujet : references a des series similaires, chiffres d\'audience du genre, tendances du marche." Le concret convainc.',
            },
          ],
        },
        {
          id: 'sprint2-cu2-ex3',
          title: 'Challenge du dossier',
          description: 'Demandez a Copilot Chat de challenger votre dossier en jouant un directeur de production exigeant : postes budgetaires sous-estimes ? Contraintes de tournage en restaurants etoiles non anticipees ?',
          hints: [
            {
              id: 'sprint2-cu2-ex3-hint1',
              exercice_id: 'sprint2-cu2-ex3',
              index: 0,
              text: 'Role-play incisif : "Tu es directeur de production avec 20 ans d\'experience en series haut de gamme. Lis ce dossier [coller] et pose 5 questions que poserait un comite de validation. Sois exigeant mais constructif." Puis utilisez les reponses pour renforcer votre dossier.',
            },
          ],
        },
      ],
    },
    {
      id: 'cu3',
      title: 'Construire une grille de programmation thematique',
      description: 'Grille TV sur 7 jours, texte editorial, variantes comparatives.',
      consignes: [
        'Precisez la cible, la periode et les creneaux horaires.',
        'Exigez un tableau avec justification editoriale par choix.',
        'Demandez des variantes pour comparer.',
      ],
      exercises: [
        {
          id: 'sprint2-cu3-ex1',
          title: 'Grille de programmation',
          description: 'Canal+ cree une semaine evenementielle "Frissons d\'ete" (thriller/suspense, diffusee en aout). Construisez une grille sur 7 jours (prime time + 2e partie de soiree) melant films, series Canal+ Originals et classiques. Format tableau : jour, creneau, titre, genre, duree, argument editorial.',
          hints: [
            {
              id: 'sprint2-cu3-ex1-hint1',
              exercice_id: 'sprint2-cu3-ex1',
              index: 0,
              text: 'Soyez ultra-precis sur le format : "Propose une grille TV sur 7 jours pour la semaine Frissons d\'ete. Format tableau strict : Jour | Creneau (21h + 23h) | Titre | Genre | Duree | Argument editorial en 1 ligne. Melange Canal+ Originals, films recents et classiques du suspense."',
            },
            {
              id: 'sprint2-cu3-ex1-hint2',
              exercice_id: 'sprint2-cu3-ex1',
              index: 1,
              text: 'Pour plus de realisme : "Assure une montee en intensite sur la semaine : commence par des thrillers psychologiques le lundi, monte crescendo vers de l\'action le week-end. Chaque soiree doit avoir une coherence thematique."',
            },
          ],
        },
        {
          id: 'sprint2-cu3-ex2',
          title: 'Texte de presentation',
          description: 'Redigez le texte de presentation pour le guide des programmes : 10 lignes, ton editorial et prescripteur, qui donne envie de planifier sa semaine devant Canal+.',
          hints: [
            {
              id: 'sprint2-cu3-ex2-hint1',
              exercice_id: 'sprint2-cu3-ex2',
              index: 0,
              text: 'Donnez des exemples de ton : "Redige un texte de 10 lignes pour le guide des programmes. Ton : editorial et prescripteur, comme un critique cinema passionné. Commence par une phrase d\'accroche qui donne le frisson. Fais reference a 2-3 titres phares de la semaine."',
            },
          ],
        },
        {
          id: 'sprint2-cu3-ex3',
          title: 'Grilles alternatives',
          description: 'Proposez 3 grilles alternatives : une version "decouverte" (titres meconnus), une "valeurs sures" (blockbusters), une "auteur" (cinema d\'auteur et series primees). Comparez.',
          hints: [
            {
              id: 'sprint2-cu3-ex3-hint1',
              exercice_id: 'sprint2-cu3-ex3',
              index: 0,
              text: 'Demandez une comparaison structuree : "Propose 3 variantes de grille (Decouverte / Valeurs sures / Auteur) et compare-les dans un tableau : public cible, niveau de risque editorial, potentiel d\'audience, coherence thematique. Termine par ta recommandation argumentee."',
            },
          ],
        },
      ],
    },
    {
      id: 'cu4',
      title: 'Analyser un document et preparer une recommandation',
      description: 'Synthese executive, argumentaire structure, challenge critique.',
      consignes: [
        'Donnez les donnees cles dans le prompt, l\'IA ne les invente pas.',
        'Structurez : probleme, solution, benefices, risques.',
        'Le mode "critique" renforce vos propres arguments.',
      ],
      exercises: [
        {
          id: 'sprint2-cu4-ex1',
          title: 'Synthese executive',
          description: 'Votre direction vous transmet un rapport de 3 pages sur les resultats trimestriels d\'un projet. Demandez a Copilot Chat de produire une synthese executive en 10 lignes : chiffres cles, tendances, points d\'alerte, et une recommandation argumentee.',
          hints: [
            {
              id: 'sprint2-cu4-ex1-hint1',
              exercice_id: 'sprint2-cu4-ex1',
              index: 0,
              text: 'Soyez precis sur la structure attendue : "Voici un rapport trimestriel [coller]. Produis une synthese executive en 10 lignes structuree ainsi : 3 chiffres cles a retenir, 2 tendances principales, 2 points d\'alerte, 1 recommandation argumentee. Ton : factuel et direct."',
            },
            {
              id: 'sprint2-cu4-ex1-hint2',
              exercice_id: 'sprint2-cu4-ex1',
              index: 1,
              text: 'Verifiez que l\'IA n\'invente pas de chiffres : "Base-toi uniquement sur les donnees du document. Si une information manque, indique-le avec [donnee non disponible] plutot que d\'inventer." C\'est une regle d\'or du prompting professionnel.',
            },
          ],
        },
        {
          id: 'sprint2-cu4-ex2',
          title: 'Argumentaire structure',
          description: 'Preparez un argumentaire structure de 15 lignes pour defendre une decision lors du prochain comite : probleme constate, solution proposee, benefices attendus, risques et mitigation.',
          hints: [
            {
              id: 'sprint2-cu4-ex2-hint1',
              exercice_id: 'sprint2-cu4-ex2',
              index: 0,
              text: 'Utilisez le framework PSBR : "Redige un argumentaire de 15 lignes pour un comite de direction. Structure : Probleme (2 lignes), Solution (3 lignes), Benefices (5 lignes avec chiffres si possible), Risques + Mitigation (5 lignes). Ton assertif et factuel."',
            },
          ],
        },
        {
          id: 'sprint2-cu4-ex3',
          title: 'Challenge critique',
          description: 'Demandez a Copilot Chat de jouer un collegue sceptique qui challenge votre recommandation. Identifiez les failles, puis reformulez un argumentaire renforce.',
          hints: [
            {
              id: 'sprint2-cu4-ex3-hint1',
              exercice_id: 'sprint2-cu4-ex3',
              index: 0,
              text: 'Technique du "sparring partner" : "Tu es un collegue senior sceptique. Lis cette recommandation [coller] et pose 5 questions piquantes pour tester sa solidite." Puis dans un second prompt : "A partir de ces objections, reformule mon argumentaire en integrant des reponses a chaque point."',
            },
          ],
        },
      ],
    },
    {
      id: 'cu5',
      title: 'Rediger un mail professionnel adapte au contexte',
      description: 'Mail d\'annonce, declinaisons multi-canal, relecture critique.',
      consignes: [
        'Precisez le contexte, le destinataire et le ton souhaite.',
        'Demandez des declinaisons selon le canal (mail, Teams, formel).',
        'Utilisez l\'IA pour relire et ameliorer vos propres ecrits.',
      ],
      exercises: [
        {
          id: 'sprint2-cu5-ex1',
          title: 'Mail d\'annonce',
          description: 'Vous devez annoncer un changement de planning a une equipe de 15 personnes. Certains seront impactes, d\'autres non. Utilisez Copilot Chat pour rediger un mail clair, rassurant et structure qui explique le changement, les raisons, les impacts concrets et les prochaines etapes.',
          hints: [
            {
              id: 'sprint2-cu5-ex1-hint1',
              exercice_id: 'sprint2-cu5-ex1',
              index: 0,
              text: 'Contextualisez le destinataire : "Redige un mail professionnel pour annoncer [changement] a une equipe de 15 personnes dont certaines seront impactees. Ton : rassurant et factuel. Structure : objet clair, contexte en 2 lignes, impacts concrets (qui est concerne, qui ne l\'est pas), prochaines etapes, ouverture pour questions."',
            },
            {
              id: 'sprint2-cu5-ex1-hint2',
              exercice_id: 'sprint2-cu5-ex1',
              index: 1,
              text: 'Un bon mail d\'annonce anticipe les inquietudes : "Ajoute une section FAQ avec les 3 questions que l\'equipe se posera en lisant ce mail, et leurs reponses. Cela reduit l\'anxiete et les allers-retours."',
            },
          ],
        },
        {
          id: 'sprint2-cu5-ex2',
          title: 'Declinaisons multi-canal',
          description: 'Declinez ce meme message en version courte (5 lignes) pour Teams, et en version formelle pour votre directeur.',
          hints: [
            {
              id: 'sprint2-cu5-ex2-hint1',
              exercice_id: 'sprint2-cu5-ex2',
              index: 0,
              text: 'Declinaison en un seul prompt : "A partir de ce mail [coller], produis 2 versions : 1) Message Teams de 5 lignes max, ton direct et bienveillant, qui va droit au but 2) Version formelle pour validation par la direction, ton institutionnel. Presente les deux versions clairement separees."',
            },
          ],
        },
        {
          id: 'sprint2-cu5-ex3',
          title: 'Relecture critique',
          description: 'Demandez a Copilot Chat de relire votre mail en identifiant les passages ambigus, les formulations qui pourraient generer de l\'inquietude, et de proposer des reformulations.',
          hints: [
            {
              id: 'sprint2-cu5-ex3-hint1',
              exercice_id: 'sprint2-cu5-ex3',
              index: 0,
              text: 'L\'IA comme relecteur bienveillant : "Relis ce mail [coller] avec un regard critique bienveillant. Identifie : 1) Les passages qui pourraient creer de l\'inquietude 2) Les formulations ambigues 3) Ce qui manque pour rassurer. Pour chaque point, propose une reformulation." C\'est un usage tres puissant de l\'IA au quotidien.',
            },
          ],
        },
      ],
    },
    {
      id: 'cu6',
      title: 'Preparer un plan structure d\'une presentation a partir d\'idees en vrac',
      description: 'Plan de slides, speech d\'introduction, anticipation des questions.',
      consignes: [
        'Donnez vos idees brutes, l\'IA les structure pour vous.',
        'Precisez l\'audience et le temps de presentation.',
        'Preparez les objections.',
      ],
      exercises: [
        {
          id: 'sprint2-cu6-ex1',
          title: 'Plan de presentation',
          description: 'Vous avez 10 minutes pour preparer une presentation de 5 slides sur un sujet de votre choix. Donnez vos idees en vrac a Copilot Chat et demandez-lui de produire un plan structure : titre de chaque slide, messages cles et points de detail.',
          hints: [
            {
              id: 'sprint2-cu6-ex1-hint1',
              exercice_id: 'sprint2-cu6-ex1',
              index: 0,
              text: 'La technique "idees en vrac" : "Voici mes idees en vrac : [coller]. Organise-les en un plan de 5 slides pour [audience] en [duree]. Pour chaque slide : titre accrocheur, 3 messages cles, 2 points de detail." L\'IA excelle a structurer le desordre !',
            },
            {
              id: 'sprint2-cu6-ex1-hint2',
              exercice_id: 'sprint2-cu6-ex1',
              index: 1,
              text: 'Precisez l\'audience pour adapter le niveau : "L\'audience est [des directeurs / des collegues techniques / des clients]. Adapte le niveau de detail et le vocabulaire en consequence. Les directeurs veulent du strategique, les techniques veulent du concret."',
            },
          ],
        },
        {
          id: 'sprint2-cu6-ex2',
          title: 'Speech d\'introduction',
          description: 'Demandez a Copilot Chat de rediger le speech d\'introduction (2 minutes) : accroche, contexte, promesse de la presentation. Ton dynamique et engageant.',
          hints: [
            {
              id: 'sprint2-cu6-ex2-hint1',
              exercice_id: 'sprint2-cu6-ex2',
              index: 0,
              text: 'Pour un speech percutant : "Redige un speech d\'introduction de 2 minutes (environ 250 mots). Structure : accroche surprenante (stat, question, anecdote), contexte en 2 phrases, promesse de la presentation. Ton : dynamique, donne envie d\'ecouter la suite."',
            },
          ],
        },
        {
          id: 'sprint2-cu6-ex3',
          title: 'Anticipation des questions',
          description: 'Demandez a Copilot Chat d\'anticiper les 3 questions difficiles que votre audience pourrait poser, et de preparer des reponses argumentees pour chacune.',
          hints: [
            {
              id: 'sprint2-cu6-ex3-hint1',
              exercice_id: 'sprint2-cu6-ex3',
              index: 0,
              text: 'Anticipez les objections : "En te basant sur cette presentation [coller], anticipe les 3 questions les plus difficiles que pourrait poser [type d\'audience]. Pour chaque question : formule la question, explique pourquoi elle risque d\'etre posee, et prepare une reponse argumentee de 3 lignes." C\'est la meilleure facon de se preparer sereinement.',
            },
          ],
        },
      ],
    },
  ] as CasUsage[],
};
