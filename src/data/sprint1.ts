import type { Scenario, SprintDocument } from '../types';
import type { MetierGroupId } from './metierGroups';

/* ------------------------------------------------------------------ */
/*  Sprint 1 — Cas pratique transverse (25 min)                       */
/* ------------------------------------------------------------------ */

export const sprint1Meta = {
  id: 'sprint-1',
  title: 'Sprint 1 — Cas pratique transverse',
  color: 'var(--color-sprint-1)',
  duration: 25,
};

/* ================================================================== */
/*  CONTENU & CREATION                                                */
/* ================================================================== */

const contenuCreationScenario: Scenario = {
  id: 'sprint1-contenu-creation',
  title: 'Preparer le lancement editorial d\'une nouvelle serie originale Canal+',
  description:
    'A partir du brief creatif de la serie "Sables Rouges", vous preparez l\'ensemble des livrables editoriaux : note de pitch, plan de presentation, posts sociaux et mail presse.',
  steps: [
    /* ---------- Step 1 ---------- */
    {
      id: 'sprint1-contenu-creation-step1',
      title: 'Analyser le brief de la serie',
      description:
        'Collez le brief creatif de "Sables Rouges" dans Copilot Chat et demandez-lui d\'extraire les points cles : concept, cible, ton, casting, calendrier.',
      hints: [
        {
          id: 'sprint1-contenu-creation-step1-hint1',
          exercice_id: 'sprint1-contenu-creation-step1',
          index: 0,
          text: 'Commencez par une extraction structuree : "Analyse ce brief creatif et extrais les informations suivantes sous forme de liste : concept de la serie, genre, public cible, ton editorial, casting principal, nombre d\'episodes, date de diffusion prevue, et les 3 arguments de vente principaux." En demandant des categories precises, vous obtenez un resultat organise et complet.',
        },
        {
          id: 'sprint1-contenu-creation-step1-hint2',
          exercice_id: 'sprint1-contenu-creation-step1',
          index: 1,
          text: 'Allez plus loin en demandant une analyse editoriale : "A partir de ces elements, identifie ce qui differencie cette serie des autres thrillers politiques recents (Le Bureau des Legendes, Baron Noir). Quels sont les angles editoriaux uniques a mettre en avant ?" Comparer avec des references connues aide Copilot a affiner son analyse.',
        },
        {
          id: 'sprint1-contenu-creation-step1-hint3',
          exercice_id: 'sprint1-contenu-creation-step1',
          index: 2,
          text: 'Pour valider votre comprehension, demandez une reformulation : "Resume ce brief en 3 phrases percutantes que je pourrais utiliser pour presenter la serie a un collegue en 30 secondes." Cet exercice de synthese permet de verifier que l\'essentiel est bien capture.',
        },
      ],
    },
    /* ---------- Step 2 ---------- */
    {
      id: 'sprint1-contenu-creation-step2',
      title: 'Rediger une note de pitch pour le comite editorial',
      description:
        'Demandez a Copilot de rediger une note de pitch d\'une page, structuree et percutante, destinee au comite editorial Canal+.',
      hints: [
        {
          id: 'sprint1-contenu-creation-step2-hint1',
          exercice_id: 'sprint1-contenu-creation-step2',
          index: 0,
          text: 'Donnez le contexte et le format attendu : "Redige une note de pitch d\'une page pour le comite editorial Canal+. Structure : accroche (2 lignes), synopsis (5 lignes), positionnement editorial, public cible, arguments cles (3 bullet points), comparables marche. Ton : professionnel et enthousiaste." Plus vous precisez la structure, plus le resultat est utilisable tel quel.',
        },
        {
          id: 'sprint1-contenu-creation-step2-hint2',
          exercice_id: 'sprint1-contenu-creation-step2',
          index: 1,
          text: 'Pour l\'accroche, essayez la technique du pitch elevator : "Propose 3 versions d\'accroches differentes pour cette note de pitch : une factuelle, une emotionnelle, et une provocante. Chacune en 2 lignes maximum." Avoir plusieurs options permet de choisir la plus adaptee au comite.',
        },
        {
          id: 'sprint1-contenu-creation-step2-hint3',
          exercice_id: 'sprint1-contenu-creation-step2',
          index: 2,
          text: 'Ajoutez le regard strategique : "Ajoute un paragraphe de positionnement strategique : pourquoi cette serie renforce la ligne editoriale de Canal+ en 2025, quel public elle recrute, et comment elle se distingue dans le catalogue." Le comite editorial attend une vision, pas juste un resume.',
        },
      ],
    },
    /* ---------- Step 3 ---------- */
    {
      id: 'sprint1-contenu-creation-step3',
      title: 'Produire le plan de 6 slides pour la presentation',
      description:
        'Creez un plan detaille de 6 slides pour presenter la serie en reunion editoriale, avec titres et contenus par slide.',
      hints: [
        {
          id: 'sprint1-contenu-creation-step3-hint1',
          exercice_id: 'sprint1-contenu-creation-step3',
          index: 0,
          text: 'Demandez un format directement exploitable : "Propose un plan de presentation en 6 slides pour la serie Sables Rouges : 1) Slide de titre avec tagline 2) Concept et synopsis 3) Casting et equipe artistique 4) Positionnement editorial et cible 5) Plan de lancement et calendrier 6) Prochaines etapes. Pour chaque slide, donne le titre exact et 3-4 bullet points prets a copier-coller."',
        },
        {
          id: 'sprint1-contenu-creation-step3-hint2',
          exercice_id: 'sprint1-contenu-creation-step3',
          index: 1,
          text: 'Pour les slides visuelles, pensez aux indications de mise en page : "Pour chaque slide, ajoute une note de mise en scene : quelle image ou visuel placer en fond, quel ratio texte/image, quel element mettre en evidence." Cela aide a briefer le graphiste ou a creer soi-meme le support.',
        },
        {
          id: 'sprint1-contenu-creation-step3-hint3',
          exercice_id: 'sprint1-contenu-creation-step3',
          index: 2,
          text: 'Pensez au storytelling de la presentation : "Reorganise ces 6 slides pour creer une progression narrative : commence par le probleme (le marche), puis la solution (notre serie), puis la preuve (casting, equipe), et termine par l\'appel a l\'action. Ajoute une phrase de transition entre chaque slide." Une bonne presentation raconte une histoire.',
        },
      ],
    },
    /* ---------- Step 4 ---------- */
    {
      id: 'sprint1-contenu-creation-step4',
      title: 'Rediger les posts sociaux (Instagram + X)',
      description:
        'Demandez a Copilot de rediger les posts d\'annonce pour Instagram et X (ex-Twitter), adaptes aux codes de chaque plateforme.',
      hints: [
        {
          id: 'sprint1-contenu-creation-step4-hint1',
          exercice_id: 'sprint1-contenu-creation-step4',
          index: 0,
          text: 'Specifiez les contraintes de chaque plateforme : "Redige un post d\'annonce pour Sables Rouges adapte a chaque reseau : 1) Instagram : legende de 150 mots max, ton immersif et cinematographique, 5 hashtags pertinents, suggestion de visuel. 2) X : 280 caracteres max, ton percutant, 2 hashtags. Les deux doivent donner envie de decouvrir la serie sans trop en devoiler."',
        },
        {
          id: 'sprint1-contenu-creation-step4-hint2',
          exercice_id: 'sprint1-contenu-creation-step4',
          index: 1,
          text: 'Explorez differentes approches creatives : "Propose 3 angles differents pour le post Instagram : un angle mystere (teaser), un angle casting (mettre en avant les acteurs), et un angle coulisses (derriere la camera). Pour chaque angle, redige la legende complete." Varier les angles permet de choisir le plus engageant.',
        },
        {
          id: 'sprint1-contenu-creation-step4-hint3',
          exercice_id: 'sprint1-contenu-creation-step4',
          index: 2,
          text: 'Demandez une adaptation au ton Canal+ : "Reformule ces posts dans le ton de voix Canal+ : premium, audacieux, un peu decale. Inspire-toi du style des comptes @canalplus. Evite les formulations generiques type \'Decouvrez\' ou \'Ne manquez pas\'." Donner des contre-exemples aide Copilot a eviter les cliches.',
        },
      ],
    },
    /* ---------- Step 5 ---------- */
    {
      id: 'sprint1-contenu-creation-step5',
      title: 'Preparer le mail d\'invitation presse',
      description:
        'Redigez un mail professionnel pour inviter les journalistes a la projection presse de la serie.',
      hints: [
        {
          id: 'sprint1-contenu-creation-step5-hint1',
          exercice_id: 'sprint1-contenu-creation-step5',
          index: 0,
          text: 'Structurez le mail avec les codes des relations presse : "Redige un mail d\'invitation presse pour la projection de Sables Rouges. Structure : objet accrocheur, formule de politesse personnalisee, 2 lignes de contexte sur la serie, details pratiques (date, lieu, horaire), mention du cocktail/rencontre avec l\'equipe, RSVP avec deadline. Ton : elegant et exclusif, comme une invitation privilegiee."',
        },
        {
          id: 'sprint1-contenu-creation-step5-hint2',
          exercice_id: 'sprint1-contenu-creation-step5',
          index: 1,
          text: 'L\'objet du mail est crucial : "Propose 5 objets de mail differents pour cette invitation presse. Criteres : moins de 50 caracteres, doit susciter la curiosite, doit mentionner Canal+, ne doit pas ressembler a un spam." Un bon objet multiplie le taux d\'ouverture par 3.',
        },
        {
          id: 'sprint1-contenu-creation-step5-hint3',
          exercice_id: 'sprint1-contenu-creation-step5',
          index: 2,
          text: 'Ajoutez les elements pratiques souvent oublies : "Complete ce mail avec : une mention des conditions d\'embargo, un lien vers le dossier de presse en ligne, les contacts de l\'attachee de presse, et une phrase sur l\'accessibilite du lieu. Ajoute aussi un PS avec un element exclusif pour donner envie de venir." Les petits details font la difference dans les relations presse.',
        },
      ],
    },
  ],
};

