// ? подробнее про node узлы

// const elemenList = document.getElementById('elementList')
// const button = document.getElementById('myButton')

// let newLi = document.createElement('li')
// let newText = document.createTextNode('Новый элемент')

// newLi.appendChild(newText)

// function CreateElement() {
// !     elemenList.append(newLi)
// !     elemenList.prepend(newLi)
// !     elemenList.before(newLi)
// !     elemenList.after(newLi)
// }

// ? удалить узел

// function CreateElementDelete() {
//     newText.remove()
//     }


const addTeg = document.getElementById('addTeg')

const endElement = document.getElementById('endElement')
const beginningElement = document.getElementById('beginningElement')
const deleteFirst = document.getElementById('deleteFirst')
const deleteLast = document.getElementById('deleteLast')

// !-----------------------------

let newLiEnd = document.createElement('li')
let newTextEnd = document.createTextNode('Новый элемент в конеце')
newLiEnd.appendChild(newTextEnd)

function EndElement() {
    addTeg.append(newLiEnd)
    endElement.style.backgroundColor = 'red'
}

// !-----------------------------

let newLiBegin = document.createElement('li')
let newTextBegin = document.createTextNode('Новый элемент в начале')
newLiBegin.appendChild(newTextBegin)

function BeginningElement() {
    addTeg.append(newLiBegin)
    beginningElement.style.backgroundColor = 'red'
}

// !-----------------------------

function DeleteFirst() {
    newLiBegin.remove()
    deleteFirst.style.backgroundColor = 'red'
    }

function DeleteLast() {
    newLiEnd.remove()
    deleteLast.style.backgroundColor = 'red'
    }

// !-----------------------------

const rod = document.getElementById('rod')

function DELETE() {
    rod.remove()
    document.body.style.backgroundColor = 'black';
    


}
