const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen=false;
    }
})








// function my4(id) {
//     switch (id) {
//         case 1:
//             document.querySelector("#x").innerHTML = `
//                    <button onclick="du()">A</button>
//                    <button onclick="du()">B</button>
//                    <button onclick="du()">V</button>
//                    <button onclick="du()">E</button>
//                    <button onclick="du()">G</button>`;
//             break;
//         default:
//             document.querySelector("#x").innerHTML = "Bunday sinf yoq";
//             break;
//     }
// }
//
// function a9() {
//     var a = 1;
//     my4(a);
// }