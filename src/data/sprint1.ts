import type { Scenario } from '../types';

/* ------------------------------------------------------------------ */
/*  Sprint 1 — Cas pratique (25 min)                                  */
/*  Organiser une soiree en interne autour de STUDIOCANAL STORIES     */
/* ------------------------------------------------------------------ */

export const sprint1Meta = {
  id: 'sprint-1',
  title: 'Sprint 1 — Cas pratique',
  color: 'var(--color-sprint-1)',
  duration: 25,
};

export const sprint1Scenario: Scenario = {
  id: 'sprint1-soiree-studiocanal',
  title: 'Organiser une soiree en interne autour de STUDIOCANAL STORIES',
  description:
    'Canal+ lance STUDIOCANAL STORIES, sa nouvelle plateforme de contenus originaux. Vous organisez la soiree interne du 15 mai au Rooftop Canal+ d\'Issy pour 120 collaborateurs (budget : 15-20K\u20AC). Telechargez le brief PDF ci-dessous et uploadez-le dans Copilot Chat pour travailler avec un maximum de contexte !',
  steps: [
    /* ---------- Etape 1 ---------- */
    {
      id: 'sprint1-step1',
      title: 'Brainstormer la vision de la soiree',
      description:
        'Telechargez le brief PDF ci-dessous, puis uploadez-le dans Copilot Chat. Demandez-lui de proposer des concepts de soiree en s\'appuyant sur les informations du brief : contraintes, budget, contenus a projeter, ambiance souhaitee.',
      documents: [
        {
          name: 'brief-soiree-studiocanal.pdf',
          type: 'pdf',
          path: 'documents/brief-soiree-studiocanal.pdf',
          description: 'Brief de la soiree STUDIOCANAL STORIES — contexte, objectifs et contraintes',
        },
      ],
      hints: [
        {
          id: 's1-s1-hint1',
          exercice_id: 'sprint1-step1',
          index: 0,
          text: 'Astuce cle : uploadez le brief PDF dans Copilot Chat ! Puis demandez : "En te basant sur ce brief, propose 3 concepts de soiree originaux avec pour chacun : le theme, l\'ambiance, 4 moments forts integrant les contenus a projeter, et le public cible. Respecte le budget de 15-20K EUR et la palette noir/or/blanc."',
        },
        {
          id: 's1-s1-hint2',
          exercice_id: 'sprint1-step1',
          index: 1,
          text: 'Iterez pour affiner : "J\'aime le concept 2. Developpe-le en ajoutant des elements de decoration, un dress code, et un fil rouge pour la soiree."',
        },
      ],
      idealPrompt:
        'J\'ai uploade le brief de la soiree STUDIOCANAL STORIES dans cette conversation. En te basant sur ce document, tu es un event planner specialise dans les evenements corporate haut de gamme pour les groupes medias.\n\nPropose-moi 3 concepts de soiree originaux et coherents avec le brief. Pour chacun, detaille :\n- Le theme et le fil rouge narratif\n- L\'ambiance (decoration, musique, eclairage) en lien avec la palette noir/or/blanc du brief\n- 4 moments forts integrant les contenus a projeter mentionnes dans le brief (teasers, bande-annonce, best-of)\n- Comment le concept met en valeur les 3 contenus STUDIOCANAL STORIES : "Les Ombres du Canal", "Terre Promise" et "Voix Libres"\n- Le public vise et le dress code\n\nSois creatif, premium et realiste par rapport au budget de 15-20K EUR.',
      idealResult:
        'Voici 3 concepts de soiree STUDIOCANAL STORIES, conçus a partir du brief :\n\n**CONCEPT 1 : "LA NUIT DES HISTOIRES"**\nFil rouge : un voyage a travers les recits qui nous rassemblent — du cinema au podcast, chaque histoire est un lien.\n- Ambiance : Projection mapping sur les murs du rooftop reprenant des scenes iconiques STUDIOCANAL. Palette noir/or dominante. Eclairage tamise avec spots dores sur les affiches (Paddington, Anatomie d\'une Chute...). Playlist lounge de 19h a 21h30 (BO de films STUDIOCANAL), puis DJ set cinephile.\n- Moments forts : (1) Accueil avec cocktail signature "Le STUDIOCANAL" + montage best-of en boucle sur ecran geant. (2) Avant-premiere des 3 teasers avec intro de Julie Moreau. (3) Quiz immersif "Etes-vous incollable sur nos histoires ?" sur les smartphones (Kahoot). (4) DJ set thematique avec remixes de BO celebres.\n- Mise en valeur des contenus : "Les Ombres du Canal" projete avec extinction progressive des lumieres (effet thriller). "Terre Promise" diffuse avec eclairage vert/nature. "Voix Libres" ecoute collective avec casques distribues dans un espace intimiste.\n- Dress code : Smart casual, touche doree encouragee.\n\n**CONCEPT 2 : "STUDIO SESSION — LES COULISSES"**\nFil rouge : transporter les invites dans l\'envers du decor — comment naissent les histoires STUDIOCANAL.\n- Ambiance : Decor de studio de tournage. Clap geant a l\'entree, projecteurs cinema vintage, rails de travelling en deco, fauteuils de realisateur avec le nom des invites. Palette noir mat et or chaud.\n- Moments forts : (1) Photo booth "Devenez realisateur" avec props cinema. (2) Mot de bienvenue de Thomas Martin (DG adjoint) avec projection de la bande-annonce officielle. (3) "Pitch en 3 min" : Julie Moreau presente chaque contenu comme un pitch de producteur. (4) Remise du prix "Meilleure Story Canal+" vote par les collaborateurs.\n- Mise en valeur des contenus : Chaque teaser est introduce par un "clap" reel filme en direct et projete. Effet "premiere prise" pour creer l\'emotion.\n- Dress code : Smart casual, accessoire cinema bienvenu.\n\n**CONCEPT 3 : "LE CLUB STUDIOCANAL"**\nFil rouge : un club prive ephemere ou le cinema rencontre la convivialite.\n- Ambiance : Esprit club prive cinematographique. Fauteuils club, bar a cocktails retro-eclaire, jazz live (19h-21h) puis DJ. Bougies LED sur chaque table, neons dores "STORIES" en lettres geantes.\n- Moments forts : (1) Cocktail "Les Ombres" (dark & smoky) et "Terre Promise" (green & fresh) en reference aux contenus. (2) Avant-premiere en mode "seance privee" avec pop-corn dans des cornets noirs et or. (3) Table ronde express avec les createurs (15 min). (4) Networking libre avec DJ set et bar ouvert.\n- Mise en valeur des contenus : "Voix Libres" diffuse en podcast live dans un coin "salon d\'ecoute" avec casques et fauteuils, creant une experience intimiste unique.\n- Dress code : Smart casual chic.\n\n*Budget estimatif par concept : les 3 concepts sont realisables dans l\'enveloppe de 15-20K EUR. Le concept 2 est le plus ambitieux en decoration mais peut etre optimise en reutilisant du materiel STUDIOCANAL existant.*',
    },

    /* ---------- Etape 2 ---------- */
    {
      id: 'sprint1-step2',
      title: 'Rediger l\'invitation par mail',
      description:
        'Demandez a Copilot Chat de rediger un mail d\'invitation pour la soiree. Le mail doit etre engageant, donner envie de venir, et contenir toutes les informations pratiques (date, lieu, dress code, programme).',
      hints: [
        {
          id: 's1-s2-hint1',
          exercice_id: 'sprint1-step2',
          index: 0,
          text: 'Precisez le ton et la structure : "Redige un mail d\'invitation engageant pour cette soiree. Ton : premium mais chaleureux. Structure : objet accrocheur, introduction (3 lignes), programme de la soiree, infos pratiques (date, lieu, horaire, dress code), CTA pour confirmer sa presence."',
        },
        {
          id: 's1-s2-hint2',
          exercice_id: 'sprint1-step2',
          index: 1,
          text: 'Iterez sur le ton : "Rends le mail plus dynamique et moins corporate. Ajoute une touche d\'humour et un teasing sur la surprise de la soiree."',
        },
      ],
      idealPrompt:
        'A partir du concept retenu et du brief de la soiree STUDIOCANAL STORIES (que tu as deja en contexte), redige un mail d\'invitation a envoyer a tous les collaborateurs Canal+.\n\nContraintes :\n- Ton : premium mais chaleureux, enthousiaste sans etre corporate\n- Structure : objet accrocheur, introduction captivante (3 lignes max), programme en bullet points, infos pratiques (date, lieu avec adresse complete, horaire, dress code, parking), CTA pour confirmer\n- Integre un teasing sur les avant-premieres des 3 contenus mentionnes dans le brief\n- Maximum 250 mots\n- Ajoute une touche d\'humour subtile\n- Termine par une signature engageante',
      idealResult:
        'Objet : Vous etes invites a une soiree exceptionnelle STUDIOCANAL STORIES\n\nBonjour a toutes et a tous,\n\nLe cinema, c\'est aussi une histoire d\'equipe. Et cette equipe, c\'est vous. Pour celebrer le lancement de STUDIOCANAL STORIES, nous vous convions a une soiree qui s\'annonce memorable.\n\nAu programme :\n- 19h00 : Accueil cocktail & surprises cinematographiques\n- 19h45 : Avant-premiere exclusive d\'un contenu STUDIOCANAL STORIES\n- 20h30 : Diner & quiz immersif "Etes-vous incollable sur nos films ?"\n- 21h30 : DJ set cine-musical & photo booth decor de tournage\n\nInfos pratiques :\n- Date : Jeudi 15 mai 2025\n- Lieu : Rooftop Canal+, Issy-les-Moulineaux\n- Horaire : 19h - 23h\n- Dress code : Smart casual (venez comme a une avant-premiere, pas comme a un COMEX)\n\nConfirmez votre presence avant le 9 mai en repondant a ce mail.\n\nOn a hate de partager ce moment avec vous.\n\nL\'equipe STUDIOCANAL STORIES',
    },

    /* ---------- Etape 3 ---------- */
    {
      id: 'sprint1-step3',
      title: 'Creer la checklist d\'organisation',
      description:
        'Telechargez le fichier Excel ci-dessous et uploadez-le dans Copilot Chat. Demandez-lui de completer la checklist avec des details supplementaires, d\'ajuster les deadlines, et de verifier la coherence avec le brief. Vous pouvez aussi lui demander de generer de nouveaux items.',
      documents: [
        {
          name: 'checklist-organisation-soiree.xlsx',
          type: 'xlsx',
          path: 'documents/checklist-organisation-soiree.xlsx',
          description: 'Checklist d\'organisation detaillee (31 taches, 5 categories) — a enrichir avec Copilot Chat',
        },
      ],
      hints: [
        {
          id: 's1-s3-hint1',
          exercice_id: 'sprint1-step3',
          index: 0,
          text: 'Demandez une checklist par categorie : "Genere une checklist detaillee pour organiser cette soiree. Categories : logistique (lieu, mobilier, signalisation), traiteur (menu, boissons, allergies), technique (son, video, eclairage), communication (invitations, relances, reseaux sociaux internes), plan B (meteo, no-show, incident technique). Format : checkbox par item avec responsable et deadline."',
        },
      ],
      idealPrompt:
        'J\'ai uploade la checklist Excel d\'organisation de la soiree STUDIOCANAL STORIES. Elle contient deja 31 taches reparties en 5 categories.\n\nAnalyse cette checklist et :\n1. Identifie les taches manquantes que tu ajouterais (au moins 5)\n2. Pour chaque tache existante, verifie que la deadline est coherente avec le planning du brief (Jour J = 15 mai)\n3. Propose un ordre de priorite pour les taches a realiser cette semaine\n4. Suggere des optimisations : taches qui peuvent etre combinees, delegations plus efficaces\n\nPresente ta reponse de maniere structuree et actionnable.',
      idealResult:
        'Checklist d\'organisation — Soiree STUDIOCANAL STORIES (15 mai)\n\nLOGISTIQUE\n[ ] Reserver le rooftop et confirmer la capacite (max 150 pers.) — Resp : Office Manager — Deadline : 15 avril\n[ ] Commander mobilier complementaire (mange-debout, fauteuils lounge) — Resp : Logistique — Deadline : 1er mai\n[ ] Prevoir decoration thematique cinema (affiches STUDIOCANAL, eclairages) — Resp : Com interne — Deadline : 10 mai\n[ ] Installer la signaletique (fleches, plan, accueil) — Resp : Logistique — Deadline : 15 mai matin\n\nTRAITEUR\n[ ] Selectionner le traiteur et valider le menu — Resp : Office Manager — Deadline : 20 avril\n[ ] Prevoir options vegetariennes, vegan, sans gluten — Resp : Traiteur — Deadline : 5 mai\n[ ] Commander boissons (cocktails signatures, soft, eau) — Resp : Traiteur — Deadline : 10 mai\n\nTECHNIQUE\n[ ] Installer systeme son pour DJ set + micro speeches — Resp : Technique — Deadline : 15 mai 14h\n[ ] Preparer projection (ecran, video-projecteur, contenu) — Resp : Technique — Deadline : 14 mai\n[ ] Tester eclairage d\'ambiance le matin du J — Resp : Technique — Deadline : 15 mai 10h\n\nCOMMUNICATION\n[ ] Envoyer les invitations (J-30) — Resp : Com interne — Deadline : 15 avril\n[ ] Relance mail (J-7) — Resp : Com interne — Deadline : 8 mai\n[ ] Affichage interne et post sur l\'intranet — Resp : Com interne — Deadline : 1er mai\n\nPLAN B\n[ ] Prevoir solution repli interieur en cas de pluie — Resp : Logistique — Deadline : 10 mai\n[ ] Prevoir +10% de nourriture pour les invites de derniere minute — Resp : Traiteur — Deadline : 13 mai\n[ ] Avoir un technicien de garde le soir de l\'evenement — Resp : Technique — Deadline : 15 mai',
    },

    /* ---------- Etape 4 ---------- */
    {
      id: 'sprint1-step4',
      title: 'Elaborer le programme et le deroule',
      description:
        'Demandez a Copilot Chat de detailler le programme minute par minute avec les animations, les transitions et les responsables de chaque sequence.',
      hints: [
        {
          id: 's1-s4-hint1',
          exercice_id: 'sprint1-step4',
          index: 0,
          text: 'Demandez un deroule precis : "Detaille le programme de la soiree minute par minute de 19h a 23h. Pour chaque sequence : horaire, nom de la sequence, description (2 lignes), responsable, materiel necessaire. Prevois des transitions fluides entre chaque moment."',
        },
      ],
      idealPrompt:
        'Detaille le programme de la soiree STUDIOCANAL STORIES minute par minute de 19h a 23h. Pour chaque sequence : horaire exact, nom de la sequence, description en 2 lignes, responsable suggere, materiel necessaire. Prevois des transitions fluides. Inclus un moment surprise et un temps de networking. Format tableau.',
      idealResult:
        'Programme detaille — Soiree STUDIOCANAL STORIES\n\n| Horaire | Sequence | Description | Responsable | Materiel |\n|---|---|---|---|---|\n| 19h00-19h30 | Accueil cocktail | Cocktails de bienvenue, musique lounge, photo booth cinema | Office Manager | Bar, photo booth, playlist |\n| 19h30-19h45 | Mot de bienvenue | Discours du directeur, teasing de la soiree | Direction | Micro, ecran |\n| 19h45-20h15 | Avant-premiere exclusive | Projection d\'un contenu inedit STUDIOCANAL STORIES | Equipe Prod | Projecteur, ecran, son |\n| 20h15-20h30 | Echange avec les createurs | Q&A avec le realisateur/producteur | Com interne | Micros, fauteuils |\n| 20h30-21h15 | Diner anime | Buffet dinatoire + quiz cinema sur les ecrans | Traiteur + Com | Buffet, ecrans quiz |\n| 21h15-21h30 | Moment surprise | Annonce d\'un projet secret ou intervention speciale | Direction | A definir |\n| 21h30-22h00 | Remise des prix | "Meilleure story Canal+" vote par les collaborateurs | Com interne | Trophees, enveloppes |\n| 22h00-23h00 | DJ set & networking | DJ set cine-musical, bar ouvert, echanges libres | DJ + Logistique | DJ booth, lumieres |',
    },

    /* ---------- Etape 5 ---------- */
    {
      id: 'sprint1-step5',
      title: 'Produire la synthese et le plan final',
      description:
        'Demandez a Copilot Chat de compiler tous les elements precedents en un document de synthese final : concept, invitation, checklist, programme. Ce document servira de reference pour toute l\'equipe d\'organisation.',
      hints: [
        {
          id: 's1-s5-hint1',
          exercice_id: 'sprint1-step5',
          index: 0,
          text: 'Demandez une compilation : "Compile tous les elements que nous avons crees ensemble (concept, invitation, checklist, programme) en un document de synthese final structure. Ajoute un executive summary en haut de 5 lignes. Ce document sera partage a toute l\'equipe d\'organisation."',
        },
      ],
      idealPrompt:
        'Compile tous les elements de la soiree STUDIOCANAL STORIES en un document de synthese final. Structure : 1) Executive summary (5 lignes), 2) Concept et ambiance, 3) Mail d\'invitation (version finale), 4) Checklist d\'organisation (version synthetique), 5) Programme detaille. Ajoute en conclusion les 3 points d\'attention prioritaires pour la reussite de l\'evenement. Ton : professionnel, pret a etre partage en COMEX.',
      idealResult:
        'DOCUMENT DE SYNTHESE — Soiree STUDIOCANAL STORIES\n\nEXECUTIVE SUMMARY\nCanal+ organise le 15 mai 2025 une soiree interne au rooftop d\'Issy pour celebrer STUDIOCANAL STORIES. L\'evenement reunit 120 collaborateurs autour d\'une avant-premiere exclusive, d\'animations cinema et d\'un DJ set. Budget estime : 15-20K euros. Objectif : federer les equipes et creer un moment de fierte collective autour de nos contenus.\n\n1. CONCEPT & AMBIANCE\nTheme : "La Nuit des Histoires". Ambiance cinema premium avec projection mapping, eclairages or/bleu, bande-son cinematographique. Dress code : smart casual.\n\n2. INVITATION (voir mail complet ci-dessus)\nEnvoi J-30 (15 avril), relance J-7 (8 mai), confirmation attendue avant le 9 mai.\n\n3. CHECKLIST SYNTHETIQUE\n- Logistique : rooftop reserve, mobilier commande, deco validee\n- Traiteur : menu valide avec options dietetiques, cocktails signatures\n- Technique : son, projection, eclairage testes le 14 mai\n- Communication : invitation envoyee, relance programmee, affichage interne\n- Plan B : solution interieure, marge traiteur +10%, technicien de garde\n\n4. PROGRAMME\n19h Accueil cocktail > 19h30 Mot de bienvenue > 19h45 Avant-premiere > 20h15 Echange createurs > 20h30 Diner anime > 21h15 Surprise > 21h30 Remise de prix > 22h DJ set & networking > 23h Fin\n\nPOINTS D\'ATTENTION PRIORITAIRES\n1. Meteo : confirmer le plan B interieur 48h avant\n2. Technique : repetition generale le 14 mai obligatoire\n3. Communication : relancer les non-repondants par message Teams le 12 mai',
    },
  ],
};
