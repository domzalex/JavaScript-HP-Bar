const damageButton = document.querySelector('.damageButton');
const hpBar = document.querySelector('.hpBar');

var health = 1; // I figured it may make more sense to have health simply be a percentage, rather than a whole number (to make multiple HP values easier to implement)


damageButton.addEventListener('click', damageCalc); 

function damageCalc() {
    let dmg = (Math.floor(Math.random() * 20) / 100); // Dmg calc can be whatever is necessary; can be based off a stat multiplier etc.
    health = health - dmg;
    hpBar.style.height = 'calc(600px * ' + health + ')'; // Sets the height of the DIV to be a percentage of the full height based off of what 'health' is at.
    hpBar.style.transform = 'translateY(calc(600px * ' + (1 - health) + '))'; // Keeps the DIV at the 'bottom' of the outline; otherwise the HP bar depletes upwards. No good!

    // Once 'health' is <= 0, you can 'exit' a battle scene or do whatever, but I've not done anything for this example.
}