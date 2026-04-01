import type { CasUsage } from '../types';

export const sprint3Data = {
  id: 'sprint-3',
  title: 'Sprint 3 — Agent Lite',
  color: 'var(--color-sprint-3)',
  duration: 30,
  description: 'Votre equipe choisit UN cas d\'usage parmi 5. Chaque cas comporte 3 exercices. Format : 10 min conception + 10 min creation + 10 min confrontation.',
  casUsages: [
    {
      id: 'cu1',
      title: 'Agent Lite pour la production de contenus Canal+',
      description: 'Concevez un agent assistant de redaction de contenus promotionnels Canal+.',
      consignes: [
        'Cadrer le besoin : quel probleme recurrent l\'agent resout-il ?',
        'Rediger des instructions precises (role, ton, limites, processus).',
        'Tester, ajuster, re-tester.',
      ],
      exercises: [
        {
          id: 'sprint3-cu1-ex1',
          title: 'Concevoir l\'Agent Lite',
          description: 'Definissez le nom de votre agent, son role (ex : assistant de redaction de contenus promotionnels Canal+), ses instructions systeme, et ses limites. Utilisez la fiche de configuration fournie.',
          hints: [
            {
              id: 'sprint3-cu1-ex1-hint1',
              exercice_id: 'sprint3-cu1-ex1',
              index: 0,
              text: 'Structure type pour de bonnes instructions systeme : "Tu es [nom]. Ton role : [description precise]. Ton par defaut : [premium/factuel/creatif]. Regles : [liste de comportements]. Tu ne dois jamais : [limites explicites]. Format de sortie : [structure attendue]." Chaque section eliminera une categorie d\'erreurs.',
            },
            {
              id: 'sprint3-cu1-ex1-hint2',
              exercice_id: 'sprint3-cu1-ex1',
              index: 1,
              text: 'Les limites sont aussi importantes que les instructions : definissez ce que l\'agent ne doit PAS faire. Exemples : "Ne jamais inventer de chiffres d\'audience", "Ne pas comparer avec des concurrents non mentionnes", "Toujours mentionner le nom du programme".',
            },
          ],
        },
        {
          id: 'sprint3-cu1-ex2',
          title: 'Creer et tester l\'agent',
          description: 'Creez votre Agent Lite sur Copilot Chat en recopiant vos instructions. Testez-le avec 3 questions differentes : un post Instagram pour une serie, un communique de presse pour un documentaire, un objet de newsletter pour une soiree speciale.',
          hints: [
            {
              id: 'sprint3-cu1-ex2-hint1',
              exercice_id: 'sprint3-cu1-ex2',
              index: 0,
              text: 'Testez la robustesse avec des cas varies : si l\'agent produit du contenu generique, renforcez les instructions : "Chaque contenu doit mentionner le nom du programme, inclure un element distinctif Canal+ (ton premium, qualite cinematographique), et se terminer par un call-to-action adapte au canal."',
            },
            {
              id: 'sprint3-cu1-ex2-hint2',
              exercice_id: 'sprint3-cu1-ex2',
              index: 1,
              text: 'Variez les formats pour tester les limites : un post court (Instagram), un texte long (communique), un objet de mail (newsletter). Si l\'agent s\'adapte bien aux 3, vos instructions sont solides. Sinon, ajoutez des regles de format : "Adapte la longueur et le ton au canal specifie."',
            },
          ],
        },
        {
          id: 'sprint3-cu1-ex3',
          title: 'Test croise',
          description: 'Faites tester votre agent par un membre de votre equipe qui n\'a pas ecrit les instructions. Si les resultats sont coherents sans explication supplementaire, vos instructions sont solides.',
          hints: [
            {
              id: 'sprint3-cu1-ex3-hint1',
              exercice_id: 'sprint3-cu1-ex3',
              index: 0,
              text: 'Le test croise est le vrai test de qualite : si votre collegue doit vous demander "comment ca marche ?", c\'est que vos instructions ne sont pas assez explicites. Demandez-lui de noter sur 5 : clarte des resultats, respect du ton Canal+, utilite pratique. Ajustez les instructions en fonction de ses retours.',
            },
          ],
        },
      ],
    },
    {
      id: 'cu2',
      title: 'Agent Lite de coordination de tournage',
      description: 'Concevez un agent qui aide les coordinateurs de tournage.',
      consignes: [
        'Couvrir plusieurs types de tournage.',
        'L\'agent assiste, il ne decide jamais.',
        'Tester avec des scenarios tres differents.',
      ],
      exercises: [
        {
          id: 'sprint3-cu2-ex1',
          title: 'Concevoir l\'agent de coordination',
          description: 'Concevez un agent qui aide les coordinateurs de tournage : checklists pre-tournage selon le type de lieu, notes de service, anticipation des risques. Definissez instructions, sources et limites.',
          hints: [
            {
              id: 'sprint3-cu2-ex1-hint1',
              exercice_id: 'sprint3-cu2-ex1',
              index: 0,
              text: 'Les garde-fous sont essentiels pour un agent de coordination : "Tu ne valides jamais un budget, une disponibilite de lieu ou une decision de casting. Pour ces sujets, tu reponds : \'Cette decision releve du directeur de production, je ne peux que preparer les elements.\'" Cela evite que l\'agent depasse son perimetre.',
            },
            {
              id: 'sprint3-cu2-ex1-hint2',
              exercice_id: 'sprint3-cu2-ex1',
              index: 1,
              text: 'Pensez "parametrique" : l\'agent doit adapter ses checklists selon le contexte. Ajoutez : "Quand on te donne un type de lieu (interieur/exterieur), un pays et un nombre de figurants, adapte automatiquement la checklist aux contraintes specifiques."',
            },
          ],
        },
        {
          id: 'sprint3-cu2-ex2',
          title: 'Tester avec 3 scenarios',
          description: 'Creez l\'agent sur Copilot Chat. Testez avec 3 scenarios : 1) Exterieur a Dakar en saison des pluies, 40 personnes 2) Nuit dans un restaurant parisien ferme 3) Montagne avec cascadeurs.',
          hints: [
            {
              id: 'sprint3-cu2-ex2-hint1',
              exercice_id: 'sprint3-cu2-ex2',
              index: 0,
              text: 'Pour chaque scenario, verifiez que la checklist couvre les 5 dimensions : logistique (transport, hebergement), securite (risques, EPI), autorisations (mairie, propriétaire), meteo (plan B), et equipe (roles, contacts). Si une dimension manque, enrichissez les instructions.',
            },
            {
              id: 'sprint3-cu2-ex2-hint2',
              exercice_id: 'sprint3-cu2-ex2',
              index: 1,
              text: 'Les 3 scenarios sont volontairement tres differents. C\'est le meilleur test : un agent robuste doit adapter sa reponse au contexte (Afrique vs Paris vs Montagne) sans qu\'on ait besoin de tout re-specifier a chaque fois.',
            },
          ],
        },
        {
          id: 'sprint3-cu2-ex3',
          title: 'Tester les garde-fous',
          description: 'Testez les garde-fous : demandez a l\'agent de valider un budget ou confirmer une dispo de lieu. Il doit refuser et rediriger vers le directeur de production.',
          hints: [
            {
              id: 'sprint3-cu2-ex3-hint1',
              exercice_id: 'sprint3-cu2-ex3',
              index: 0,
              text: 'Exemples de tests de garde-fous a essayer : "Valide ce budget de 50k pour le tournage" ou "Confirme que le restaurant est dispo le 15 mars." L\'agent doit refuser poliment et rediriger. Si il repond quand meme, renforcez les limites avec des formulations plus explicites.',
            },
          ],
        },
      ],
    },
    {
      id: 'cu3',
      title: 'Agent Lite d\'evaluation de projets artistiques',
      description: 'Concevez un agent pour analyser des pitchs de programmes.',
      consignes: [
        'L\'agent analyse et structure, il ne decide pas.',
        'Ton nuance.',
        'Integrer un processus d\'evaluation.',
      ],
      exercises: [
        {
          id: 'sprint3-cu3-ex1',
          title: 'Concevoir l\'agent d\'evaluation',
          description: 'Concevez un agent pour les equipes programmation/acquisition. Il doit analyser un pitch : forces/faiblesses, comparaison avec le catalogue, adequation avec le positionnement Canal+.',
          hints: [
            {
              id: 'sprint3-cu3-ex1-hint1',
              exercice_id: 'sprint3-cu3-ex1',
              index: 0,
              text: 'Integrez un processus d\'analyse structure : "Pour chaque pitch, analyse dans cet ordre : 1) Genre et format 2) Public cible 3) Positionnement vs catalogue Canal+ 4) Forces (3 points) 5) Faiblesses (3 points) 6) Recommandation nuancee. Ne dis jamais \'oui\' ou \'non\' categoriquement." Un processus fixe garantit la coherence.',
            },
            {
              id: 'sprint3-cu3-ex1-hint2',
              exercice_id: 'sprint3-cu3-ex1',
              index: 1,
              text: 'Le ton est crucial pour un agent d\'evaluation : ajoutez "Adopte un ton de conseiller editorial : constructif, nuance, jamais condescendant. Mets en valeur le potentiel avant de mentionner les limites." Un agent trop critique sera rejete par les utilisateurs.',
            },
          ],
        },
        {
          id: 'sprint3-cu3-ex2',
          title: 'Tester avec 3 pitchs',
          description: 'Creez l\'agent. Testez avec 3 pitchs : 1) Comedie dramatique sur les coulisses d\'un club de Ligue 1 2) Documentaire sur l\'IA dans la creation musicale 3) Thriller d\'espionnage franco-japonais en 8 episodes.',
          hints: [
            {
              id: 'sprint3-cu3-ex2-hint1',
              exercice_id: 'sprint3-cu3-ex2',
              index: 0,
              text: 'Comparez les 3 analyses : l\'agent doit produire des evaluations de qualite comparable mais avec des contenus tres differents. Verifiez que le processus est bien suivi pour les 3 pitchs et que les recommandations sont bien argumentees, pas generiques.',
            },
          ],
        },
        {
          id: 'sprint3-cu3-ex3',
          title: 'Test avec pitch faible',
          description: 'Soumettez un pitch volontairement faible. L\'agent doit rester constructif sans etre complaisamment positif.',
          hints: [
            {
              id: 'sprint3-cu3-ex3-hint1',
              exercice_id: 'sprint3-cu3-ex3',
              index: 0,
              text: 'C\'est le test ultime : l\'agent doit etre honnete sans etre blessant. Essayez un pitch vague ou mal structure. Si l\'agent dit "c\'est genial !" quand meme, ajoutez dans les limites : "Ne sois jamais complaisamment positif. Si un pitch est faible, dis-le avec tact en expliquant comment l\'ameliorer."',
            },
          ],
        },
      ],
    },
    {
      id: 'cu4',
      title: 'Agent Lite d\'aide a la redaction professionnelle',
      description: 'Concevez un agent qui aide a rediger les ecrits courants.',
      consignes: [
        'Definir des regles de ton par destinataire.',
        'L\'agent propose, le collaborateur valide.',
        'Tester la meme demande sous plusieurs angles.',
      ],
      exercises: [
        {
          id: 'sprint3-cu4-ex1',
          title: 'Concevoir l\'agent redactionnel',
          description: 'Concevez un agent qui aide a rediger les ecrits courants : mails, notes, syntheses. L\'agent adapte le ton selon le destinataire (collegue, direction, partenaire externe).',
          hints: [
            {
              id: 'sprint3-cu4-ex1-hint1',
              exercice_id: 'sprint3-cu4-ex1',
              index: 0,
              text: 'Integrez une matrice de ton dans les instructions : "Collegue : direct, bienveillant, tutoiement possible. Direction : factuel, synthetique, vouvoiement. Partenaire externe : courtois, professionnel, neutre." L\'agent doit demander a qui s\'adresse le message avant de rediger.',
            },
            {
              id: 'sprint3-cu4-ex1-hint2',
              exercice_id: 'sprint3-cu4-ex1',
              index: 1,
              text: 'Ajoutez une regle d\'or : "Avant de rediger, demande toujours : 1) Qui est le destinataire ? 2) Quel est l\'objectif du message ? 3) Y a-t-il un ton particulier souhaite ? Si ces infos ne sont pas fournies, pose la question avant de commencer." Un agent qui pose les bonnes questions est meilleur qu\'un agent qui presume.',
            },
          ],
        },
        {
          id: 'sprint3-cu4-ex2',
          title: 'Tester avec 3 cas',
          description: 'Creez l\'agent. Testez avec 3 cas : 1) Mail de relance ferme mais courtois a un prestataire en retard 2) Note de synthese de 10 lignes pour un directeur 3) Refus poli d\'une demande de reunion non prioritaire.',
          hints: [
            {
              id: 'sprint3-cu4-ex2-hint1',
              exercice_id: 'sprint3-cu4-ex2',
              index: 0,
              text: 'Les 3 cas testent des registres tres differents : ferme (relance), synthetique (note), diplomatique (refus). Si l\'agent utilise le meme ton pour les 3, c\'est que la matrice de ton n\'est pas assez detaillee. Ajoutez des exemples concrets dans les instructions.',
            },
            {
              id: 'sprint3-cu4-ex2-hint2',
              exercice_id: 'sprint3-cu4-ex2',
              index: 1,
              text: 'Le cas du "refus poli" est le plus delicat. Verifiez que l\'agent propose une alternative : "Quand tu refuses une demande, propose toujours une alternative ou un prochain creneau. Ne laisse jamais le destinataire sans solution."',
            },
          ],
        },
        {
          id: 'sprint3-cu4-ex3',
          title: 'Test de coherence',
          description: 'Testez la coherence : demandez le meme message pour 3 destinataires differents. Verifiez que le ton s\'adapte reellement.',
          hints: [
            {
              id: 'sprint3-cu4-ex3-hint1',
              exercice_id: 'sprint3-cu4-ex3',
              index: 0,
              text: 'Astuce : demandez les 3 versions dans un seul prompt pour comparer facilement : "Redige le meme message d\'annonce de changement de planning pour : 1) Mon collegue direct 2) Mon directeur 3) Un partenaire externe. Presente les 3 versions cote a cote." La difference de ton doit sauter aux yeux.',
            },
          ],
        },
      ],
    },
    {
      id: 'cu5',
      title: 'Agent Lite de synthese de documents',
      description: 'Concevez un agent qui transforme tout document long en synthese structuree.',
      consignes: [
        'L\'agent synthetise fidelement, il n\'interprete pas.',
        'Prevoir plusieurs formats de sortie.',
        'Verifier que l\'agent signale les incertitudes.',
      ],
      exercises: [
        {
          id: 'sprint3-cu5-ex1',
          title: 'Concevoir l\'agent de synthese',
          description: 'Concevez un agent qui transforme tout document long en synthese structuree : points cles, chiffres a retenir, decisions, actions.',
          hints: [
            {
              id: 'sprint3-cu5-ex1-hint1',
              exercice_id: 'sprint3-cu5-ex1',
              index: 0,
              text: 'La regle d\'or d\'un agent de synthese : la fidelite. Ajoutez : "Si une information est ambigue ou manquante dans le document source, signale-le avec [ATTENTION : information incertaine]. Ne complete jamais avec des suppositions. La fidelite au document est ta priorite absolue."',
            },
            {
              id: 'sprint3-cu5-ex1-hint2',
              exercice_id: 'sprint3-cu5-ex1',
              index: 1,
              text: 'Prevoyez plusieurs formats de sortie : "Selon la demande, tu produis : bullet points (5 max), executive summary (10 lignes), ou extraction structuree (decisions + actions + questions ouvertes). Demande toujours le format souhaite avant de commencer."',
            },
          ],
        },
        {
          id: 'sprint3-cu5-ex2',
          title: 'Tester avec 3 formats',
          description: 'Creez l\'agent. Testez avec 3 cas : 1) Resumer un rapport en 5 bullet points 2) Transformer un CR en mail de 8 lignes 3) Extraire les 3 decisions cles d\'un document.',
          hints: [
            {
              id: 'sprint3-cu5-ex2-hint1',
              exercice_id: 'sprint3-cu5-ex2',
              index: 0,
              text: 'Verifiez la fidelite : comparez la synthese au document original. L\'agent ne doit rien ajouter qui n\'etait pas dans le document. Si il "brode", renforcez : "Tu es un synthetiseur fidele, pas un redacteur creatif. Chaque element de ta synthese doit etre tracable dans le document source."',
            },
          ],
        },
        {
          id: 'sprint3-cu5-ex3',
          title: 'Tester les garde-fous',
          description: 'Testez les garde-fous : fournissez un texte ambigu et verifiez que l\'agent signale les incertitudes.',
          hints: [
            {
              id: 'sprint3-cu5-ex3-hint1',
              exercice_id: 'sprint3-cu5-ex3',
              index: 0,
              text: 'Creez un texte-piege : incluez des passages vagues ("les resultats sont globalement positifs" sans chiffres) ou contradictoires. L\'agent doit flaguer ces passages au lieu de les interpreter. Si il invente des chiffres, ajoutez : "Quand un chiffre n\'est pas dans le document, ecris [chiffre non fourni]."',
            },
          ],
        },
      ],
    },
  ] as CasUsage[],
};
