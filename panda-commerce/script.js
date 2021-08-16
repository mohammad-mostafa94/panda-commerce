 // get Elements tag name
 const h4 = document.getElementsByTagName("h4");
 for (const h4Tag of h4) {
   h4Tag.style.color = "lightblue";
 }

// get element by id
 document.getElementById("backPack").style.backgroundColor = "tomato";

 //get element by class name
 const card = document.getElementsByClassName("card");
 for (const cardItem of card) {
   cardItem.style.borderRadius = "30px";
 }

 function myFunction() {
    console.log("Buy now click")
 }

//  document.getElementById("byNowId").style.display = "none";

document.getElementById("byNowId").addEventListener("click", displayNone);

function displayNone() {
    document.getElementById("byNowId").style.display = "none";
}

//keyup
document.getElementById('inputId').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('buttonId');
    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
});
//change
document.getElementById('inputId').addEventListener('change', function() {
    const deleteField = document.getElementById('inputId');
    console.log(deleteField.value);
});

// double click event
document.getElementById("byNowBlackId").addEventListener("dblclick", myFunction);

function myFunction() {
    console.log("double clicked")
  document.getElementById("byNowBlackId").style.backgroundColor = "green";
}

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }

// function myFunction() {
//     document.getElementById("byNowBlackId").style.backgroundColor = "green";
//   }