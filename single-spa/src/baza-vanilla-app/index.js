const domElementGetter = () => {
  let el = document.getElementById('baza-vanilla-app')
  if (!el) {
    el = document.createElement('div')
    el.id = 'baza-vanilla-app'
    document.body.appendChild(el)
  }
  return el
}

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)
