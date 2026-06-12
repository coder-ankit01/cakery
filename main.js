// ----------------------------
//  Sticky Navbar on Scroll
// ----------------------------
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.background = "#fff";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        header.style.zIndex = "999";
    } else {
        header.style.position = "static";
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }
});
// ankitttt
function changeHomeText() {
    document.getElementById("para").innerHTML =
        "Waiting!";
}
function changeListColor() {
    let items = document.getElementById("text-3a");

    items.forEach(function(item) {
        item.style.color = "green";
    });
}
function submitForm() {
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
    } else {
        //alert("Thank you " + name + "! We will contact you soon.");
        document.getElementById("result").innerHTML =
          "Thank you " + name + "! We will contact you soon.";
    }
}
 //   setTimeout(function() {
  // alert("Welcome after 3 seconds");
 // }, 3000);


 //date
  let date = new Date();
  document.write(date);

 // dark mode

  function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
//light mode

function lightmode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

//array
  let fruits = ["Apple", "Banana", "Mango"];
  document.write(fruits[2]);
  console.log(fruits)


//onmouseover

function hoverText() {
    document.getElementById("text-3a").style.color = "red";
  alert("Mouse is over the text");
}
//text animation
//let words = ["Ankit", "Student", "Developer", "Software engineer"];
//let i = 0;

//setInterval(() => {
 //   document.getElementById("word").innerHTML = words[i];
   // i = (i + 1) % words.length;
//},1000)

let texts = [
    "Welcome to Our Website",
    "Best Deals Available",
    "Contact Us Now"
];

let index = 0;
let textElement = document.getElementById("text");

setInterval(() => {
    index++;
    if (index >= texts.length) {
        index = 0;
    }
    textElement.innerText = texts[index];
}, 2000);


// ----------------------------
//  Smooth Scroll for Menu Click
// ----------------------------
document.querySelectorAll(".texts").forEach(link => {
    link.addEventListener("click", function () {
        const section = this.textContent.trim().toLowerCase();

        const target = document.getElementById(`sec-${section}`);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
//--- NAV MENU BAR

let iconcart = document.querySelector('.icon');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');

iconcart.addEventListener('click', () => {
    body.classList.toggle('active')
})
closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')

})




// ----------------------------
//  Play Button Click
// ----------------------------
const play = document.getElementById("play");
play.addEventListener("click", () => {
    alert("Video will be added soon!");
});

// ----------------------------
//  Button Click Animations
// ----------------------------
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});

// ----------------------------
//  Scroll Reveal Animation
// ----------------------------
const revealElements = document.querySelectorAll(
    "#sec-2, #sec-3, #sec-4, #sec-5"
);

function revealOnScroll() {
    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 120) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Apply initial hidden style
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(70px)";
    el.style.transition = "all 1s ease";
});