export function html(strings, ...values) {
  const template = document.createElement('template')
  template.innerHTML = strings.join('')
  return template.content.cloneNode(true)
}
