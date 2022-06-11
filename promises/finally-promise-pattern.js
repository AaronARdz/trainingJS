const axios = require('axios');

//construimos nuestra peticion
const myInit = {
  method: 'GET',
  headers: { 'Authorization': 'token' },
  mode: 'cors',
  cache: 'default'
};

let destination = 'https://pokeapi.co/api/v2/pokemon/';

function request(pokemon) {
  return new Promise( function(resolve, reject) {
      resolve(axios.get(destination + pokemon, myInit))
  });
}

// Time out pattern 
function timeOutPromise(time) {
    return new Promise( function(resolve, reject) {
        setTimeout(reject, time);
    });
}

let p1 = request('snorlax');
let p2 = request('pikachu');
let p3 = request('charmander');

if (!Promise.observe) {
    Promise.observe = function(pr, cb) {
        // side obser pr's resolution
        pr.then(
            function fulfilled(msg) {
                // schedule callback async (as job)
                Promise.resolve(msg).then(cb);
            },
            function rejected(err) {
                // schedule callback async (as job)
                Promise.resolve(err),then(cb);
            }
        );
        // return original promise
        return pr
    }
}

Promise.race([
    Promise.observe(
        p1,
        p2,
        p3,
        function cleanup(msg) {
            console.log('clean', msg)
        }
    ),
    timeOutPromise(300)
])
.then( function(msg){
    console.log(msg.data.forms[0].name);
}, function rejected(err) {
    console.log('rejected');
}
);
