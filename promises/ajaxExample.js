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

request('pikachu')
.then( function(response1) {
    console.log(response1.data)
    return request('snorlax');
})
.then( function(response2) {
    console.log(response2.data)
    return request('charmander');
})
.then( function(response3) {
    console.log(response3.data)
}, function rejected(err) {
    console.log(err)
})