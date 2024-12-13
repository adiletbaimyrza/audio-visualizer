import { html } from "../../../utils"

export function ProgressComponent(id) {
  const template = document.createElement("template")

  template.innerHTML = html`
    <div id="${id}" class="progress">
      <div class="progress-filled"></div>
    </div>
  `

  const element = template.content.firstElementChild
  return element
}