const contenuCreationDocuments: SprintDocument[] = [
  {
    id: 'sprint1-contenu-creation-doc1',
    title: 'Brief creatif — Serie "Sables Rouges"',
    type: 'brief',
    content: `BRIEF CREATIF — SERIE ORIGINALE CANAL+
Titre de travail : Sables Rouges
Genre : Thriller politique
Format : 8 x 52 minutes

CONCEPT
Dakar, 2025. Aminata Diallo, brillante diplomate franco-senegalaise, est nommee mediatrice dans un conflit minier qui oppose un gouvernement ouest-africain a une multinationale francaise. En creusant, elle decouvre que les enjeux depassent largement le minerai : trafic d'armes, corruption au sommet de l'Etat, et un secret familial enfoui depuis 30 ans.

CASTING ENVISAGE
- Role principal : Aissa Maiga (en negociation)
- Role secondaire : Reda Kateb (confirme)
- Realisateur : Ladj Ly (en discussion)

PUBLIC CIBLE
Adultes 25-49 ans, CSP+, amateurs de thrillers politiques et de series a dimension internationale. Cible secondaire : diaspora africaine en France.

POSITIONNEMENT EDITORIAL
Sables Rouges s'inscrit dans la ligne des creations originales Canal+ a dimension internationale (ZeroZeroZero, Baron Noir). La serie affirme l'ambition africaine de Canal+ tout en proposant un regard neuf sur les relations France-Afrique.

CALENDRIER PREVISIONNEL
- Tournage : septembre-decembre 2025 (Dakar, Paris)
- Post-production : janvier-mars 2026
- Diffusion souhaitee : mai 2026 (festival de Cannes en vitrine ?)

BUDGET : 12M€ (co-production avec A+ et TV5 Monde)

CONTRAINTES
- Accord de coproduction a finaliser avant le 15 juin 2025
- Le realisateur souhaite tourner 100% en decors naturels
- Enjeu de representation : consultante diversite a integrer des la pre-production

Contact projet : Sophie Marchand, Directrice des creations originales
Date du brief : 12 mars 2025`,
    stepId: 'sprint1-contenu-creation-step1',
  },
];

/* ================================================================== */
/*  DIFFUSION & PROGRAMMATION                                         */
/* ================================================================== */

