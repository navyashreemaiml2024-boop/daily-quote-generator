// Collection of motivational quotes for students
const QUOTES = [
    {text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
    {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {text: "The expert in anything was once a beginner.", author: "Helen Hayes"},
    {text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"},
    {text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", author: "Abigail Adams"},
    {text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King"},
    {text: "Education is not preparation for life; education is life itself.", author: "John Dewey"},
    {text: "Strive for progress, not perfection.", author: "Unknown"},
    {text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss"},
    {text: "Your positive action combined with positive thinking results in success.", author: "Shiv Khera"},
    {text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden"},
    {text: "The secret of getting ahead is getting started.", author: "Mark Twain"},
    {text: "It always seems impossible until it's done.", author: "Nelson Mandela"},
    {text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison"},
    {text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein"},
    {text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert"}
];

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

// Function to display a new quote
function getNewQuote() {
    // Get random quote from array
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const quote = QUOTES[randomIndex];
    
    // Update the display with animation
    quoteText.style.animation = 'none';
    setTimeout(() => {
        quoteText.style.animation = 'slideIn 0.5s ease';
    }, 10);
    
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
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
