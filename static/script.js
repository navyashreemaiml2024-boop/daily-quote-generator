// Array of background gradients
const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)'
];

let currentBgIndex = 0;

// Get DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const changeBgBtn = document.getElementById('change-bg-btn');

// Function to fetch and display a new quote
async function getNewQuote() {
    try {
        // Add loading state
        newQuoteBtn.disabled = true;
        newQuoteBtn.textContent = 'Loading...';
        
        // Fetch quote from API
        const response = await fetch('/api/quote');
        const data = await response.json();
        
        // Update the display with animation
        quoteText.style.animation = 'none';
        setTimeout(() => {
            quoteText.style.animation = 'slideIn 0.5s ease';
        }, 10);
        
        quoteText.textContent = `"${data.text}"`;
        quoteAuthor.textContent = `— ${data.author}`;
        
        // Reset button
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = 'Get New Quote';
        
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteText.textContent = 'Oops! Failed to fetch quote. Please try again.';
        quoteAuthor.textContent = '';
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = 'Get New Quote';
    }
}

// Function to change background
function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.body.style.background = backgrounds[currentBgIndex];
}

// Event listeners
newQuoteBtn.addEventListener('click', getNewQuote);
changeBgBtn.addEventListener('click', changeBackground);

// Load a quote when page loads
window.addEventListener('load', getNewQuote);