const diffusionProgrammationScenario: Scenario = {
  id: 'sprint1-diffusion-programmation',
  title: 'Construire la programmation d\'une semaine evenementielle Canal+',
  description:
    'A partir du mail de la direction des programmes, vous construisez la grille de la semaine thematique "Frissons d\'ete" : programmation, textes, support de coordination et communication interne.',
  steps: [
    /* ---------- Step 1 ---------- */
    {
      id: 'sprint1-diffusion-programmation-step1',
      title: 'Analyser le mail de la direction des programmes',
      description:
        'Collez le mail dans Copilot Chat et demandez-lui d\'extraire les contraintes, objectifs et elements cles pour construire la grille.',
      hints: [
        {
          id: 'sprint1-diffusion-programmation-step1-hint1',
          exercice_id: 'sprint1-diffusion-programmation-step1',
          index: 0,
          text: 'Demandez une extraction par categories metier : "Analyse ce mail et extrais les informations en 5 categories : 1) Objectifs de la semaine thematique, 2) Contraintes horaires et techniques, 3) Contenus imposes ou suggeres, 4) Public vise, 5) Deadlines a respecter. Pour chaque categorie, liste les elements sous forme de bullet points." Categoriser aide a ne rien oublier.',
        },
        {
          id: 'sprint1-diffusion-programmation-step1-hint2',
          exercice_id: 'sprint1-diffusion-programmation-step1',
          index: 1,
          text: 'Identifiez ce qui manque : "Quelles informations manquent dans ce mail pour construire une grille de programmation complete ? Liste les questions que je devrais poser a la direction avant de commencer." Anticiper les manques evite les allers-retours.',
        },
        {
          id: 'sprint1-diffusion-programmation-step1-hint3',
          exercice_id: 'sprint1-diffusion-programmation-step1',
          index: 2,
          text: 'Demandez une hierarchisation : "Parmi les contraintes identifiees, classe-les par ordre de priorite : quelles sont les contraintes non negociables (horaires, droits) vs les contraintes souples (suggestions, preferences) ?" Cela permet de savoir ou vous avez de la liberte creative.',
        },
      ],
    },
    /* ---------- Step 2 ---------- */
    {
      id: 'sprint1-diffusion-programmation-step2',
      title: 'Construire la grille de programmation sur 7 jours',
      description:
        'Demandez a Copilot de construire une grille de programmation detaillee pour la semaine "Frissons d\'ete".',
      hints: [
        {
          id: 'sprint1-diffusion-programmation-step2-hint1',
          exercice_id: 'sprint1-diffusion-programmation-step2',
          index: 0,
          text: 'Soyez precis sur le format tableau : "Construis une grille de programmation pour 7 jours (lundi a dimanche) au format tableau. Colonnes : Jour | Creneau horaire | Programme | Genre | Duree | Note. Creneaux : Access prime (20h45-21h), Prime time (21h-23h), 2eme partie de soiree (23h-1h). Respecte les contraintes suivantes : [coller les contraintes extraites]."',
        },
        {
          id: 'sprint1-diffusion-programmation-step2-hint2',
          exercice_id: 'sprint1-diffusion-programmation-step2',
          index: 1,
          text: 'Demandez une logique de progression : "Propose une progression thematique sur la semaine : commence par des frissons legers (comédies horrifiques) en debut de semaine et monte en intensite vers le week-end (thrillers, horreur). Justifie tes choix en fonction des habitudes d\'audience." Une grille raconte une histoire sur 7 jours.',
        },
        {
          id: 'sprint1-diffusion-programmation-step2-hint3',
          exercice_id: 'sprint1-diffusion-programmation-step2',
          index: 2,
          text: 'Verifiez la coherence : "Verifie que cette grille respecte les regles suivantes : pas deux films du meme realisateur la meme semaine, alternance fiction/documentaire, au moins une production Canal+ originale par jour, pas de contenu interdit aux moins de 16 ans avant 22h30. Corrige si necessaire." Donner des regles de validation permet a Copilot de s\'auto-corriger.',
        },
      ],
    },
    /* ---------- Step 3 ---------- */
    {
      id: 'sprint1-diffusion-programmation-step3',
      title: 'Rediger les textes de presentation pour le guide des programmes',
      description:
        'Redigez les textes courts de presentation pour chaque programme de la semaine, tels qu\'ils apparaitront dans le guide Canal+.',
      hints: [
        {
          id: 'sprint1-diffusion-programmation-step3-hint1',
          exercice_id: 'sprint1-diffusion-programmation-step3',
          index: 0,
          text: 'Donnez un modele de format : "Pour chaque programme de la grille, redige un texte de presentation au format guide des programmes Canal+ : titre en gras, annee et duree entre parentheses, texte de 3 lignes max qui donne envie sans spoiler. Ton : informatif et seduisant. Ajoute une note de 1 a 3 etoiles pour le niveau de frisson."',
        },
        {
          id: 'sprint1-diffusion-programmation-step3-hint2',
          exercice_id: 'sprint1-diffusion-programmation-step3',
          index: 1,
          text: 'Pour les films connus, demandez de l\'originalite : "Pour les films deja tres connus (type classiques du genre), evite les synopsis habituels. Propose plutot un angle decale : pourquoi le revoir en 2025, un detail de tournage meconnu, ou un lien avec l\'actualite. L\'objectif est que meme un spectateur qui connait le film ait envie de le revoir."',
        },
        {
          id: 'sprint1-diffusion-programmation-step3-hint3',
          exercice_id: 'sprint1-diffusion-programmation-step3',
          index: 2,
          text: 'Creez une coherence editoriale : "Ajoute un chapeau editorial de 5 lignes pour introduire la semaine thematique dans son ensemble. Ce texte doit creer un fil rouge entre tous les programmes et donner le ton de la semaine Frissons d\'ete. Il sera place en tete du guide." Un chapeau federe l\'ensemble de la programmation.',
        },
      ],
    },
    /* ---------- Step 4 ---------- */
    {
      id: 'sprint1-diffusion-programmation-step4',
      title: 'Preparer un support PowerPoint de coordination',
      description:
        'Creez le contenu d\'un support PowerPoint a partager avec les equipes techniques, marketing et communication pour coordonner la semaine.',
      hints: [
        {
          id: 'sprint1-diffusion-programmation-step4-hint1',
          exercice_id: 'sprint1-diffusion-programmation-step4',
          index: 0,
          text: 'Pensez aux differents publics du support : "Propose un support PowerPoint de 6 slides pour la coordination de la semaine Frissons d\'ete : 1) Vue d\'ensemble et objectifs 2) Grille de programmation synthetique 3) Actions marketing associees 4) Planning technique (encodage, bandes-annonces) 5) Communication (reseaux sociaux, newsletter) 6) Retroplanning et contacts. Pour chaque slide : titre + 4 bullet points max."',
        },
        {
          id: 'sprint1-diffusion-programmation-step4-hint2',
          exercice_id: 'sprint1-diffusion-programmation-step4',
          index: 1,
          text: 'Ajoutez les KPIs : "Sur la slide vue d\'ensemble, ajoute les indicateurs de succes de la semaine : objectif d\'audience par creneau, objectif de part de marche, nombre de nouveaux abonnes vises, engagement reseaux sociaux attendu. Donne des chiffres realistes pour Canal+." Les KPIs rendent le support actionnable.',
        },
        {
          id: 'sprint1-diffusion-programmation-step4-hint3',
          exercice_id: 'sprint1-diffusion-programmation-step4',
          index: 2,
          text: 'Pensez au retroplanning : "Construis un retroplanning visuel J-21 a J+1 avec les jalons cles : validation grille, livraison bandes-annonces, lancement campagne reseaux sociaux, brief equipes techniques, repetition, diffusion. Format timeline horizontale." Un retroplanning clair evite les oublis de derniere minute.',
        },
      ],
    },
    /* ---------- Step 5 ---------- */
    {
      id: 'sprint1-diffusion-programmation-step5',
      title: 'Rediger les messages de communication interne (mail + Teams)',
      description:
        'Redigez le mail d\'information aux equipes et le message Teams pour le canal de coordination.',
      hints: [
        {
          id: 'sprint1-diffusion-programmation-step5-hint1',
          exercice_id: 'sprint1-diffusion-programmation-step5',
          index: 0,
          text: 'Demandez deux tons differents : "Redige deux messages pour annoncer la semaine Frissons d\'ete en interne : 1) Un mail formel a envoyer a toutes les equipes concernees (technique, marketing, communication, programmation) avec les informations cles et le planning. 2) Un message Teams court et dynamique pour le canal #programmation qui donne le top depart de la coordination. Meme contenu, ton adapte a chaque canal."',
        },
        {
          id: 'sprint1-diffusion-programmation-step5-hint2',
          exercice_id: 'sprint1-diffusion-programmation-step5',
          index: 1,
          text: 'Pour le mail formel, structurez clairement : "Le mail doit contenir : objet precis avec la date, rappel du contexte en 2 lignes, les 3 actions cles attendues de chaque equipe, le lien vers le support de coordination, et la date de la prochaine reunion de suivi. Termine par les contacts referents." Un mail d\'action doit permettre au lecteur de savoir quoi faire en 30 secondes.',
        },
        {
          id: 'sprint1-diffusion-programmation-step5-hint3',
          exercice_id: 'sprint1-diffusion-programmation-step5',
          index: 2,
          text: 'Pour le message Teams, jouez sur l\'engagement : "Le message Teams doit faire 5 lignes max, commencer par un emoji thematique, mentionner les personnes cles avec @, et finir par une question ou un sondage rapide (ex : Quel est votre film d\'horreur prefere ?). L\'objectif est de creer de l\'enthousiasme." Teams est un espace de conversation, pas de memo.',
        },
      ],
    },
  ],
};

const diffusionProgrammationDocuments: SprintDocument[] = [
  {
    id: 'sprint1-diffusion-programmation-doc1',
    title: 'Mail de la direction des programmes — Semaine "Frissons d\'ete"',
    type: 'mail',
    content: `De : Philippe Audrain <p.audrain@canalplus.fr>
A : Equipe Programmation <programmation@canalplus.fr>
Objet : Semaine thematique "Frissons d'ete" — du 14 au 20 juillet 2025
Date : 2 avril 2025

Bonjour a tous,

Suite au comite de programmation du 28 mars, nous avons valide le principe d'une semaine thematique "Frissons d'ete" du 14 au 20 juillet. L'objectif est double : fideliser notre audience estivale (historiquement en baisse de 15% en juillet) et creer un rendez-vous evenementiel qui genere du buzz sur les reseaux sociaux.

Voici les elements cadres :
- Creneau principal : prime time 21h-23h, 7 soirs
- Creneau secondaire : 2eme partie de soiree 23h15-1h (pour les contenus plus "intenses")
- Mix souhaite : 4 films, 2 soirees series (marathons), 1 soiree documentaire
- Obligations : au moins 2 Canal+ Originals dans la semaine, 1 avant-premiere exclusive
- Le samedi soir DOIT etre le point culminant de la semaine (notre plus gros titre)
- Budget bandes-annonces specifiques : 45K€ valide

Contraintes techniques :
- Les droits de diffusion de "Hereditary" expirent le 30 juin — a verifier avec le juridique
- La serie "Marianne" (Netflix) n'est PAS disponible — ne pas l'inclure
- Canal+ Cinema a reserve le creneau du mercredi 21h pour une avant-premiere — a coordonner

Cote marketing, Isabelle Renard (marketing) souhaite qu'on lui transmette la grille finalisee avant le 20 avril pour caler la campagne reseaux sociaux et newsletter.

Je compte sur vous pour me proposer une premiere version de la grille d'ici le 10 avril. On en discute en reunion mardi prochain.

Cordialement,
Philippe Audrain
Directeur adjoint des programmes, Canal+`,
    stepId: 'sprint1-diffusion-programmation-step1',
  },
];

