
function my4(id) {
    switch (id) {
        case 1:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 2:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 3:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 4:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 5:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 6:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 7:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 8:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        case 9:
            document.querySelector("#x").innerHTML =
                `
                   <button onclick="du()">A</button>
                   <button onclick="du()">B</button>
                   <button onclick="du()">V</button>
                   <button onclick="du()">E</button>
                   <button onclick="du()">G</button>
                `;
            break;
        default:
            document.querySelector("#x").innerHTML = "Bunday sinf yoq";
            break;
    }
}

function sinf1() {
    let a = 1;
    my4(a);
}
function sinf2() {
    let a = 1;
    my4(a);
}
function sinf3() {
    let a = 1;
    my4(a);
}
function sinf4() {
    let a = 1;
    my4(a);
}
function sinf5() {
    let a = 1;
    my4(a);
}
function sinf6() {
    let a = 1;
    my4(a);
}
function sinf7() {
    let a = 1;
    my4(a);
}
function sinf8() {
    let a = 1;
    my4(a);
}
function sinf9() {
    let a = 1;
    my4(a);
}









// burger menu


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
        document.querySelector(".header__links").style.marginTop="0";
        document.querySelector(".header__links").style.top="0";
        document.querySelector(".header__links").style.transition="all 0.3s linear";
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen=false;
        document.querySelector(".header__links").style.marginTop="-300%";
    }
});




var header = document.querySelector(".buttons");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}




