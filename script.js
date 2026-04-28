function animateValue(id, start, end, speed){
let obj = document.getElementById(id);
let current = start;

let timer = setInterval(function(){

current += 1;
obj.textContent = current + "+";

if(current >= end){
clearInterval(timer);
}

}, speed);
}

window.onload = function(){
animateValue("students",0,5000,1);
animateValue("payments",0,12000,1);
animateValue("support",0,24,70);
};
// Modern JS for index.html

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Smooth Fade In Animation
    =============================== */
    const revealItems = document.querySelectorAll(
        ".hero-left, .hero-right, .box, .card, .feature-card"
    );

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, {threshold:0.2});

    revealItems.forEach(item=>{
        item.classList.add("hidden");
        observer.observe(item);
    });


    /* ===============================
       Animated Counter Stats
    =============================== */
    function counter(el, target, speed){
        let count = 0;

        const update = () => {
            count += Math.ceil(target / speed);

            if(count >= target){
                el.innerText = target + "+";
            }else{
                el.innerText = count + "+";
                requestAnimationFrame(update);
            }
        };

        update();
    }

    const statBoxes = document.querySelectorAll(".box h3");

    if(statBoxes.length >= 3){
        counter(statBoxes[0], 5000, 120);
        counter(statBoxes[1], 98, 60);
        counter(statBoxes[2], 24, 40);
    }


    /* ===============================
       Floating Receipt Glow Effect
    =============================== */
    const receipt = document.querySelector(".receipt-card");

    if(receipt){
        setInterval(()=>{
            receipt.style.boxShadow =
            "0 20px 45px rgba(13,110,253,0.25)";

            setTimeout(()=>{
                receipt.style.boxShadow =
                "0 20px 40px rgba(13,110,253,0.12)";
            },800);

        },2000);
    }


    /* ===============================
       Typewriter Hero Title
    =============================== */
    const heroTitle = document.querySelector(".hero-left h1");

    if(heroTitle){
        const text = heroTitle.innerText;
        heroTitle.innerText = "";

        let i = 0;

        function typing(){
            if(i < text.length){
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 45);
            }
        }

        typing();
    }


    /* ===============================
       Navbar Active Click Effect
    =============================== */
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link=>{
        link.addEventListener("click", ()=>{
            navLinks.forEach(a=>a.classList.remove("active"));
            link.classList.add("active");
        });
    });


    /* ===============================
       Scroll To Top Button Auto Create
    =============================== */
    const topBtn = document.createElement("button");
    topBtn.innerHTML = "↑";
    topBtn.className = "topBtn";
    document.body.appendChild(topBtn);

    topBtn.onclick = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 300){
            topBtn.style.opacity = "1";
            topBtn.style.pointerEvents = "auto";
        }else{
            topBtn.style.opacity = "0";
            topBtn.style.pointerEvents = "none";
        }
    });

});
const createBtn = document.getElementById("createAccountBtn");

if(createBtn){

createBtn.addEventListener("mouseenter", ()=>{
    createBtn.innerHTML = "<span>Join Now 🚀</span>";
});

createBtn.addEventListener("mouseleave", ()=>{
    createBtn.innerHTML = "<span>Create Account</span>";
});

createBtn.addEventListener("click", ()=>{

    createBtn.innerHTML = "<span>Loading...</span>";

    setTimeout(()=>{
        window.location.href = "register.html";
    },800);

});

}
/* FOOTER JS */

const year = new Date().getFullYear();

document.getElementById("copyright").innerHTML =
`© ${year} Ave Maria University, Piyanko, Nasarawa State. All rights reserved.`;


/* smooth footer link effect */
const footerLinks = document.querySelectorAll(".footer-links a");

footerLinks.forEach(link=>{
link.addEventListener("mouseenter", ()=>{
link.style.transform = "translateY(-2px)";
});

link.addEventListener("mouseleave", ()=>{
link.style.transform = "translateY(0)";
});
});
/* CONTACT PAGE JS */

