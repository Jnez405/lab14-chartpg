'use strict';

function renderChart() {
  let state = new AppState();
  state.loadItems();

  let productNames = state.allProducts.map(product => product.name);
  let productClicks = state.allProducts.map(product => product.timesClicked);
  let productViews = state.allProducts.map(product => product.timesShown);

  // Define color variables
  const voteColor = 'rgba(255, 99, 132, 0.2)';
  const voteBorderColor = 'rgba(255, 99, 132, 1)';
  const viewColor = 'rgba(76, 175, 80, 0.2)';
  const viewBorderColor = 'rgba(76, 175, 80, 1)';

  let ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: 'Votes',
          data: productClicks,
          backgroundColor: voteColor,
          borderColor: voteBorderColor,
          borderWidth: 1
        },
        {
          label: 'Views',
          data: productViews,
          backgroundColor: viewColor,
          borderColor: viewBorderColor,
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', renderChart);



/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */