let inputbox = document.querySelector("input");
let textcontainer = document.querySelector(".text");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    if(inputbox.value==""){
        alert(" Please write any text");
    }
    else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value ;
    textcontainer.appendChild(li);
    inputbox.value="";
    let span = document.createElement("span");
    span.innerHTML="\u00d7"
    li.appendChild(span);
    li.querySelector("span").addEventListener("click",()=>{
        li.remove();
    })
    }
})

