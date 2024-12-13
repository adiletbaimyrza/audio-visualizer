import { html } from "../../../utils"

export function TimeComponent(id) {
  const template = document.createElement("template")

  template.innerHTML = html` <time id="${id}"></time> `

  const element = template.content.firstElementChild
  return element
}
