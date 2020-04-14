/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

const sort = new Sort();
// sort.sort();

// function createCheesyTitle(slogan) {
//   const container = document.createElement("h1");
//   const textNode = document.createTextNode(slogan);
//   container.appendChild(textNode);
//   return container;
// }

// const title = createCheesyTitle(sort.returnValue("Re-Engineer Yourself"));
// document.getElementById("title").appendChild(title);

const yo1 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "7";
  textNode2.innerText = "5";
  textNode3.innerText = "4";
  textNode4.innerText = "2";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("min");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn1").addEventListener("click", yo1);

const yo2 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "5";
  textNode3.innerText = "4";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn2").addEventListener("click", yo2);

const yo3 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "5";
  textNode3.innerText = "4";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");
  textNode2.classList.add("min");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn3").addEventListener("click", yo3);

const yo4 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "4";
  textNode3.innerText = "5";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");
  textNode2.classList.add("sort");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn4").addEventListener("click", yo4);

const yo5 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "4";
  textNode3.innerText = "5";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");
  textNode2.classList.add("sort");
  textNode3.classList.add("min");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn5").addEventListener("click", yo5);

const yo6 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "4";
  textNode3.innerText = "5";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");
  textNode2.classList.add("sort");
  textNode3.classList.add("sort");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn6").addEventListener("click", yo6);

const yo7 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "4";
  textNode3.innerText = "5";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");
  textNode2.classList.add("sort");
  textNode3.classList.add("sort");
  textNode4.classList.add("min");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn7").addEventListener("click", yo7);

const yo8 = () => {
  const container1 = document.createElement("div");
  const textNode1 = document.createElement("div");
  const textNode2 = document.createElement("div");
  const textNode3 = document.createElement("div");
  const textNode4 = document.createElement("div");

  textNode1.innerText = "2";
  textNode2.innerText = "4";
  textNode3.innerText = "5";
  textNode4.innerText = "7";

  container1.classList.add("container");
  textNode1.classList.add("grid-item");
  textNode2.classList.add("grid-item");
  textNode3.classList.add("grid-item");
  textNode4.classList.add("grid-item");

  textNode1.classList.add("sort");
  textNode2.classList.add("sort");
  textNode3.classList.add("sort");
  textNode4.classList.add("sort");

  container1.appendChild(textNode1);
  container1.appendChild(textNode2);
  container1.appendChild(textNode3);
  container1.appendChild(textNode4);

  document.getElementById("title").appendChild(container1);
};

document.getElementById("myBtn8").addEventListener("click", yo8);

{
  /* <div class="container 1">
<div class="grid-item orange min">7</div>
<div class="grid-item green">5</div>
<div class="grid-item purple">4</div>
<div class="grid-item green">2</div>
</div> */
}

// const step1 = [7, 5, 4, 2]
// const step2 = [2, 5, 4, 7]
// cosnt step3 = [2, 4, 5, 7]
// const step4 = [2, 4, 5, 7]

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
// function changeTitle(event) {
//   event.preventDefault();
//   // console.log('What is an event?', event);
// }

// const form = document.querySelector("form");
// document.addEventListener("DOMContentLoaded", () => {
//   form.onsubmit = changeTitle;
// });
