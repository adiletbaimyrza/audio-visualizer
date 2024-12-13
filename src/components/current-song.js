import { html } from '../utils'

export function CurrentSong() {
  return html`
    <div id="current-song">
      <img id="song-poster" src="" alt="" />
      <div>
        <h1 id="song-name"></h1>
        <p id="song-artist"></p>
      </div>
    </div>
  `
}
