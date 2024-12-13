import { html } from "../../utils"
import "./scene.css"

export function SceneComponent() {
  const template = document.createElement("template")

  template.innerHTML = html` <div id="scene"></div> `

  const element = template.content.firstElementChild
  return element
}
