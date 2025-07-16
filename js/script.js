// YOUR CODE HERE
const btn1 = document.querySelector("#btn1")
const output1 = document.querySelector("#output1")

const btn2 = document.querySelector("#btn2")
const output2 = document.querySelector("#output2")

const btn3 = document.querySelector("#btn3")
const output3 = document.querySelector("#output3")

const btn4 = document.querySelector("#btn4")
const output4 = document.querySelector("#output4")

const btn5 = document.querySelector("#btn5")
const output5 = document.querySelector("#output5")
const messageInput = document.querySelector("#message")

btn1.addEventListener('click', () => {
  console.log("click1")
  output1.style.color="red"
})

btn2.addEventListener('click', () => {
  console.log("click2")
  const span = document.createElement("span")
  span.textContent = "Hello world"
  output2.appendChild(span)
})

btn3.addEventListener('click', () => {
  output3.firstElementChild.classList.remove("small-text")
})

btn4.addEventListener('click', () => {
  output4.firstElementChild.style.color="red"
  output4.firstElementChild.nextElementSibling.style.color="red"
})

btn5.addEventListener('click', () => {
  const message = messageInput.value
  console.log(message)
})