document.addEventListener("DOMContentLoaded", ()=>{

/* reveal animation */
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

items.forEach(item=>observer.observe(item));

/* form submit */
const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let subject = document.getElementById("subject").value.trim();
let message = document.getElementById("message").value.trim();

if(name==="" || email==="" || subject==="" || message===""){
alert("Please fill all fields.");
return;
}

const btn = form.querySelector("button");
btn.innerHTML = "Sending...";
btn.style.opacity = ".8";

setTimeout(()=>{
btn.innerHTML = "Message Sent ✓";
btn.style.background = "#198754";
form.reset();

setTimeout(()=>{
btn.innerHTML = "Send Message";
btn.style.background = "";
btn.style.opacity = "1";
},2500);

},1500);

});

});
/* DARK LIGHT MODE */

const toggleBtn = document.getElementById("themeToggle");

/* Load saved mode */
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
toggleBtn.innerHTML = "☀";
}

toggleBtn.addEventListener("click", ()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggleBtn.innerHTML = "☀";
localStorage.setItem("theme","dark");
}else{
toggleBtn.innerHTML = "☾";
localStorage.setItem("theme","light");
}

});
document.addEventListener("DOMContentLoaded",()=>{

/* password toggle */
const pass = document.getElementById("password");
const eye = document.getElementById("togglePassword");

eye.addEventListener("click",()=>{

if(pass.type === "password"){
pass.type = "text";
eye.innerHTML = "🙈";
}else{
pass.type = "password";
eye.innerHTML = "👁";
}

});

/* login submit */
const form = document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{
e.preventDefault();

const email = document.getElementById("email").value.trim();
const password = pass.value.trim();

if(email === "" || password === ""){
alert("Please fill all fields");
return;
}

const btn = document.querySelector(".login-btn");
btn.innerHTML = "Signing In...";
btn.style.opacity = ".8";

setTimeout(()=>{
btn.innerHTML = "Login Successful ✓";
btn.style.background = "#198754";

setTimeout(()=>{
window.location.href = "index.html";
},1200);

},1600);

});

/* dark mode */
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
toggle.innerHTML="☀";
}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggle.innerHTML="☀";
localStorage.setItem("theme","dark");
}else{
toggle.innerHTML="☾";
localStorage.setItem("theme","light");
}

});

});
document.addEventListener("DOMContentLoaded",()=>{

/* totals */
document.getElementById("totalPaid").innerText = "₦385,000";
document.getElementById("completedCount").innerText = "2";
document.getElementById("pendingCount").innerText = "1";
document.getElementById("yearCount").innerText = "4";

/* search */
const search = document.getElementById("searchInput");
const filter = document.getElementById("statusFilter");
const rows = document.querySelectorAll("#historyTable tr");

function applyFilter(){

const keyword = search.value.toLowerCase();
const status = filter.value;

rows.forEach(row=>{

const text = row.innerText.toLowerCase();
const rowStatus = row.dataset.status;

const matchText = text.includes(keyword);
const matchStatus = status === "all" || rowStatus === status;

row.style.display = (matchText && matchStatus) ? "" : "none";

});

}

search.addEventListener("keyup", applyFilter);
filter.addEventListener("change", applyFilter);

/* dark mode */
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
toggle.innerHTML = "☀";
}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggle.innerHTML = "☀";
localStorage.setItem("theme","dark");
}else{
toggle.innerHTML = "☾";
localStorage.setItem("theme","light");
}

});

});
document.addEventListener("DOMContentLoaded",()=>{

/* show password */
const pass = document.getElementById("password");
const eye = document.getElementById("togglePassword");

eye.addEventListener("click",()=>{

if(pass.type==="password"){
pass.type="text";
eye.innerHTML="🙈";
}else{
pass.type="password";
eye.innerHTML="👁";
}

});

/* form login */
const form = document.getElementById("historyLoginForm");

form.addEventListener("submit",(e)=>{
e.preventDefault();

const email = document.getElementById("email").value.trim();
const matric = document.getElementById("matric").value.trim();
const password = pass.value.trim();

if(email==="" || matric==="" || password===""){
alert("Please fill all fields.");
return;
}

const btn = document.querySelector(".login-btn");
btn.innerHTML = "Verifying...";
btn.style.opacity = ".8";

setTimeout(()=>{
btn.innerHTML = "Access Granted ✓";
btn.style.background = "#198754";

setTimeout(()=>{
window.location.href = "history.html";
},1200);

},1600);

});

/* theme mode */
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
toggle.innerHTML="☀";
}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggle.innerHTML="☀";
localStorage.setItem("theme","dark");
}else{
toggle.innerHTML="☾";
localStorage.setItem("theme","light");
}

});

});
/* auto collapse scroll fix */
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",()=>{
document.body.style.overflow = "auto";
});
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

