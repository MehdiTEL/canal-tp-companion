import type { CasUsage } from '../types';
import type { MetierGroupId } from './metierGroups';

export const sprint2Meta = {
  id: 'sprint-2',
  title: 'Sprint 2 — Challenge collectif',
  color: 'var(--color-sprint-2)',
  duration: 30,
};

export const sprint2ByGroup: Record<MetierGroupId, CasUsage> = {
  // ─────────────────────────────────────────────────────────────────────────
  // CONTENU & CREATION
  // ─────────────────────────────────────────────────────────────────────────
  'contenu-creation': {
    id: 'sprint2-contenu-creation',
    title: 'Produire un dossier de presse pour une serie originale',
    description:
      'Canal+ lance "Les Ombres du Fleuve", une serie originale en 8 episodes, thriller dramatique tourne entre Paris et Dakar. ' +
      'Votre equipe est en charge de produire le dossier de presse complet pour les medias. ' +
      'Vous allez utiliser Copilot Chat pour rediger, structurer et challenger ce dossier etape par etape.',
    consignes: [
      'Commencez par donner a Copilot Chat le maximum de contexte sur la serie : genre, nombre d\'episodes, casting, synopsis, ton editorial. Plus le briefing est riche, plus le resultat sera exploitable.',
      'Pour chaque exercice, precisez le format de sortie attendu (nombre de mots, structure, ton). Copilot Chat produit de meilleurs resultats quand les contraintes sont explicites.',
      'Utilisez la technique du role-play pour le dernier exercice : demandez a Copilot Chat de jouer un personnage exigeant. C\'est la meilleure facon de tester la solidite de vos livrables.',
    ],
    exercises: [
      {
        id: 'sprint2-contenu-creation-ex1',
        title: 'Rediger le communique de presse',
        description:
          'Redigez un communique de presse de 500 mots pour annoncer "Les Ombres du Fleuve" aux medias. ' +
          'Le ton doit etre premium, digne de Canal+. Le communique doit contenir : un titre accrocheur, ' +
          'un chapeau de 3 lignes, le synopsis sans spoiler, la presentation du casting et de l\'equipe artistique, ' +
          'les informations pratiques (date de diffusion, nombre d\'episodes, disponibilite sur myCANAL).',
        idealPrompt:
          'Tu es attache de presse senior chez Canal+, specialise dans les series originales premium. ' +
          'Redige un communique de presse de 500 mots pour annoncer "Les Ombres du Fleuve", thriller dramatique en 8 episodes tourne entre Paris et Dakar. ' +
          'Casting principal : Omar Sy, Lea Seydoux. Realisateur : Jacques Audiard. Diffusion : janvier 2026 sur Canal+ et myCANAL. ' +
          'Structure : titre accrocheur, chapeau de 3 lignes, synopsis sans spoiler (100 mots), casting et equipe artistique, informations pratiques. Ton : premium, cinematographique, digne des grandes series Canal+.',
        idealResult:
          'Un communique structure en 5 sections clairement separees. ' +
          'Un titre percutant qui evoque l\'ambiance du thriller (ex : "Canal+ plonge dans les ombres de deux continents"). ' +
          'Un chapeau de 3 lignes qui donne immediatement envie de lire la suite. ' +
          'Un synopsis qui installe le mystere sans reveler les rebondissements. ' +
          'Une presentation du casting valorisante avec les filmographies recentes. ' +
          'Les informations pratiques completes : date, nombre d\'episodes, plateformes de diffusion.',
        hints: [
          {
            id: 'sprint2-contenu-creation-ex1-hint1',
            exercice_id: 'sprint2-contenu-creation-ex1',
            index: 0,
            text: 'Donnez un contexte riche des le depart : "Tu es attache de presse senior chez Canal+. Redige un communique de presse de 500 mots pour la serie Les Ombres du Fleuve, thriller dramatique en 8 episodes tourne entre Paris et Dakar. Casting : [noms]. Diffusion : [date] sur Canal+ et myCANAL. Ton : premium et cinematographique." La technique du role + contexte detaille produit un texte bien plus professionnel.',
          },
          {
            id: 'sprint2-contenu-creation-ex1-hint2',
            exercice_id: 'sprint2-contenu-creation-ex1',
            index: 1,
            text: 'Imposez une structure precise : "Structure attendue : 1) Titre accrocheur 2) Chapeau de 3 lignes qui donne envie 3) Synopsis en 100 mots sans spoiler 4) Presentation du casting et de l\'equipe artistique 5) Informations pratiques. Chaque section doit etre clairement separee." Quand vous donnez la structure, Copilot Chat la respecte fidelement.',
          },
          {
            id: 'sprint2-contenu-creation-ex1-hint3',
            exercice_id: 'sprint2-contenu-creation-ex1',
            index: 2,
            text: 'Si le resultat est trop generique, iterez avec une contrainte de ton : "C\'est trop plat et corporate. Reecris avec le ton des communiques Canal+ : sophistique, un brin provocateur, qui positionne la serie comme un evenement. Inspire-toi du style de communication de Canal+ pour ses series originales." L\'iteration sur le ton est une technique cle du prompting.',
          },
        ],
      },
      {
        id: 'sprint2-contenu-creation-ex2',
        title: 'Creer les fiches personnages pour les medias',
        description:
          'Produisez les fiches personnages des 4 protagonistes de la serie pour le kit presse. ' +
          'Chaque fiche doit contenir : nom du personnage, interprete, description physique et psychologique en 5 lignes, ' +
          'arc narratif en 2 lignes (sans spoiler), et une citation emblematique du personnage.',
        idealPrompt:
          'Produis 4 fiches personnages pour le kit presse de la serie "Les Ombres du Fleuve" (Canal+). ' +
          'Pour chaque personnage, utilise ce format : Nom | Interprete | Description physique et psychologique (5 lignes) | Arc narratif (2 lignes, sans spoiler) | Citation emblematique entre guillemets. ' +
          'Les personnages doivent etre contrastes et complementaires. Le protagoniste est un ancien reporter de guerre reconverti, l\'antagoniste a des motivations ambigues. ' +
          'Chaque personnage doit avoir une faille humaine credible. Ton : dossier de presse professionnel Canal+.',
        idealResult:
          '4 fiches au format homogene, avec des personnages aux personnalites distinctes et complementaires. ' +
          'Des descriptions psychologiques nuancees qui evitent les cliches de genre. ' +
          'Des arcs narratifs qui suggerent la complexite sans reveler l\'intrigue. ' +
          'Des citations emblematiques au ton different pour chaque personnage, revelant leur personnalite. ' +
          'Une coherence narrative entre les 4 fiches qui donne envie de decouvrir leurs interactions.',
        hints: [
          {
            id: 'sprint2-contenu-creation-ex2-hint1',
            exercice_id: 'sprint2-contenu-creation-ex2',
            index: 0,
            text: 'Utilisez un template repetable : "Produis 4 fiches personnages pour le kit presse. Pour chaque personnage, utilise ce format : Nom du personnage | Interprete | Description (5 lignes, physique + psychologique) | Arc narratif (2 lignes, sans spoiler) | Citation emblematique entre guillemets. Les personnages doivent etre contrastes et complementaires." La technique du template garantit une sortie homogene.',
          },
          {
            id: 'sprint2-contenu-creation-ex2-hint2',
            exercice_id: 'sprint2-contenu-creation-ex2',
            index: 1,
            text: 'Pour des personnages plus vivants, ajoutez des contraintes narratives : "Le protagoniste est un ancien reporter de guerre reconverti. L\'antagoniste a des motivations ambigues. Le personnage feminin principal n\'est pas un faire-valoir. Chaque personnage doit avoir une faille humaine credible." Les contraintes narratives guident l\'IA vers des personnages non cliches.',
          },
          {
            id: 'sprint2-contenu-creation-ex2-hint3',
            exercice_id: 'sprint2-contenu-creation-ex2',
            index: 2,
            text: 'Verifiez la coherence : "Relis ces 4 fiches ensemble. Verifie que : les arcs narratifs sont complementaires, il n\'y a pas de contradiction entre les descriptions, les citations ont des tons differents qui refletent la personnalite de chaque personnage. Corrige si necessaire." Cette relecture croisee est une technique puissante pour garantir la qualite.',
          },
        ],
      },
      {
        id: 'sprint2-contenu-creation-ex3',
        title: 'Faire critiquer le dossier par un redacteur en chef exigeant',
        description:
          'Soumettez votre communique de presse et vos fiches personnages a un "redacteur en chef exigeant" ' +
          'incarne par Copilot Chat. Il doit identifier les faiblesses, les cliches, les passages trop generiques, ' +
          'et proposer des ameliorations concretes pour atteindre le niveau d\'exigence Canal+.',
        idealPrompt:
          'Tu es redacteur en chef de Telerama avec 25 ans d\'experience. Tu es repute pour ton exigence et ta plume acerbe. ' +
          'Lis ce dossier de presse complet [coller le communique et les fiches personnages]. ' +
          'Pour chaque section, identifie : les 2 points forts a conserver, les 3 faiblesses principales avec explication, et une reformulation concrete pour chaque faiblesse. ' +
          'Puis compare avec ce que ferait HBO ou Netflix pour une serie equivalente. Propose 3 elements differenciants pour Canal+.',
        idealResult:
          'Une critique structuree section par section, avec des points forts clairement identifies. ' +
          'Des faiblesses precises et argumentees (passages generiques, cliches, manque de singularite). ' +
          'Des reformulations concretes directement utilisables, pas de commentaires vagues. ' +
          'Une comparaison pertinente avec les codes de communication HBO/Netflix. ' +
          'Trois propositions differenciantes ancrees dans l\'identite editoriale Canal+ (ton, positionnement, heritage cinematographique).',
        hints: [
          {
            id: 'sprint2-contenu-creation-ex3-hint1',
            exercice_id: 'sprint2-contenu-creation-ex3',
            index: 0,
            text: 'Lancez le role-play avec un personnage precis : "Tu es redacteur en chef de Telerama avec 25 ans d\'experience. Tu es repute pour ton exigence et ta plume acerbe. Lis ce dossier de presse [coller] et donne ton verdict sans complaisance : qu\'est-ce qui fonctionne, qu\'est-ce qui est cliche, qu\'est-ce qui manque ?" Le role-play avec un personnage precis donne des critiques bien plus incisives.',
          },
          {
            id: 'sprint2-contenu-creation-ex3-hint2',
            exercice_id: 'sprint2-contenu-creation-ex3',
            index: 1,
            text: 'Demandez des critiques structurees : "Pour chaque section du dossier (communique, fiches personnages), identifie : 1) Les 2 points forts a conserver 2) Les 3 faiblesses principales avec explication 3) Une reformulation concrete pour chaque faiblesse. Sois precis dans tes suggestions, pas vague." Structurer la critique empeche l\'IA de rester en surface.',
          },
          {
            id: 'sprint2-contenu-creation-ex3-hint3',
            exercice_id: 'sprint2-contenu-creation-ex3',
            index: 2,
            text: 'Poussez le challenge plus loin : "Maintenant, compare ce dossier de presse avec ce que ferait HBO ou Netflix pour une serie equivalente. Qu\'est-ce que Canal+ devrait ajouter pour se differencier ? Propose 3 elements differenciants concrets." Cette technique de benchmark force l\'IA a elever le niveau d\'exigence.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DIFFUSION & PROGRAMMATION
  // ─────────────────────────────────────────────────────────────────────────
  'diffusion-programmation': {
    id: 'sprint2-diffusion-programmation',
    title: 'Analyser les performances d\'une grille de programmation',
    description:
      'Vous etes responsable de la programmation prime time de Canal+. Voici les donnees d\'audience de la semaine ecoulee : ' +
      'Lundi 21h — Film "Traque a Marseille" : 1.2M telespectateurs, PdA 5.8%. ' +
      'Mardi 21h — Serie "Engrenages S9" : 980K, PdA 4.9%. ' +
      'Mercredi 21h — Doc "Ocean, le dernier continent" : 650K, PdA 3.2%. ' +
      'Jeudi 21h — Film "Le Grand Bain" (rediff) : 1.4M, PdA 6.5%. ' +
      'Vendredi 21h — Serie "Les Sauvages S2" : 870K, PdA 4.3%. ' +
      'Samedi 21h — Film "Inception" (rediff) : 1.6M, PdA 7.1%. ' +
      'Dimanche 21h — Canal+ Premiere "Anatomie d\'une chute" : 2.1M, PdA 9.2%. ' +
      'Objectif hebdomadaire : PdA moyenne > 5.5%. PdA reelle : 5.86%. ' +
      'Analysez ces performances et proposez des ajustements.',
    consignes: [
      'Collez les donnees d\'audience directement dans le prompt. Copilot Chat ne peut analyser que ce que vous lui fournissez : soyez exhaustif.',
      'Demandez des analyses structurees avec des tableaux comparatifs. Les tableaux sont plus faciles a exploiter que du texte libre pour des donnees chiffrees.',
      'Utilisez le role-play pour challenger vos propres recommandations : un "directeur des programmes" exigeant vous posera les bonnes questions.',
    ],
    exercises: [
      {
        id: 'sprint2-diffusion-programmation-ex1',
        title: 'Produire une synthese des audiences',
        description:
          'A partir des donnees d\'audience fournies dans la description du cas d\'usage, produisez une synthese analytique : ' +
          'tableau recapitulatif, identification des points forts et des points faibles, ' +
          'comparaison jour par jour par rapport a l\'objectif de PdA 5.5%, et tendances cles.',
        idealPrompt:
          'Tu es analyste audiences senior chez Canal+. Voici les donnees d\'audience prime time de la semaine : ' +
          'Lundi — "Traque a Marseille" : 1.2M, PdA 5.8% / Mardi — "Engrenages S9" : 980K, PdA 4.9% / Mercredi — Doc "Ocean" : 650K, PdA 3.2% / ' +
          'Jeudi — "Le Grand Bain" (rediff) : 1.4M, PdA 6.5% / Vendredi — "Les Sauvages S2" : 870K, PdA 4.3% / Samedi — "Inception" (rediff) : 1.6M, PdA 7.1% / Dimanche — "Anatomie d\'une chute" : 2.1M, PdA 9.2%. ' +
          'Objectif : PdA moyenne > 5.5%. Produis : 1) Tableau recapitulatif avec ecart vs objectif 2) Classement par type de programme 3) Les 3 enseignements cles.',
        idealResult:
          'Un tableau clair avec colonnes Jour, Programme, Type, Telespectateurs, PdA, Ecart vs 5.5%, Verdict (+/-). ' +
          'Une analyse par categorie (film inedit, serie, doc, rediffusion, premiere) avec PdA moyenne par type. ' +
          'L\'identification que le documentaire du mercredi et la serie du vendredi sous-performent significativement. ' +
          'La mise en evidence que les rediffusions de films porteurs et les premieres surperforment. ' +
          'Trois enseignements actionnables lies aux choix de programmation.',
        hints: [
          {
            id: 'sprint2-diffusion-programmation-ex1-hint1',
            exercice_id: 'sprint2-diffusion-programmation-ex1',
            index: 0,
            text: 'Fournissez les donnees et demandez un tableau : "Voici les donnees d\'audience prime time Canal+ de la semaine : [coller les donnees]. Produis un tableau recapitulatif avec les colonnes : Jour | Programme | Telespectateurs | PdA | Ecart vs objectif 5.5% | Verdict (+ ou -). Puis identifie les 3 enseignements cles." Le format tableau force une analyse rigoureuse.',
          },
          {
            id: 'sprint2-diffusion-programmation-ex1-hint2',
            exercice_id: 'sprint2-diffusion-programmation-ex1',
            index: 1,
            text: 'Demandez une analyse par categorie : "Classe les programmes par type (film inedit, serie, documentaire, rediffusion, premiere) et calcule la PdA moyenne par categorie. Quel type de programme performe le mieux en prime time ? Y a-t-il une correlation entre le jour de la semaine et le type de programme ?" Cette segmentation revele des patterns invisibles a l\'oeil nu.',
          },
          {
            id: 'sprint2-diffusion-programmation-ex1-hint3',
            exercice_id: 'sprint2-diffusion-programmation-ex1',
            index: 2,
            text: 'Poussez l\'analyse plus loin : "Compare la performance du mercredi (doc, 3.2%) avec celle du dimanche (premiere, 9.2%). Quels facteurs expliquent cet ecart ? Est-ce le genre, le creneau, la notoriete du titre ou la strategie de programmation ? Argumente." Demander des explications causales pousse l\'IA au-dela de la simple description.',
          },
        ],
      },
      {
        id: 'sprint2-diffusion-programmation-ex2',
        title: 'Proposer des ajustements de grille argumentes',
        description:
          'Sur la base de votre analyse, proposez des ajustements concrets pour la semaine suivante. ' +
          'Chaque changement doit etre argumente : quel programme deplacer, pourquoi, quel resultat attendu. ' +
          'Presentez au moins 3 ajustements avec un impact estime sur la PdA.',
        idealPrompt:
          'A partir de cette analyse d\'audience [coller la synthese], propose 3 ajustements concrets pour la grille prime time de la semaine prochaine. ' +
          'Pour chaque ajustement : Programme concerne | Changement propose | Justification basee sur les donnees | Impact estime sur la PdA. ' +
          'Pour le mercredi qui sous-performe a 3.2%, propose 3 scenarios : option safe, option audacieuse, option mixte avec PdA estimee pour chaque. ' +
          'Contrainte : les ajustements doivent rester coherents avec le positionnement premium Canal+ (cinema et series de reference).',
        idealResult:
          'Trois ajustements argumentes avec des justifications chiffrees basees sur l\'analyse precedente. ' +
          'Des estimations de PdA realistes et prudentes, pas des previsions trop optimistes. ' +
          'Trois scenarios pour le mercredi avec une analyse risque/benefice pour chaque option. ' +
          'Une coherence globale avec le positionnement editorial Canal+ (pas de suggestion de programme de tele-realite). ' +
          'Un calcul de la PdA moyenne projetee pour la semaine avec les ajustements proposes.',
        hints: [
          {
            id: 'sprint2-diffusion-programmation-ex2-hint1',
            exercice_id: 'sprint2-diffusion-programmation-ex2',
            index: 0,
            text: 'Structurez la demande d\'ajustements : "A partir de cette analyse [coller], propose 3 ajustements concrets pour la grille de la semaine prochaine. Pour chaque ajustement : Programme concerne | Changement propose | Justification basee sur les donnees | Impact estime sur la PdA. Sois realiste : on ne peut pas tout changer d\'une semaine a l\'autre." Les contraintes de realisme evitent des recommandations hors sol.',
          },
          {
            id: 'sprint2-diffusion-programmation-ex2-hint2',
            exercice_id: 'sprint2-diffusion-programmation-ex2',
            index: 1,
            text: 'Demandez des alternatives : "Pour le creneau du mercredi qui sous-performe a 3.2%, propose 3 options de remplacement : une option safe (programme a audience garantie), une option audacieuse (pari editorial), une option mixte. Pour chaque option, estime la PdA attendue et le risque." Proposer des scenarios aide a la prise de decision.',
          },
          {
            id: 'sprint2-diffusion-programmation-ex2-hint3',
            exercice_id: 'sprint2-diffusion-programmation-ex2',
            index: 2,
            text: 'Integrez la vision strategique : "Ces ajustements doivent aussi servir la strategie editoriale Canal+ : positionner la chaine comme reference du cinema et des series premium. Verifie que tes recommandations sont coherentes avec ce positionnement. Un choix qui booste la PdA mais dilue l\'image de marque n\'est pas un bon choix." Cette contrainte de marque ajoute une dimension strategique a l\'exercice.',
          },
        ],
      },
      {
        id: 'sprint2-diffusion-programmation-ex3',
        title: 'Critiquer les ajustements en jouant un directeur des programmes',
        description:
          'Soumettez vos ajustements a un "directeur des programmes" incarne par Copilot Chat. ' +
          'Il doit challenger chaque proposition : est-ce realiste ? Les estimations sont-elles credibles ? ' +
          'Y a-t-il des effets de bord non anticipes ?',
        idealPrompt:
          'Tu es directeur des programmes de Canal+ depuis 12 ans. Tu as vu des dizaines de propositions d\'ajustement de grille. ' +
          'Lis ces recommandations [coller les ajustements]. Evalue chaque ajustement sur 5 criteres : faisabilite operationnelle, impact audience estime, ' +
          'coherence editoriale, risque de cannibalisation, cout de mise en oeuvre. Note chaque critere de 1 a 5. ' +
          'Puis redige ta decision finale comme un mail de validation a ton equipe : quels ajustements tu valides, lesquels tu refuses, lesquels necessitent une etude complementaire.',
        idealResult:
          'Une grille d\'evaluation structuree avec des notes argumentees pour chaque ajustement sur les 5 criteres. ' +
          'L\'identification de risques de cannibalisation entre programmes non anticipes dans les propositions. ' +
          'Un questionnement realiste sur la faisabilite operationnelle (droits de diffusion, disponibilite des contenus). ' +
          'Un mail de validation au ton professionnel et direct, avec des decisions claires. ' +
          'Des demandes d\'information complementaire sur les points flous, comme le ferait un vrai directeur des programmes.',
        hints: [
          {
            id: 'sprint2-diffusion-programmation-ex3-hint1',
            exercice_id: 'sprint2-diffusion-programmation-ex3',
            index: 0,
            text: 'Creez un personnage precis : "Tu es directeur des programmes de Canal+ depuis 12 ans. Tu as vu des dizaines de propositions d\'ajustement de grille. Lis ces recommandations [coller] et challenge chacune : l\'estimation de PdA est-elle realiste ? Y a-t-il des effets de cannibalisation entre programmes ? Le calendrier est-il tenable ?" Un personnage avec de l\'experience donne des critiques plus pertinentes.',
          },
          {
            id: 'sprint2-diffusion-programmation-ex3-hint2',
            exercice_id: 'sprint2-diffusion-programmation-ex3',
            index: 1,
            text: 'Demandez une validation par critere : "Evalue chaque ajustement sur 5 criteres : faisabilite operationnelle, impact audience estime, coherence editoriale, risque de cannibalisation, cout de mise en oeuvre. Note chaque critere de 1 a 5 et donne une note globale." La grille de notation structure la critique et evite le flou.',
          },
          {
            id: 'sprint2-diffusion-programmation-ex3-hint3',
            exercice_id: 'sprint2-diffusion-programmation-ex3',
            index: 2,
            text: 'Finissez par une demande de synthese : "En tant que directeur des programmes, quels ajustements valides-tu, lesquels refuses-tu, et lesquels demandent une etude complementaire ? Redige ta reponse comme un vrai mail de validation a ton equipe." Ce format de deliverable final ancre l\'exercice dans la realite professionnelle.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // COMMERCIAL & MARKETING
  // ─────────────────────────────────────────────────────────────────────────
  'commercial-marketing': {
    id: 'sprint2-commercial-marketing',
    title: 'Concevoir une strategie de fidelisation multi-canal',
    description:
      'Le taux de desabonnement (churn) de Canal+ a augmente de 2 points sur le dernier trimestre. ' +
      'Voici les donnees fictives : ' +
      'Churn Q4 : 8.2% (vs 6.1% au Q3). Motifs principaux : prix trop eleve (34%), manque de contenus attractifs (28%), ' +
      'concurrence Netflix/Disney+ (22%), problemes techniques myCANAL (10%), autres (6%). ' +
      'Profil des desabonnes : 45% ont entre 25 et 34 ans, 60% etaient abonnes depuis moins de 12 mois, ' +
      '70% n\'utilisaient que myCANAL (pas le decodeur). ' +
      'Votre mission : analyser ces donnees, produire des insights actionnables et concevoir une strategie de fidelisation.',
    consignes: [
      'Collez les donnees chiffrees dans votre prompt. Copilot Chat ne peut pas inventer de bonnes analyses sans donnees concretes — fournissez-lui la matiere premiere.',
      'Demandez des livrables structures et actionnables : pas de generalites, mais des actions concretes avec qui, quoi, quand, combien.',
      'Le role-play de "directeur general exigeant" est la pour tester la robustesse de votre strategie avant de la presenter pour de vrai.',
    ],
    exercises: [
      {
        id: 'sprint2-commercial-marketing-ex1',
        title: 'Analyser les motifs de desabonnement et produire des insights',
        description:
          'A partir des donnees de churn fournies dans la description, produisez une analyse structuree : ' +
          'segmentation des motifs, croisement avec les profils des desabonnes, et 5 insights actionnables ' +
          'qui orienteront la strategie de fidelisation.',
        idealPrompt:
          'Tu es analyste CRM senior chez Canal+. Voici les donnees de churn Q4 : taux 8.2% (vs 6.1% Q3). ' +
          'Motifs : prix (34%), contenus (28%), concurrence (22%), technique (10%), autres (6%). ' +
          'Profil desabonnes : 45% entre 25-34 ans, 60% abonnes < 12 mois, 70% usage myCANAL uniquement. ' +
          'Produis : 1) Tableau de segmentation motifs x profils 2) Les 3 correlations les plus frappantes ' +
          '3) 5 insights actionnables classes par impact potentiel. Pour chaque insight, precise le segment concerne, la taille estimee et l\'action possible.',
        idealResult:
          'Un tableau croisant les motifs de desabonnement avec les profils demographiques et comportementaux. ' +
          'Trois correlations significatives (ex : les 25-34 ans sur myCANAL partent pour la concurrence). ' +
          'Cinq insights numerotes, classes du plus impactant au moins impactant. ' +
          'Pour chaque insight : le segment cible, une estimation du nombre d\'abonnes concernes, et une piste d\'action concrete. ' +
          'Une comparaison avec les tendances du marche SVoD francais pour contextualiser le taux de 8.2%.',
        hints: [
          {
            id: 'sprint2-commercial-marketing-ex1-hint1',
            exercice_id: 'sprint2-commercial-marketing-ex1',
            index: 0,
            text: 'Fournissez toutes les donnees et demandez une segmentation : "Voici les donnees de churn Canal+ Q4 : [coller]. Produis une analyse en 3 parties : 1) Tableau de segmentation des motifs par profil (age, anciennete, usage) 2) Les 3 correlations les plus frappantes 3) 5 insights actionnables classes par impact potentiel." La segmentation croisee revele des patterns que les donnees brutes ne montrent pas.',
          },
          {
            id: 'sprint2-commercial-marketing-ex1-hint2',
            exercice_id: 'sprint2-commercial-marketing-ex1',
            index: 1,
            text: 'Challengez les insights : "Pour chaque insight, indique : le segment concerne, la taille estimee du segment, l\'action possible et le cout relatif (faible/moyen/eleve). Elimine les insights trop vagues ou impossibles a activer operationnellement." Cette contrainte de faisabilite force l\'IA a etre concrete plutot que theorique.',
          },
          {
            id: 'sprint2-commercial-marketing-ex1-hint3',
            exercice_id: 'sprint2-commercial-marketing-ex1',
            index: 2,
            text: 'Ajoutez une dimension comparative : "Compare ces tendances de churn avec ce que l\'on sait du marche SVoD en France. Le taux de 8.2% est-il au-dessus ou en-dessous de la moyenne du secteur ? Quels concurrents ont reussi a reduire leur churn et comment ?" Le benchmark sectoriel enrichit l\'analyse et la rend plus credible.',
          },
        ],
      },
      {
        id: 'sprint2-commercial-marketing-ex2',
        title: 'Proposer 3 actions de fidelisation concretes avec un plan d\'execution',
        description:
          'Sur la base de vos insights, proposez 3 actions de fidelisation concretes et differenciantes. ' +
          'Pour chaque action : description, cible, canal d\'activation, calendrier de mise en oeuvre, ' +
          'KPI de suivi, et estimation de l\'impact sur le churn.',
        idealPrompt:
          'A partir de ces insights [coller l\'analyse], propose 3 actions de fidelisation complementaires pour Canal+. ' +
          'Pour chaque action, remplis ce template : Nom | Segment cible | Description (5 lignes) | Canal d\'activation (email, push, tel, in-app) | ' +
          'Calendrier semaine par semaine sur 1 mois | KPI principal | Impact estime sur le churn | Cout estimatif et ROI a 6 mois. ' +
          'Les 3 actions doivent couvrir : retention immediate, engagement long terme, reconquete. Propose une version pilote a moindre cout pour chaque action.',
        idealResult:
          'Trois actions clairement differenciees couvrant les trois temporalites (immediat, long terme, reconquete). ' +
          'Des templates remplis de maniere homogene avec tous les champs demandes. ' +
          'Des canaux d\'activation adaptes a chaque segment (in-app pour les digital natives, tel pour les abonnes historiques). ' +
          'Un calendrier realiste avec des jalons semaine par semaine. ' +
          'Des estimations de cout et ROI en fourchette, avec une version pilote pour chaque action permettant de tester avant de generaliser.',
        hints: [
          {
            id: 'sprint2-commercial-marketing-ex2-hint1',
            exercice_id: 'sprint2-commercial-marketing-ex2',
            index: 0,
            text: 'Demandez un format plan d\'action : "A partir de ces insights [coller], propose 3 actions de fidelisation. Pour chaque action, remplis ce template : Nom de l\'action | Segment cible | Description en 5 lignes | Canal d\'activation (email, push, tel, in-app) | Calendrier (semaine par semaine sur 1 mois) | KPI principal | Impact estime sur le churn." Le template force un livrable directement exploitable.',
          },
          {
            id: 'sprint2-commercial-marketing-ex2-hint2',
            exercice_id: 'sprint2-commercial-marketing-ex2',
            index: 1,
            text: 'Exigez de la differenciation : "Les 3 actions doivent etre complementaires : une action de retention immediate (pour ceux en phase de desabonnement), une action d\'engagement long terme (pour ceux a risque), une action de reconquete (pour les recemment desabonnes). Pas de doublon dans les approches." Cette contrainte de complementarite evite les propositions repetitives.',
          },
          {
            id: 'sprint2-commercial-marketing-ex2-hint3',
            exercice_id: 'sprint2-commercial-marketing-ex2',
            index: 2,
            text: 'Ajoutez le budget : "Pour chaque action, estime un ordre de grandeur du cout (en fourchette) et le ROI attendu sur 6 mois. Si le cout est eleve, propose une version pilote a moindre cout pour tester l\'approche. Un directeur general demandera toujours combien ca coute." Penser au ROI renforce la credibilite du plan.',
          },
        ],
      },
      {
        id: 'sprint2-commercial-marketing-ex3',
        title: 'Faire challenger la strategie par un directeur general exigeant',
        description:
          'Soumettez votre strategie complete (insights + 3 actions) a un "directeur general exigeant" ' +
          'incarne par Copilot Chat. Il doit tester la solidite de votre raisonnement, ' +
          'la credibilite de vos estimations et la faisabilite operationnelle.',
        idealPrompt:
          'Tu es le DG de Canal+ International, responsable d\'un P&L de 2 milliards d\'euros. Tu as 5 minutes pour evaluer cette strategie de fidelisation [coller insights + 3 actions]. ' +
          'Tu es connu pour poser des questions derangeantes. Donne ton verdict : ce qui te convainc, ce qui ne te convainc pas, les 3 questions auxquelles l\'equipe doit repondre. ' +
          'Fais un stress-test : si l\'action 1 ne reduit le churn que de 0.5% au lieu de 2%, le plan est-il encore rentable ? ' +
          'Si tu ne devais valider qu\'une seule action, laquelle et pourquoi ? Redige ta decision comme un mail de 5 lignes a l\'equipe marketing.',
        idealResult:
          'Un verdict structure avec points forts et points faibles identifies pour chaque action. ' +
          'Trois questions derangeantes mais pertinentes qui revelent les angles morts de la strategie. ' +
          'Un stress-test chiffre montrant le scenario pessimiste et le seuil de rentabilite. ' +
          'Un choix argumente d\'une seule action prioritaire, revelant la proposition de valeur la plus forte. ' +
          'Un mail de decision concis au ton de DG : direct, factuel, avec un engagement clair et un calendrier de suivi.',
        hints: [
          {
            id: 'sprint2-commercial-marketing-ex3-hint1',
            exercice_id: 'sprint2-commercial-marketing-ex3',
            index: 0,
            text: 'Creez un personnage intimidant : "Tu es le DG de Canal+ International. Tu geres un P&L de 2 milliards d\'euros. Tu as 5 minutes pour evaluer cette strategie de fidelisation [coller]. Tu es connu pour poser des questions derangeantes. Donne ton verdict : ce qui te convainc, ce qui ne te convainc pas, et les 3 questions auxquelles l\'equipe doit repondre avant la prochaine reunion." Le personnage avec des enjeux financiers pose des questions plus pertinentes.',
          },
          {
            id: 'sprint2-commercial-marketing-ex3-hint2',
            exercice_id: 'sprint2-commercial-marketing-ex3',
            index: 1,
            text: 'Demandez un stress-test chiffre : "Challenge les estimations d\'impact : si l\'action 1 ne reduit le churn que de 0.5% au lieu de 2%, le plan est-il encore rentable ? Quel est le scenario pessimiste ? A quel seuil decide-t-on d\'arreter ?" Le stress-test revele les faiblesses cachees des plans trop optimistes.',
          },
          {
            id: 'sprint2-commercial-marketing-ex3-hint3',
            exercice_id: 'sprint2-commercial-marketing-ex3',
            index: 2,
            text: 'Finissez par la priorisation : "Si tu ne devais valider qu\'une seule action sur les trois, laquelle choisirais-tu et pourquoi ? Redige ta decision comme un mail de 5 lignes a l\'equipe marketing." Forcer le choix unique revele la proposition de valeur la plus forte et prepare a la realite budgetaire.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TECH & IT
  // ─────────────────────────────────────────────────────────────────────────
  'tech-it': {
    id: 'sprint2-tech-it',
    title: 'Rediger un cahier des charges pour un nouveau projet',
    description:
      'La direction produit de Canal+ demande une nouvelle fonctionnalite sur myCANAL : ' +
      'un systeme de recommandation personnalise "Pour vous ce soir" qui propose 3 contenus ' +
      'chaque soir a 19h en fonction de l\'historique de visionnage, des preferences declarees ' +
      'et de la grille de programmation du soir. ' +
      'Votre equipe IT doit produire le cahier des charges technique de ce projet.',
    consignes: [
      'Commencez par reformuler le besoin business en langage technique. Copilot Chat vous aide a transformer un brief metier en specifications fonctionnelles precises.',
      'Pour le planning, demandez a Copilot Chat de structurer les phases avec des dependances. Un bon cahier des charges identifie les chemins critiques.',
      'Utilisez le role-play d\'architecte senior pour challenger vos choix techniques. C\'est la meilleure facon de reperer les failles avant la revue de projet.',
    ],
    exercises: [
      {
        id: 'sprint2-tech-it-ex1',
        title: 'Definir les specifications fonctionnelles a partir d\'un besoin business',
        description:
          'Transformez le besoin business ("Pour vous ce soir" sur myCANAL) en specifications fonctionnelles detaillees. ' +
          'Incluez : les user stories principales, les regles metier, les contraintes techniques ' +
          '(performance, volumetrie, compatibilite), et les criteres d\'acceptance.',
        idealPrompt:
          'Tu es Product Owner senior chez Canal+. Voici le brief produit : nouvelle fonctionnalite "Pour vous ce soir" sur myCANAL, ' +
          'proposant 3 contenus personnalises chaque soir a 19h selon l\'historique de visionnage, les preferences declarees et la grille du soir. ' +
          'Transforme ce besoin en specs fonctionnelles : 1) 5 user stories au format "En tant que [role], je veux [action], afin de [benefice]" ' +
          '2) Regles metier avec cas particuliers 3) Contraintes non fonctionnelles (temps de reponse < 200ms, 8M utilisateurs actifs) ' +
          '4) Pour chaque user story, 2 edge cases avec regle de fallback et 3 criteres d\'acceptance au format GIVEN/WHEN/THEN.',
        idealResult:
          'Cinq user stories couvrant les principaux parcours utilisateur (decouverte, personnalisation, notification, feedback, partage). ' +
          'Des regles metier precises : gestion des profils multiples, contenus deja vus, controle parental. ' +
          'Des contraintes non fonctionnelles chiffrees : temps de reponse, volumetrie, compatibilite multi-devices. ' +
          'Des edge cases realistes pour chaque user story (nouvel utilisateur sans historique, preferences contradictoires). ' +
          'Des criteres d\'acceptance au format GIVEN/WHEN/THEN directement testables par une equipe QA.',
        hints: [
          {
            id: 'sprint2-tech-it-ex1-hint1',
            exercice_id: 'sprint2-tech-it-ex1',
            index: 0,
            text: 'Partez du besoin business : "Voici le brief produit : [coller la description]. Transforme ce besoin en specifications fonctionnelles structurees : 1) 5 user stories au format \'En tant que [role], je veux [action], afin de [benefice]\' 2) Regles metier (conditions, limites, cas particuliers) 3) Contraintes non fonctionnelles (temps de reponse < Xms, volumetrie, compatibilite). Format : document structure avec numerotation." Le format user story est universellement compris par les equipes tech.',
          },
          {
            id: 'sprint2-tech-it-ex1-hint2',
            exercice_id: 'sprint2-tech-it-ex1',
            index: 1,
            text: 'Ajoutez les cas limites : "Pour chaque user story, identifie 2 cas limites (edge cases) : que se passe-t-il si l\'utilisateur n\'a aucun historique ? Si son historique ne contient que des contenus enfants ? Si aucun contenu ne correspond aux preferences ? Chaque cas limite doit avoir une regle de fallback." Les cas limites sont souvent oublies et causent des bugs en production.',
          },
          {
            id: 'sprint2-tech-it-ex1-hint3',
            exercice_id: 'sprint2-tech-it-ex1',
            index: 2,
            text: 'Demandez les criteres d\'acceptance : "Pour chaque user story, definis 3 criteres d\'acceptance verifiables : \'GIVEN [contexte] WHEN [action] THEN [resultat attendu]\'. Ces criteres doivent etre testables automatiquement." Le format Given/When/Then aligne developpeurs et testeurs sur la meme definition du \'fini\'.',
          },
        ],
      },
      {
        id: 'sprint2-tech-it-ex2',
        title: 'Produire le planning de realisation et les risques',
        description:
          'Elaborez un planning de realisation en 4 phases (cadrage, developpement, recette, deploiement) ' +
          'avec pour chaque phase : duree estimee, livrables, equipe necessaire, dependances. ' +
          'Identifiez les 5 principaux risques du projet avec leur probabilite, impact et mitigation.',
        idealPrompt:
          'A partir de ces specifications [coller les specs], propose un planning de realisation en 4 phases pour le projet "Pour vous ce soir". ' +
          'Format tableau : Phase | Duree | Livrables | Equipe (roles + nombre) | Dependances | Jalons cles. ' +
          'Hypotheses : equipe de 5 developpeurs, 1 PO, 1 QA. Duree totale cible : 3 mois. ' +
          'Identifie les 5 risques principaux specifiques a ce projet (pas generiques). Pour chaque risque : description, probabilite (1-5), impact (1-5), score, mitigation concrete, signal d\'alerte. ' +
          'Identifie le chemin critique et les taches parallelisables.',
        idealResult:
          'Un planning en 4 phases avec des durees realistes et des jalons concrets. ' +
          'Une allocation d\'equipe coherente avec les competences necessaires (data scientist pour le moteur de recommandation, front pour l\'UI). ' +
          'Cinq risques specifiques au projet de recommandation (qualite des donnees d\'historique, cold start, performance temps reel). ' +
          'Une matrice de risques avec scores et mitigations actionnables. ' +
          'L\'identification claire du chemin critique et des possibilites de parallelisation pour optimiser le calendrier.',
        hints: [
          {
            id: 'sprint2-tech-it-ex2-hint1',
            exercice_id: 'sprint2-tech-it-ex2',
            index: 0,
            text: 'Demandez un planning structure : "A partir de ces specifications [coller], propose un planning en 4 phases. Format tableau : Phase | Duree | Livrables | Equipe (roles + nombre) | Dependances | Jalons cles. Hypotheses : equipe de 5 developpeurs, 1 PO, 1 QA. Duree totale cible : 3 mois." Les contraintes de ressources rendent le planning realiste et evitent le wishful thinking.',
          },
          {
            id: 'sprint2-tech-it-ex2-hint2',
            exercice_id: 'sprint2-tech-it-ex2',
            index: 1,
            text: 'Pour les risques, soyez specifique au contexte : "Identifie les 5 risques principaux specifiques a ce projet (pas des risques generiques de projet IT). Pour chaque risque : description precise, probabilite (1-5), impact (1-5), score = probabilite x impact, strategie de mitigation concrete, et signal d\'alerte qui declenche le plan B." La matrice probabilite x impact priorise les risques objectivement.',
          },
          {
            id: 'sprint2-tech-it-ex2-hint3',
            exercice_id: 'sprint2-tech-it-ex2',
            index: 2,
            text: 'Identifiez le chemin critique : "Dans ce planning, quel est le chemin critique (la sequence de taches dont tout retard impacte la date finale) ? Quelles taches peuvent etre parallelisees ? Propose un diagramme simplifie des dependances sous forme de liste." Le chemin critique est la premiere chose qu\'un directeur technique regarde.',
          },
        ],
      },
      {
        id: 'sprint2-tech-it-ex3',
        title: 'Faire challenger le cahier des charges par un architecte senior sceptique',
        description:
          'Soumettez votre cahier des charges complet a un "architecte senior sceptique" ' +
          'incarne par Copilot Chat. Il doit questionner vos choix techniques, ' +
          'pointer les zones de flou et les hypotheses non validees.',
        idealPrompt:
          'Tu es architecte senior chez Canal+ depuis 10 ans. Tu as vu des dizaines de projets de recommandation echouer. Tu es sceptique par nature. ' +
          'Lis ce cahier des charges complet [coller specs + planning + risques]. Pose tes 5 questions les plus derangeantes. ' +
          'Evalue sur 6 criteres : completude des specs, realisme du planning, adequation des ressources, gestion des risques, scalabilite, maintenabilite. ' +
          'Note chaque critere /5 avec justification. Puis donne ton verdict : go ou no-go, et les 3 pre-requis non negociables avant de demarrer. ' +
          'Redige ton avis comme un commentaire de pull request : direct, factuel, constructif.',
        idealResult:
          'Cinq questions derangeantes et techniques revelant les hypotheses non validees (acces aux donnees, RGPD, performance du modele de recommandation). ' +
          'Une grille d\'evaluation sur 6 criteres avec des notes justifiees et des recommandations d\'amelioration. ' +
          'Un verdict argumente de type go conditionnel avec des pre-requis clairs et mesurables. ' +
          'Le tout au format "PR review" : concis, direct, avec des action items identifies. ' +
          'Des remarques specifiques au contexte Canal+ (contraintes myCANAL, volumetrie, multi-devices, ecosysteme technique existant).',
        hints: [
          {
            id: 'sprint2-tech-it-ex3-hint1',
            exercice_id: 'sprint2-tech-it-ex3',
            index: 0,
            text: 'Creez un personnage technique precis : "Tu es architecte senior chez Canal+ depuis 10 ans. Tu as vu des dizaines de projets de recommandation echouer. Tu es sceptique par nature. Lis ce cahier des charges [coller] et pose tes 5 questions les plus derangeantes. Tu cherches : les hypotheses non validees, les estimations trop optimistes, les dependances cachees, les choix techniques discutables." Le scepticisme professionnel est une technique de revue puissante.',
          },
          {
            id: 'sprint2-tech-it-ex3-hint2',
            exercice_id: 'sprint2-tech-it-ex3',
            index: 1,
            text: 'Demandez une revue technique structuree : "Evalue ce cahier des charges sur 6 criteres : completude des specs, realisme du planning, adequation des ressources, gestion des risques, scalabilite de la solution, maintenabilite a long terme. Pour chaque critere : note /5, justification, recommandation d\'amelioration." La revue structuree couvre tous les angles sans rien oublier.',
          },
          {
            id: 'sprint2-tech-it-ex3-hint3',
            exercice_id: 'sprint2-tech-it-ex3',
            index: 2,
            text: 'Demandez un verdict final : "En tant qu\'architecte senior, donnerais-tu ton go pour ce projet en l\'etat ? Si non, quels sont les 3 pre-requis non negociables avant de demarrer le developpement ? Redige ton avis comme un commentaire de pull request : direct, factuel, constructif." Le format \'PR review\' est familier aux equipes tech et incite a etre concis et actionnable.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SUPPORT & CORPORATE
  // ─────────────────────────────────────────────────────────────────────────
  'support-corporate': {
    id: 'sprint2-support-corporate',
    title: 'Produire un rapport d\'analyse pour votre direction',
    description:
      'Votre direction vous demande un rapport sur l\'optimisation des couts operationnels du siege Canal+. ' +
      'Voici les donnees fictives du trimestre : ' +
      'Budget operationnel total Q4 : 12.4M EUR. Postes principaux : locaux et facilities 3.8M (31%), ' +
      'prestataires externes 3.1M (25%), deplacements et evenements 2.2M (18%), fournitures et IT courant 1.9M (15%), ' +
      'autres 1.4M (11%). ' +
      'Evolution vs Q3 : locaux +2%, prestataires +12%, deplacements -5%, fournitures +8%, autres +3%. ' +
      'Objectif de la direction : identifier 800K EUR d\'economies sur le prochain trimestre sans impacter la qualite de service. ' +
      'Produisez un rapport complet pour le COMEX.',
    consignes: [
      'Fournissez les donnees chiffrees dans le prompt : Copilot Chat analyse ce que vous lui donnez, il ne devine pas. Plus les donnees sont precises, plus l\'analyse sera pertinente.',
      'Demandez des livrables structures et orientes decision : le COMEX veut des recommandations, pas un cours d\'economie. Allez droit au but.',
      'Preparez-vous a etre challenge : anticipez les questions avec Copilot Chat pour arriver en reunion avec les reponses.',
    ],
    exercises: [
      {
        id: 'sprint2-support-corporate-ex1',
        title: 'Synthese executive d\'un rapport interne',
        description:
          'A partir des donnees budgetaires fournies dans la description du cas d\'usage, produisez une synthese executive ' +
          'd\'une page maximum : chiffres cles, tendances preoccupantes, postes a cibler en priorite ' +
          'pour atteindre l\'objectif de 800K EUR d\'economies, et une recommandation argumentee.',
        idealPrompt:
          'Tu es controleur de gestion senior chez Canal+. Voici les donnees budgetaires operationnelles Q4 : budget total 12.4M EUR. ' +
          'Postes : locaux 3.8M (31%, +2% vs Q3), prestataires 3.1M (25%, +12%), deplacements 2.2M (18%, -5%), fournitures/IT 1.9M (15%, +8%), autres 1.4M (11%, +3%). ' +
          'Objectif : identifier 800K EUR d\'economies. Produis une synthese executive d\'1 page : ' +
          '1) 3 chiffres cles 2) 2 alertes (postes en hausse anormale) 3) 3 postes prioritaires pour les 800K d\'economies ' +
          '4) Matrice effort/impact des leviers 5) Recommandation en 3 lignes. Ton : factuel, direct, sans jargon.',
        idealResult:
          'Trois chiffres cles percutants qui cadrent immediatement la situation pour le COMEX. ' +
          'Deux alertes chiffrees en euros (prestataires +12% = +332K EUR, fournitures +8% = +140K EUR). ' +
          'Trois postes prioritaires avec le montant d\'economie potentiel pour chaque, totalisant au moins 800K EUR. ' +
          'Une matrice 2x2 classant les leviers par facilite de mise en oeuvre et montant d\'economie. ' +
          'Une recommandation synthetique orientee decision, pas descriptive.',
        hints: [
          {
            id: 'sprint2-support-corporate-ex1-hint1',
            exercice_id: 'sprint2-support-corporate-ex1',
            index: 0,
            text: 'Structurez la demande de synthese : "Voici les donnees budgetaires operationnelles Q4 Canal+ : [coller]. Produis une synthese executive d\'1 page structuree ainsi : 1) 3 chiffres cles a retenir 2) 2 alertes (postes en hausse anormale) 3) 3 postes prioritaires pour atteindre 800K EUR d\'economies 4) Recommandation en 3 lignes. Ton : factuel, direct, sans jargon." La structure en bullet points est le format prefere des COMEX.',
          },
          {
            id: 'sprint2-support-corporate-ex1-hint2',
            exercice_id: 'sprint2-support-corporate-ex1',
            index: 1,
            text: 'Demandez une analyse des ecarts : "Pour chaque poste budgetaire, calcule l\'ecart en valeur absolue vs Q3 et classe-les du plus gros depassement au plus petit. Les prestataires externes ont augmente de 12% : combien cela represente-t-il en euros ? Est-ce suffisant a lui seul pour couvrir une partie des 800K ?" Convertir les pourcentages en euros rend l\'analyse immediatement actionnable.',
          },
          {
            id: 'sprint2-support-corporate-ex1-hint3',
            exercice_id: 'sprint2-support-corporate-ex1',
            index: 2,
            text: 'Ajoutez une dimension de priorisation : "Classe les leviers d\'economie selon 2 axes : facilite de mise en oeuvre (rapide/moyen/long) et montant d\'economie potentiel (faible/moyen/eleve). Presente sous forme de matrice 2x2. Les quick wins en haut a droite sont les priorites." La matrice effort/impact est un outil de decision classique que le COMEX connait et apprecie.',
          },
        ],
      },
      {
        id: 'sprint2-support-corporate-ex2',
        title: 'Preparer l\'argumentaire pour la presentation au COMEX',
        description:
          'Transformez votre synthese en un argumentaire structure de 15 lignes pour le COMEX. ' +
          'Format : constat factuel, diagnostic, 3 leviers d\'action avec impact chiffre, ' +
          'calendrier de mise en oeuvre, et phrase de conclusion engageante.',
        idealPrompt:
          'A partir de cette synthese [coller], redige un argumentaire de 15 lignes pour le COMEX Canal+. ' +
          'Structure pyramide inversee : Constat (2 lignes, chiffres choc) | Diagnostic (3 lignes, causes identifiees) | ' +
          '3 leviers d\'action avec impact chiffre en EUR | Calendrier (quick wins 1 mois, moyen terme 3 mois) | Conclusion engageante (1 ligne). ' +
          'Pour chaque levier, ajoute un benchmark sectoriel. Integre 2 anticipations d\'objections au format "on pourrait objecter que... mais en realite...". ' +
          'Ton : assertif, responsable, oriente decision.',
        idealResult:
          'Un argumentaire de 15 lignes exactement, dense et structure selon le format demande. ' +
          'Des chiffres choc en ouverture qui captent l\'attention du COMEX. ' +
          'Trois leviers d\'action chiffres en euros avec des benchmarks sectoriels credibles. ' +
          'Un calendrier realiste distinguant les quick wins des actions moyen terme. ' +
          'Deux anticipations d\'objections qui montrent la maturite de la reflexion. ' +
          'Une conclusion en une phrase engageante qui appelle a la decision.',
        hints: [
          {
            id: 'sprint2-support-corporate-ex2-hint1',
            exercice_id: 'sprint2-support-corporate-ex2',
            index: 0,
            text: 'Utilisez un framework de presentation COMEX : "A partir de cette synthese [coller], redige un argumentaire de 15 lignes pour le COMEX. Structure : Constat (2 lignes, chiffres choc) | Diagnostic (3 lignes, causes identifiees) | 3 leviers d\'action avec impact chiffre en EUR | Calendrier (quick wins 1 mois, actions moyen terme 3 mois) | Conclusion engageante (1 ligne). Ton : assertif et responsable." Le format pyramide inversee (conclusion d\'abord) capte l\'attention du COMEX.',
          },
          {
            id: 'sprint2-support-corporate-ex2-hint2',
            exercice_id: 'sprint2-support-corporate-ex2',
            index: 1,
            text: 'Renforcez avec des comparaisons : "Pour chaque levier, ajoute un benchmark : que font les entreprises de taille similaire sur ce poste ? Par exemple, le ratio prestataires/masse salariale est-il dans la norme du secteur media ? Les comparaisons sectorielles legitimisent vos recommandations." Le benchmark transforme une opinion en analyse fondee.',
          },
          {
            id: 'sprint2-support-corporate-ex2-hint3',
            exercice_id: 'sprint2-support-corporate-ex2',
            index: 2,
            text: 'Anticipez les objections dans l\'argumentaire : "Integre une phrase de type \'on pourrait objecter que... mais en realite...\' pour les 2 objections les plus probables. Cela montre au COMEX que vous avez anticipe les critiques et renforce votre credibilite." Traiter les objections proactivement est une technique de persuasion puissante.',
          },
        ],
      },
      {
        id: 'sprint2-support-corporate-ex3',
        title: 'Anticiper les questions du COMEX et preparer les reponses',
        description:
          'Demandez a Copilot Chat d\'anticiper les 5 questions les plus difficiles que le COMEX ' +
          'pourrait poser sur votre rapport. Pour chaque question, preparez une reponse argumentee ' +
          'de 3 lignes avec des donnees a l\'appui.',
        idealPrompt:
          'Tu es le DAF de Canal+. Tu lis ce rapport d\'optimisation des couts [coller l\'argumentaire complet]. ' +
          'Pose les 5 questions les plus derangeantes que tu poserais en COMEX. Pour chaque question : formule-la telle qu\'elle serait posee en reunion, ' +
          'explique pourquoi elle est critique. Puis pour chaque question, prepare une reponse en 3 lignes max : fait cle, explication, engagement concret. ' +
          'Compile le tout en une fiche de preparation : tableau Question | Qui la posera | Reponse | Donnee d\'appui. La fiche doit tenir sur une page.',
        idealResult:
          'Cinq questions formulees de maniere realiste comme en reunion de COMEX (ton direct, exigent). ' +
          'Des questions couvrant differents angles : financier (DAF), operationnel (DG), RH (DRH), strategique. ' +
          'Des reponses de 3 lignes maximum, factuelles, avec un engagement mesurable et date. ' +
          'Un tableau synthetique consultable rapidement pendant la reunion. ' +
          'L\'identification de qui est susceptible de poser chaque question, permettant de se preparer a chaque interlocuteur.',
        hints: [
          {
            id: 'sprint2-support-corporate-ex3-hint1',
            exercice_id: 'sprint2-support-corporate-ex3',
            index: 0,
            text: 'Faites jouer les membres du COMEX : "Tu es le DAF de Canal+. Tu lis ce rapport d\'optimisation des couts [coller]. Pose les 5 questions les plus derangeantes que tu poserais en COMEX. Pour chaque question : formule-la telle qu\'elle serait posee en reunion, explique pourquoi elle est critique, et ce que tu attends comme reponse." Incarner un role specifique du COMEX (DAF, DG, DRH) donne des questions ciblees et realistes.',
          },
          {
            id: 'sprint2-support-corporate-ex3-hint2',
            exercice_id: 'sprint2-support-corporate-ex3',
            index: 1,
            text: 'Preparez des reponses solides : "Pour chaque question du DAF, prepare une reponse en 3 lignes maximum : fait cle, explication, engagement concret. La reponse doit tenir en 30 secondes a l\'oral. Pas de langue de bois : si on n\'a pas la reponse, on dit quand on l\'aura." Les reponses courtes et engagees impressionnent plus que les longues justifications.',
          },
          {
            id: 'sprint2-support-corporate-ex3-hint3',
            exercice_id: 'sprint2-support-corporate-ex3',
            index: 2,
            text: 'Creez une fiche de preparation : "Compile le tout en une fiche de preparation COMEX : tableau avec colonnes Question probable | Qui la posera | Reponse preparee | Donnee d\'appui | Document de reference. Cette fiche doit tenir sur une page et pouvoir etre consultee rapidement pendant la reunion." La fiche de preparation est un outil concret que les participants garderont apres la formation.',
          },
        ],
      },
    ],
  },
};
