// -------grabing the elements
let addToButton = document.querySelector("#addto");
let toDo = document.querySelector(".toDo");
let inputfield =document.querySelector("#inputfield");

//------making the button functional by adding eventlistener

addToButton.addEventListener("click", work)
function work()
{
   //---to pervent adding empty values in our app
  if(inputfield.value.length==0){
    alert("empty")
  }
  else{
  // ---creating paragrapgh
  var paragraph = document.createElement("p");
  
  // ----adding the value inserted in the input field
  paragraph.innerText = inputfield.value;
  //--appending paragraph to div of toDo class
  
  toDo.appendChild(paragraph);
  //--clears the field after the click
  inputfield.value="";
  
  paragraph.addEventListener("click", ()=>{
    paragraph.style.textDecoration= "line-through";
    paragraph.style.color= "red";
  })

  paragraph.addEventListener("dblclick",()=>{
    toDo.removeChild(paragraph);
  })

}
}


inputfield.addEventListener('keydown', (e) => {if (e.keyCode == 13) {
 work()
}})