toggle.innerHTML =
document.body.classList.contains("dark") ? "☀" : "☾";

});

/* simple validation */
document.getElementById("payForm").addEventListener("submit",(e)=>{
e.preventDefault();

alert("Payment initialized successfully. Proceed to bank gateway...");
});
function goBack(){
window.history.back();
}
document.addEventListener("DOMContentLoaded",()=>{

/* reveal animation */
const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.15});

cards.forEach(card=>observer.observe(card));

/* counter */
function animate(id,end,suffix=""){
let el = document.getElementById(id);
let count = 0;

let timer = setInterval(()=>{

count += Math.ceil(end/80);

if(count >= end){
count = end;
clearInterval(timer);
}

el.innerHTML = count + suffix;

},25);
}

animate("count1",5000,"+");
animate("count2",12000,"+");
animate("count3",99,"%");

/* dark mode */
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
toggle.innerHTML="☀";
}

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerHTML="☀";
localStorage.setItem("theme","dark");
}else{
toggle.innerHTML="☾";
localStorage.setItem("theme","light");
}

});

});
/* CONTACT FORM */
document.addEventListener("DOMContentLoaded",()=>{

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{
e.preventDefault();

const btn = form.querySelector("button");

btn.innerHTML = "Sending...";
btn.style.opacity = ".8";

setTimeout(()=>{
btn.innerHTML = "Message Sent ✓";
btn.style.background = "#198754";

setTimeout(()=>{
form.reset();
btn.innerHTML = "Send Message";
btn.style.background = "";
btn.style.opacity = "1";
},2200);

},1500);

});

}

/* Mouse floating effect */
document.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".float").forEach((shape,index)=>{

const speed = (index + 1) * 0.01;

shape.style.transform =
`translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;

});

});

});
document.addEventListener("DOMContentLoaded",()=>{

const toggle = document.getElementById("themeToggle");

/* Load saved theme */
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
if(toggle) toggle.innerHTML = "☀";
}else{
if(toggle) toggle.innerHTML = "☾";
}

/* Toggle theme */
if(toggle){
toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
toggle.innerHTML = "☀";
}else{
localStorage.setItem("theme","light");
toggle.innerHTML = "☾";
}

});
}

});
document.addEventListener("DOMContentLoaded",()=>{

/* show password */
const pass = document.getElementById("password");
const eye = document.getElementById("togglePass");

eye.addEventListener("click",()=>{

if(pass.type==="password"){
pass.type="text";
eye.innerHTML="🙈";
}else{
pass.type="password";
eye.innerHTML="👁";
}

});

/* form submit */
const form = document.getElementById("registerForm");

form.addEventListener("submit",(e)=>{
e.preventDefault();

const btn = document.querySelector(".btn-register");

btn.innerHTML = "Creating Account...";
btn.style.opacity = ".85";

setTimeout(()=>{
btn.innerHTML = "Account Created ✓";
btn.style.background = "#198754";

setTimeout(()=>{
window.location.href = "login.html";
},1500);

},1800);

});

/* mouse parallax blobs */
document.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".blob").forEach((blob,index)=>{

const speed = (index+1)*0.006;

blob.style.transform =
`translate(${e.clientX*speed}px,${e.clientY*speed}px)`;

});

});

});
document.addEventListener("DOMContentLoaded",()=>{

/* search filter */
const input = document.getElementById("searchInput");
const rows = document.querySelectorAll("#historyTable tr");

input.addEventListener("keyup",()=>{

const value = input.value.toLowerCase();

rows.forEach(row=>{

row.style.display =
row.innerText.toLowerCase().includes(value)
? ""
: "none";

});

});

/* row hover animate */
rows.forEach(row=>{

row.addEventListener("mouseenter",()=>{
row.style.transform="scale(1.01)";
row.style.transition=".25s";
});

row.addEventListener("mouseleave",()=>{
row.style.transform="scale(1)";
});

});

});
document.addEventListener("DOMContentLoaded",()=>{

const back = document.querySelector(".float-back");

back.addEventListener("click",()=>{

back.style.transform = "scale(0.95) translateX(5px)";

setTimeout(()=>{
back.style.transform = "scale(1)";
},150);

});

});






