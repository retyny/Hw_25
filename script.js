function sendRequestSymbols() {
    const base_url_symbols = 'http://data.fixer.io/api/symbols?';
    const api_key = '9e85e542661757c7f24863714f122e24';
    return fetch(`${base_url_symbols}access_key=${api_key}`).then(response => {
        return response.json();
    });
}

function sendRequestConvert() {

    const fromKey = document.getElementById('from').value;
    const toKey = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    const myHeaders = new Headers();
    myHeaders.append("apikey", "Ddkh5XlvJKajaEh4V9NjW4oHD62J3kSh");
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    fetch(`https://api.apilayer.com/fixer/convert?to=${toKey}&from=${fromKey}&amount=${amount}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            const selectListFrom = document.getElementById('content');
            const currency = document.createElement('h4');
            currency.innerText = `From one currency:${result.query.from}
            To another currency: ${result.query.to} 
            =====${result.result}===== `;
            selectListFrom.appendChild(currency);
        })
        .catch(error => console.log('error', error));
}

sendRequestSymbols()
    .then(data => {
        for (let key in data.symbols) {
            if(data.symbols.hasOwnProperty(key)) {
                const selectListFrom = document.getElementById('from');
                const newOptionFrom = document.createElement('option');
                newOptionFrom.value = `${key}`;
                newOptionFrom.innerText = data.symbols[key];
                selectListFrom.appendChild(newOptionFrom);

                const selectListTo = document.getElementById('to');
                const newOptionTo = document.createElement('option');
                newOptionTo.value = `${key}`;
                newOptionTo.innerText = data.symbols[key];
                selectListTo.appendChild(newOptionTo);
            }
        }

    }).catch(err =>console.log(err));


function sendRequestCurrencyConverter() {
    sendRequestConvert();
}









