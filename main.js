// script.js

// Fetch the JSON data
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
   console.log(data.students);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
