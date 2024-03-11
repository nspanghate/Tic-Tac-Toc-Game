document.addEventListener('DOMContentLoaded', function () {
    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Header mouseover/mouseout effect
    var header = document.getElementById('resumeHeader');

    header.addEventListener('mouseover', function () {
        header.style.color = getRandomColor();
    });

    header.addEventListener('mouseout', function () {
        header.style.color = ''; // Reset to default color
    });

    // Skills hover effect
    var skillsListItems = document.querySelectorAll('.skills li');

    skillsListItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.style.color = getRandomColor();
        });

        item.addEventListener('mouseout', function () {
            item.style.color = ''; // Reset to default color
        });
    });

    // Redirect to home page when the button is clicked
    document.getElementById("go-home-button").addEventListener("click", function() {
        // Redirect to home page
        window.location.href = "D:\F Drive Data moved on 13-12-23\MY WEB\NIKHIL PROJECTS\Tic Tac Toe Game\index.html";
    });
});
