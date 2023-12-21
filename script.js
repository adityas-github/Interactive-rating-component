var selectedDiv = null;

function changeColor(element) {
    if (element === selectedDiv) {
        element.style.backgroundColor = '';
        selectedDiv = null;
    } 
    else {
        if (selectedDiv !== null) {
            selectedDiv.style.backgroundColor = '';
        }
        element.style.backgroundColor = 'orange';

        selectedDiv = element;
    }
}

function submit(){
    if(selectedDiv === null){
        alert("Nothing selected.Please select ");
    }
    else{
        document.querySelector("main").style.display = "none";
        document.querySelector(".resp").style.display = "inline-flex";
        updatescore(selectedDiv.id);
    }
}

    function updatescore(ID){
       document.querySelector('#rating').innerHTML = ID;
    }
