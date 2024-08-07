async function getDefinition() {
    const word = document.getElementById('wordInput').value;
    const definitionDiv = document.getElementById('definition');

    if (word === '') {
        definitionDiv.innerHTML = 'Please enter a word.';
        return;
    }

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (response.ok) {
        const data = await response.json();
        const definitions = data[0].meanings[0].definitions;
        definitionDiv.innerHTML = definitions.map(def => `<p>${def.definition}</p>`).join('');
    } else {
        definitionDiv.innerHTML = 'Definition not found.';
    }
}
