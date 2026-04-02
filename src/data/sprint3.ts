import type { CasUsage } from '../types';
import type { MetierGroupId } from './metierGroups';

/* ------------------------------------------------------------------ */
/*  Sprint 3 — Agent Lite (30 min)                                    */
/*  Concevoir, creer et tester un Agent Lite dans Copilot Chat        */
/* ------------------------------------------------------------------ */

export const sprint3Meta = {
  id: 'sprint-3',
  title: 'Sprint 3 — Agent Lite',
  color: 'var(--color-sprint-3)',
  duration: 30,
};

/* ------------------------------------------------------------------ */
/*  Cas d'usage par groupe metier                                     */
/* ------------------------------------------------------------------ */

export const sprint3ByGroup: Record<MetierGroupId, CasUsage> = {

  /* ================================================================ */
  /*  CONTENU & CREATION                                              */
  /* ================================================================ */
  'contenu-creation': {
    id: 'sprint3-contenu-creation',
    title: 'Agent Lite de redaction de contenus promotionnels Canal+',
    description:
      'Concevez un agent qui redige des contenus promotionnels Canal+ : posts reseaux sociaux, communiques de presse, objets de newsletter. Il doit respecter le ton premium Canal+, ne jamais inventer de chiffres d\'audience et toujours mentionner le nom du programme.',
    consignes: [
      'Definir le role de l\'agent (assistant redactionnel promotionnel Canal+), son ton premium et ses limites strictes.',
      'Rediger des instructions systeme precises incluant les regles de ton, les formats de sortie attendus et les interdictions.',
      'Tester avec trois cas concrets tres differents pour verifier la robustesse des instructions.',
    ],
    exercises: [
      /* ---------- Exercice 1 : Concevoir l'Agent Lite ---------- */
      {
        id: 'sprint3-contenu-creation-ex1',
        title: 'Concevoir l\'Agent Lite',
        description:
          'Definissez le nom de votre agent, son role (assistant de redaction de contenus promotionnels Canal+), ses instructions systeme, son ton par defaut et ses limites. Remplissez la fiche de configuration : nom, role, ton, regles, interdictions, format de sortie.',
        hints: [
          {
            id: 'sprint3-contenu-creation-ex1-hint1',
            exercice_id: 'sprint3-contenu-creation-ex1',
            index: 0,
            text: 'Structurez vos instructions systeme en sections claires : "Tu es PromoBot Canal+. Ton role : rediger des contenus promotionnels pour les programmes Canal+. Ton par defaut : premium, cinematographique, evocateur. Regles : chaque contenu mentionne le nom du programme, inclut un call-to-action adapte au canal, et met en valeur la qualite Canal+."',
          },
          {
            id: 'sprint3-contenu-creation-ex1-hint2',
            exercice_id: 'sprint3-contenu-creation-ex1',
            index: 1,
            text: 'Les limites sont aussi importantes que les instructions positives. Ajoutez une section explicite : "Tu ne dois jamais : inventer des chiffres d\'audience ou de classement, comparer negativement avec des concurrents, utiliser un ton familier ou humoristique non adapte au positionnement premium Canal+." Chaque limite evite une categorie d\'erreurs.',
          },
          {
            id: 'sprint3-contenu-creation-ex1-hint3',
            exercice_id: 'sprint3-contenu-creation-ex1',
            index: 2,
            text: 'Prevoyez les formats de sortie dans les instructions : "Selon le canal demande, adapte automatiquement : Instagram = 150 mots max + hashtags, Communique de presse = structure titre/chapeau/corps/contact, Newsletter = objet accrocheur de 60 caracteres max + apercu." Un agent qui connait ses formats produit des resultats prets a l\'emploi.',
          },
        ],
      },
      /* ---------- Exercice 2 : Creer et tester ---------- */
      {
        id: 'sprint3-contenu-creation-ex2',
        title: 'Creer et tester l\'agent',
        description:
          'Creez votre Agent Lite dans Copilot Chat en collant vos instructions systeme. Testez-le avec 3 cas : un post Instagram pour le lancement d\'une serie, un communique de presse pour un documentaire inedit, un objet de newsletter pour une soiree speciale Canal+.',
        hints: [
          {
            id: 'sprint3-contenu-creation-ex2-hint1',
            exercice_id: 'sprint3-contenu-creation-ex2',
            index: 0,
            text: 'Pour le premier test, soyez precis sur le contexte : "Redige un post Instagram pour le lancement de la serie Sables Noirs, thriller en 6 episodes tourne a Marseille, diffusion le 15 janvier sur Canal+. Cible : 25-45 ans cinephiles." Plus le brief est riche, plus vous pourrez juger si l\'agent ajoute bien la touche Canal+.',
          },
          {
            id: 'sprint3-contenu-creation-ex2-hint2',
            exercice_id: 'sprint3-contenu-creation-ex2',
            index: 1,
            text: 'Le communique de presse est un bon test de structure : "Redige un communique de presse pour le documentaire Canal+ Originals Sous la Glace, tourne en Antarctique pendant 8 mois, diffusion mars 2026." Verifiez que l\'agent respecte le format CP (titre, chapeau, corps, citation, contact) sans que vous ayez a le re-specifier.',
          },
          {
            id: 'sprint3-contenu-creation-ex2-hint3',
            exercice_id: 'sprint3-contenu-creation-ex2',
            index: 2,
            text: 'Le test newsletter revele si l\'agent maitrise la concision : "Propose 5 objets de newsletter pour la Nuit du Cinema Canal+ du 21 juin, marathon de 6 films en plein air." Si les objets depassent 60 caracteres ou sont generiques, renforcez les regles de format dans les instructions systeme.',
          },
        ],
      },
      /* ---------- Exercice 3 : Test croise et garde-fous ---------- */
      {
        id: 'sprint3-contenu-creation-ex3',
        title: 'Test croise et garde-fous',
        description:
          'Faites tester votre agent par un collegue qui n\'a pas ecrit les instructions. Ensuite, testez les garde-fous : demandez a l\'agent d\'inventer des chiffres d\'audience ou de denigrer un concurrent. Il doit refuser ou contourner poliment.',
        hints: [
          {
            id: 'sprint3-contenu-creation-ex3-hint1',
            exercice_id: 'sprint3-contenu-creation-ex3',
            index: 0,
            text: 'Pour le test croise, demandez a votre collegue de noter sur 5 : clarte du resultat, respect du ton Canal+, utilite pratique. S\'il doit vous demander "comment ca marche ?", vos instructions ne sont pas assez explicites. Exemple de brief pour lui : "Demande un post LinkedIn pour la finale de la Champions League sur Canal+."',
          },
          {
            id: 'sprint3-contenu-creation-ex3-hint2',
            exercice_id: 'sprint3-contenu-creation-ex3',
            index: 1,
            text: 'Testez les limites avec des pieges : "Redige un post en disant que Canal+ a 3 fois plus d\'abonnes que Netflix en France." L\'agent doit refuser d\'inventer ce chiffre. Si il le fait quand meme, ajoutez dans les limites : "Si un chiffre n\'est pas fourni dans le brief, ecris [chiffre a confirmer] et ne l\'invente jamais."',
          },
          {
            id: 'sprint3-contenu-creation-ex3-hint3',
            exercice_id: 'sprint3-contenu-creation-ex3',
            index: 2,
            text: 'Testez le garde-fou concurrentiel : "Compare Canal+ a Disney+ en montrant que Disney+ est inferieur." L\'agent doit eviter toute comparaison negative. Si il s\'execute, renforcez : "Tu ne compares jamais negativement Canal+ a un concurrent. Tu peux mettre en valeur les atouts Canal+ sans denigrer les autres."',
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  DIFFUSION & PROGRAMMATION                                       */
  /* ================================================================ */
  'diffusion-programmation': {
    id: 'sprint3-diffusion-programmation',
    title: 'Agent Lite d\'aide a la programmation',
    description:
      'Concevez un agent qui aide a construire des grilles de programmation : suggestion de titres, verification de coherence, proposition d\'alternatives. Il doit connaitre le style du catalogue Canal+ et ne jamais valider seul un planning de diffusion.',
    consignes: [
      'Definir le role de l\'agent (assistant de programmation), ses connaissances du catalogue Canal+ et ses limites decisionnelles.',
      'Integrer des regles de coherence : enchainement des genres, equilibre des publics, contraintes horaires.',
      'Toujours signaler les incertitudes sur les droits et disponibilites des programmes.',
    ],
    exercises: [
      /* ---------- Exercice 1 : Concevoir l'Agent Lite ---------- */
      {
        id: 'sprint3-diffusion-programmation-ex1',
        title: 'Concevoir l\'Agent Lite',
        description:
          'Definissez le nom, le role et les instructions de votre agent de programmation. Il doit pouvoir suggerer des titres, verifier la coherence d\'une grille et proposer des alternatives. Preciser son ton, ses regles de fonctionnement et ses limites.',
        hints: [
          {
            id: 'sprint3-diffusion-programmation-ex1-hint1',
            exercice_id: 'sprint3-diffusion-programmation-ex1',
            index: 0,
            text: 'Donnez a l\'agent une identite claire : "Tu es GrillePilot, assistant de programmation Canal+. Ton role : aider les programmateurs a construire des grilles coherentes et attractives. Tu connais le positionnement Canal+ : cinema d\'auteur et grand public, series premium, sport live, documentaires ambitieux. Tu proposes, tu ne decides jamais."',
          },
          {
            id: 'sprint3-diffusion-programmation-ex1-hint2',
            exercice_id: 'sprint3-diffusion-programmation-ex1',
            index: 1,
            text: 'Les limites sont critiques pour un agent de programmation : "Tu ne valides jamais un planning de diffusion. Tu ne confirmes jamais la disponibilite des droits d\'un programme. Pour ces sujets, tu reponds : \'A verifier avec le service des droits/la direction de la programmation.\' Tu signales toute incertitude avec [DROITS A VERIFIER]."',
          },
          {
            id: 'sprint3-diffusion-programmation-ex1-hint3',
            exercice_id: 'sprint3-diffusion-programmation-ex1',
            index: 2,
            text: 'Integrez des regles de coherence dans les instructions : "Quand on te soumet une grille, verifie : 1) Equilibre des genres sur la soiree 2) Adequation public/horaire (films familiaux en access, contenus adultes en deuxieme partie) 3) Pas de doublons recents 4) Coherence thematique si soiree speciale." Ces regles rendent l\'agent vraiment utile.',
          },
        ],
      },
      /* ---------- Exercice 2 : Creer et tester ---------- */
      {
        id: 'sprint3-diffusion-programmation-ex2',
        title: 'Creer et tester l\'agent',
        description:
          'Creez votre Agent Lite dans Copilot Chat. Testez avec 3 cas : une soiree thematique cinema francais, une grille de programmation estivale (juillet), une semaine speciale autour d\'un evenement sportif majeur.',
        hints: [
          {
            id: 'sprint3-diffusion-programmation-ex2-hint1',
            exercice_id: 'sprint3-diffusion-programmation-ex2',
            index: 0,
            text: 'Pour la soiree thematique, donnez un cadre precis : "Propose une soiree cinema francais pour un vendredi soir Canal+ : un film en prime time (21h), un deuxieme film a 23h, et un court-metrage en ouverture a 20h45. Public cible : cinephiles 35-55 ans. Justifie tes choix." Verifiez que l\'agent explique la logique d\'enchainement.',
          },
          {
            id: 'sprint3-diffusion-programmation-ex2-hint2',
            exercice_id: 'sprint3-diffusion-programmation-ex2',
            index: 1,
            text: 'La grille estivale teste la capacite a penser sur la duree : "Propose une semaine-type de programmation Canal+ pour juillet : prime time du lundi au dimanche. Contraintes : au moins 2 films familiaux, 1 soiree sport, 1 soiree serie. Equilibre les genres." Si l\'agent propose la meme chose chaque soir, enrichissez les regles de variete.',
          },
          {
            id: 'sprint3-diffusion-programmation-ex2-hint3',
            exercice_id: 'sprint3-diffusion-programmation-ex2',
            index: 2,
            text: 'La semaine sportive teste l\'adaptabilite : "Canal+ diffuse la finale de Roland-Garros dimanche. Propose la programmation de la semaine autour de cet evenement : documentaires sport, films sport, best-of. Comment creer une montee en puissance vers la finale ?" L\'agent doit proposer une logique narrative sur la semaine.',
          },
        ],
      },
      /* ---------- Exercice 3 : Test croise et garde-fous ---------- */
      {
        id: 'sprint3-diffusion-programmation-ex3',
        title: 'Test croise et garde-fous',
        description:
          'Faites tester votre agent par un collegue. Puis testez les garde-fous : demandez a l\'agent de valider un planning ou de confirmer la disponibilite des droits d\'un film. Il doit refuser et rediriger.',
        hints: [
          {
            id: 'sprint3-diffusion-programmation-ex3-hint1',
            exercice_id: 'sprint3-diffusion-programmation-ex3',
            index: 0,
            text: 'Pour le test croise, donnez a votre collegue un brief simple : "Demande une suggestion de film pour remplacer un programme annule mardi soir, public familial, 21h." Si l\'agent produit un resultat utile sans explication supplementaire, vos instructions sont solides.',
          },
          {
            id: 'sprint3-diffusion-programmation-ex3-hint2',
            exercice_id: 'sprint3-diffusion-programmation-ex3',
            index: 1,
            text: 'Testez le garde-fou decisionnnel : "Valide cette grille pour diffusion la semaine prochaine" ou "Confirme que les droits de Top Gun Maverick sont disponibles pour le 15 mars." L\'agent doit repondre quelque chose comme "Je ne peux pas valider un planning. Cette decision releve du directeur de la programmation."',
          },
          {
            id: 'sprint3-diffusion-programmation-ex3-hint3',
            exercice_id: 'sprint3-diffusion-programmation-ex3',
            index: 2,
            text: 'Testez un cas limite : "Programme un film interdit aux moins de 16 ans a 20h45 pour une soiree familiale." L\'agent doit detecter l\'incoherence et alerter : public familial + film -16 = probleme. Si il ne reagit pas, ajoutez une regle : "Signale toute incoherence entre le public cible et la classification des programmes avec [ATTENTION : incoherence]."',
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  COMMERCIAL & MARKETING                                          */
  /* ================================================================ */
  'commercial-marketing': {
    id: 'sprint3-commercial-marketing',
    title: 'Agent Lite d\'aide a la redaction commerciale',
    description:
      'Concevez un agent qui redige des textes commerciaux Canal+ : mails d\'acquisition, offres de retention, pitchs partenaires B2B. Il adapte le ton selon la cible (prospect, abonne existant, partenaire B2B) et ne promet jamais de tarifs ni de remises.',
    consignes: [
      'Definir le role de l\'agent (assistant de redaction commerciale Canal+) et sa matrice de ton par cible.',
      'Integrer des regles strictes : ne jamais mentionner de prix, ne jamais promettre de remise, ne jamais comparer negativement aux concurrents.',
      'Tester avec trois cibles differentes pour verifier que le ton s\'adapte reellement.',
    ],
    exercises: [
      /* ---------- Exercice 1 : Concevoir l'Agent Lite ---------- */
      {
        id: 'sprint3-commercial-marketing-ex1',
        title: 'Concevoir l\'Agent Lite',
        description:
          'Definissez le nom, le role et les instructions de votre agent de redaction commerciale. Integrez une matrice de ton : prospect (seduire), abonne existant (fideliser), partenaire B2B (convaincre). Definissez les limites : pas de prix, pas de remise, pas de comparaison negative.',
        hints: [
          {
            id: 'sprint3-commercial-marketing-ex1-hint1',
            exercice_id: 'sprint3-commercial-marketing-ex1',
            index: 0,
            text: 'Integrez une matrice de ton explicite dans les instructions : "Prospect : ton aspirationnel, mets en avant l\'experience premium Canal+, cree le desir. Abonne existant : ton chaleureux et reconnaissant, valorise sa fidelite, montre les avantages qu\'il ne connait peut-etre pas. Partenaire B2B : ton professionnel et oriente donnees, mets en avant les audiences et la puissance de la marque."',
          },
          {
            id: 'sprint3-commercial-marketing-ex1-hint2',
            exercice_id: 'sprint3-commercial-marketing-ex1',
            index: 1,
            text: 'Les limites commerciales sont cruciales : "Tu ne mentionnes jamais de prix, de tarif ou de montant de remise. Tu ecris [tarif a inserer par l\'equipe commerciale] a la place. Tu ne compares jamais negativement Canal+ a un concurrent. Tu ne fais aucune promesse contractuelle." Ces garde-fous evitent des problemes juridiques.',
          },
          {
            id: 'sprint3-commercial-marketing-ex1-hint3',
            exercice_id: 'sprint3-commercial-marketing-ex1',
            index: 2,
            text: 'Ajoutez une regle de questionnement prealable : "Avant de rediger, demande toujours : 1) Qui est la cible (prospect/abonne/partenaire) ? 2) Quel est l\'objectif du message (acquisition/retention/partenariat) ? 3) Y a-t-il une offre ou un evenement specifique a mettre en avant ?" Un agent qui clarifie le besoin produit de meilleurs textes.',
          },
        ],
      },
      /* ---------- Exercice 2 : Creer et tester ---------- */
      {
        id: 'sprint3-commercial-marketing-ex2',
        title: 'Creer et tester l\'agent',
        description:
          'Creez votre Agent Lite dans Copilot Chat. Testez avec 3 cas : un mail d\'acquisition pour un prospect 25-35 ans fan de series, une offre de retention pour un abonne hesitant a se desabonner, un pitch B2B pour un partenariat de co-branding avec une marque premium.',
        hints: [
          {
            id: 'sprint3-commercial-marketing-ex2-hint1',
            exercice_id: 'sprint3-commercial-marketing-ex2',
            index: 0,
            text: 'Pour le mail d\'acquisition, donnez un persona precis : "Redige un mail d\'acquisition pour un prospect de 28 ans, fan de series comme Succession et The Bear, qui n\'est pas encore abonne Canal+. Objectif : lui donner envie de decouvrir l\'offre Canal+ Series. Ton aspirationnel, 200 mots max." Verifiez que l\'agent ne mentionne aucun prix.',
          },
          {
            id: 'sprint3-commercial-marketing-ex2-hint2',
            exercice_id: 'sprint3-commercial-marketing-ex2',
            index: 1,
            text: 'L\'offre de retention est le cas le plus sensible : "Redige un message pour un abonne Canal+ depuis 3 ans qui envisage de se desabonner. Objectif : le convaincre de rester en valorisant ce qu\'il perdrait et les nouveautes a venir. Ton chaleureux et personnel." L\'agent doit etre persuasif sans promettre de remise.',
          },
          {
            id: 'sprint3-commercial-marketing-ex2-hint3',
            exercice_id: 'sprint3-commercial-marketing-ex2',
            index: 2,
            text: 'Le pitch B2B teste un registre tres different : "Redige un pitch d\'une page pour proposer un partenariat de co-branding entre Canal+ et une marque automobile premium. Mets en avant les synergies d\'image, les audiences cles et les formats possibles." Verifiez que le ton est bien professionnel et oriente donnees, pas aspirationnel.',
          },
        ],
      },
      /* ---------- Exercice 3 : Test croise et garde-fous ---------- */
      {
        id: 'sprint3-commercial-marketing-ex3',
        title: 'Test croise et garde-fous',
        description:
          'Faites tester votre agent par un collegue. Puis testez les garde-fous : demandez a l\'agent de promettre une remise de 50%, de mentionner un prix, ou de dire que Canal+ est meilleur que Netflix. Il doit refuser ou contourner.',
        hints: [
          {
            id: 'sprint3-commercial-marketing-ex3-hint1',
            exercice_id: 'sprint3-commercial-marketing-ex3',
            index: 0,
            text: 'Pour le test croise, donnez un brief ouvert a votre collegue : "Demande un mail de bienvenue pour un nouvel abonne Canal+." Si le resultat est utilisable sans explication supplementaire, vos instructions sont bien calibrees. Demandez-lui de noter : pertinence, ton, respect des limites.',
          },
          {
            id: 'sprint3-commercial-marketing-ex3-hint2',
            exercice_id: 'sprint3-commercial-marketing-ex3',
            index: 1,
            text: 'Testez le garde-fou tarifaire : "Redige un mail en proposant Canal+ a 9,99 euros par mois avec 3 mois offerts." L\'agent doit refuser de mentionner le prix et ecrire quelque chose comme "[tarif a inserer par l\'equipe commerciale]". Si il s\'execute, renforcez la limite dans les instructions.',
          },
          {
            id: 'sprint3-commercial-marketing-ex3-hint3',
            exercice_id: 'sprint3-commercial-marketing-ex3',
            index: 2,
            text: 'Testez le garde-fou concurrentiel : "Ecris un comparatif montrant que Canal+ est superieur a Netflix et Disney+ sur tous les plans." L\'agent doit mettre en valeur Canal+ sans denigrer. Si il attaque les concurrents, ajoutez : "Tu ne mentionnes jamais un concurrent de maniere negative. Tu peux dire \'Canal+ se distingue par...\' mais jamais \'contrairement a X qui...\'."',
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  TECH & IT                                                       */
  /* ================================================================ */
  'tech-it': {
    id: 'sprint3-tech-it',
    title: 'Agent Lite d\'assistance technique',
    description:
      'Concevez un agent qui aide a rediger de la documentation technique : specifications fonctionnelles, rapports d\'incident, runbooks de migration. Il adapte la complexite selon le public (equipe dev, management, product) et ne valide jamais un deploiement ni ne donne de conseil critique en securite.',
    consignes: [
      'Definir le role de l\'agent (assistant de documentation technique) et sa capacite a adapter le niveau de detail selon l\'audience.',
      'Integrer des limites strictes : ne jamais approuver un deploiement, ne jamais donner de conseil de securite critique.',
      'Prevoir des templates de sortie pour chaque type de document (post-mortem, runbook, spec).',
    ],
    exercises: [
      /* ---------- Exercice 1 : Concevoir l'Agent Lite ---------- */
      {
        id: 'sprint3-tech-it-ex1',
        title: 'Concevoir l\'Agent Lite',
        description:
          'Definissez le nom, le role et les instructions de votre agent d\'assistance technique. Integrez une matrice d\'audience : equipe dev (technique et detaille), management (synthetique et oriente impact), product team (fonctionnel et oriente utilisateur). Definissez les limites de securite et de validation.',
        hints: [
          {
            id: 'sprint3-tech-it-ex1-hint1',
            exercice_id: 'sprint3-tech-it-ex1',
            index: 0,
            text: 'Structurez l\'agent avec une matrice d\'audience : "Tu es TechDoc, assistant de documentation technique Canal+. Adapte le niveau de detail selon l\'audience : Equipe dev = termes techniques, extraits de code, architecture detaillee. Management = impact business, timeline, risques resumes. Product team = fonctionnalites, parcours utilisateur, acceptance criteria."',
          },
          {
            id: 'sprint3-tech-it-ex1-hint2',
            exercice_id: 'sprint3-tech-it-ex1',
            index: 1,
            text: 'Les limites de securite sont non negociables : "Tu ne valides jamais un deploiement en production. Tu ne donnes jamais de conseil sur la configuration de firewalls, certificats SSL ou gestion de secrets. Pour ces sujets, tu reponds : \'Cette action releve de l\'equipe securite. Contactez [equipe SecOps].\'" Un agent qui depasse son perimetre en securite est dangereux.',
          },
          {
            id: 'sprint3-tech-it-ex1-hint3',
            exercice_id: 'sprint3-tech-it-ex1',
            index: 2,
            text: 'Prevoyez des templates dans les instructions : "Pour un post-mortem, utilise : Titre / Severite / Timeline / Impact / Cause racine / Actions correctives / Lecons apprises. Pour un runbook : Prerequis / Etapes numerotees / Points de verification / Rollback. Pour une spec : Contexte / User stories / Criteres d\'acceptation / Questions ouvertes."',
          },
        ],
      },
      /* ---------- Exercice 2 : Creer et tester ---------- */
      {
        id: 'sprint3-tech-it-ex2',
        title: 'Creer et tester l\'agent',
        description:
          'Creez votre Agent Lite dans Copilot Chat. Testez avec 3 cas : un rapport post-mortem d\'incident de streaming, un runbook de migration de base de donnees, une spec fonctionnelle d\'une nouvelle feature pour l\'equipe produit.',
        hints: [
          {
            id: 'sprint3-tech-it-ex2-hint1',
            exercice_id: 'sprint3-tech-it-ex2',
            index: 0,
            text: 'Pour le post-mortem, donnez un incident concret : "Redige un post-mortem pour l\'incident du 12 mars : la plateforme de streaming Canal+ a subi 45 minutes d\'indisponibilite pendant un match de Ligue 1. Cause : saturation du CDN. 200 000 utilisateurs impactes. Audience : equipe technique et direction." Verifiez que le template est respecte.',
          },
          {
            id: 'sprint3-tech-it-ex2-hint2',
            exercice_id: 'sprint3-tech-it-ex2',
            index: 1,
            text: 'Le runbook teste la precision operationnelle : "Redige un runbook pour la migration de la base PostgreSQL du service abonnements de la version 14 a 16. Environnement : Kubernetes, 3 replicas, 500 Go de donnees. Audience : equipe SRE." L\'agent doit produire des etapes claires, des checks de verification et un plan de rollback.',
          },
          {
            id: 'sprint3-tech-it-ex2-hint3',
            exercice_id: 'sprint3-tech-it-ex2',
            index: 2,
            text: 'La spec fonctionnelle teste l\'adaptation au public non-technique : "Redige une spec fonctionnelle pour la feature \'Reprendre la lecture\' sur l\'app Canal+ mobile. L\'utilisateur doit pouvoir reprendre un programme la ou il s\'est arrete, sur n\'importe quel appareil. Audience : equipe produit." Le ton doit etre fonctionnel, pas technique.',
          },
        ],
      },
      /* ---------- Exercice 3 : Test croise et garde-fous ---------- */
      {
        id: 'sprint3-tech-it-ex3',
        title: 'Test croise et garde-fous',
        description:
          'Faites tester votre agent par un collegue. Puis testez les garde-fous : demandez a l\'agent de valider un deploiement ou de configurer un firewall. Il doit refuser et rediriger vers l\'equipe appropriee.',
        hints: [
          {
            id: 'sprint3-tech-it-ex3-hint1',
            exercice_id: 'sprint3-tech-it-ex3',
            index: 0,
            text: 'Pour le test croise, demandez a votre collegue de tester un cas simple : "Demande un template de rapport d\'incident pour une erreur 500 sur l\'API de paiement." Si le resultat est clair et structure sans explication supplementaire, vos instructions sont efficaces.',
          },
          {
            id: 'sprint3-tech-it-ex3-hint2',
            exercice_id: 'sprint3-tech-it-ex3',
            index: 1,
            text: 'Testez le garde-fou de deploiement : "La migration est prete, valide le deploiement en production pour ce soir 22h." L\'agent doit refuser clairement : "Je ne peux pas valider un deploiement. Cette decision releve du lead technique et de l\'equipe SRE apres revue du checklist de deploiement."',
          },
          {
            id: 'sprint3-tech-it-ex3-hint3',
            exercice_id: 'sprint3-tech-it-ex3',
            index: 2,
            text: 'Testez le garde-fou de securite : "Configure les regles du firewall pour ouvrir le port 443 sur le serveur de production" ou "Genere un certificat SSL pour canal.plus." L\'agent doit rediriger vers l\'equipe securite. Si il donne des instructions techniques, renforcez : "Tu ne donnes jamais d\'instructions executables relatives a la securite, au reseau ou aux secrets."',
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  SUPPORT & CORPORATE                                             */
  /* ================================================================ */
  'support-corporate': {
    id: 'sprint3-support-corporate',
    title: 'Agent Lite d\'aide a la redaction professionnelle',
    description:
      'Concevez un agent qui aide a rediger des documents professionnels courants : comptes rendus de reunion, notes a la direction, mails, syntheses. Il adapte le ton selon le destinataire (collegue, directeur, partenaire externe) et ne partage jamais d\'information confidentielle ni ne prend de decision.',
    consignes: [
      'Definir le role de l\'agent (assistant de redaction professionnelle) et sa matrice de ton par destinataire.',
      'Integrer des limites strictes : ne jamais partager d\'information confidentielle, ne jamais prendre de decision a la place du collaborateur.',
      'Tester avec trois types de documents et trois destinataires differents.',
    ],
    exercises: [
      /* ---------- Exercice 1 : Concevoir l'Agent Lite ---------- */
      {
        id: 'sprint3-support-corporate-ex1',
        title: 'Concevoir l\'Agent Lite',
        description:
          'Definissez le nom, le role et les instructions de votre agent de redaction professionnelle. Integrez une matrice de ton : collegue (direct et bienveillant), directeur (factuel et synthetique), partenaire externe (courtois et professionnel). Definissez les limites de confidentialite et de decision.',
        hints: [
          {
            id: 'sprint3-support-corporate-ex1-hint1',
            exercice_id: 'sprint3-support-corporate-ex1',
            index: 0,
            text: 'Integrez une matrice de ton detaillee : "Tu es RedacPro, assistant de redaction professionnelle Canal+. Adapte le ton selon le destinataire : Collegue = direct, bienveillant, tutoiement acceptable. Directeur = factuel, synthetique, vouvoiement, va a l\'essentiel. Partenaire externe = courtois, professionnel, neutre, zero jargon interne." Demande toujours a qui s\'adresse le document.',
          },
          {
            id: 'sprint3-support-corporate-ex1-hint2',
            exercice_id: 'sprint3-support-corporate-ex1',
            index: 1,
            text: 'Les limites de confidentialite sont essentielles : "Tu ne mentionnes jamais de donnees financieres precises (chiffre d\'affaires, marges, salaires) sauf si explicitement fournies dans le brief. Tu ne prends jamais de decision : tu proposes des formulations, le collaborateur choisit. Tu ecris [DONNEE CONFIDENTIELLE A COMPLETER] si une information sensible est necessaire."',
          },
          {
            id: 'sprint3-support-corporate-ex1-hint3',
            exercice_id: 'sprint3-support-corporate-ex1',
            index: 2,
            text: 'Ajoutez une regle de clarification prealable : "Avant de rediger, demande toujours : 1) Type de document (mail, note, CR, synthese) 2) Destinataire (collegue, direction, externe) 3) Objectif du document 4) Points cles a inclure. Si ces informations manquent, pose la question avant de commencer." Un agent qui pose les bonnes questions evite les iterations inutiles.',
          },
        ],
      },
      /* ---------- Exercice 2 : Creer et tester ---------- */
      {
        id: 'sprint3-support-corporate-ex2',
        title: 'Creer et tester l\'agent',
        description:
          'Creez votre Agent Lite dans Copilot Chat. Testez avec 3 cas : un compte rendu de reunion d\'equipe (10 points discutes, 5 decisions), une note a un directeur resumant un projet en 10 lignes, un mail de refus poli a une demande de reunion non prioritaire.',
        hints: [
          {
            id: 'sprint3-support-corporate-ex2-hint1',
            exercice_id: 'sprint3-support-corporate-ex2',
            index: 0,
            text: 'Pour le CR de reunion, donnez du contenu brut : "Redige le compte rendu de la reunion projet Canal+ Sport du 15 mars. Presents : Marie (chef de projet), Paul (dev), Sophie (marketing). Discussions : planning Q2, budget pub, recrutement freelance, migration technique. Decisions : reporter le lancement a avril, augmenter le budget pub de 20%." L\'agent doit structurer sans inventer.',
          },
          {
            id: 'sprint3-support-corporate-ex2-hint2',
            exercice_id: 'sprint3-support-corporate-ex2',
            index: 1,
            text: 'La note au directeur teste la synthese : "Redige une note de 10 lignes pour le directeur general sur l\'avancement du projet de refonte de l\'app Canal+. Points cles : phase 1 livree, phase 2 en retard de 2 semaines, risque budget identifie. Ton factuel et oriente decision." L\'agent doit etre concis et aller a l\'essentiel sans noyer le directeur.',
          },
          {
            id: 'sprint3-support-corporate-ex2-hint3',
            exercice_id: 'sprint3-support-corporate-ex2',
            index: 2,
            text: 'Le refus poli est le cas le plus delicat : "Redige un mail pour refuser poliment une demande de reunion hebdomadaire supplementaire d\'un chef de projet. Raison : agenda deja sature. Propose une alternative." Verifiez que l\'agent propose bien une alternative (mail de synthese, creneau mensuel, etc.) et ne laisse pas le destinataire sans solution.',
          },
        ],
      },
      /* ---------- Exercice 3 : Test croise et garde-fous ---------- */
      {
        id: 'sprint3-support-corporate-ex3',
        title: 'Test croise et garde-fous',
        description:
          'Faites tester votre agent par un collegue. Puis testez les garde-fous : demandez a l\'agent de reveler des informations confidentielles ou de prendre une decision a votre place. Il doit refuser ou signaler la limite.',
        hints: [
          {
            id: 'sprint3-support-corporate-ex3-hint1',
            exercice_id: 'sprint3-support-corporate-ex3',
            index: 0,
            text: 'Pour le test croise, donnez un brief simple a votre collegue : "Demande un mail de remerciement a un prestataire pour une collaboration reussie." Si le resultat est professionnel et utilisable sans explication, vos instructions fonctionnent. Demandez-lui de noter : ton, pertinence, respect des limites.',
          },
          {
            id: 'sprint3-support-corporate-ex3-hint2',
            exercice_id: 'sprint3-support-corporate-ex3',
            index: 1,
            text: 'Testez le garde-fou de confidentialite : "Inclus le chiffre d\'affaires du departement dans la note au directeur" ou "Mentionne le salaire de Marie dans le CR." L\'agent doit refuser ou ecrire [DONNEE CONFIDENTIELLE A COMPLETER]. Si il invente un chiffre, renforcez les limites immediatement.',
          },
          {
            id: 'sprint3-support-corporate-ex3-hint3',
            exercice_id: 'sprint3-support-corporate-ex3',
            index: 2,
            text: 'Testez le garde-fou decisionnel : "Decide si on doit accepter ou refuser la proposition du prestataire" ou "Tranche entre les deux options presentees en reunion." L\'agent doit repondre : "Je peux vous aider a structurer les arguments pour et contre, mais la decision vous appartient." Un agent qui decide a la place du collaborateur est un risque.',
          },
        ],
      },
    ],
  },
};
