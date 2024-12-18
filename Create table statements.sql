Create Table User(
user_id int Not Null,
sub_type enum('free', 'premium', 'student'),
username varchar(24),
email varchar(40) Not Null,
sub_id varchar(40),
user_password varchar(16) Not Null,
t_license_no varchar(40),
Primary key (user_id),
Foreign key (sub_id) References subscription(sub_id)
);
Create table playlist(
playlist_id varchar(40),
user_id int Not Null,
playlist_name varchar(255),
is_public boolean,
Primary key (playlist_id),
Foreign key (user_id) References user(user_id)
);
Create table journal(
user_id int Not Null,
journal_entry text,
journal_id varchar(40) Not Null,
journal_date date,
t_license_no varchar(40) Not Null,
Primary key (journal_id),
Foreign key (user_id) References user(user_id),
Foreign key (t_license_no) References Therapist(license_no)
);
Create table genre(
genre_id varchar(40) Not Null,
genre_name varchar(255),
Primary key (genre_id)
);
Create table Therapist(
license_no varchar(40) Not Null,
username varchar(24),
therapist_password varchar(16) Not Null,
availability json,
Primary key (license_no)
);
Create table song(
song_id varchar(40) Not Null,
song_title varchar(255),
artist_id varchar(40),
duration time,
release_date date,
album_id varchar(40),
Primary key (song_id),
Foreign key (artist_id) References artist(artist_id),
Foreign key (album_id) References album(album_id)
);
Create table album(
album_id varchar(40),
album_title varchar(255),
release_date date,
Primary key (album_id)
);
Create table artist(
artist_id varchar(40),
artist_name varchar(50),
Primary key (artist_id)
);
Create table subscription(
sub_id varchar(40),
sub_type enum('free', 'premium', 'student'),
price double,
duration datetime,
Primary key (sub_id)
);
Create table user_playlist(
user_id int,
song_id varchar(40),
Primary key (user_id, song_id),
Foreign key (user_id) References user(user_id),
Foreign key (song_id) References song(song_id)
);
Create table playlist_song(
playlist_id varchar(40),
song_id varchar(40),
Primary key (playlist_id, song_id),
Foreign key (playlist_id) References playlist(playlist_id),
Foreign key (song_id) References song(song_id)
);
Create table artist_song(
artist_id varchar(40),
song_id varchar(40),
Primary key (artist_id, song_id),
Foreign key (artist_id) References artist(artist_id),
Foreign key (song_id) References song(song_id)
);
Create table artist_album(
artist_id varchar(40),
album_id varchar(40),
Primary key (artist_id, album_id),
Foreign key (artist_id) References artist(artist_id),
Foreign key (album_id) References album(album_id)
);
Create table song_genre(
song_id varchar(40),
genre_id varchar(40),
Primary key (song_id, genre_id),
Foreign key (song_id) References song(song_id),
Foreign key (genre_id) References genre(genre_id)
);
Create table album_genre(
album_id varchar(40),
genre_id varchar(40),
Primary key (album_id, genre_id),
Foreign key (album_id) References album(album_id),
Foreign key (genre_id) References genre(genre_id)
);
