document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('powerChart').getContext('2d');
    const powerChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Power Consumption (kWh)',
                data: [65, 59, 80, 81, 56, 55, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
