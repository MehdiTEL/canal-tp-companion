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
    'Canal+ organise un evenement interne pour celebrer le lancement de STUDIOCANAL STORIES. Vous etes en charge de l\'organisation complete. Utilisez Copilot Chat pour preparer chaque etape.',
  steps: [
    /* ---------- Etape 1 ---------- */
    {
      id: 'sprint1-step1',
      title: 'Brainstormer la vision de la soiree',
      description:
        'Utilisez Copilot Chat pour generer des idees de soiree autour de STUDIOCANAL STORIES. Demandez-lui de proposer un concept, une ambiance, un theme, et les moments forts de la soiree.',
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
          text: 'Donnez du contexte : "Canal+ organise une soiree interne pour celebrer le lancement de STUDIOCANAL STORIES. Propose 3 concepts de soiree originaux avec pour chacun : le theme, l\'ambiance, 3 moments forts, et le public cible."',
        },
        {
          id: 's1-s1-hint2',
          exercice_id: 'sprint1-step1',
          index: 1,
          text: 'Iterez pour affiner : "J\'aime le concept 2. Developpe-le en ajoutant des elements de decoration, un dress code, et un fil rouge pour la soiree."',
        },
      ],
      idealPrompt:
        'Tu es un event planner specialise dans les evenements corporate haut de gamme pour les groupes medias. Canal+ organise une soiree interne pour celebrer STUDIOCANAL STORIES. Propose 3 concepts de soiree originaux. Pour chacun, detaille : le theme, l\'ambiance (decoration, musique, lumieres), 3 moments forts, et le public vise. Sois creatif et premium.',
      idealResult:
        'Voici 3 concepts de soiree STUDIOCANAL STORIES :\n\n1. "La Nuit des Histoires" — Theme : voyage a travers les recits iconiques de STUDIOCANAL. Ambiance : projection mapping sur les murs, bande-son cinematographique, eclairages tamisees or et bleu. Moments forts : quiz immersif sur les films STUDIOCANAL, masterclass express d\'un realisateur, avant-premiere exclusive. Public : tous les collaborateurs Canal+.\n\n2. "Studio Session" — Theme : les coulisses de la creation. Ambiance : decor de studio de tournage, lumieres de plateau, clap de cinema geant. Moments forts : photo booth decor cinema, table ronde createurs/producteurs, projection de teasers inedits. Public : equipes creation, production et direction.\n\n3. "Canal Stories Club" — Theme : club prive cinematographique. Ambiance : fauteuils club, bar a cocktails thematiques, jazz/lounge. Moments forts : pitch de 3 projets STUDIOCANAL en avant-premiere, remise de prix "meilleure story", DJ set cine-musical. Public : tous collaborateurs + invites VIP.',
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
        'A partir du concept retenu pour la soiree STUDIOCANAL STORIES, redige un mail d\'invitation a envoyer a tous les collaborateurs Canal+. Ton : premium mais chaleureux, enthousiaste. Structure : objet de mail accrocheur, introduction captivante (3 lignes max), programme de la soiree en bullet points, informations pratiques (date : jeudi 15 mai, lieu : rooftop Canal+ Issy, horaire : 19h-23h, dress code : smart casual), et un call-to-action pour confirmer sa presence. Maximum 200 mots.',
      idealResult:
        'Objet : Vous etes invites a une soiree exceptionnelle STUDIOCANAL STORIES\n\nBonjour a toutes et a tous,\n\nLe cinema, c\'est aussi une histoire d\'equipe. Et cette equipe, c\'est vous. Pour celebrer le lancement de STUDIOCANAL STORIES, nous vous convions a une soiree qui s\'annonce memorable.\n\nAu programme :\n- 19h00 : Accueil cocktail & surprises cinematographiques\n- 19h45 : Avant-premiere exclusive d\'un contenu STUDIOCANAL STORIES\n- 20h30 : Diner & quiz immersif "Etes-vous incollable sur nos films ?"\n- 21h30 : DJ set cine-musical & photo booth decor de tournage\n\nInfos pratiques :\n- Date : Jeudi 15 mai 2025\n- Lieu : Rooftop Canal+, Issy-les-Moulineaux\n- Horaire : 19h - 23h\n- Dress code : Smart casual (venez comme a une avant-premiere, pas comme a un COMEX)\n\nConfirmez votre presence avant le 9 mai en repondant a ce mail.\n\nOn a hate de partager ce moment avec vous.\n\nL\'equipe STUDIOCANAL STORIES',
    },

    /* ---------- Etape 3 ---------- */
    {
      id: 'sprint1-step3',
      title: 'Creer la checklist d\'organisation',
      description:
        'Utilisez Copilot Chat pour generer une checklist complete d\'organisation de la soiree : logistique, traiteur, technique, communication, plan B en cas d\'imprevus.',
      documents: [
        {
          name: 'checklist-organisation-soiree.xlsx',
          type: 'xlsx',
          path: 'documents/checklist-organisation-soiree.xlsx',
          description: 'Modele de checklist a completer avec Copilot Chat',
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
        'Genere une checklist detaillee pour organiser la soiree STUDIOCANAL STORIES au rooftop Canal+ le 15 mai. Categories obligatoires : Logistique (lieu, mobilier, decoration, signalisation), Traiteur (menu, boissons, regime alimentaire), Technique (son, video, projection, eclairage), Communication (invitations, relances, affichage interne), Plan B (meteo, no-show, incident technique). Pour chaque item : description, responsable suggere, et deadline. Format checklist avec cases a cocher.',
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
