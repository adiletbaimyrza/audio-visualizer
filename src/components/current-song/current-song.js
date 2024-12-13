import { html } from "../../utils"
import "./current-song.css"

export function CurrentSongComponent() {
  const template = document.createElement("template")

  template.innerHTML = html`
    <div id="current-song">
      <img id="song-poster" src="" alt="" />
      <div>
        <h1 id="song-name"></h1>
        <p id="song-artist"></p>
      </div>
    </div>
  `

  const element = template.content.firstElementChild
  return element
}
