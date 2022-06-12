function download() {
    window.open("./assets/doc/sakshi_jaiswal_resume.pdf");
}
let changing_text = document.querySelector(".changing-text")
let arr = ["I am a web developer", "I am a web designer", "I am a tester"]
let i = 0
setInterval(() => {
    changing_text.innerHTML = arr[i]
    changing_text.classList.add("changing-text-animation")
    i++
    if (i == arr.length) {
        i = 0
    }
}, 800);
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
document.querySelector(".navbar").style.backgroundColor = "#fff";
document.querySelector(".btn-nav-btn").style.backgroundColor = "#fff";
} else {
document.querySelector(".navbar").style.backgroundColor = "transparent";
document.querySelector(".btn-nav-btn").style.backgroundColor = "#F0F0F0";
}
}