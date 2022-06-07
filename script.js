// service maintenance

let trafigeCikis = new Date('04/20/2014');

trafigeCikis.setHours(0, 0, 0, 0);

let trafiktekiMs = Date.now() - trafigeCikis.getTime();

let trafiktekiGun = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24));


if (trafiktekiGun <= 365) {
    console.log('1.servis bakım süreniz geldi.');
} else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2) {
    console.log('2.servis bakım süreniz geldi.');
} else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3) {
    console.log('3.servis bakım süreniz geldi.');
} else {
    console.log('bilinmeyen bir süre');
}

console.log(trafiktekiGun);


let result = prompt("Who is there?");

if (result == 'Cansel') {
    console.log('Canseled');
} else if (result == 'Other') {
    console.log('I don\'t know you!');
} else if (result == 'Admin') {
    let password = prompt('enter your password');

    if (password == 'Cansel') {
        console.log('Canselled');
    } else if (password == 'Other') {
        console.log('Wrong Password');
    } else if (password == 'TheMaster') {
        console.log('Welcome!');
    } else {
        console.log
    }
} else {
    console.log('I don\'t know you!');
}