const userForm = document.querySelector("form");
const userData = userForm.querySelectorAll("input")
const dataMirror = document.querySelector("#dataMirror").children;


const submitFunction = (event) => {
    event.preventDefault();

    for(let [index, dataItem] of userData.entries()) {
        if(dataMirror[index].tagName != "IMG"){
            dataMirror[index].innerHTML = dataItem.value;
        }else{
            dataMirror[index].setAttribute("src",dataItem.value);
        }
    }


    console.log("submitted");
}

userForm.addEventListener("submit", submitFunction);



// console.log();