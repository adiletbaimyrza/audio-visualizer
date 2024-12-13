import { html } from "../../utils"
import { IconButtonComponent } from "../shared/icon-button/icon-button"
import { ProgressComponent } from "../shared/progress/progress"
import { volumeHighIcon, volumeXMarkIcon } from "./icons/icons"
import "./volume.css"

export function VolumeComponent() {
  const volumeHigh = IconButtonComponent(
    "volume-high-btn",
    undefined,
    volumeHighIcon,
    "volume high icon"
  )
  const volumeMuted = IconButtonComponent(
    "muted-btn",
    undefined,
    volumeXMarkIcon,
    "muted icon"
  )
  const volumeProgress = ProgressComponent("volume-progress")

  const template = document.createElement("template")

  template.innerHTML = html` <div class="volume"></div> `

  const element = template.content.firstElementChild

  element.appendChild(volumeHigh)
  element.appendChild(volumeMuted)
  element.appendChild(volumeProgress)

  return element
}
