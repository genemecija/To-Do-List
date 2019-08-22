

const appShow = () => {
    let body = document.querySelector('body')
    let appWindow = document.createElement('div')
    appWindow.classList.add('appWindow')
    body.appendChild(appWindow)

    let appNav = document.createElement('div')
    appNav.classList.add('appNav')
    appWindow.appendChild(appNav)

    let appContent = document.createElement('div')
    appContent.classList.add('appContent')
    appWindow.appendChild(appContent)
}

export default appShow