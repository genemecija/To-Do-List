import displayList from './listGUI'

// Shows available lists in a Lists section within the app nav section
const showLists = (arrOfLists) => {
    let listsDisplay = document.createElement('div')
    listsDisplay.classList.add('listsDisplay')

    let listsDisplayHeader = document.createElement('div')
    listsDisplayHeader.classList.add('listsDisplayHeader')

    let listsDisplayContents = document.createElement('div')
    listsDisplayContents.classList.add('listsDisplayContents')

    listsDisplayHeader.innerText = "Lists"
    listsDisplay.appendChild(listsDisplayHeader)
    listsDisplay.appendChild(listsDisplayContents)

    arrOfLists.forEach(list => {
        let listDiv = document.createElement('div')
        listDiv.id = list.id
        listDiv.classList.add('nav_list')
        listDiv.innerHTML = list.title
        listDiv.addEventListener('click', () => {
            let appContent = document.querySelector('.appContent')
            appContent.appendChild(displayList(list))
        })
        listsDisplay.appendChild(listDiv)
    });
    return listsDisplay
}

export default showLists