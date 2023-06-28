

// async function GetFact() {
//     var response = await fetch('https://catfact.ninja/fact');

//     var data = await response.json();

//     return data.fact
// }

// async function SetFact() {
//     var fact = await GetFact();

//     document.querySelector('.message-of-the-day .text').innerText = fact
// }

// SetFact()

fetch('https://catfact.ninja/fact')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        document.querySelector('.message-of-the-day .text').innerText = data.fact
        console.log(data.fact);
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });