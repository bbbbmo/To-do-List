// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);
// function handleh1Click() {
//   const clickedClass = "clicked";
//   h1.classList.toggle(clickedClass);
// if (h1.classList.contains(clickedClass)) {
//   h1.classList.remove(clickedClass);
// } else {
//   h1.classList.add(clickedClass);
// }
// }

// const currentColor = h1.style.color;
// let newColor;
// if (currentColor === "blue") {
//   newColor = "tomato";
// } else {
//   newColor = "blue";
// }
//   h1.style.color = newColor;
// }
// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//   alert("copier!");
// }
// function handleWindowOffine() {
//   alert("SOS no WIFI");
// }
// function handleWindowOnline() {
//   alert("ALL GOOOD");
// }

// h1.addEventListener("click", handleh1Click); //h1.onclick = handleh1Click;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffine);
// window.addEventListener("online", handleWindowOnline);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //함수의 인자(보통 event로 사용)를 넣으면 이벤트가 벌어졋을 때 쓸 수 있는 기본정보가 제공, 이 경우는 새로고침을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
