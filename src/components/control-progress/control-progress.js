import { html } from "../../utils"
import { ProgressComponent } from "../shared/progress/progress"
import { TimeComponent } from "../shared/time/time"
import "./control-progress.css"

export function ControlProgressComponent() {
  const currentDuration = TimeComponent("current-duration")
  const progress = ProgressComponent("control-progress__progress")
  const totalDuration = TimeComponent("total-duration")

  const template = document.createElement("template")

  template.innerHTML = html` <div id="control-progress"></div> `

  const element = template.content.firstElementChild

  element.appendChild(currentDuration)
  element.appendChild(progress)
  element.appendChild(totalDuration)

  return element
}
