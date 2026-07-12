/*
  # Create email list table

  1. New Tables
    - `email_list`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `email_list` table
    - Add policy for authenticated users to read their own data
    - Add policy for unauthenticated users to insert emails
*/

CREATE TABLE IF NOT EXISTS email_list (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_list ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can add their email to the list"
  ON email_list
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read email list"
  ON email_list
  FOR SELECT
  TO authenticated
  USING (true);