/* ================================================================== */
/*  COMMERCIAL & MARKETING                                            */
/* ================================================================== */

const commercialMarketingScenario: Scenario = {
  id: 'sprint1-commercial-marketing',
  title: 'Lancer une campagne d\'acquisition pour une nouvelle offre Canal+',
  description:
    'A partir du brief marketing de la nouvelle offre Canal+ Sport, vous construisez le plan de campagne, les messages publicitaires, l\'argumentaire commercial et le mail de lancement interne.',
  steps: [
    /* ---------- Step 1 ---------- */
    {
      id: 'sprint1-commercial-marketing-step1',
      title: 'Analyser le brief marketing',
      description:
        'Collez le brief marketing dans Copilot Chat et extrayez la cible, les objectifs business et les messages cles.',
      hints: [
        {
          id: 'sprint1-commercial-marketing-step1-hint1',
          exercice_id: 'sprint1-commercial-marketing-step1',
          index: 0,
          text: 'Structurez l\'extraction comme un plan marketing : "Analyse ce brief et extrais les elements suivants sous forme structuree : 1) Cible principale et secondaire (profil socio-demo + comportemental), 2) Objectifs quantitatifs (nombre d\'abonnes, CA), 3) Objectifs qualitatifs (image, notoriete), 4) Messages cles a faire passer, 5) Budget et timing, 6) Contraintes et interdits." Un brief bien decortique, c\'est 50% du travail fait.',
        },
        {
          id: 'sprint1-commercial-marketing-step1-hint2',
          exercice_id: 'sprint1-commercial-marketing-step1',
          index: 1,
          text: 'Demandez une analyse de la cible : "A partir du profil cible decrit dans le brief, cree un persona marketing detaille : prenom fictif, age, profession, habitudes de consommation media, motivations d\'achat, freins potentiels, canaux de communication preferes." Un persona rend la cible concrete et aide a personnaliser les messages.',
        },
        {
          id: 'sprint1-commercial-marketing-step1-hint3',
          exercice_id: 'sprint1-commercial-marketing-step1',
          index: 2,
          text: 'Identifiez les points de differenciation : "Quels sont les 3 arguments qui distinguent cette offre de la concurrence (beIN Sports, DAZN, Amazon Prime Video) ? Pour chaque argument, indique en quoi il repond a un besoin non satisfait de la cible." Connaitre la concurrence permet de mieux positionner l\'offre.',
        },
      ],
    },
    /* ---------- Step 2 ---------- */
    {
      id: 'sprint1-commercial-marketing-step2',
      title: 'Produire le plan de campagne multi-canal',
      description:
        'Demandez a Copilot de construire un plan de campagne detaille couvrant les principaux canaux d\'acquisition.',
      hints: [
        {
          id: 'sprint1-commercial-marketing-step2-hint1',
          exercice_id: 'sprint1-commercial-marketing-step2',
          index: 0,
          text: 'Donnez le cadre complet : "Construis un plan de campagne d\'acquisition multi-canal pour l\'offre Canal+ Sport. Canaux a couvrir : 1) Digital (Meta Ads, Google Ads, YouTube), 2) TV (spots Canal+), 3) CRM (emailing base existante), 4) Partenariats (clubs sportifs, salles de sport), 5) Points de vente. Pour chaque canal : objectif, message cle, format, budget indicatif, KPI de suivi."',
        },
        {
          id: 'sprint1-commercial-marketing-step2-hint2',
          exercice_id: 'sprint1-commercial-marketing-step2',
          index: 1,
          text: 'Demandez un phasage : "Organise cette campagne en 3 phases : 1) Teasing (J-14 a J-7) — creer l\'attente, 2) Lancement (J-Jour a J+7) — maximiser la visibilite, 3) Conversion (J+7 a J+30) — pousser a l\'achat. Pour chaque phase, indique les canaux actifs et les messages adaptes." Le phasage evite de tout lancer en meme temps.',
        },
        {
          id: 'sprint1-commercial-marketing-step2-hint3',
          exercice_id: 'sprint1-commercial-marketing-step2',
          index: 2,
          text: 'Ajoutez la dimension budgetaire : "Repartis le budget total de 800K€ entre les differents canaux et phases. Justifie chaque allocation en fonction du ROI attendu et du cout d\'acquisition moyen par canal. Presente sous forme de tableau." Chiffrer le plan le rend credible et defensible en comite.',
        },
      ],
    },
    /* ---------- Step 3 ---------- */
    {
      id: 'sprint1-commercial-marketing-step3',
      title: 'Creer les messages publicitaires adaptes par canal',
      description:
        'Redigez les messages publicitaires (accroches, corps de texte, CTA) adaptes a chaque canal de la campagne.',
      hints: [
        {
          id: 'sprint1-commercial-marketing-step3-hint1',
          exercice_id: 'sprint1-commercial-marketing-step3',
          index: 0,
          text: 'Specifiez les contraintes par format : "Redige les messages publicitaires pour chaque canal avec les contraintes suivantes : Meta Ads : accroche 125 caracteres + texte 250 caracteres + CTA. Google Ads : titre 30 caracteres x3 + description 90 caracteres x2. Emailing : objet 50 caracteres + preview 100 caracteres + corps 200 mots. Pour chaque message, le benefice client doit etre dans la premiere ligne."',
        },
        {
          id: 'sprint1-commercial-marketing-step3-hint2',
          exercice_id: 'sprint1-commercial-marketing-step3',
          index: 1,
          text: 'Testez differents angles : "Pour les Meta Ads, propose 3 variantes A/B : une axee sur le prix (offre de lancement), une axee sur le contenu exclusif (matchs en direct), et une axee sur l\'emotion (vivez le sport autrement). Pour chaque variante, donne l\'accroche et le visuel suggere." Les tests A/B sont essentiels en acquisition digitale.',
        },
        {
          id: 'sprint1-commercial-marketing-step3-hint3',
          exercice_id: 'sprint1-commercial-marketing-step3',
          index: 2,
          text: 'Pensez au parcours client : "Pour chaque canal, adapte le message au moment du parcours client : decouverte (je ne connais pas l\'offre), consideration (je compare), decision (je suis pret a m\'abonner). Le CTA doit etre different a chaque etape : en savoir plus / comparer les offres / s\'abonner maintenant." Aligner le message au moment du parcours booste la conversion.',
        },
      ],
    },
    /* ---------- Step 4 ---------- */
    {
      id: 'sprint1-commercial-marketing-step4',
      title: 'Preparer l\'argumentaire commercial pour les equipes de vente',
      description:
        'Creez un argumentaire structure que les equipes commerciales pourront utiliser en point de vente et en appels sortants.',
      hints: [
        {
          id: 'sprint1-commercial-marketing-step4-hint1',
          exercice_id: 'sprint1-commercial-marketing-step4',
          index: 0,
          text: 'Utilisez la methode CAB : "Construis un argumentaire commercial pour l\'offre Canal+ Sport en utilisant la methode CAB (Caracteristique, Avantage, Benefice client). Liste 5 arguments, chacun avec : la caracteristique de l\'offre, l\'avantage par rapport a la concurrence, et le benefice concret pour le client. Ajoute une reponse aux 3 objections les plus frequentes." La methode CAB est un classique de la vente.',
        },
        {
          id: 'sprint1-commercial-marketing-step4-hint2',
          exercice_id: 'sprint1-commercial-marketing-step4',
          index: 1,
          text: 'Ajoutez les scenarios de vente : "Propose 3 scenarios de conversation type pour un vendeur en boutique : 1) Le client sport qui hesite entre Canal+ et beIN, 2) L\'abonne Canal+ existant qui ne connait pas l\'option Sport, 3) Le prospect completement froid. Pour chaque scenario : phrase d\'accroche, question de decouverte, argument cle, gestion de l\'objection prix." Des scenarios concrets rendent l\'argumentaire utilisable immediatement.',
        },
        {
          id: 'sprint1-commercial-marketing-step4-hint3',
          exercice_id: 'sprint1-commercial-marketing-step4',
          index: 2,
          text: 'Pensez au format du document : "Formate cet argumentaire comme un document de vente utilisable sur tablette en boutique : titres courts et percutants, bullet points, chiffres en gros, comparatif visuel avec la concurrence sous forme de tableau. Maximum 2 pages si imprime." Un argumentaire trop long ne sera jamais lu par les vendeurs.',
        },
      ],
    },
    /* ---------- Step 5 ---------- */
    {
      id: 'sprint1-commercial-marketing-step5',
      title: 'Rediger le mail de lancement interne',
      description:
        'Redigez le mail de lancement interne qui annonce la campagne a toutes les equipes Canal+.',
      hints: [
        {
          id: 'sprint1-commercial-marketing-step5-hint1',
          exercice_id: 'sprint1-commercial-marketing-step5',
          index: 0,
          text: 'Structurez le mail de lancement : "Redige un mail de lancement interne pour annoncer la campagne Canal+ Sport a toutes les equipes. Structure : objet motivant, introduction qui explique l\'enjeu business en 2 lignes, les 3 points cles de l\'offre, le planning de la campagne, ce qui est attendu de chaque equipe (vente, SAV, communication, technique), et les contacts referents. Ton : federateur et dynamique."',
        },
        {
          id: 'sprint1-commercial-marketing-step5-hint2',
          exercice_id: 'sprint1-commercial-marketing-step5',
          index: 1,
          text: 'Ajoutez les elements d\'engagement : "Ajoute dans le mail : un objectif chiffre commun qui federe (ex : 50 000 nouveaux abonnes en 30 jours), un element de fierte (ex : une exclusivite Canal+ sur un evenement sportif), et un call-to-action clair pour chaque equipe." Un mail de lancement doit creer de l\'elan.',
        },
        {
          id: 'sprint1-commercial-marketing-step5-hint3',
          exercice_id: 'sprint1-commercial-marketing-step5',
          index: 2,
          text: 'Pensez aux annexes : "Termine le mail en listant les ressources disponibles : lien vers l\'argumentaire de vente, lien vers le kit de communication, FAQ produit, planning detaille, contacts de l\'equipe projet. Precise aussi la date de la session de formation pour les equipes commerciales." Un bon lancement, c\'est quand chacun sait ou trouver ce dont il a besoin.',
        },
      ],
    },
  ],
};

