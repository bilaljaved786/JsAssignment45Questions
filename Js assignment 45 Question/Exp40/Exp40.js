function make_album(artist_name, album_title, tracks = null) {
  const music_album = {
    artist: artist_name,
    album: album_title,
    tracks_in_album: tracks,
  };
  return music_album;
}

console.log(make_album("The Beatles", "albums name"));
console.log(make_album("Elvis Presley", "albums name"));
console.log(make_album("Michael Jackson", "albums name"));
