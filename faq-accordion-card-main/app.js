const ans = document.querySelectorAll(".ans");
const questab = document.querySelectorAll(".ques-tab");
const que = document.querySelectorAll(".que");

console.log(questab)
// Object.values(ans).map((a) => {
//     a.style.display = "none";
// })

for(let index=0; index < questab.length; index++) {
    questab[index].addEventListener("click", () => {
        que[index].classList.toggle("quesWhenSelected");
        ans[index].classList.toggle("showQuestion");
    });
}