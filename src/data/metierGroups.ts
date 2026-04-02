export type MetierGroupId =
  | 'contenu-creation'
  | 'diffusion-programmation'
  | 'commercial-marketing'
  | 'tech-it'
  | 'support-corporate';

export const metierToGroup: Record<string, MetierGroupId> = {
  'Artistique': 'contenu-creation',
  'Editorial': 'contenu-creation',
  'Redaction': 'contenu-creation',
  'Production': 'contenu-creation',
  'Fabrication': 'contenu-creation',
  'Programmation': 'diffusion-programmation',
  'Exploitation': 'diffusion-programmation',
  'Operation': 'diffusion-programmation',
  'Marketing': 'commercial-marketing',
  'Vente': 'commercial-marketing',
  'Acquisition': 'commercial-marketing',
  'Communication': 'commercial-marketing',
  'Relations clients': 'commercial-marketing',
  'Exploitation IT et medias': 'tech-it',
  'Infrastructure et securite': 'tech-it',
  'Management IT': 'tech-it',
  'Product and project software engineering': 'tech-it',
  'Telecom': 'tech-it',
  'Achat': 'support-corporate',
  'Finance strategique': 'support-corporate',
  'Juridique': 'support-corporate',
  'Logistique': 'support-corporate',
  'Office management': 'support-corporate',
  'Qualite et projet': 'support-corporate',
  'RH': 'support-corporate',
};

export const groupLabels: Record<MetierGroupId, string> = {
  'contenu-creation': 'Contenu & Creation',
  'diffusion-programmation': 'Diffusion & Programmation',
  'commercial-marketing': 'Commercial & Marketing',
  'tech-it': 'Tech & IT',
  'support-corporate': 'Support & Corporate',
};

export function getGroupForMetier(metier: string): MetierGroupId {
  return metierToGroup[metier] || 'support-corporate';
}
