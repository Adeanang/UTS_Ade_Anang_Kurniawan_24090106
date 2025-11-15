document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            if (confirm('Apakah Anda yakin ingin Logout?')) {
                console.log('User log out');
            } else {
                event.preventDefault(); 
            }
        });
    }


    //2. LOGIKA GRAFIK
    const ctx = document.getElementById('salesChart');

    if (ctx) {
        new Chart(ctx, {
            type: 'bar', // Jenis grafik: Bar
            data: {
                labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'], // Hari/Periode
                datasets: [{
                    label: 'Total Penjualan (Unit)',
                    data: [12, 19, 3, 5, 2, 3, 7], 
                    backgroundColor: [
                        'rgba(93, 64, 55, 0.7)',
                        'rgba(121, 85, 72, 0.7)',
                        'rgba(161, 136, 127, 0.7)',
                        'rgba(93, 64, 55, 0.7)',
                        'rgba(121, 85, 72, 0.7)',
                        'rgba(161, 136, 127, 0.7)',
                        'rgba(93, 64, 55, 0.7)'
                    ],
                    borderColor: 'rgba(93, 64, 55, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });
    }
});