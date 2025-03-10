const ctx = document.getElementById('mychart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: '# of Items',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: '#797ed5', // White bars
      borderColor: 'black' // Black border for contrast
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white' // White y-axis labels
        }
      },
      x: {
        ticks: {
          color: 'white' // White x-axis labels
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // White legend label
          font: {
            size: 14, // Larger font size
            weight: 'bold' // Bold text
          }
        }
      }
    }
  }
});
