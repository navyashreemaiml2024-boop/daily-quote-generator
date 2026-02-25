# Daily Quote Generator for Students

A simple and attractive web application that displays random motivational quotes for students. Built with Python Flask.

## Features

- 🎯 Random motivational quotes specifically curated for students
- 🎨 Dynamic background color changes
- 📱 Responsive design that works on all devices
- ✨ Smooth animations and transitions
- 🔄 Easy-to-use interface with button controls

## Project Structure

```
quote/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML page
└── static/
    ├── style.css         # Styling and animations
    └── script.js         # Frontend interactivity
```

## Installation

1. Make sure you have Python installed (Python 3.7 or higher)

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## How to Run

1. Navigate to the project directory in your terminal

2. Run the Flask application:
   ```bash
   python app.py
   ```

3. Open your web browser and go to:
   ```
   http://localhost:5000
   ```

4. Enjoy your daily dose of motivation!

## How to Use

- Click **"Get New Quote"** button to display a random motivational quote
- Click **"Change Background"** button to cycle through different beautiful gradient backgrounds
- A new quote automatically loads when you first open the page

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Design**: Responsive CSS with gradient backgrounds and animations

## Quote Collection

The application includes 20+ carefully selected motivational quotes from famous personalities like:
- Nelson Mandela
- Eleanor Roosevelt
- Steve Jobs
- Albert Einstein
- And many more!

## Customization

You can easily customize the application by:
- Adding more quotes in `app.py` (QUOTES list)
- Modifying background gradients in `static/script.js` (backgrounds array)
- Adjusting styles in `static/style.css`

Enjoy your journey of daily motivation! 🚀
