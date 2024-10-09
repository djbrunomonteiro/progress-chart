// Dados do gráfico de armazenamento
const totalStorage = 5; // Total em GB
const usedStorage = 53;   // Usado em GB
const categories = [
    { label: 'Vídeos', size: 1000, color: 'rgba(255, 99, 132, 0.8)' },
    { label: 'Áudios', size: 500, color: 'rgba(54, 162, 235, 0.8)' },
    { label: 'Imagens', size: 700, color: 'rgba(255, 206, 86, 0.8)' },
    { label: 'Documentos', size: 2000, color: 'rgba(75, 192, 192, 0.8)' }
];

// Convertendo MB para GB (para uso gráfico)
function mbToGb(mb) {
    return mb / 1024;
}

// Extrair os valores de tamanho em GB
const dataSizes = categories.map(category => mbToGb(category.size));

// Configurações do gráfico usando Chart.js
const ctx = document.getElementById('storageChart').getContext('2d');
const storageChart = new Chart(ctx, {
    type: 'bar', // Usando 'bar' para gráfico de barras
    data: {
        labels: ['Uso de Armazenamento'], // Usar apenas um rótulo para a barra
        datasets: categories.map((category, index) => ({
            label: category.label,
            data: [dataSizes[index]], // Cada valor será um array de um elemento
            backgroundColor: category.color,
            borderColor: category.color.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'Stack 0', // Para empilhar as barras
        }))
    },
    options: {
        indexAxis: 'y', // Altera o eixo para exibir barras horizontais
        scales: {
            x: {
                beginAtZero: true,
                max: totalStorage, // Armazenamento total (128GB)
                stacked: true // Habilitar empilhamento
            },
            y: {
                stacked: true // Habilitar empilhamento
            }
        },
        title: {
            display: true,
            text: `Armazenamento Total: ${totalStorage} GB, Usado: ${usedStorage} GB`,
            color: 'white',
            fontSize: 16
        },
        plugins: {
            legend: {
                display: true // Mostrar legenda para identificar cada parte
            }
        }
    }
});
