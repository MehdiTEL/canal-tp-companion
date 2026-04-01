import type { Scenario } from '../types';

export const sprint1Data = {
  id: 'sprint-1',
  title: 'Sprint 1 — Cas pratique transverse',
  color: 'var(--color-sprint-1)',
  duration: 25,
  description: 'Choisissez UN scenario parmi les 3 proposes. Chaque scenario comporte plusieurs etapes guidees.',
  scenarios: [
    {
      id: 'scenario-1',
      title: 'Preparer une reunion de lancement d\'un mini-projet editorial',
      description: 'A partir de documents fournis (brief + mail), vous preparez une reunion de lancement complete avec ordre du jour, support et messages d\'invitation.',
      steps: [
        {
          id: 'sprint1-s1-step1',
          title: 'Comprendre le document source et faire emerger l\'essentiel',
          description: 'Chargez le document dans Copilot Chat et demandez une synthese des points cles.',
          hints: [
            {
              id: 'sprint1-s1-step1-hint1',
              exercice_id: 'sprint1-s1-step1',
              index: 0,
              text: 'Prompt suggere : "Analyse ce document et extrais les 5 informations les plus importantes pour preparer une reunion de lancement projet. Pour chaque point, indique pourquoi il est critique."',
            },
            {
              id: 'sprint1-s1-step1-hint2',
              exercice_id: 'sprint1-s1-step1',
              index: 1,
              text: 'Si le document est long, precisez ce que vous cherchez : "Concentre-toi sur les objectifs, les delais, les parties prenantes et les risques mentionnes." Un prompt cible donne un resultat cible.',
            },
          ],
        },
        {
          id: 'sprint1-s1-step2',
          title: 'Resumer les points cles du mail recu',
          description: 'Extrayez les informations actionnables du mail.',
          hints: [
            {
              id: 'sprint1-s1-step2-hint1',
              exercice_id: 'sprint1-s1-step2',
              index: 0,
              text: 'Pour extraire les actions d\'un mail, utilisez : "Lis ce mail et extrais uniquement les elements actionnables : qui doit faire quoi, pour quand, avec quelles contraintes. Presente sous forme de liste."',
            },
            {
              id: 'sprint1-s1-step2-hint2',
              exercice_id: 'sprint1-s1-step2',
              index: 1,
              text: 'Distinguez l\'explicite de l\'implicite : "Identifie aussi ce qui est sous-entendu ou non dit dans ce mail mais qu\'il faudra clarifier en reunion." Cela prepare les questions a poser.',
            },
          ],
        },
        {
          id: 'sprint1-s1-step3',
          title: 'Construire l\'ordre du jour de la reunion',
          description: 'A partir des elements extraits, structurez un ordre du jour.',
          hints: [
            {
              id: 'sprint1-s1-step3-hint1',
              exercice_id: 'sprint1-s1-step3',
              index: 0,
              text: 'Demandez un format tableau precis : "A partir de ces elements [coller les points cles], propose un ordre du jour pour une reunion de 45 minutes avec [X participants]. Format : tableau avec colonnes Horaire | Sujet | Responsable | Duree."',
            },
            {
              id: 'sprint1-s1-step3-hint2',
              exercice_id: 'sprint1-s1-step3',
              index: 1,
              text: 'Un bon ordre du jour commence par l\'alignement et finit par les prochaines etapes. Ajoutez : "Prevois 5 minutes d\'introduction pour aligner les participants et 5 minutes en fin pour definir les actions et responsables."',
            },
          ],
        },
        {
          id: 'sprint1-s1-step4',
          title: 'Preparer le contenu d\'un support PowerPoint',
          description: 'Demandez a Copilot de proposer un plan de slides pour le support de reunion.',
          hints: [
            {
              id: 'sprint1-s1-step4-hint1',
              exercice_id: 'sprint1-s1-step4',
              index: 0,
              text: 'Pour un support de reunion efficace : "Propose un plan de 6 slides pour accompagner cette reunion : 1) Titre + objectif 2) Contexte 3-4) Points cles a discuter 5) Planning 6) Prochaines etapes. Pour chaque slide, donne le titre et 3 bullet points."',
            },
            {
              id: 'sprint1-s1-step4-hint2',
              exercice_id: 'sprint1-s1-step4',
              index: 1,
              text: 'Pensez "copier-coller" : le resultat doit etre directement utilisable dans PowerPoint. Precisez : "Redige les textes tels qu\'ils apparaitront sur les slides — phrases courtes, pas de paragraphes."',
            },
          ],
        },
        {
          id: 'sprint1-s1-step5',
          title: 'Preparer un message d\'invitation Outlook et un post Teams',
          description: 'Redigez les messages de convocation pour Outlook et Teams.',
          hints: [
            {
              id: 'sprint1-s1-step5-hint1',
              exercice_id: 'sprint1-s1-step5',
              index: 0,
              text: 'Demandez 2 versions adaptees au canal : "Redige une invitation Outlook formelle (objet, lieu, horaire, ordre du jour) ET un message Teams court et engageant qui donne envie de participer. Meme contenu, ton different."',
            },
            {
              id: 'sprint1-s1-step5-hint2',
              exercice_id: 'sprint1-s1-step5',
              index: 1,
              text: 'Pour le message Teams, ajoutez : "Le ton doit etre direct et dynamique, 3-4 lignes max. Termine par une question qui suscite l\'engagement, par exemple : Quels sujets souhaitez-vous absolument aborder ?"',
            },
          ],
        },
      ],
    },
    {
      id: 'scenario-2',
      title: 'Organiser une soiree / projection interne autour d\'un temps fort media',
      description: 'Vous organisez un evenement interne : deroule, check-list, support de coordination, mail d\'invitation.',
      steps: [
        {
          id: 'sprint1-s2-step1',
          title: 'Lire le document source et faire ressortir les informations utiles',
          description: 'Analysez le document fourni pour en extraire les elements cles.',
          hints: [
            {
              id: 'sprint1-s2-step1-hint1',
              exercice_id: 'sprint1-s2-step1',
              index: 0,
              text: 'Guidez l\'extraction avec des categories : "Analyse ce document et classe les informations en 4 categories : Logistique (lieu, horaires, capacite), Contenu (programme, intervenants), Communication (cibles, messages), Budget (postes de depenses)."',
            },
          ],
        },
        {
          id: 'sprint1-s2-step2',
          title: 'Construire le deroule de l\'evenement',
          description: 'Demandez un format tableau, extrayez dans Pages, retrouvez dans Bibliotheque.',
          hints: [
            {
              id: 'sprint1-s2-step2-hint1',
              exercice_id: 'sprint1-s2-step2',
              index: 0,
              text: 'Demandez explicitement un tableau : "Propose un deroule sous forme de tableau avec colonnes : Horaire | Activite | Responsable | Materiel necessaire. Prevois les temps morts (accueil, pauses, depart)."',
            },
            {
              id: 'sprint1-s2-step2-hint2',
              exercice_id: 'sprint1-s2-step2',
              index: 1,
              text: 'Les temps morts sont souvent oublies. Ajoutez : "Prevois 30 min d\'accueil avec un espace convivial, une pause de 15 min, et un temps de networking informel en fin de soiree."',
            },
          ],
        },
        {
          id: 'sprint1-s2-step3',
          title: 'Generer une check-list de coordination a partir d\'un mail',
          description: 'Transformez un mail en check-list de coordination structuree.',
          hints: [
            {
              id: 'sprint1-s2-step3-hint1',
              exercice_id: 'sprint1-s2-step3',
              index: 0,
              text: 'Utilisez une timeline : "A partir de ce mail [coller], genere une checklist de coordination classee par priorite temporelle : J-7, J-3, J-1, Jour J. Pour chaque tache, indique le responsable et le statut (a faire / en cours / fait)."',
            },
          ],
        },
        {
          id: 'sprint1-s2-step4',
          title: 'Preparer un support de coordination PowerPoint',
          description: 'Creez les contenus pour un support de coordination a copier/coller dans PowerPoint.',
          hints: [
            {
              id: 'sprint1-s2-step4-hint1',
              exercice_id: 'sprint1-s2-step4',
              index: 0,
              text: 'Pensez visuel : "Propose un support de coordination en 4 slides : 1) Vue d\'ensemble de la soiree 2) Deroule detaille 3) Roles et responsabilites 4) Checklist J-1. Format PowerPoint : titres courts, bullet points, pas de phrases longues."',
            },
          ],
        },
        {
          id: 'sprint1-s2-step5',
          title: 'Rediger le mail d\'invitation',
          description: 'Redigez le mail d\'invitation pour l\'evenement.',
          hints: [
            {
              id: 'sprint1-s2-step5-hint1',
              exercice_id: 'sprint1-s2-step5',
              index: 0,
              text: 'Un bon mail d\'invitation donne envie : "Redige un mail d\'invitation pour [evenement]. Structure : accroche qui donne envie, date/lieu/horaire, programme en 3 points, dress code si applicable, lien d\'inscription ou confirmation. Ton : chaleureux et professionnel."',
            },
          ],
        },
        {
          id: 'sprint1-s2-step6',
          title: 'Ameliorer le ton et adapter selon le support',
          description: 'Adaptez le ton selon le canal de communication choisi.',
          hints: [
            {
              id: 'sprint1-s2-step6-hint1',
              exercice_id: 'sprint1-s2-step6',
              index: 0,
              text: 'La technique du re-prompting : "Reformule ce message dans un ton plus [decontracte/formel/enthousiaste] adapte a [Teams/mail officiel/affiche interne]. Garde le meme contenu, change seulement le registre." C\'est une des techniques les plus puissantes du prompting.',
            },
            {
              id: 'sprint1-s2-step6-hint2',
              exercice_id: 'sprint1-s2-step6',
              index: 1,
              text: 'Comparez les versions : "Mets les 3 versions cote a cote dans un tableau (Teams / Mail / Affiche) pour que je puisse comparer le ton et choisir." Cela aide a voir les nuances.',
            },
          ],
        },
      ],
    },
    {
      id: 'scenario-3',
      title: 'Preparer un point de veille concurrentielle / tendances medias',
      description: 'Vous preparez une veille structuree : analyse, synthese, presentation et message de partage.',
      steps: [
        {
          id: 'sprint1-s3-step1',
          title: 'Recuperer les points cles du besoin dans le mail Outlook',
          description: 'Analysez le mail pour comprendre le besoin de veille.',
          hints: [
            {
              id: 'sprint1-s3-step1-hint1',
              exercice_id: 'sprint1-s3-step1',
              index: 0,
              text: 'Commencez par clarifier le besoin : "Lis ce mail et reponds a ces 4 questions : 1) Quel est le sujet de veille demande ? 2) Pour qui est cette veille ? 3) Quel format est attendu ? 4) Y a-t-il une deadline ?" Cela cadre la suite.',
            },
          ],
        },
        {
          id: 'sprint1-s3-step2',
          title: 'Structurer la veille',
          description: 'Organisez la veille en tendances observees, signaux emergents et exemples marquants.',
          hints: [
            {
              id: 'sprint1-s3-step2-hint1',
              exercice_id: 'sprint1-s3-step2',
              index: 0,
              text: 'Structurez en 3 niveaux : "Realise une veille sur [sujet] structuree en : 1) Tendances confirmees (ce qui se fait deja) 2) Signaux emergents (ce qui monte) 3) Exemples marquants avec sources. Format professionnel, 15 lignes max."',
            },
            {
              id: 'sprint1-s3-step2-hint2',
              exercice_id: 'sprint1-s3-step2',
              index: 1,
              text: 'Pour enrichir : "Pour chaque tendance, ajoute un exemple concret d\'un acteur du secteur media (Netflix, Disney+, TF1, France TV...) pour ancrer l\'analyse dans la realite du marche."',
            },
          ],
        },
        {
          id: 'sprint1-s3-step3',
          title: 'Stocker la veille realisee dans Pages',
          description: 'Sauvegardez votre veille dans Pages pour la retrouver facilement.',
          hints: [
            {
              id: 'sprint1-s3-step3-hint1',
              exercice_id: 'sprint1-s3-step3',
              index: 0,
              text: 'Pour un stockage efficace : "Reformate cette veille en document structuree avec : titre, date, auteur, sommaire, puis le contenu avec des titres de section clairs." Un document bien structure se retrouve facilement.',
            },
          ],
        },
        {
          id: 'sprint1-s3-step4',
          title: 'Enrichir la page Loop avec une version synthetique',
          description: 'Creez une version synthetique de votre veille dans Loop.',
          hints: [
            {
              id: 'sprint1-s3-step4-hint1',
              exercice_id: 'sprint1-s3-step4',
              index: 0,
              text: 'Pour une version synthetique : "Condense cette veille en un format Loop collaboratif : 3 bullet points cles + 1 question ouverte pour le team. Maximum 8 lignes, ton direct." Loop est fait pour la collaboration, pas pour les longs documents.',
            },
          ],
        },
        {
          id: 'sprint1-s3-step5',
          title: 'Produire une trame de presentation PowerPoint',
          description: 'Preparez un plan de presentation structure.',
          hints: [
            {
              id: 'sprint1-s3-step5-hint1',
              exercice_id: 'sprint1-s3-step5',
              index: 0,
              text: 'Plan de presentation efficace : "A partir de cette veille [coller], propose un plan de presentation en 5 slides : 1) Titre + contexte 2) Panorama du marche 3) Tendances cles 4) Signaux faibles a surveiller 5) Recommandations pour Canal+. Pour chaque slide, 3 bullet points max."',
            },
          ],
        },
        {
          id: 'sprint1-s3-step6',
          title: 'Rediger le mail ou le message de partage',
          description: 'Redigez le message de diffusion de votre veille.',
          hints: [
            {
              id: 'sprint1-s3-step6-hint1',
              exercice_id: 'sprint1-s3-step6',
              index: 0,
              text: 'Pour un mail de partage impactant : "Redige un mail de 8 lignes qui partage cette veille a l\'equipe. Structure : accroche avec le fait le plus marquant, 3 points cles a retenir, et une question ouverte pour lancer la discussion." L\'accroche fait toute la difference.',
            },
          ],
        },
      ],
    },
  ] as Scenario[],
};
