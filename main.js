fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Access the students array from the JSON data
    const students = data.students;

    // Output student information
    students.forEach(student => {
      console.log(`Name: ${student.name}, Age: ${student.age}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
