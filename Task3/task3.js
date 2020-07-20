/*const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
});*/

const p3 = fetch('https://api.punkapi.com/v2/beers').then(res => res.json())
const p4 = fetch('https://api.github.com/').then(res => res.json())

Promise.all([p3, p4])
    .then(() => {
        console.log('оба ответа получены');
    });