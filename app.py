from flask import Flask, render_template, jsonify
import random
import os

app = Flask(__name__)

# Collection of motivational quotes for students
QUOTES = [
    {"text": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
    {"text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"text": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill"},
    {"text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"text": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
    {"text": "The expert in anything was once a beginner.", "author": "Helen Hayes"},
    {"text": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"text": "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", "author": "Abigail Adams"},
    {"text": "The beautiful thing about learning is that no one can take it away from you.", "author": "B.B. King"},
    {"text": "Education is not preparation for life; education is life itself.", "author": "John Dewey"},
    {"text": "Strive for progress, not perfection.", "author": "Unknown"},
    {"text": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", "author": "Dr. Seuss"},
    {"text": "Your positive action combined with positive thinking results in success.", "author": "Shiv Khera"},
    {"text": "Don't let what you cannot do interfere with what you can do.", "author": "John Wooden"},
    {"text": "The secret of getting ahead is getting started.", "author": "Mark Twain"},
    {"text": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
    {"text": "I have not failed. I've just found 10,000 ways that won't work.", "author": "Thomas Edison"},
    {"text": "A person who never made a mistake never tried anything new.", "author": "Albert Einstein"},
    {"text": "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", "author": "Brian Herbert"}
]

@app.route('/')
def home():
    """Render the main page"""
    return render_template('index.html')

@app.route('/api/quote')
def get_quote():
    """API endpoint to get a random quote"""
    quote = random.choice(QUOTES)
    return jsonify(quote)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
