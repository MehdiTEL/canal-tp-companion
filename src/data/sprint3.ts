import type { CasUsage } from '../types';

/* ------------------------------------------------------------------ */
/*  Sprint 3 — Agent Lite (30 min)                                    */
/*  Creez votre agent copilote dans Copilot Chat                      */
/* ------------------------------------------------------------------ */

export const sprint3Meta = {
  id: 'sprint-3',
  title: 'Sprint 3 — Agent Lite',
  color: 'var(--color-sprint-3)',
  duration: 30,
};

export const sprint3Data: CasUsage = {
  id: 'sprint3-agent-copilote',
  title: 'Creez votre agent copilote',
  description:
    'Concevez, creez et testez un agent specialise dans Copilot Chat. Un agent est un assistant pre-configure avec un role, des instructions et des limites. Il peut etre partage a votre equipe.',
  consignes: [
    'Un bon agent commence par une tache precise et recurrente. Evitez les agents "qui font tout" : plus le perimetre est cible, plus l\'agent est fiable.',
    'Les instructions de l\'agent doivent etre claires et structurees : role, ton, format de sortie attendu, et surtout les limites (ce qu\'il ne doit PAS faire).',
    'Testez votre agent avec des cas reels, pas des exemples fictifs. C\'est le meilleur moyen de detecter les failles et d\'affiner les instructions.',
  ],
  exercises: [
    /* ---------- Etape 1 ---------- */
    {
      id: 'sprint3-step1',
      title: 'Choisir la tache de votre agent',
      description:
        'Identifiez une tache recurrente de votre quotidien que vous aimeriez automatiser avec un agent Copilot. Pensez a une tache que vous faites souvent, qui prend du temps, et qui suit un schema repetitif.',
      hints: [
        {
          id: 's3-s1-hint1',
          exercice_id: 'sprint3-step1',
          index: 0,
          text: 'Exemples de taches ideales pour un agent : rediger des comptes-rendus de reunion, synthetiser des mails longs, preparer des briefs, generer des rapports d\'audience, reformuler des notes en messages pros, verifier la coherence d\'un planning.',
        },
        {
          id: 's3-s1-hint2',
          exercice_id: 'sprint3-step1',
          index: 1,
          text: 'Demandez a Copilot Chat de vous aider : "Je cherche une tache recurrente a automatiser dans mon metier de [votre metier]. Propose-moi 5 idees de taches que je pourrais confier a un agent specialise."',
        },
      ],
      idealPrompt:
        'Je travaille chez Canal+ en tant que [votre metier]. Propose-moi 5 taches recurrentes de mon quotidien qui seraient ideales a confier a un agent specialise dans Copilot Chat. Pour chaque tache : description, frequence, temps gagne estime, et pourquoi un agent serait plus efficace qu\'un prompt manuel a chaque fois.',
      idealResult:
        'Voici 5 taches ideales pour un agent Copilot :\n\n1. Synthetiser les comptes-rendus de reunion — Frequence : 3-5x/semaine. Temps gagne : 20 min/reunion. Pourquoi un agent : format constant, ton professionnel, extraction automatique des decisions et actions.\n\n2. Rediger des mails professionnels — Frequence : quotidien. Temps gagne : 10 min/mail. Pourquoi un agent : ton Canal+ premium pre-configure, templates integres, relecture automatique.\n\n3. Preparer des briefs de reunion — Frequence : 2x/semaine. Temps gagne : 30 min/brief. Pourquoi un agent : structure standardisee, contexte memorise, generation rapide.\n\n4. Analyser et synthetiser des documents longs — Frequence : 2-3x/semaine. Temps gagne : 45 min/document. Pourquoi un agent : extraction de points cles, format de sortie constant.\n\n5. Generer des rapports d\'activite hebdomadaires — Frequence : 1x/semaine. Temps gagne : 1h. Pourquoi un agent : template fixe, mise en forme automatique, historique des rapports precedents.',
    },

    /* ---------- Etape 2 ---------- */
    {
      id: 'sprint3-step2',
      title: 'Definir le role de votre agent',
      description:
        'Definissez precisement le role de votre agent : quel est son domaine d\'expertise, a qui s\'adresse-t-il, quel ton doit-il adopter, et quels sont les formats de sortie attendus.',
      hints: [
        {
          id: 's3-s2-hint1',
          exercice_id: 'sprint3-step2',
          index: 0,
          text: 'Structurez la definition du role : "Mon agent s\'appelle [nom]. Son role : [description en 1 phrase]. Son expertise : [domaine]. Son public : [qui va l\'utiliser]. Son ton : [premium/factuel/creatif/pedagogique]. Ses formats de sortie : [liste]."',
        },
      ],
      idealPrompt:
        'Aide-moi a definir le role de mon agent Copilot specialise dans [la tache choisie]. Propose une fiche d\'identite complete : nom de l\'agent, role en 1 phrase, domaine d\'expertise, public cible, ton (premium, factuel, creatif ou pedagogique), formats de sortie principaux (3-4 formats). Rends-le specifique a Canal+.',
      idealResult:
        'Fiche d\'identite de l\'agent\n\nNom : CanalBrief\nRole : Assistant de redaction de briefs et comptes-rendus professionnels pour les equipes Canal+\nDomaine d\'expertise : Communication interne, synthese de reunions, redaction professionnelle\nPublic cible : Managers et chefs de projet Canal+\nTon : Professionnel, synthetique, premium (reflete l\'identite Canal+)\n\nFormats de sortie :\n1. Compte-rendu de reunion (decisions + actions + prochaines etapes)\n2. Brief de projet (contexte, objectifs, perimetre, planning)\n3. Note de synthese (executive summary, points cles, recommandations)\n4. Mail professionnel (objet, corps structure, CTA)',
    },

    /* ---------- Etape 3 ---------- */
    {
      id: 'sprint3-step3',
      title: 'Rediger les instructions de l\'agent',
      description:
        'Redigez les instructions systeme de votre agent : ce qu\'il doit faire, comment il doit le faire, et surtout ce qu\'il ne doit PAS faire (les limites). Utilisez l\'outil Agent Builder ci-dessus pour vous aider.',
      hints: [
        {
          id: 's3-s3-hint1',
          exercice_id: 'sprint3-step3',
          index: 0,
          text: 'Structurez vos instructions : "Tu es [role]. Ta mission : [description]. Regles : 1) Toujours [regle positive], 2) Ne jamais [limite], 3) Format de sortie : [format]. Quand l\'utilisateur te donne [input], tu produis [output]."',
        },
        {
          id: 's3-s3-hint2',
          exercice_id: 'sprint3-step3',
          index: 1,
          text: 'Les limites sont essentielles ! Exemples : "Ne jamais inventer de chiffres", "Toujours demander confirmation avant d\'envoyer", "Ne pas depasser 500 mots", "Rester factuel, pas d\'opinions personnelles".',
        },
      ],
      idealPrompt:
        'Redige les instructions systeme completes pour mon agent "CanalBrief". Structure : 1) Role et mission, 2) Regles de fonctionnement (5 regles), 3) Limites et interdictions (5 limites), 4) Format de sortie par defaut, 5) Exemples de prompts de demarrage (3 exemples). Les instructions doivent etre claires, precises et directement utilisables dans Copilot Chat.',
      idealResult:
        'Instructions systeme — Agent CanalBrief\n\nROLE ET MISSION\nTu es CanalBrief, un assistant de redaction professionnelle specialise pour les equipes Canal+. Ta mission est de produire des briefs, comptes-rendus et notes de synthese clairs, structures et prets a etre partages.\n\nREGLES DE FONCTIONNEMENT\n1. Toujours commencer par demander le contexte si l\'utilisateur ne le fournit pas\n2. Utiliser un ton professionnel et premium, refletant l\'identite Canal+\n3. Structurer chaque livrable avec des titres, sous-titres et bullet points\n4. Inclure systematiquement une section "Actions" avec responsable et deadline\n5. Proposer une version courte (5 lignes) et une version longue au besoin\n\nLIMITES ET INTERDICTIONS\n1. Ne jamais inventer de chiffres, dates ou noms de personnes\n2. Ne pas donner d\'opinions personnelles — rester factuel\n3. Ne pas depasser 500 mots sauf demande explicite\n4. Ne jamais partager ou citer des informations confidentielles\n5. Toujours preciser quand une information necessite une verification\n\nFORMAT DE SORTIE PAR DEFAUT\nTitre du document > Executive summary (3 lignes) > Corps structure > Actions > Prochaines etapes\n\nPROMPTS DE DEMARRAGE\n1. "Voici les notes de ma reunion d\'aujourd\'hui. Transforme-les en compte-rendu professionnel."\n2. "J\'ai besoin d\'un brief pour un nouveau projet. Pose-moi les bonnes questions pour le rediger."\n3. "Synthetise ce mail long en 5 bullet points actionnables."',
    },

    /* ---------- Etape 4 ---------- */
    {
      id: 'sprint3-step4',
      title: 'Creer l\'agent dans Copilot Chat',
      description:
        'Creez votre agent dans Copilot Chat en utilisant les instructions que vous venez de rediger. Allez dans Copilot Chat > "Creer un agent" et collez vos instructions.',
      hints: [
        {
          id: 's3-s4-hint1',
          exercice_id: 'sprint3-step4',
          index: 0,
          text: 'Dans Copilot Chat (Teams ou web), cliquez sur "Creer un agent" ou "New agent". Donnez un nom, une description courte, et collez vos instructions systeme dans le champ "Instructions". Vous pouvez aussi ajouter des prompts de demarrage suggerés.',
        },
      ],
      idealPrompt:
        'Je viens de creer mon agent dans Copilot Chat avec les instructions. Comment puis-je verifier que les instructions sont bien prises en compte ? Propose-moi 3 tests rapides a faire pour valider que l\'agent se comporte comme prevu.',
      idealResult:
        'Tests de validation de votre agent :\n\n1. Test du role : Demandez "Qui es-tu et que sais-tu faire ?" — L\'agent doit se presenter conformement a ses instructions (nom, role, capacites). Si la reponse est generique, vos instructions ne sont pas assez precises.\n\n2. Test des limites : Demandez-lui de faire quelque chose qu\'il ne devrait PAS faire (ex : "Invente des chiffres d\'audience pour mon rapport"). L\'agent doit refuser poliment et expliquer pourquoi.\n\n3. Test du format : Donnez-lui une tache standard (ex : "Voici mes notes de reunion : [notes basiques]. Fais le CR."). Verifiez que le format de sortie correspond a vos instructions (titres, structure, section Actions).',
    },

    /* ---------- Etape 5 ---------- */
    {
      id: 'sprint3-step5',
      title: 'Tester avec un vrai exemple',
      description:
        'Testez votre agent avec un cas reel de votre quotidien. Donnez-lui une vraie tache et evaluez la qualite du resultat : est-ce exploitable en l\'etat ? Que faut-il ajuster ?',
      hints: [
        {
          id: 's3-s5-hint1',
          exercice_id: 'sprint3-step5',
          index: 0,
          text: 'Utilisez un vrai cas : prenez vos dernieres notes de reunion, un vrai brief a rediger, ou un mail a reformuler. Le test en conditions reelles est le meilleur moyen de detecter les failles.',
        },
        {
          id: 's3-s5-hint2',
          exercice_id: 'sprint3-step5',
          index: 1,
          text: 'Evaluez sur 3 criteres : 1) Le format est-il correct ? 2) Le ton est-il adapte ? 3) Le contenu est-il exploitable tel quel ou necessite-t-il des modifications ?',
        },
      ],
      idealPrompt:
        'Voici les notes de ma derniere reunion :\n- Projet refonte myCanal\n- Pierre valide le budget de 1.2M\n- Sophie doit envoyer les maquettes UX avant vendredi\n- Risque : equipe data en retard de 2 semaines\n- Prochaine reunion mardi 10h\n\nTransforme ces notes en compte-rendu professionnel.',
      idealResult:
        'COMPTE-RENDU DE REUNION\nProjet : Refonte myCanal\nDate : [A COMPLETER]\n\nPARTICIPANTS\n[A completer — l\'agent doit demander ou preciser qu\'il manque cette info]\n\nDECISIONS\n- Budget de 1.2M euros valide par Pierre\n\nACTIONS\n| Action | Responsable | Deadline |\n|---|---|---|\n| Envoyer les maquettes UX | Sophie | Vendredi [date] |\n\nRISQUES\n- Equipe Data en retard de 2 semaines — Impact potentiel sur le planning MVP\n\nPROCHAINE REUNION\n- Mardi 10h — [lieu a confirmer]\n\nNote : Ce compte-rendu a ete genere a partir de notes breves. Merci de completer les informations manquantes (date, participants, lieu) avant diffusion.',
    },

    /* ---------- Etape 6 ---------- */
    {
      id: 'sprint3-step6',
      title: 'Ajuster et ameliorer',
      description:
        'Sur la base de vos tests, identifiez ce qui fonctionne bien et ce qui doit etre ameliore. Ajustez les instructions de votre agent et relancez un test pour verifier.',
      hints: [
        {
          id: 's3-s6-hint1',
          exercice_id: 'sprint3-step6',
          index: 0,
          text: 'Points d\'amelioration courants : le ton n\'est pas assez Canal+ (ajoutez des exemples de formulations), le format n\'est pas bon (precisez la structure attendue), l\'agent est trop bavard (ajoutez "Maximum 300 mots" dans les limites), l\'agent invente des infos (renforcez les limites).',
        },
        {
          id: 's3-s6-hint2',
          exercice_id: 'sprint3-step6',
          index: 1,
          text: 'Demandez a Copilot Chat d\'ameliorer vos instructions : "Voici les instructions actuelles de mon agent : [coller]. Voici le probleme rencontre : [decrire]. Propose une version amelioree des instructions pour corriger ce probleme."',
        },
      ],
      idealPrompt:
        'Mon agent CanalBrief a un probleme : il est trop verbeux et ne met pas assez en valeur les decisions et actions. Voici ses instructions actuelles : [coller les instructions]. Propose une version amelioree qui corrige ces 2 problemes. Garde la meme structure mais ajuste les regles et limites.',
      idealResult:
        'Ajustements recommandes :\n\nProbleme 1 : Trop verbeux\n- Ajouter dans les regles : "Privilegier les bullet points aux paragraphes. Maximum 300 mots par livrable sauf demande explicite."\n- Ajouter dans les limites : "Ne jamais ecrire plus de 3 lignes de texte consecutif. Si un point necessite plus de detail, utiliser des sous-bullet points."\n\nProbleme 2 : Decisions et actions pas assez visibles\n- Modifier le format de sortie : "Toujours placer les DECISIONS et ACTIONS en premier, avant le contexte et les details. Utiliser des majuscules pour les titres de section. Mettre en gras les noms des responsables et les deadlines."\n- Ajouter une regle : "Chaque compte-rendu doit commencer par un encadre \'A RETENIR\' de 3 lignes max avec les decisions et actions cles."\n\nVersion amelioree des instructions : [instructions completes mises a jour avec les corrections ci-dessus]',
    },
  ],
};
