// Sample data for summaries (in a real app, fetch from an API)
const summaries = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        summary: "A shepherd boy's journey to find his personal legend, blending mysticism and adventure.",
        link: "#"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        summary: "A story of racial injustice and moral growth in the American South, seen through a child's eyes.",
        link: "#"
    },
    {
        title: "1984",
        author: "George Orwell",
        summary: "A dystopian novel about totalitarianism, surveillance, and the loss of individual freedom.",
        link: "#"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        summary: "A teenager's cynical view of the adult world and his quest for authenticity.",
        link: "#"
    }
];

// Function to render summaries
function renderSummaries(data) {
    const list = document.getElementById('summariesList');
    list.innerHTML = '';
    data.forEach(summary => {
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
            <h3>${summary.title}</h3>
            <p><strong>Author:</strong> ${summary.author}</p>
            <p>${summary.summary}</p>
            <a href="${summary.link}" class="read-more">Read Full Summary</a>
        `;
        list.appendChild(card);
    });
}

// Initial render
renderSummaries(summaries);

// Search function
function searchSummaries() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = summaries.filter(s => 
        s.title.toLowerCase().includes(query) || 
        s.author.toLowerCase().includes(query) || 
        s.summary.toLowerCase().includes(query)
    );
    renderSummaries(filtered);
}

// Event listener for Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchSummaries();
    }
});

console.log("Page loaded with", summaries.length, "summaries.");
