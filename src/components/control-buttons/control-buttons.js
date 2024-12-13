import { html } from "../../utils"
import {
  backwardStepIcon,
  backwardIcon,
  playIcon,
  pauseIcon,
  forwardIcon,
  forwardStepIcon,
} from "./icons/icons"
import "./control-buttons.css"
import { IconButtonComponent } from "../shared/icon-button/icon-button"

export function ControlButtonsComponent() {
  const backwardStep = IconButtonComponent(
    "backward-step-btn",
    "control-btn",
    backwardStepIcon,
    "backward-step icon"
  )
  const backward = IconButtonComponent(
    "backward-btn",
    "control-btn",
    backwardIcon,
    "backward icon"
  )
  const play = IconButtonComponent(
    "play-btn",
    "control-btn",
    playIcon,
    "play icon"
  )
  const pause = IconButtonComponent(
    "pause-btn",
    "control-btn",
    pauseIcon,
    "pause icon"
  )
  const forward = IconButtonComponent(
    "forward-btn",
    "control-btn",
    forwardIcon,
    "forward icon"
  )
  const forwardStep = IconButtonComponent(
    "forward-step-btn",
    "control-btn",
    forwardStepIcon,
    "forward-step icon"
  )
  const template = document.createElement("template")

  template.innerHTML = html` <div class="control-btns"></div> `

  const element = template.content.firstElementChild

  element.appendChild(backwardStep)
  element.appendChild(backward)
  element.appendChild(pause)
  element.appendChild(play)
  element.appendChild(forward)
  element.appendChild(forwardStep)

  return element
}
