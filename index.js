let title = document.querySelector("#text");
let description = document.querySelector("#desc");
let form = document.querySelector("form");
let container = document.querySelector(".container");

let tasks = [];

const show = () => {
  tasks.forEach((value, index) => {
    let div = document.createElement("div");
    div.className = "todo";

    let innerdiv = document.createElement("div");
    div.append(innerdiv);

    let text = document.createElement("p");
    text.innerText = value.title;
    innerdiv.append(text);

    let resdesc = document.createElement("span");
    resdesc.innerText = value.description;
    innerdiv.append(resdesc);

    const btn = document.createElement("button");
    btn.className = "resbtn";
    btn.innerText = "-";
    div.append(btn);
    container.append(div);

    btn.addEventListener("click", () => {
      removetask();
      tasks.splice(index, 1);
      show();
    });
  });
};

const removetask = () => {
  tasks.forEach(() => {
    let div = document.querySelector(".todo");
    div.remove();
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removetask();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  show();
});
