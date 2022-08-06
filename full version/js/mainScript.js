
function my4(id) {
    switch (id) {
        case 1:
            document.querySelector(".buttons2").innerHTML =
                `
                   <button class="btn2 " onclick="du()">A1</button>
                   <button class="btn2 " onclick="du()">B</button>
                   <button class="btn2 " onclick="du()">V</button>
                   <button class="btn2 " onclick="du()">E</button>
                   <button class="btn2 " onclick="du()">G</button>
                `;
            break;
        case 2:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2 " onclick="du()">A2</button>
                   <button class="btn2 " onclick="du()">B</button>
                   <button class="btn2 " onclick="du()">V</button>
                   <button class="btn2 " onclick="du()">E</button>
                   <button class="btn2 " onclick="du()">G</button>
                `;
            break;
        case 3:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A3</button>
                   <button class="btn2" onclick="du()">B</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        case 4:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A4</button>
                   <button class="btn2" onclick="du()">B</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        case 5:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A5</button>
                   <button class="btn2" onclick="du()">B</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        case 6:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A6</button>
                   <button class="btn2" onclick="du()">B</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        case 7:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A7</button>
                   <button class="btn2" onclick="du()">B</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        case 8:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A8</button>
                   <button class="btn2" onclick="du()">B</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        case 9:
            document.querySelector("#x").innerHTML =
                `
                   <button class="btn2" onclick="du()">A9</button>
                   <button class="btn2" onclick="du()">B9</button>
                   <button class="btn2" onclick="du()">V</button>
                   <button class="btn2" onclick="du()">E</button>
                   <button class="btn2" onclick="du()">G</button>
                `;
            break;
        default:
            document.querySelector("#x").innerHTML = "Bunday sinf yoq";
            break;
    }
}


function HoverNav(){
    document.querySelector(".header__links").style="margin-top: 0"
}
function HoverNav2(){
    document.querySelector(".header__links").style="margin-top: -4.5%"
}

function du() {
    document.querySelector("#table").innerHTML= `
    <div class="card1">
       <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    <div class="card1">
        <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    <div class="card1">
      <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    <div class="card1">
      <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    <div class="card1">
        <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    <div class="card1">
       <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    <div class="card1">
      <h3>Понедельник</h3>
        <p>1. Matematika</p>
        <hr>
        <p>2. Matematika</p>
        <hr>
        <p>3. Matematika</p>
        <hr>
        <p>4. Matematika</p>
        <hr>
        <p>5. Matematika</p>
        <hr>
        <p>6. Matematika</p>
        <hr>
        <p>7. Algebra</p>
        <hr>
    </div>
    `
}

function sinf1() {
    let a = 1;
    my4(a);
}
function sinf2() {
    let a = 2;
    my4(a);
}
function sinf3() {
    let a = 3;
    my4(a);
}
function sinf4() {
    let a = 4;
    my4(a);
}
function sinf5() {
    let a = 5;
    my4(a);
}
function sinf6() {
    let a = 6;
    my4(a);
}
function sinf7() {
    let a = 7;
    my4(a);
}
function sinf8() {
    let a = 8;
    my4(a);
}
function sinf9() {
    let a = 9;
    my4(a);
}


function raspisaniya() {
    document.querySelector(".btn-raspisaniya32").innerHTML=``;
    document.querySelector(".btn-raspisaniya32").innerHTML=`
    <button class="btn-raspisaniya3"> Расписание звонков</button> `;

    document.querySelector(".img__raspi").innerHTML=`
    <div class="card2 raspi-table">
        <h3>1-смена</h3>
        <div><p>1.</p><p>8.00 - 8.45</p></div>
        <hr>
        <div><p>2.</p><p>8.55 - 9.35</p></div>
        <hr>
        <div><p>3.</p><p>9.40 - 10.25</p></div>
        <hr>
        <div><p>4.</p><p>10.30 - 11.15</p></div>
        <hr>
        <div><p>5.</p><p>11.25 - 12.10</p></div>
        <hr>
        <div><p>6.</p><p>12.15 - 12.20</p></div>
        <hr>
        <div><p>7.</p><p>13.05 - 13.50</p></div>
        <hr>
    </div>
     <div class="card2 raspi-table">
      <h3>2-смена</h3>
         <div><p>1.</p><p>13.05 - 13.50</p></div>
        <hr>
        <div><p>2.</p><p>13.55 - 14.40</p></div>
        <hr>
        <div><p>3.</p><p>14.45 - 15.30</p></div>
        <hr>
        <div><p>4.</p><p>15.35 - 16.20</p></div>
        <hr>
        <div><p>5.</p><p>16.30 - 17.15</p></div>
        <hr>
        <div><p>6.</p><p>17.20 - 18.05</p></div>
        <hr>
        <div><p>7.</p><p>18.10 - 18.55</p></div>
        <hr>
      
    </div>
    `;
}





function raspisaniya2() {
    document.querySelector(".img__raspi").innerHTML=` `
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









// change image
function hoverImg (x) {
    document.querySelector(".card").innerHTML=`<img src="imgs/computerhover.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function normalImg (x) {
    document.querySelector(".card").innerHTML=`<img src="imgs/computer.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function hoverImg2 (x) {
    document.querySelector(".card11").innerHTML=`<img src="imgs/computerhover.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillangfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiraseng. </p>
    `
}
function normalImg2 (x) {
    document.querySelector(".card11").innerHTML=`<img src="imgs/computer.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillangfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function hoverImg3 (x) {
    document.querySelector(".card2").innerHTML=`<img src="imgs/computerhover.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function normalImg3 (x) {
    document.querySelector(".card2").innerHTML=`<img src="imgs/computer.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function hoverImg4 (x) {
    document.querySelector(".card3").innerHTML=`<img src="imgs/computerhover.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function normalImg4 (x) {
    document.querySelector(".card3").innerHTML=`<img src="imgs/computer.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function hoverImg5 (x) {
    document.querySelector(".card4").innerHTML=`<img src="imgs/computerhover.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function normalImg5 (x) {
    document.querySelector(".card4").innerHTML=`<img src="imgs/computer.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function hoverImg6 (x) {
    document.querySelector(".card5").innerHTML=`<img src="imgs/computerhover.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}
function normalImg6 (x) {
    document.querySelector(".card5").innerHTML=`<img src="imgs/computer.png" alt="">
    <h3>Тема веб-программирования:</h3>
                        <p>Lörem ipsum sor devasm vurade. Fonotiv tenera mobillångfilm i tiråligt krortad. Pasat osa
                            olyna odelogi tiråseng. </p>
    `
}















// function sinf1A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf1B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf1V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf1E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf1G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
// function sinf2A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf2B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf2V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf2E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf2G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
//
// function sinf3A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf3B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf3V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf3E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf3G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
//
//
// function sinf4A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf4B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf4V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf4E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf4G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
//
// function sinf5A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf5B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf5V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf5E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf5G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
//
// function sinf6A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf6B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf6V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf6E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf6G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
//
//
// function sinf7A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf7B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf7V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf7E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf7G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
//
// function sinf8A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf8B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf8V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf8E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf8G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
//
// function sinf9A() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf9B() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf9V() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf9E() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }
// function sinf9G() {
//     document.querySelector("#table").innerHTML= `
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     <div class="card1">
//         <h3>Понедельник</h3>
//         <p>Lorem ipsum.1</p>
//         <hr>
//         <p>Lorem ipsum.2</p>
//         <hr>
//         <p>Lorem ipsum.3</p>
//         <hr>
//         <p>Lorem ipsum.4</p>
//         <hr>
//         <p>Lorem ipsum.5</p>
//         <hr>
//         <p>Lorem ipsum.6</p>
//         <hr>
//         <p>Lorem ipsum.7</p>
//         <hr>
//     </div>
//     `
// }