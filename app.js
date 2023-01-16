const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
     const getRandomColor = () => {
          return Math.floor(Math.random() * colors.length)
     }
     const randomColor = getRandomColor();
     document.body.style.backgroundColor = colors[randomColor];
     color.textContent = colors[randomColor]
})
