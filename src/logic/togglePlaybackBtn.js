export function togglePlaybackBtn(ui, state) {
  if (state.isPlaying) {
    ui.playBtn.style.display = "none"
    ui.pauseBtn.style.display = "block"
  } else {
    ui.playBtn.style.display = "block"
    ui.pauseBtn.style.display = "none"
  }
}
