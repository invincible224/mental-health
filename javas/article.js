const apiKey = "7306109ed6a74f0aa159769789a96f7f";
const baseUrl = "http://newsapi.org/v2/everything?q=";
let articles = [];

// Fetch default Mental Health and Wellness news globally
function fetchNews() {
    const url = `${baseUrl}Mental+Health+Wellness&apiKey=${apiKey}`;
    fetchNewsData(url);
}

// Fetch only Mental Health related news
function fetchMentalHealthNews() {
    const url = `${baseUrl}Mental+Health&apiKey=${apiKey}`;
    fetchNewsData(url);
}

// Search News across the world
function searchNews() {
    const searchQuery = document.getElementById("search-input").value;
    if (!searchQuery) {
        alert("Please enter a search term!");
        return;
    }
    const url = `${baseUrl}${searchQuery}&apiKey=${apiKey}`;
    fetchNewsData(url);
}

// Fetch and display news
function fetchNewsData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            articles = data.articles;
            displayNews();
        })
        .catch(error => console.error('Error fetching news:', error));
}

// Display news articles dynamically in horizontal slider
function displayNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>No news articles found.</p>';
        return;
    }

    articles.forEach((article) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-card');

        articleElement.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x180'}" alt="News Image">
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Fetch default news on page load
window.onload = fetchNews;


