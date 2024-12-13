export function getState(ui, songs) {
  const state = {
    isLive: false,
    setIsLive: (newVal) => {
      state.isLive = newVal
    },
    isPlaying: false,
    setIsPlaying: (newVal) => {
      state.isPlaying = newVal
    },
    isMuted: false,
    setIsMuted: (newVal) => {
      state.isMuted = newVal
    },
    currVolume: ui.audio.volume,
    setCurrVolume: (newVal) => {
      state.currVolume = newVal
    },
    songProgMousedown: false,
    setSongProgMousedown: (newVal) => {
      state.songProgMousedown = newVal
    },
    volumeProgMousedown: false,
    setVolumeProgMousedown: (newVal) => {
      state.volumeProgMousedown = newVal
    },
    nowPlaying: null,
    setNowPlaying: (newVal) => {
      state.nowPlaying = newVal
    },
    currSong: songs[0],
    setCurrSong: (newVal) => {
      state.setCurrSong = newVal
    },
    isPlayerHidden: false,
    setIsPlayerHidden: (newVal) => {
      state.isPlayerHidden = newVal
    },
    isPlaylistHidden: false,
    setIsPlaylistHidden: (newVal) => {
      state.isPlaylistHidden = newVal
    },
    scene: "grid",
    setScene: (newVal) => {
      state.scene = newVal
    },
    songId: 0,
    setSongId: (newVal) => {
      state.songId = newVal
    },
  }

  return state
}
