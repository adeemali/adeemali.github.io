// Function to update the clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Format the date and time
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    };
    
    const formattedDateTime = now.toLocaleDateString(undefined, options);
    
    // Update the clock element
    clockElement.textContent = formattedDateTime;
}

// Call the function to update the clock initially
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
