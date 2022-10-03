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

   function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event) {
			showDetails(pokemon);
		})
   }

   function showDetails(pokemon){
    console.log(pokemon);
   }
 
   return {
     add: add,
     getAll: getAll,
     addListItem: addListItem,
     showDetails: showDetails
   };
})();

pokemonRepository.add({name:'Beedrill', height: 5, types:['grass', 'poison']});

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
})