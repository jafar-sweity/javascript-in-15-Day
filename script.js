fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch character data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data.results;
  })
  .then((characters) => {
    const characterList = document.getElementById("characterList");
    characters.forEach((character) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class="character-details">
          <h2>${character.name}</h2>
          <p><strong>Location:</strong> ${character.location.name}</p>
          <p><strong>Species:</strong> ${character.species}</p>
          <p><strong>Gender:</strong> ${character.gender}</p>
        </div>
      `;
      characterList.appendChild(li);
    });
  })
  .catch((error) => displayError(error.message));
function displayError(errorMessage) {
  const characterList = document.getElementById("characterList");
  const errorLi = document.createElement("li");
  errorLi.innerText = `Error: ${errorMessage}`;
  errorLi.classList.add("error");
  characterList.appendChild(errorLi);
}
