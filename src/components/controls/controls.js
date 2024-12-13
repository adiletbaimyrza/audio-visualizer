import { html } from "../../utils"
import { ControlButtonsComponent } from "../control-buttons/control-buttons"
import { ControlProgressComponent } from "../control-progress/control-progress"
import "./controls.css"

export function ControlsComponent() {
  const controlButtons = ControlButtonsComponent()
  const controlProgress = ControlProgressComponent()

  const template = document.createElement("template")

  template.innerHTML = html` <div class="controls"></div> `

  const element = template.content.firstElementChild

  element.appendChild(controlButtons)
  element.appendChild(controlProgress)

  return element
}
