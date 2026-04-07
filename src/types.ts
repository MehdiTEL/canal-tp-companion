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

export interface Hint {
  id: string;
  exercice_id: string;
  index: number;
  text: string;
}

export interface DocumentFile {
  name: string;
  type: 'pdf' | 'xlsx';
  path: string;
  description: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  hints: Hint[];
  idealPrompt?: string;
  idealResult?: string;
  documents?: DocumentFile[];
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

