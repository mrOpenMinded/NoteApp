console.log("Welcome jaan");

showNotes();

let button = document.getElementById("addBtn");
button.addEventListener("click", function (e) {
    let text = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(text.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    text.value = "";
    console.log(notesObj);
    showNotes();
});
//displaying the notes on browser.
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (ele, index) {
        html += `<div class=" noteCard card my-3 mx-2" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${ele}</p>
            <button id="${index}" onclick="deleteNote(this.id)" href="#" class="btn btn-primary">Delete Notes</button>
        </div>

    </div>`;
    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerHTML=`Nothing to show. please use "add notes" section to add some notes.`;
    }
}


//Deleting the desired note
function deleteNote(index){
    console.log("deleting the note",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};




//search tab
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(ele){
        let cardTxt=ele.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            ele.style.display="block";
        }
        else{
            ele.style.display="none";
        }
    });
    // console.log("Input event fired",inputVal);
});
