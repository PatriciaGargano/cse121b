document.addEventListener('DOMContentLoaded', () => {
    const cryptoListElement = document.getElementById('cryptoList');

    // Función para obtener la cotización de criptomonedas
    const getCryptoPrices = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd');
            const data = await response.json();

            // Mostrar la cotización de cada criptomoneda
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
        } catch (error) {
            console.error('Error al obtener la cotización de criptomonedas:', error);
        }
    };

    // Obtener y mostrar la cotización de criptomonedas al cargar la página
    getCryptoPrices();

    // Actualizar la cotización cada 30 segundos
    setInterval(getCryptoPrices, 30000);
});
