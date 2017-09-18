CREATE TABLE albums (
  id SERIAL,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL,
  user_id INT NOT NULL,
  album_id INT NOT NULL,
  content TEXT,
  created_on DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  member_since DATE NOT NULL DEFAULT CURRENT_DATE
);
