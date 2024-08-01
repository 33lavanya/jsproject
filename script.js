var popupoverlay =document.querySelector(".popup-overlay")
var popupbox =document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
event.preventDefault()//ethu kudutha automatic ah tab vanthu close aagathuu.namma close panna mathum tha close aagum
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var add=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
        <h4>${bookauthor.value}</h4>
        <p> ${bookdescription.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}

)
function deletebook(event){
    event.target.parentElement.remove()
}