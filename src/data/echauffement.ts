export const echauffementData = {
  id: 'echauffement',
  title: 'Echauffement',
  color: 'var(--color-sprint-warmup)',
  duration: 10,
  description: 'Vous etes journaliste chez Canal+. Vous devez preparer un sujet, une presentation ou un brief sur une thematique d\'actualite. En 5 minutes, utilisez Copilot Chat pour explorer un sujet et produire une synthese exploitable.',
  thematiques: [
    { id: 'theme-1', label: 'L\'impact de l\'IA dans les medias' },
    { id: 'theme-2', label: 'L\'avenir du streaming face a Netflix / Prime' },
    { id: 'theme-3', label: 'L\'evolution des usages TV chez les jeunes' },
    { id: 'theme-4', label: 'Le role des reseaux sociaux dans l\'information' },
    { id: 'theme-5', label: 'L\'impact des droits sportifs sur les audiences' },
    { id: 'theme-libre', label: 'Sujet libre (a votre choix)' },
  ],
  hints: [
    {
      id: 'echauffement-hint-1',
      exercice_id: 'echauffement-ex1',
      index: 0,
      text: 'Donnez un role a Copilot pour cadrer sa reponse. Par exemple : "Tu es journaliste specialise en medias numeriques chez Canal+. Prepare-moi un brief de 5 points cles sur [ton sujet]." Plus le role est precis, plus la reponse sera pertinente.',
    },
    {
      id: 'echauffement-hint-2',
      exercice_id: 'echauffement-ex1',
      index: 1,
      text: 'Demandez un format de sortie precis pour obtenir un resultat directement exploitable : "Presente ta synthese sous forme de 5 bullet points avec pour chacun : le fait cle, son impact, et une source ou exemple concret." Cela evite les reponses trop generiques.',
    },
    {
      id: 'echauffement-hint-3',
      exercice_id: 'echauffement-ex1',
      index: 2,
      text: 'Si le resultat est trop vague, iterez ! Relancez avec : "C\'est un bon debut. Maintenant, approfondis le point 2 et ajoute des chiffres recents. Rends le ton plus journalistique et incisif." L\'iteration est la cle d\'un bon prompting.',
    },
  ],
};
