import db from './db'
import bcrypt from 'bcryptjs'

export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS stories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      descricao_curta TEXT,
      pais TEXT,
      modelo_negocio TEXT,
      faixa_faturamento TEXT,
      como_comecou TEXT,
      desafios TEXT,
      estrategias TEXT,
      modelo_atual TEXT,
      aprendizados TEXT,
      links TEXT,
      data_publicacao TEXT
    );
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      link_negocio TEXT,
      descricao TEXT,
      faixa_faturamento TEXT,
      historia TEXT
    );
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT UNIQUE,
      senha_hash TEXT
    );
    CREATE TABLE IF NOT EXISTS newsletter (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      data_inscricao TEXT
    );
  `)

  const hash = bcrypt.hashSync('admin', 10)
  db.prepare('INSERT OR IGNORE INTO users (id, nome, email, senha_hash) VALUES (1, ?, ?, ?)').run('Admin', 'admin@example.com', hash)
}

initDb()