const commercialMarketingDocuments: SprintDocument[] = [
  {
    id: 'sprint1-commercial-marketing-doc1',
    title: 'Brief marketing — Nouvelle offre Canal+ Sport',
    type: 'brief',
    content: `BRIEF MARKETING — LANCEMENT OFFRE CANAL+ SPORT
Date : 15 mars 2025
Redige par : Isabelle Renard, Directrice Marketing Acquisition

CONTEXTE
Canal+ lance une nouvelle offre "Canal+ Sport" a 15,99€/mois (ou 9,99€/mois pour les abonnes Canal+ existants). L'offre regroupe pour la premiere fois l'integralite des contenus sportifs du groupe : Ligue 1, Premier League, Top 14, MotoGP, Formule 1, et les evenements en pay-per-view.

OBJECTIFS
- Recruter 50 000 nouveaux abonnes dans les 30 premiers jours
- Reactiver 20 000 anciens abonnes (churners des 12 derniers mois)
- Augmenter le revenu moyen par abonne (ARPU) de 3,50€
- Atteindre 5 millions d'impressions digitales en phase de lancement

CIBLE PRINCIPALE
Hommes 25-45 ans, urbains, fans de sport en general (pas uniquement football). Consomment du sport sur mobile et en streaming. Actuellement abonnes a DAZN ou beIN Sports, ou consomment en streaming illegal.

CIBLE SECONDAIRE
Abonnes Canal+ existants sans l'option sport. Femmes 30-45 ans interessees par des sports comme le tennis ou la gymnastique.

BUDGET CAMPAGNE : 800 000€ tout compris
PERIODE : du 15 mai au 15 juin 2025 (couplage avec Roland-Garros et fin de saison Ligue 1)

MESSAGES CLES
- "Tout le sport, une seule offre" — simplicite
- Exclusivite des droits Ligue 1 et Premier League
- Qualite du flux 4K HDR et experience multi-ecran
- Prix agressif pour les abonnes existants (cross-sell)

CONTRAINTES
- Ne pas communiquer sur les droits MotoGP avant le 1er mai (annonce officielle)
- Respecter la charte graphique Canal+ (noir, blanc, rouge)
- Validation juridique obligatoire pour toute mention de prix
- Coordination avec les equipes SAV pour gerer l'afflux d'appels

Contact : Marc Dupont, Chef de projet lancement — m.dupont@canalplus.fr`,
    stepId: 'sprint1-commercial-marketing-step1',
  },
];

/* ================================================================== */
/*  TECH & IT                                                         */
/* ================================================================== */

