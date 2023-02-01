//const fromCurrency = $('#from').val();
//const toCurrency = $('#to').val();
//const amount = $('#amount').val();
function sendRequest() {
    const base_url = 'http://data.fixer.io/api/latest?';
    const api_key = '9e85e542661757c7f24863714f122e24';
    return fetch(`${base_url}access_key=${api_key}`).then(response => {
        return response.json();
    });
}

sendRequest()
    .then(data => {

        console.log(data)

    }).catch(err =>console.log(err));




