function deleteItem(event){
    event.target.parentNode.remove()
}

function add_book(){
    var overLayer = document.querySelector(".overLayer")
    overLayer.style.display = "block"
    var popUp = document.querySelector(".popUp")
    popUp.style.display = "block"
}

function insert_book(event){
    event.preventDefault()
    var div =document.createElement("div")
    var container = document.querySelector(".container")

    var book_title_input = document.getElementById("book-title-input")
    var book_author_input = document.getElementById("book-author-input")
    var book_desc = document.getElementById("book-desc")

    var title = book_title_input.value
    var author = book_author_input.value
    var desc = book_desc.value
    var empty = ""

    if(title == empty && author == empty && desc == empty){
        alert("Enter Valid Input")
    }
    else{
        div.className = "book"
        div.innerHTML = "<h2>"+title+"</h2><h3>"+author+"</h3><p>"+desc+"</p><button onclick='deleteItem(event)'>Remove</button>"

        container.append(div)

        var overLayer = document.querySelector(".overLayer")
        overLayer.style.display = "none"
        var popUp = document.querySelector(".popUp")
        popUp.style.display = "none"

        book_title_input.value = empty
        book_author_input.value = empty
        book_desc.value = empty
    }
}

function cancel_popup(event){
    event.preventDefault()
    var overLayer = document.querySelector(".overLayer")
    overLayer.style.display = "none"
    var popUp = document.querySelector(".popUp")
    popUp.style.display = "none"
}