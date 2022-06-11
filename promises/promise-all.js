  //requerimos nuestro modulo
  const axios = require('axios');

  //construimos nuestra peticion
  const myInit = {
    method: 'GET',
    headers: { 'Authorization': 'token' },
    mode: 'cors',
    cache: 'default'
  };

  let destination = 'https://pokeapi.co/api/v2/pokemon/';

  //obtenemos los resultados
//   axios.get(destination, myInit)
//     .then((result) => {
//       console.log(result.data)
//     })
//     .catch((error) => {
//       console.error(error)
//     })

function request(pokemon) {
    return new Promise( function(resolve, reject) {
        resolve(axios.get(destination + pokemon, myInit))
    });
}

let p1 = request('snorlax');
let p2 = request('pikachu');
let p3 = request('charmander');

Promise.all([p1,p2,p3])
.then( function(msgs){
    console.log(msgs[0].data.forms);
    console.log(msgs[1].data.forms);
    console.log(msgs[2].data.forms);
}, function rejected(err) {
    console.log(err);
}
) 

// Promise pattern latch, called race
// only the first across the finish line wins
Promise.race([p1,p2,p3])
.then( function(msg){
    console.log('WINNER: ', msg.data.forms);
}, function rejected(err) {
    console.log(err);
}
) 

// Time out pattern 
function timeOutPromise(time) {
    return new Promise( function(resolve, reject) {
        setTimeout(reject, time);
    });
}

Promise.race([p2, timeOutPromise(1000)])
.then( function(msg){
    console.log(msg.data.forms[0].name);
}, function rejected(err) {
    console.log('rejected');
}
);