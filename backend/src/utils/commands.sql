CREATE TABLE employee (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  nome TEXT NOT NULL,
  cognome TEXT NOT NULL,
  email TEXT NOT NULL CHECK( email::text = '%@%'::text),
  fax TEXT ,
  telefono INT,
  website TEXT,
  ufficio TEXT,
  materia TEXT,
  ore_tot INT,
  salario numeric(12,2) CHECK(salario >=0),
  tipologia_id BIGINT NOT NULL REFERENCES tipologia(id),
  fine DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (nome,cognome)
);


CREATE TABLE scuola (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	nome TEXT NOT NULL UNIQUE
)


CREATE TABLE materia (
	id BIGSERIAL NOT NULL PRIMARY KEY,
    nome TEXT NOT NULL UNIQUE,
    scuola_id BIGINT NOT NULL REFERENCES scuola (id) UNIQUE
)

CREATE TABLE tipologia (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	nome TEXT NOT NULL UNIQUE
)


CREATE TABLE employee_scuola (
    employee_owner BIGINT REFERENCES employee (id),
    scuola_item BIGINT REFERENCES scuola (id),
    PRIMARY KEY( employee_owner, scuola_item )
)

CREATE TABLE employee_materia (
    employee_owner BIGINT REFERENCES employee (id),
    materia_item BIGINT REFERENCES employee (id),
    PRIMARY KEY( employee_owner, materia_item )
)

insert into tipologia (nome) VALUES 
('Professori Ordinari'),
('Professori Associati'),
('Ricercatori Universitari'),
('Ricercatori Universitari a tempo determinato'),
('Professori a contratto'),
('Contratti gratuiti').
('altro'),
('nessuno');

insert into scuola (nome) VALUES
('Scuola di Giurisprudenza'),
('Scuola di Scienze del Farmaco e dei Prodotti della Salute'),
('Scuola di Scienze e Tecnologie'),
('Scuola di Architettura e Design'),
('Scuola di Bioscienze e Medicina Veterinaria'),
('altro'),
('nessuno');