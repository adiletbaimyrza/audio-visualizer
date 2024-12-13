export function toggleVolumeBtn(ui, state) {
  if (state.isMuted) {
    ui.volumeHighBtn.style.display = "none"
    ui.mutedBtn.style.display = "flex"
  } else {
    ui.volumeHighBtn.style.display = "flex"
    ui.mutedBtn.style.display = "none"
  }
}
