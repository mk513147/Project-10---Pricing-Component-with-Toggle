let plan = document.getElementById('input');
let p1 = document.querySelector('.price1');
let p2 = document.querySelector('.price2');
let p3 = document.querySelector('.price3');

plan.addEventListener('click', () =>{
    if(p1.innerHTML === "19.99" && p2.innerHTML === "24.99" && p3.innerHTML === "39.99") {
        p1.innerHTML = "199.99";
        p2.innerHTML = "249.99";
        p3.innerHTML = "399.99";
    } 
    else {
        p1.innerHTML = "19.99"
        p2.innerHTML = "24.99"
        p3.innerHTML = "39.99"
    }
})

