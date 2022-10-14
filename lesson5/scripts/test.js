document.querySelector('#Btn').addEventListener('click', () => {
    let chapter = document.querySelector('#favchap').value
    console.log(chapter)

    let newChap = document.createElement('li')
    let newSpan = document.createElement('span')
    let newButton = document.createElement('button')
    newButton.setAttribute('id', "delete")
    newButton.setAttribute('class', `delete-$`)
    newButton.textContent = " ❌"
    newSpan.innerHTML = chapter

    newChap.appendChild(newSpan)
    newChap.appendChild(newButton)
    document.querySelector('.list').appendChild(newChap)

    document.getElementById('delete').addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
})

