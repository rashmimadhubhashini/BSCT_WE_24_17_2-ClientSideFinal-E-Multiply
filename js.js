// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the container where you want to add the button
    var container = document.querySelector('.container');

    // Create a new button element
    var newButton = document.createElement('button');

    // Add classes to the button (Bootstrap classes for styling)
    newButton.className = 'btn btn-success my-4';

    // Set the button's text
    newButton.textContent = 'Go to Courses';

    // Add an event listener to the button to redirect to the Courses page
    newButton.addEventListener('click', function() {
        // Replace 'courses.html' with the actual path to your Courses page
        window.location.href = 'CourseContent.html';
    });

    // Append the new button to the container div
    container.appendChild(newButton);
});
