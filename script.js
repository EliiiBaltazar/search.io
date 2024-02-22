const container = document.getElementById('_container');
const input = document.getElementById('_search');
const button = document.getElementById('_button');
const searchIcon = document.getElementById('_searchIcon');
const closeIcon = document.getElementById('_closeIcon');
const searchPopup = document.getElementById('_searchPopup'); // The popup element for displaying search text

// Event listener for the search input to handle input events
input.addEventListener('input', () => {
    if (input.value.trim() !== "") {
        searchPopup.innerText = `Searching ${input.value}...`; // Update the popup text with the current input
        searchPopup.style.display = 'block'; // Show the popup
    } else {
        searchPopup.style.display = 'none'; // Hide the popup if the input is empty
    }
});

// Event listener for the search button to toggle the search bar and icons
button.addEventListener('click', () => {
    container.classList.toggle('active');
    button.classList.toggle('active');

    if (container.classList.contains('active')) {
        searchIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
        input.focus(); // Automatically focus on the input field when active
    } else {
        searchIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
    }

    // Hide the search popup when toggling the search bar's state
    searchPopup.style.display = 'none';
});
