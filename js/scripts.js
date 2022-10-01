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