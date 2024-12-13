export function initCurrSong(ui, songs) {
  ui.currSong.poster.src = songs[0].path
  ui.currSong.poster.alt = `${songs[0].name} by ${songs[0].artist}`
  ui.currSong.name.textContent = songs[0].name
  ui.currSong.artist.textContent = songs[0].artist
}
