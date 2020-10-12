const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// output will be 'Miss Scarlet' as the const variable holds the .murderer as 'Miss Scarlet'

const murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// this should produce an error if we try to reassign the murderer variable

let murderer = 'Professor Plum';

const declareMurderer = function () {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//i think the first output will be Mrs Peacock because that has been assigned to murderer within the const function. the second verdict will be Prof Plum because the let variable was assigned outwith the function block.

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function () {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//I think when declaring all suspects they will be scarlet, plum and mustard as suspect 3 has been reassigned in the const function within that block, however when logging suspect 3 it will still be mrs peacock as this has not been reassigned within the function block

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function (newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function () {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// I think the weapon will now be revolver because we are still able to modify any arrarys or mutable objects that are declared with const in the change weapon function

let murderer = 'Colonel Mustard';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// mustard is outwith the block. the changemurderer function is called outwith the block so it doesn't reassign, yet the plottwist one is called within the block changing the murderer to mrs white.