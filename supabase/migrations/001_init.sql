-- Canal+ TP Companion — Schema initial
-- Session pilote Lecko x Canal+ 2026

CREATE TABLE participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  squad TEXT NOT NULL,
  session_id TEXT DEFAULT 'pilote-canal-2026',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  participant_id UUID REFERENCES participants(id),
  sprint TEXT NOT NULL,
  exercice_id TEXT NOT NULL,
  prompt_text TEXT,
  result_text TEXT,
  self_rating INTEGER CHECK (self_rating BETWEEN 1 AND 5),
  hints_used INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(participant_id, exercice_id)
);

CREATE TABLE feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  participant_id UUID REFERENCES participants(id),
  sprint TEXT NOT NULL,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index pour les requetes frequentes
CREATE INDEX idx_submissions_participant ON submissions(participant_id);
CREATE INDEX idx_submissions_sprint ON submissions(sprint);
CREATE INDEX idx_feedback_participant ON feedback(participant_id);
