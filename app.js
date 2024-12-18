
// TYPEWRITE FOR THE COMPANY NAME 
// const text = "THE PETERSTOUCH MERCHANTS"; 
// const typingSpeed = 80; 

// let i = 0;

// function typeWriter() {
//   const textElement = document.getElementById("text");
//   if (i < text.length) {
//     textElement.textContent += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, typingSpeed);
//   }
// }

// window.onload = typeWriter;


// ^^^^^^^^^^***************************************************************
// TYPEWRITE FOR THE COMPANY SHORT DESC 
const text1 = "THE PETERSTOUCH MERCHANTS";
const text2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.ure eaque nisiProvident iusto fugiat culpa, quisquam iure eaque aspernaquisquam iure eaque nisi asperna"; 
              
const typingSpeed = 75;

let i = 0;
let j = 0;

function typeWriter1() {
  const textElement1 = document.getElementById("text");
  if (i < text1.length) {
    textElement1.textContent += text1.charAt(i);
    i++;
    setTimeout(typeWriter1, typingSpeed);
  } else {
    setTimeout(typeWriter2, 450); // Delay before starting the second typewriter
  }
}

function typeWriter2() {
  const textElement2 = document.getElementById("desc");
  if (j < text2.length) {
    textElement2.textContent += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, typingSpeed);
  }
}

window.onload = typeWriter1;

