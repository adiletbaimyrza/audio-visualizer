import { html } from "../../../utils"

export function IconButtonComponent(id, className, src, alt) {
  const template = document.createElement("template")

  template.innerHTML = html`
    <button type="button" id="${id}" class="${className}">
      <img src="${src}" alt="${alt}" />
    </button>
  `

  const element = template.content.firstElementChild
  return element
}
