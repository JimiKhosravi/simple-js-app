let pokemonList = [{name: "Bulbasaur", height: "1", types: ['grass', 'poison']}, 
                   {name: "Wartortle", height: "4", types: ['grass', 'poison']}, 
                   {name: "Charmeleon", height: "7", types: ['grass', 'poison']}
                ];

// for ( let i = 0 ; i < pokemonList.length ; i++) {
//    if (pokemonList[i].height > 4) {
//       document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big! <br>`);
//    } else {
//       document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`);
//    }
// }

pokemonList.forEach(function(pokemon) {
   document.write(pokemon.name + ' ' + pokemon.height + ' ' + pokemon.types + '<br>');
});

let pokemonRepository = (function () {
   let pokemonList = [{name: "Bulbasaur", height: "1", types: ['grass', 'poison']}, 
                      {name: "Wartortle", height: "4", types: ['grass', 'poison']}, 
                      {name: "Charmeleon", height: "7", types: ['grass', 'poison']}
                     ];
 
   function add(pokemon) {
     if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
     }
   }
 
   function getAll() {
     return pokemonList;
   }
 
   return {
     add: add,
     getAll: getAll
   };
})();

pokemonRepository.add({name:'Beedrill', height: 5, types:['grass', 'poison']});

pokemonRepository.getAll().forEach(function(pokemon){
   document.write(pokemon.name + ' ' + pokemon.height + ' ' + pokemon.types + "<br>")
})