const techItScenario: Scenario = {
  id: 'sprint1-tech-it',
  title: 'Preparer la migration d\'un service vers le cloud',
  description:
    'A partir du rapport technique sur la migration du service de transcodage VOD vers AWS, vous produisez une synthese executive, un plan de migration, une communication interne et une checklist de validation.',
  steps: [
    /* ---------- Step 1 ---------- */
    {
      id: 'sprint1-tech-it-step1',
      title: 'Analyser le rapport technique et identifier les risques',
      description:
        'Collez le rapport technique dans Copilot Chat et demandez une analyse structuree des risques, dependances et points d\'attention.',
      hints: [
        {
          id: 'sprint1-tech-it-step1-hint1',
          exercice_id: 'sprint1-tech-it-step1',
          index: 0,
          text: 'Demandez une matrice de risques : "Analyse ce rapport technique et produis une matrice de risques au format tableau : Risque | Probabilite (haute/moyenne/basse) | Impact (critique/majeur/mineur) | Mitigation proposee. Identifie au moins 6 risques lies a cette migration." Une matrice de risques est le livrable le plus utile pour la direction.',
        },
        {
          id: 'sprint1-tech-it-step1-hint2',
          exercice_id: 'sprint1-tech-it-step1',
          index: 1,
          text: 'Identifiez les dependances : "Liste toutes les dependances techniques mentionnees dans ce rapport : services amont, services aval, APIs, bases de donnees, certificats, licences. Pour chaque dependance, indique si elle est un bloqueur ou non pour la migration." Les dependances oubliees sont la cause n°1 des retards de migration.',
        },
        {
          id: 'sprint1-tech-it-step1-hint3',
          exercice_id: 'sprint1-tech-it-step1',
          index: 2,
          text: 'Demandez un resume technique vs non-technique : "Produis deux syntheses de ce rapport : 1) Une synthese technique de 10 lignes pour l\'equipe d\'ingenieurs (jargon autorise, details d\'architecture), 2) Une synthese non-technique de 5 lignes pour le directeur IT (enjeux business, planning, budget). Meme contenu, vocabulaire different." Savoir adapter le discours est une competence cle.',
        },
      ],
    },
    /* ---------- Step 2 ---------- */
    {
      id: 'sprint1-tech-it-step2',
      title: 'Produire une synthese executive pour la direction',
      description:
        'Redigez une synthese executive d\'une page destinee au CODIR IT, avec les enjeux, le planning et la recommandation.',
      hints: [
        {
          id: 'sprint1-tech-it-step2-hint1',
          exercice_id: 'sprint1-tech-it-step2',
          index: 0,
          text: 'Donnez le format executive standard : "Redige une synthese executive d\'une page pour le CODIR IT. Structure : Contexte (3 lignes), Enjeu business (pourquoi migrer maintenant), Solution proposee (architecture cible en 3 bullet points), Planning macro (4 phases avec dates), Budget (investissement et economies attendues), Risques principaux (top 3), Recommandation (go/no-go). Ton : factuel et oriente decision."',
        },
        {
          id: 'sprint1-tech-it-step2-hint2',
          exercice_id: 'sprint1-tech-it-step2',
          index: 1,
          text: 'Mettez en avant le ROI : "Calcule et presente le retour sur investissement de cette migration : couts actuels vs couts projetes sur 3 ans, economies en maintenance, gains en scalabilite et en time-to-market. Presente sous forme de tableau comparatif avant/apres." La direction decide sur des chiffres, pas sur de la technique.',
        },
        {
          id: 'sprint1-tech-it-step2-hint3',
          exercice_id: 'sprint1-tech-it-step2',
          index: 2,
          text: 'Ajoutez les alternatives : "Presente brievement 3 options : 1) Migration complete vers AWS (recommandee), 2) Migration partielle (hybride), 3) Statu quo avec upgrade du on-premise. Pour chaque option : avantages, inconvenients, cout, risque. Mets en evidence pourquoi l\'option 1 est recommandee." Presenter des alternatives renforce la credibilite de la recommandation.',
        },
      ],
    },
    /* ---------- Step 3 ---------- */
    {
      id: 'sprint1-tech-it-step3',
      title: 'Construire le plan de migration en phases',
      description:
        'Demandez a Copilot de construire un plan de migration detaille, decoupe en phases avec des jalons clairs.',
      hints: [
        {
          id: 'sprint1-tech-it-step3-hint1',
          exercice_id: 'sprint1-tech-it-step3',
          index: 0,
          text: 'Demandez un plan phase : "Construis un plan de migration en 4 phases : 1) Preparation (audit, provisioning, POC) — 3 semaines, 2) Migration des environnements de test — 2 semaines, 3) Migration de la production avec bascule progressive — 4 semaines, 4) Stabilisation et decommissionnement — 2 semaines. Pour chaque phase : objectifs, taches cles, criteres de passage a la phase suivante (go/no-go), equipe mobilisee."',
        },
        {
          id: 'sprint1-tech-it-step3-hint2',
          exercice_id: 'sprint1-tech-it-step3',
          index: 1,
          text: 'Ajoutez le plan de rollback : "Pour chaque phase, definis le plan de rollback : quelles sont les conditions de retour arriere, combien de temps faut-il pour revenir en arriere, quelles donnees sont a risque. Presente sous forme de matrice : Phase | Condition de rollback | Duree estimee | Impact." Un plan sans rollback n\'est pas un plan, c\'est un pari.',
        },
        {
          id: 'sprint1-tech-it-step3-hint3',
          exercice_id: 'sprint1-tech-it-step3',
          index: 2,
          text: 'Pensez a la bascule de trafic : "Detaille la strategie de bascule de trafic pour la phase 3 : pourcentage de trafic redirige par palier (10%, 25%, 50%, 100%), metriques de monitoring a surveiller a chaque palier, seuils d\'alerte, procedure d\'escalade en cas d\'incident. Format : tableau avec colonnes Palier | % trafic | Duree | Metriques | Seuil d\'alerte." La bascule progressive est la cle d\'une migration sans coupure.',
        },
      ],
    },
    /* ---------- Step 4 ---------- */
    {
      id: 'sprint1-tech-it-step4',
      title: 'Preparer la communication vers les equipes impactees',
      description:
        'Redigez les messages de communication pour informer les equipes internes impactees par la migration.',
      hints: [
        {
          id: 'sprint1-tech-it-step4-hint1',
          exercice_id: 'sprint1-tech-it-step4',
          index: 0,
          text: 'Adaptez le message a chaque audience : "Redige 3 messages differents pour annoncer la migration : 1) Pour les developpeurs : details techniques, impact sur les API, nouvelles procedures de deploiement, 2) Pour les equipes metier (editeurs VOD) : ce qui change pour eux concretement, planning d\'indisponibilite, 3) Pour le management : planning, budget, risques maitrises. Chaque message fait maximum 15 lignes."',
        },
        {
          id: 'sprint1-tech-it-step4-hint2',
          exercice_id: 'sprint1-tech-it-step4',
          index: 1,
          text: 'Creez une FAQ : "Genere une FAQ de 8 questions-reponses pour accompagner l\'annonce de la migration. Inclus les questions classiques : y aura-t-il une coupure de service ? Mes outils changent-ils ? Faut-il modifier mes workflows ? A qui m\'adresser en cas de probleme ? Mes donnees sont-elles en securite ?" Une FAQ anticipe les inquietudes et reduit la charge du support.',
        },
        {
          id: 'sprint1-tech-it-step4-hint3',
          exercice_id: 'sprint1-tech-it-step4',
          index: 2,
          text: 'Planifiez la communication dans le temps : "Propose un plan de communication en 4 temps : 1) J-30 : annonce officielle de la migration, 2) J-14 : details techniques et FAQ, 3) J-3 : rappel et procedure de bascule, 4) J+1 : bilan et confirmation du succes. Pour chaque temps : canal (mail, Teams, reunion), contenu, expediteur." Une communication bien cadencee rassure et engage.',
        },
      ],
    },
    /* ---------- Step 5 ---------- */
    {
      id: 'sprint1-tech-it-step5',
      title: 'Rediger la checklist de validation pre-migration',
      description:
        'Creez une checklist exhaustive de validation a completer avant de lancer la migration en production.',
      hints: [
        {
          id: 'sprint1-tech-it-step5-hint1',
          exercice_id: 'sprint1-tech-it-step5',
          index: 0,
          text: 'Organisez la checklist par domaine : "Cree une checklist pre-migration organisee en 6 domaines : 1) Infrastructure (provisioning, networking, securite), 2) Application (tests, compatibilite, configuration), 3) Donnees (backup, synchronisation, validation), 4) Monitoring (alertes, dashboards, logs), 5) Communication (equipes informees, support pret), 6) Rollback (procedure testee, point de restauration). Pour chaque domaine, 5 items avec case a cocher et responsable."',
        },
        {
          id: 'sprint1-tech-it-step5-hint2',
          exercice_id: 'sprint1-tech-it-step5',
          index: 1,
          text: 'Ajoutez les criteres de go/no-go : "Definis les criteres de go/no-go pour le lancement de la migration production. Format tableau : Critere | Statut attendu | Responsable de validation | Bloquant (oui/non). Inclus au minimum : tests de charge valides, backup complet, procedure de rollback testee, equipes d\'astreinte identifiees, communication envoyee." Les criteres de go/no-go sont le dernier rempart avant le lancement.',
        },
        {
          id: 'sprint1-tech-it-step5-hint3',
          exercice_id: 'sprint1-tech-it-step5',
          index: 2,
          text: 'Pensez au Day-1 : "Complete la checklist avec une section Day-1 (jour de la migration) : ordre des operations heure par heure, numeros de telephone de l\'equipe d\'astreinte, procedure d\'escalade, seuils de decision pour le rollback, message de communication post-migration (succes ou rollback). Le Day-1 doit se derouler comme une partition de musique." Un plan Day-1 detaille evite la panique le jour J.',
        },
      ],
    },
  ],
};

