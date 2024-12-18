INSERT INTO User (user_id, sub_type, username, email, sub_id, user_password, t_license_no) VALUES
(1, 'free', 'alice_jones', 'alice.jones@example.com', 'sub001', 'pass1234', 't_license_001'),
(2, 'premium', 'bob_smith', 'bob.smith@example.com', 'sub002', 'pass5678', 't_license_002'),
(3, 'student', 'charlie_k', 'charlie.k@example.edu', 'sub003', 'passabcd', 't_license_003'),
(4, 'free', 'diane_t', 'diane.t@example.com', 'sub004', 'passefgh', 't_license_004'),
(5, 'premium', 'edward_l', 'edward.l@example.com', 'sub005', 'passijkl', 't_license_005'),
(6, 'student', 'fiona_m', 'fiona.m@example.edu', 'sub006', 'passmnop', 't_license_006');
INSERT INTO Playlist (playlist_id, user_id, playlist_name, is_public) VALUES
('pl001', 1, 'Morning Vibes', TRUE),
('pl002', 1, 'Chillout', FALSE),
('pl003', 2, 'Workout Mix', TRUE),
('pl004', 3, 'Focus Beats', FALSE),
('pl005', 4, 'Evening Relax', TRUE),
('pl006', 5, 'Top Hits', FALSE);
INSERT INTO Artist (artist_id, artist_name) VALUES
('art001', 'Taylor Swift'),
('art002', 'Drake'),
('art003', 'Billie Eilish'),
('art004', 'Ed Sheeran'),
('art005', 'Adele'),
('art006', 'Ariana Grande');

INSERT INTO Album (album_id, album_title, release_date) VALUES
('alb001', '1989', '2014-10-27'),
('alb002', 'Scorpion', '2018-06-29'),
('alb003', 'When We All Fall Asleep, Where Do We Go?', '2019-03-29'),
('alb004', 'Divide', '2017-03-03'),
('alb005', '25', '2015-11-20'),
('alb006', 'Thank U, Next', '2019-02-08');

INSERT INTO Song (song_id, song_title, artist_id, duration, release_date, album_id) VALUES
('song001', 'Blank Space', 'art001', '00:03:51', '2014-10-27', 'alb001'),
('song002', 'In My Feelings', 'art002', '00:03:37', '2018-06-29', 'alb002'),
('song003', 'Bad Guy', 'art003', '00:03:14', '2019-03-29', 'alb003'),
('song004', 'Shape of You', 'art004', '00:03:53', '2017-03-03', 'alb004'),
('song005', 'Hello', 'art005', '00:04:55', '2015-11-20', 'alb005'),
('song006', '7 rings', 'art006', '00:02:58', '2019-02-08', 'alb006');
INSERT INTO Journal (user_id, journal_entry, journal_id, journal_date, t_license_no) VALUES
(1, 'Today I felt motivated and accomplished a lot of work.', 'j001', '2024-01-15', 't_license_001'),
(2, 'Had a relaxing day and enjoyed some time outdoors.', 'j002', '2024-02-20', 't_license_002'),
(3, 'Feeling a bit stressed, but managed to get through the day.', 'j003', '2024-03-10', 't_license_003'),
(4, 'Great therapy session today, feeling more positive.', 'j004', '2024-04-05', 't_license_004'),
(5, 'Took some time for self-reflection and mindfulness.', 'j005', '2024-05-12', 't_license_005'),
(6, 'Feeling grateful and hopeful for the future.', 'j006', '2024-06-18', 't_license_006');
INSERT INTO Genre (genre_id, genre_name) VALUES
('gen001', 'Pop'),
('gen002', 'Rock'),
('gen003', 'Hip-Hop'),
('gen004', 'Jazz'),
('gen005', 'Classical'),
('gen006', 'Electronic');
INSERT INTO Therapist (license_no, username, therapist_password, availability) VALUES
('t_license_001', 'dr_jackson', 'securepass1', '{"monday": "9am-5pm", "wednesday": "10am-6pm"}'),
('t_license_002', 'dr_clark', 'pass4321', '{"tuesday": "8am-4pm", "thursday": "12pm-8pm"}'),
('t_license_003', 'dr_smith', 'mypassword', '{"monday": "10am-4pm", "friday": "1pm-6pm"}'),
('t_license_004', 'dr_brown', 'therapass', '{"tuesday": "9am-5pm", "wednesday": "11am-7pm"}'),
('t_license_005', 'dr_miller', 'password123', '{"monday": "8am-2pm", "thursday": "10am-6pm"}'),
('t_license_006', 'dr_davis', 'secure789', '{"wednesday": "9am-5pm", "friday": "12pm-8pm"}');
INSERT INTO Subscription (sub_id, sub_type, price, duration) VALUES
('sub001', 'free', 0.00, '2024-01-01 00:00:00'),
('sub002', 'premium', 9.99, '2024-01-01 00:00:00'),
('sub003', 'student', 4.99, '2024-01-01 00:00:00'),
('sub004', 'premium', 12.99, '2024-06-01 00:00:00'),
('sub005', 'student', 5.99, '2024-06-01 00:00:00'),
('sub006', 'free', 0.00, '2024-06-01 00:00:00');

INSERT INTO User_Playlist (user_id, song_id) VALUES
(1, 'song001'),
(1, 'song003'),
(2, 'song002'),
(2, 'song004'),
(3, 'song005'),
(4, 'song006');
INSERT INTO Playlist_Song (playlist_id, song_id) VALUES
('pl001', 'song001'),
('pl001', 'song003'),
('pl002', 'song002'),
('pl003', 'song004'),
('pl004', 'song005'),
('pl005', 'song006');
INSERT INTO Artist_Song (artist_id, song_id) VALUES
('art001', 'song001'),
('art002', 'song002'),
('art003', 'song003'),
('art004', 'song004'),
('art005', 'song005'),
('art006', 'song006');
INSERT INTO Artist_Album (artist_id, album_id) VALUES
('art001', 'alb001'),
('art002', 'alb002'),
('art003', 'alb003'),
('art004', 'alb004'),
('art005', 'alb005'),
('art006', 'alb006');
INSERT INTO Song_Genre (song_id, genre_id) VALUES
('song001', 'gen001'),
('song002', 'gen002'),
('song003', 'gen003'),
('song004', 'gen004'),
('song005', 'gen005'),
('song006', 'gen001');
INSERT INTO Album_Genre (album_id, genre_id) VALUES
('alb001', 'gen001'),
('alb002', 'gen003'),
('alb003', 'gen001'),
('alb004', 'gen002'),
('alb005', 'gen005'),
('alb006', 'gen001');
