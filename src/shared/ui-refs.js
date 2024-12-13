export function uiRefs() {
  const ui = {
    audio: document.getElementById("audio"),
    player: document.getElementById("player"),
    playBtn: document.getElementById("play-btn"),
    pauseBtn: document.getElementById("pause-btn"),
    forwardBtn: document.getElementById("forward-btn"),
    backwardBtn: document.getElementById("backward-btn"),
    volumeHighBtn: document.getElementById("volume-high-btn"),
    makeBigBtn: document.getElementById("make-big-btn"),
    makeSmallBtn: document.getElementById("make-small-btn"),
    mutedBtn: document.getElementById("muted-btn"),
    hideBtn: document.getElementById("hide-btn"),
    showBtn: document.getElementById("show-btn"),
    forwardStepBtn: document.getElementById("forward-step-btn"),
    backwardStepBtn: document.getElementById("backward-step-btn"),
    fullScreenBtn: document.getElementById("full-screen-btn"),
    microphoneBtn: document.getElementById("microphone-btn"),
    gridSceneBtn: document.getElementById("canvas-rect-grid"),
    linesSceneBtn: document.getElementById("canvas-lines"),
    sphereSceneBtn: document.getElementById("three-d-sphere"),
    songProgress: document.getElementById("control-progress"),
    volumeProgress: document.getElementById("volume-progress"),
    currDuration: document.getElementById("current-duration"),
    totalDuration: document.getElementById("total-duration"),
    playlist: document.getElementById("playlist"),
    currSong: document.getElementById("current-song"),
    scene: document.getElementById("scene"),
  }

  ui.songProgress.filled = ui.songProgress.querySelector(".progress-filled")
  ui.volumeProgress.filled = ui.volumeProgress.querySelector(".progress-filled")
  ui.currSong.poster = ui.currSong.querySelector("#song-poster")
  ui.currSong.name = ui.currSong.querySelector("#song-name")
  ui.currSong.artist = ui.currSong.querySelector("#song-artist")

  return ui
}
