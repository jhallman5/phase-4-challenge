INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (username, email, password, member_since)
VALUES
  ('jhallman5', 'jhallman5@gmail.com', '$2a$10$qPQRPdz7Ayv4v66IC8tbBOKFfh0Mqs07i3BTQPrmL19i6u.RhuLZa', '1995-12-01'),
  ('steven4', 'steven4@gmail.com', '$2a$10$Y7MMYjbJNzwitC7pr6Z3HO5T4z/Gz7kPY/HOft5I6YhgU.RsZ5lqu','1786-02-03'
  ),
  ('lisa3', 'lisa3@gmail.com', '$2a$10$OMUTik6.KcGg7agQ/bpAGevChMLZuTm.vcIf3aJtX6yxAZKkJQtR.', '1984-09-05')
;

-- password for jhallman5 = tomato
-- password for steven4 = orange
-- password for lisa3 = banana

INSERT INTO
  reviews (user_id, album_id, content, created_on)
VALUES
  (1, 2, E'I don\'t have a seat at the table','1984-04-17'),
  (1, 3, 'MY FAVORITE!','1989-04-23'),
  (1, 1, 'Crapola TOYOTA','1854-12-28'),
  (3, 1, 'UGGGH.','2011-03-13'),
  (3, 3, 'Oh Lorde','2004-01-23'),
  (2, 1, 'maliBUU.','2000-02-03'),
  (2, 2, 'Cool seats.','2013-02-01'),
  (2, 4, 'WASTED TALENT.','2002-12-23'),
  (1, 2, 'I finally got a seat.','2014-04-13')
;
