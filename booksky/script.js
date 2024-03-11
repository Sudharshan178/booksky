var popupoverlay = document.querySelector(".popup_overlay");
var box = document.querySelector(".popup_box");
var plus_popup_button=document.getElementById("plus_popup_button")

/*plus_popup_button.addEventListener("click",function(){
   popupoverlay.style.display="block";
   box.style.display="block";
});*/


var plus =()=>{
   popupoverlay.style.display="block";
   box.style.display="block";
}

var cancelButton = document.getElementById("cancel_popup")

cancelButton.addEventListener("click",function(event){
   event.preventDefault();
   popupoverlay.style.display="none";
   box.style.display="none";
});


var container = document.querySelector(".container");
var addBook= document.getElementById("add_book");
var bookTitle= document.getElementById("input_book_title");
var bookAuthor= document.getElementById("input_book_author");
var bookDesc= document.getElementById("bool_desc");

addBook.addEventListener("click",function(event){
     event.preventDefault();
     popupoverlay.style.display="none";
     box.style.display="none";
     var div = document.createElement("div");
     div.setAttribute("class","books")
     div.innerHTML=`<h2>${bookTitle.value}</h2>
     <h5>${bookAuthor.value}</h5>
     <p>${bookDesc.value}</p>

     <button onclick = "Delete(event)">Delete</button>`
     container.append(div)
});
   
var Delete =(event)=>{
   event.target.parentElement.remove();

}