const techItDocuments: SprintDocument[] = [
  {
    id: 'sprint1-tech-it-doc1',
    title: 'Rapport technique — Migration du service de transcodage VOD vers AWS',
    type: 'rapport',
    content: `RAPPORT TECHNIQUE — MIGRATION SERVICE TRANSCODAGE VOD
Projet : Migration du pipeline de transcodage VOD de l'infrastructure on-premise vers AWS
Redige par : Antoine Mercier, Lead Architect — Equipe Plateforme VOD
Date : 20 mars 2025
Statut : Etude de faisabilite — version 2.1

1. SITUATION ACTUELLE
Le service de transcodage VOD tourne actuellement sur un cluster de 24 serveurs physiques dans le datacenter de Montrouge (DC-MTR-02). Le parc a 5 ans, le taux de panne a double en 12 mois (12 incidents en 2024 vs 6 en 2023). Le cout de maintenance annuel est de 380K€, en hausse de 15% par an. Le cluster traite en moyenne 2 500 fichiers/jour avec des pics a 8 000 fichiers lors des lancements de nouvelles series.

2. SOLUTION PROPOSEE
Migration vers AWS MediaConvert + S3 + Lambda pour l'orchestration. Architecture serverless eliminant la gestion de serveurs physiques. Estimation de cout annuel AWS : 220K€ (base trafic actuel) avec une scalabilite automatique en cas de pic.

3. DEPENDANCES IDENTIFIEES
- Service de gestion des droits (DRM) : API a adapter pour le nouvel endpoint AWS
- CDN Akamai : configuration a mettre a jour pour les nouveaux chemins S3
- Base de donnees catalogue : PostgreSQL 12 on-premise — migration separee prevue Q3 2025
- Outil d'encodage proprietaire MediaTools v3.8 : licence a renouver OU a remplacer par AWS MediaConvert natif
- Certificats SSL : renouvellement prevu le 15 juin — a coordonner

4. RISQUES IDENTIFIES
- Risque de latence reseau entre le DC et AWS pendant la phase hybride
- Compatibilite des formats proprietaires CanalEncode avec AWS MediaConvert (tests en cours)
- Perte de competences sur l'equipe actuelle (2 ingenieurs sur 4 ne connaissent pas AWS)
- Fenetre de migration limitee : pas de migration entre le 20 mai et le 10 juin (Roland-Garros)
- Cout de double-run pendant la phase de transition : environ 45K€/mois

5. PLANNING INDICATIF
- Phase 1 (avril) : POC et tests de compatibilite
- Phase 2 (mai) : Migration environnement de recette
- Phase 3 (juin-juillet) : Migration production avec bascule progressive
- Phase 4 (aout) : Stabilisation et decommissionnement des serveurs

6. EQUIPE PROJET
- Antoine Mercier (Lead Architect) — pilotage technique
- Sarah Kone (DevOps) — infrastructure AWS
- Julien Blanc (Dev Backend) — adaptation des APIs
- Thomas Roux (Ops) — monitoring et astreinte

Validation demandee : CODIR IT du 15 avril 2025`,
    stepId: 'sprint1-tech-it-step1',
  },
];

/* ================================================================== */
/*  SUPPORT & CORPORATE                                               */
/* ================================================================== */

const supportCorporateScenario: Scenario = {
  id: 'sprint1-support-corporate',
  title: 'Organiser le seminaire annuel de votre direction',
  description:
    'A partir du mail du directeur, vous organisez le seminaire de A a Z : programme, support de coordination, invitations et checklist logistique.',
  steps: [
    /* ---------- Step 1 ---------- */
    {
      id: 'sprint1-support-corporate-step1',
      title: 'Analyser le mail du directeur et comprendre le besoin',
      description:
        'Collez le mail du directeur dans Copilot Chat et demandez une analyse structuree du besoin : objectifs, contraintes, attentes.',
      hints: [
        {
          id: 'sprint1-support-corporate-step1-hint1',
          exercice_id: 'sprint1-support-corporate-step1',
          index: 0,
          text: 'Commencez par une extraction exhaustive : "Analyse ce mail et extrais les informations suivantes : 1) Objectifs du seminaire (explicites et implicites), 2) Date et duree, 3) Nombre de participants, 4) Budget mentionne ou a estimer, 5) Contraintes specifiques (lieu, restauration, accessibilite), 6) Livrables attendus et deadlines. Presente sous forme de fiche projet." Transformer un mail en fiche projet, c\'est le premier reflexe d\'un bon organisateur.',
        },
        {
          id: 'sprint1-support-corporate-step1-hint2',
          exercice_id: 'sprint1-support-corporate-step1',
          index: 1,
          text: 'Identifiez les non-dits : "Quelles informations ne sont PAS dans ce mail mais sont indispensables pour organiser ce seminaire ? Liste les 5 questions les plus importantes a poser au directeur avant de commencer l\'organisation." Anticiper les questions manquantes montre du professionnalisme et evite les mauvaises surprises.',
        },
        {
          id: 'sprint1-support-corporate-step1-hint3',
          exercice_id: 'sprint1-support-corporate-step1',
          index: 2,
          text: 'Demandez une estimation budgetaire : "A partir des elements du mail (nombre de participants, type de lieu, restauration souhaitee), propose une estimation budgetaire detaillee : location de salle, restauration, materiel technique, animation, deplacement, imprevus (10%). Donne une fourchette basse et haute." Avoir un budget estime des le depart permet de cadrer les choix.',
        },
      ],
    },
    /* ---------- Step 2 ---------- */
    {
      id: 'sprint1-support-corporate-step2',
      title: 'Construire le programme detaille de la journee',
      description:
        'Demandez a Copilot de construire un programme heure par heure pour le seminaire, en equilibrant contenu et convivialite.',
      hints: [
        {
          id: 'sprint1-support-corporate-step2-hint1',
          exercice_id: 'sprint1-support-corporate-step2',
          index: 0,
          text: 'Donnez le cadre complet : "Propose un programme detaille pour un seminaire d\'une journee (9h-18h) avec 45 participants. Format tableau : Horaire | Activite | Format (pleniere/atelier/pause) | Intervenant | Materiel necessaire. Inclus : accueil cafe, 2 sequences de travail le matin, dejeuner, 1 atelier collaboratif l\'apres-midi, cloture conviviale. Le theme est : [theme du mail]."',
        },
        {
          id: 'sprint1-support-corporate-step2-hint2',
          exercice_id: 'sprint1-support-corporate-step2',
          index: 1,
          text: 'Pensez a l\'experience participant : "Pour chaque moment de la journee, ajoute une colonne \'Experience participant\' qui decrit ce que les participants doivent ressentir : inspire, energise, connecte, etc. Prevois aussi les transitions entre les activites — un seminaire reussi est un seminaire fluide." Penser UX meme pour un evenement physique fait toute la difference.',
        },
        {
          id: 'sprint1-support-corporate-step2-hint3',
          exercice_id: 'sprint1-support-corporate-step2',
          index: 2,
          text: 'Variez les formats : "Propose au moins 3 formats d\'activite differents pour eviter la monotonie : pleniere avec intervention, atelier en sous-groupes (world cafe), ice-breaker interactif, session de brainstorming, quiz digital. Pour chaque format, precise la duree ideale et le nombre de participants optimal." Un programme varie maintient l\'attention et favorise la participation.',
        },
      ],
    },
    /* ---------- Step 3 ---------- */
    {
      id: 'sprint1-support-corporate-step3',
      title: 'Preparer le support de coordination (PowerPoint)',
      description:
        'Creez le contenu d\'un support PowerPoint de coordination a partager avec les parties prenantes internes.',
      hints: [
        {
          id: 'sprint1-support-corporate-step3-hint1',
          exercice_id: 'sprint1-support-corporate-step3',
          index: 0,
          text: 'Definissez les slides necessaires : "Propose un support PowerPoint de coordination de 8 slides : 1) Objectifs du seminaire 2) Programme de la journee 3) Plan de la salle et configuration 4) Liste des intervenants et roles 5) Menu et restauration 6) Logistique et materiel 7) Retroplanning (J-21 a Jour J) 8) Contacts et numeros d\'urgence. Pour chaque slide, donne le titre et le contenu en bullet points."',
        },
        {
          id: 'sprint1-support-corporate-step3-hint2',
          exercice_id: 'sprint1-support-corporate-step3',
          index: 1,
          text: 'Ajoutez le RACI : "Cree une slide RACI (Responsible, Accountable, Consulted, Informed) pour l\'organisation du seminaire. Lignes : reservation salle, restauration, materiel technique, invitations, contenu des presentations, animation, communication post-seminaire. Colonnes : toi (office manager), directeur, assistante, equipe communication." Un RACI clarifie qui fait quoi et evite les oublis.',
        },
        {
          id: 'sprint1-support-corporate-step3-hint3',
          exercice_id: 'sprint1-support-corporate-step3',
          index: 2,
          text: 'Pensez au plan B : "Ajoute une slide \'Plan B\' avec les scenarios de contingence : que faire si un intervenant annule, si la salle n\'est plus disponible, si la meteo empeche une activite exterieure, si le traiteur fait defaut. Pour chaque risque : solution alternative et contact de backup." Avoir un plan B est le signe d\'un professionnel aguerri.',
        },
      ],
    },
    /* ---------- Step 4 ---------- */
    {
      id: 'sprint1-support-corporate-step4',
      title: 'Rediger les invitations (mail formel + Teams)',
      description:
        'Redigez le mail d\'invitation formel et le message Teams pour convoquer les participants au seminaire.',
      hints: [
        {
          id: 'sprint1-support-corporate-step4-hint1',
          exercice_id: 'sprint1-support-corporate-step4',
          index: 0,
          text: 'Deux versions, deux tons : "Redige deux messages d\'invitation pour le seminaire : 1) Un mail Outlook formel signe par le directeur : objet, date/lieu/horaire, objectifs en 3 lignes, programme synthetique, informations pratiques (acces, parking, dress code), demande de confirmation avant le [date]. 2) Un message Teams decontracte qui donne envie de venir, 5 lignes max, avec un element teaser sur le programme." Adapter le ton au canal est une competence cle de communication interne.',
        },
        {
          id: 'sprint1-support-corporate-step4-hint2',
          exercice_id: 'sprint1-support-corporate-step4',
          index: 1,
          text: 'Soignez l\'objet du mail : "Propose 5 objets de mail differents pour cette invitation. Criteres : doit contenir la date, doit donner envie, doit etre identifiable dans une boite mail chargee. Exemples de styles : factuel, engageant, mysterieux, direct." L\'objet du mail determine le taux d\'ouverture — c\'est la ligne la plus importante.',
        },
        {
          id: 'sprint1-support-corporate-step4-hint3',
          exercice_id: 'sprint1-support-corporate-step4',
          index: 2,
          text: 'N\'oubliez pas la logistique dans l\'invitation : "Ajoute a l\'invitation mail les informations pratiques souvent oubliees : plan d\'acces detaille (transports en commun + voiture), code d\'acces au batiment, numero de telephone en cas de probleme le jour J, allergies alimentaires a signaler, et si les participants doivent preparer quelque chose en amont." Les details logistiques manquants generent 80% des questions le jour J.',
        },
      ],
    },
    /* ---------- Step 5 ---------- */
    {
      id: 'sprint1-support-corporate-step5',
      title: 'Produire la checklist logistique',
      description:
        'Creez une checklist logistique exhaustive pour ne rien oublier dans l\'organisation du seminaire.',
      hints: [
        {
          id: 'sprint1-support-corporate-step5-hint1',
          exercice_id: 'sprint1-support-corporate-step5',
          index: 0,
          text: 'Organisez par timeline : "Cree une checklist logistique organisee en 5 periodes : J-30 (reservations), J-14 (confirmations), J-7 (preparation materiel), J-1 (verification finale), Jour J (installation). Pour chaque periode, liste les taches avec : description, responsable, statut (a faire/en cours/fait), deadline." Une checklist bien decoupee dans le temps evite le rush de derniere minute.',
        },
        {
          id: 'sprint1-support-corporate-step5-hint2',
          exercice_id: 'sprint1-support-corporate-step5',
          index: 1,
          text: 'Soyez exhaustif sur le materiel : "Liste tout le materiel necessaire pour le seminaire : technique (videoprojecteur, ecran, micro, rallonges, adaptateurs), papeterie (badges, stylos, carnets, paperboard), signalisation (fleches directionnelles, affichettes salles), restauration (nombre de couverts, regime special, boissons). Pour chaque item : quantite, fournisseur, statut de commande." Oublier un adaptateur HDMI peut ruiner une presentation.',
        },
        {
          id: 'sprint1-support-corporate-step5-hint3',
          exercice_id: 'sprint1-support-corporate-step5',
          index: 2,
          text: 'Ajoutez une checklist Jour J minute par minute : "Cree un planning Jour J pour l\'equipe d\'organisation : 7h30 arrivee et mise en place, 8h00 verification technique (test son, video, wifi), 8h30 mise en place restauration accueil, 8h45 briefing equipe, 9h00 accueil participants. Continue heure par heure jusqu\'au depart du dernier participant. Ajoute les numeros de telephone de chaque responsable." Le Jour J, on n\'a plus le temps de reflechir — il faut un script precis.',
        },
      ],
    },
  ],
};

