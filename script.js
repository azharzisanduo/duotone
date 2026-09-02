// for nav responsive dropdown 

const menuBtn = document.querySelector('.drop-menu');
const dropdown2 = document.querySelector('.rd2');

menuBtn.addEventListener('click', () => {

    if (dropdown2.style.display === 'block') {
        dropdown2.style.display = 'none';
    } 
    
    else {
        dropdown2.style.display = 'block';
    }
});

//menu button 

let openMenu = document.querySelector('.drop-menu ion-icon:first-child');   
let closeMenu = document.querySelector('.drop-menu ion-icon:last-child'); 

function menuOpen() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
}

function menuClose() {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}

//about us number counter

//1st counter
const target1 = 500;
let current1 = 250;

//2nd counter
const target2 = 15000;
let current2 = 14600;

//3rd counter
const target3 = 50;
let current3 = 0;

//speed of counters
const speed1 = -1000;
const speed2 = -1500;
const speed3 = 20;

const counterElement1 = document.getElementById("counter1");
const counterElement2 = document.getElementById("counter2");
const counterElement3 = document.getElementById("counter3");

const interval1 = setInterval(() => {
    if (current1 < target1) {
        current1++;
        counterElement1.textContent = current1 + "+";
    } else {
        clearInterval(interval1);
    }
}, speed1);

const interval2 = setInterval(() => {
    if (current2 < target2) {
        current2++;
        counterElement2.textContent = current2 + "+";
    }

    else {
        clearInterval(interval2);
    }
}, speed2);

const interval3 = setInterval(() => {
    if (current3 < target3) {
        current3++;
        counterElement3.textContent = current3 + "+";
    }

    else {
        clearInterval(interval3);
    }
}, speed3);

// for nav-tems dropdown (first 2)

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-items ul li');
    const dropdowns = [
        document.querySelector('.dr-dw1'),
        document.querySelector('.dr-dw2')
    ];

    function closeAll() {
        dropdowns.forEach(function (d) {
            if (d) {
                d.classList.remove('visible');
            }
        });
    }

    navItems.forEach(function (li, index) {
        
        const dropdown = dropdowns[index];

        li.addEventListener('mouseenter', function () {
            closeAll();
            dropdown.classList.add('visible');
        });

        li.addEventListener('mouseleave', function () {
            dropdown.classList.remove('visible');
        });
    });
});