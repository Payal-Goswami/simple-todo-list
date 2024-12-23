let inp = document.querySelector("#task");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
    let li = document.createElement("li");
    let del = document.createElement("button");
    let p = document.createElement("p");

    del.innerText = "Remove";
    del.classList.add("delete");
    p.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    li.innerText = inp.value;

    li.appendChild(p);
    li.appendChild(del);
    ul.appendChild(li);

    inp.value = "";

    del.addEventListener("click", (e) => {
        e.target.parentElement.remove(); 
    });
});
