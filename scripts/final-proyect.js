document.addEventListener('DOMContentLoaded', () => {
    const cryptoListElement = document.getElementById('cryptoList');
    const showPricesButton = document.getElementById('showPricesButton');

    // Function to fetch cryptocurrency prices
    const getCryptoPrices = async () => {
        try {
            // Fetch cryptocurrency prices from Coingecko API
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
            const data = await response.json();

            // Clear the list before adding new prices
            cryptoListElement.innerHTML = '';

            // Display price for each cryptocurrency
            for (const crypto in data) {
                const cryptoData = data[crypto];
                const cryptoItem = document.createElement('div');
                cryptoItem.classList.add('crypto-item');
                cryptoItem.innerHTML = `
                    <div class="crypto-name">${crypto.charAt(0).toUpperCase() + crypto.slice(1)}</div>
                    <div class="crypto-price">$${cryptoData.usd}</div>
                `;
                cryptoListElement.appendChild(cryptoItem);
            }

            // Display the container after fetching data
            cryptoListElement.style.display = 'block';
        } catch (error) {
            console.error('Error fetching cryptocurrency prices:', error);
        }
    };

    // Event listener for the button
    showPricesButton.addEventListener('click', getCryptoPrices);
});

