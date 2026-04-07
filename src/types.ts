export interface Participant {
  id: string;
  metier: string;
  lang: string;
  session_id: string;
  created_at: string;
}

export interface Submission {
  id: string;
  participant_id: string;
  sprint: string;
  exercice_id: string;
  prompt_text: string | null;
  result_text: string | null;
  self_rating: number | null;
  hints_used: number;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Feedback {
  id: string;
  participant_id: string;
  sprint: string;
  rating: number | null;
  comment: string | null;
  created_at: string;
}

export interface Hint {
  id: string;
  exercice_id: string;
  index: number;
  text: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  hints: Hint[];
  idealPrompt?: string;
  idealResult?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  steps: Exercise[];
}

export interface CasUsage {
  id: string;
  title: string;
  description: string;
  consignes: string[];
  exercises: Exercise[];
}

export interface SprintData {
  id: string;
  title: string;
  color: string;
  duration: number; // minutes
  description: string;
}

export type SprintId = 'echauffement' | 'sprint-1' | 'sprint-2' | 'sprint-3';

export interface AgentConfig {
  nom: string;
  role: string;
  ton: string;
  instructions: string;
  limites: string;
  prompts_demarrage: [string, string, string];
}

export interface LocalSubmission {
  exercice_id: string;
  sprint: string;
  prompt_text: string;
  result_text: string;
  self_rating: number | null;
  hints_used: number;
  completed: boolean;
}

export interface SprintDocument {
  id: string;
  title: string;
  type: 'brief' | 'mail' | 'rapport' | 'note';
  content: string;
  stepId: string;
}
