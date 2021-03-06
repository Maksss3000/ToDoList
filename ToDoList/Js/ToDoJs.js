'use strict';

//Getting Add Task Button-Id for adding new Task
//and using function when clicking on this button.
let AddTaskBtn = document.getElementById("AddTaskBtn");
AddTaskBtn.addEventListener("click", AddTaskFunc);

//Getting Task Field-Id and using function when clicking on task field.
let taskField = document.getElementById("Text"); 
taskField.addEventListener("click", ClickOnTaskField);

//Getting Delete List Button-Id for deleting all Task`s
//and using function when clicking on this button.
let deleteAllTasksBtn=document.getElementById("DeleteList");
deleteAllTasksBtn.addEventListener("click",DeleteAllTasksFunc); 

//Taking ul element.
let list;
list = document.getElementById("list"); 
//Taking h2 element.
let listIsEmpty=document.querySelector("h2");

//Function for Adding new Task to List of Task`s.
let textField;
let delbut;
let i=0;

function AddTaskFunc() {

  listIsEmpty.style.visibility="hidden";
  let liElement;
  let inputTxtElement;
  let textValue = taskField.value;

  let message="Please Enter Some Task.";
  //If Task field is Empty  
  //Relevant Message will be displayed.
  if(textValue.trim()=="")
   window.alert(message);

  //Text Field Not Empty.
  else{

  textField.value = " ";
  //Creating li,text,button elements.
  liElement = document.createElement("li"); 
  inputTxtElement= document.createElement("input"); 
  delbut = document.createElement("button");

  //Specific Task in Text Field.
  inputTxtElement.value = textValue;
  //Change color.
  inputTxtElement.style.color=colorBtn.value;

  inputTxtElement.readOnly="true";
  delbut.innerHTML = "X";

  //Adding to my Task(li) Text Field.
  liElement.appendChild(inputTxtElement); 
  //Adding to  my Task(li) Delete Button.
  liElement.appendChild(delbut); 

  //Id assignment to elements.
  inputTxtElement.id = liElement.id = delbut.id = i;

  i++;
  //Adding li(task) to my List(ul).
  list.appendChild(liElement);
 
   }
}


let clickMeBtn;
clickMeBtn=document.getElementById("MyBtn");
clickMeBtn.addEventListener("click",ClickMeBtn);


  let body;
  let clr;
  let bodyClr="";
function ClickMeBtn(){
  
  

  body=document.querySelector("body");

  if(bodyClr=="")
    bodyClr=body.style.backgroundColor;

  clr=colorBtn.value;
  
   if(bodyClr==clr){
    body.style.backgroundColor="#0d87f2";
    bodyClr='#0d87f2';
  
   }
   

else if(bodyClr==""){
  body.style.backgroundColor=clr;
  bodyClr=clr;
}
  
else if(bodyClr=="#0d87f2"){
  body.style.backgroundColor=clr;
  bodyClr=clr;
  
}
  


}


let searchTextField;
searchTextField=document.getElementById("search");
searchTextField.addEventListener("input",TextForSearchFunction);
//Function for searching Specific Task
//From Task-List.
function TextForSearchFunction(){

  let task;
  let taskTextField;
  let listLength=document.querySelectorAll('li');

  for(let i=0;i<listLength.length;i++){
   
     taskTextField=listLength[i];
     task=taskTextField;

    //Getting input field element.
    taskTextField=task.querySelector("input");
    
    //If in Task-List is word from searching field.
    if(taskTextField.value.includes(searchTextField.value)){
      task.style.display="block";
    }

    else{
      task.style.display="none";
    }
  }
 }


 let colorBtn;
 colorBtn=document.getElementById("color");
 colorBtn.addEventListener("mouseleave",ColorChoose);

 let liElement;
 let colour;
//Function for changing the color in Task-List.
function ColorChoose(){

   colour=this.value;
   let listLength;
   let  taskTextField;

  listLength=document.querySelectorAll('li');

  for(let i=0;i<listLength.length;i++){
   
     liElement=listLength[i];
     taskTextField=liElement.querySelector("input");
     taskTextField.style.color=colour;
  }
 }


//Function when we clicking on a Task Field.
function ClickOnTaskField() {
  textField = document.getElementById("Text");
  textField.value = "";
}

//Function for Removing all Task`s from Task-List.
function DeleteAllTasksFunc(){
  
        //Removing all elements one by one from Task-List.
        let task;
        while(list.children.length){
              task=list.querySelector("li");
              task.remove();
          }

  listIsEmpty.style.visibility="visible";

}

list.addEventListener("mouseover",function(e){
  e.target.style.color="red";
  
});

list.addEventListener("mouseout",function(e){
  e.target.style.color=colour;
});

//Clicking on specific Task from Task-List.
list.addEventListener("click", function (e) {

  let textFieldAndButton;
  textFieldAndButton = document.getElementById(e.target.id);

  //Removing specific task from Task-List.
  if (e.target && e.target.matches("button")) {
      textFieldAndButton.remove();
  }

  if(list.children.length==0){
    listIsEmpty.style.visibility="visible";
  }
  //By clicking on text field,we can change style of text Decoration 
  //Line-through task complete,else not complete.
  if (e.target && e.target.matches("input")) {
    let textField;
    textField=textFieldAndButton.querySelector("input");
  
    if ( textField.style.textDecoration == "line-through") {
      textField.style.textDecoration = "none";
    } 
    else{
      textField.style.textDecoration = "line-through";
    }

  }

});