const supportCorporateDocuments: SprintDocument[] = [
  {
    id: 'sprint1-support-corporate-doc1',
    title: 'Mail du directeur — Organisation du seminaire annuel',
    type: 'mail',
    content: `De : Laurent Morin <l.morin@canalplus.fr>
A : Marie Lefevre <m.lefevre@canalplus.fr>
Objet : Organisation seminaire annuel Direction Financiere — a caler
Date : 28 mars 2025

Bonjour Marie,

Comme evoque rapidement en reunion lundi, j'aimerais qu'on organise le seminaire annuel de la Direction Financiere. L'idee est de rassembler toute l'equipe pour faire le bilan de l'annee ecoulee et lancer les chantiers strategiques 2025-2026.

Quelques elements de cadrage :
- Date souhaitee : jeudi 12 juin 2025 (journee complete, 9h-18h)
- Participants : 45 personnes (toute la direction, y compris les equipes de Boulogne et les 3 collegues de Lyon en visio ou en presentiel)
- Lieu : en externe de preference, pas trop loin du siege (Boulogne-Billancourt). Un lieu avec un espace pleniere pour 50 personnes et 2 salles d'atelier serait ideal.
- Budget : autour de 8 000€ TTC tout compris (salle, restauration, materiel). Si on depasse un peu, c'est negociable, mais j'aimerais rester raisonnable.

Pour le contenu, je vois ca en 3 temps :
1) Matin : bilan 2024-2025 (presentations par les 3 responsables de pole) + intervention du DAF groupe (30 min)
2) Debut d'apres-midi : ateliers en sous-groupes sur les 3 chantiers prioritaires (digitalisation des process, RSE appliquee a la finance, formation IA)
3) Fin d'apres-midi : restitution collective + moment convivial

Points d'attention :
- Nadia (pole Controle de gestion) est en conge maternite a partir du 1er juin — il faut caler sa presentation AVANT ou prevoir un remplacement
- 3 collaborateurs sont vegetariens, 1 allergie aux arachides
- On aimerait un ice-breaker sympa en debut de journee pour mixer les equipes (les poles ne se melangent pas assez)
- Le DAF groupe, Jean-Marc Tellier, a un agenda tres charge — il faut bloquer son creneau des maintenant

Peux-tu me faire une premiere proposition de programme + estimation budgetaire pour la semaine prochaine ? On en discute mercredi en point hebdo.

Merci Marie, je compte sur toi !

Laurent Morin
Directeur Financier Adjoint, Canal+`,
    stepId: 'sprint1-support-corporate-step1',
  },
];

/* ================================================================== */
/*  EXPORT                                                            */
/* ================================================================== */

export const sprint1ByGroup: Record<
  MetierGroupId,
  { scenario: Scenario; documents: SprintDocument[] }
> = {
  'contenu-creation': {
    scenario: contenuCreationScenario,
    documents: contenuCreationDocuments,
  },
  'diffusion-programmation': {
    scenario: diffusionProgrammationScenario,
    documents: diffusionProgrammationDocuments,
  },
  'commercial-marketing': {
    scenario: commercialMarketingScenario,
    documents: commercialMarketingDocuments,
  },
  'tech-it': {
    scenario: techItScenario,
    documents: techItDocuments,
  },
  'support-corporate': {
    scenario: supportCorporateScenario,
    documents: supportCorporateDocuments,
  },
};
