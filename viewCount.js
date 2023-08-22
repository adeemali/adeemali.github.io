
// // Simulated view count (replace with actual data retrieval logic)
// const getViewCount = () => {
//     // In this example, we're generating a random number to simulate a view count.
//     return Math.floor(Math.random() * 1000);
// };

// // Function to update the view count element
// const updateViewCount = () => {
//     const viewCountElement = document.getElementById('viewCount');
//     const views = getViewCount();
//     viewCountElement.textContent = `Total views: ${views}`;
// };

// // Call the function to update the view count when the page loads
// window.addEventListener('load', updateViewCount);


// Function to retrieve the view count from local storage
const getViewCount = () => {
    // Check if a view count is stored in local storage
    const storedCount = localStorage.getItem('viewCount');

    // If no count is stored, initialize it to 0
    return storedCount ? parseInt(storedCount) : 0;
};

// Function to update and display the view count
const updateViewCount = () => {
    const viewCountElement = document.getElementById('viewCount');
    const views = getViewCount();

    // Increment the view count
    const updatedViews = views + 1;

    // Update the view count element and store the updated count in local storage
    viewCountElement.textContent = `Total views: ${updatedViews}`;
    localStorage.setItem('viewCount', updatedViews.toString());
};

// Call the function to update the view count when the page loads
window.addEventListener('load', updateViewCount);
