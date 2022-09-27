let pokemonList = [{name: "Bulbasaur", height: "1", types: ['grass', 'poison']}, 
                   {name: "Wartortle", height: "4", types: ['grass', 'poison']}, 
                   {name: "Charmeleon", height: "7", types: ['grass', 'poison']}
                ];

for ( let i = 0 ; i < pokemonList.length ; i++) {
   if (pokemonList[i].height > 4) {
      document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big! <br>`);
   } else {
      document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) <br>`);
   }
}