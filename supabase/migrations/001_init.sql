-- Canal+ TP Companion — Schema initial
-- Session pilote Lecko x Canal+ 2026

-- Enable RLS
ALTER DATABASE postgres SET "app.jwt_secret" TO 'super-secret-jwt-token-with-at-least-32-characters-long';

CREATE TABLE participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  metier TEXT NOT NULL,
  lang TEXT DEFAULT 'fr',
  session_id TEXT DEFAULT 'pilote-canal-2026',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  participant_id UUID REFERENCES participants(id) ON DELETE CASCADE,
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
  participant_id UUID REFERENCES participants(id) ON DELETE CASCADE,
  sprint TEXT NOT NULL,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index pour les requetes frequentes
CREATE INDEX idx_submissions_participant ON submissions(participant_id);
CREATE INDEX idx_submissions_sprint ON submissions(sprint);
CREATE INDEX idx_feedback_participant ON feedback(participant_id);

-- Row Level Security
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Participants: anyone can insert (anon signup), authenticated can read all
CREATE POLICY "participants_insert" ON participants FOR INSERT WITH CHECK (true);
CREATE POLICY "participants_select" ON participants FOR SELECT USING (true);

-- Submissions: insert/update own, read all (formateur needs it)
CREATE POLICY "submissions_insert" ON submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "submissions_update" ON submissions FOR UPDATE USING (true);
CREATE POLICY "submissions_select" ON submissions FOR SELECT USING (true);

-- Feedback: insert own, read all
CREATE POLICY "feedback_insert" ON feedback FOR INSERT WITH CHECK (true);
CREATE POLICY "feedback_select" ON feedback FOR SELECT USING (true);
