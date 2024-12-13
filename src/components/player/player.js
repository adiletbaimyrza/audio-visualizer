import { html } from "../../utils"
import { ControlsComponent } from "../controls/controls"
import { CurrentSongComponent } from "../current-song/current-song"
import { VolumeComponent } from "../volume/volume"
import "./player.css"

export function PlayerComponent() {
  const currentSong = CurrentSongComponent()
  const controls = ControlsComponent()
  const volume = VolumeComponent()

  const template = document.createElement("template")

  template.innerHTML = html` <div id="player" class="player"></div> `

  const element = template.content.firstElementChild

  element.appendChild(currentSong)
  element.appendChild(controls)
  element.appendChild(volume)

  return element
}
