from flask import Flask, render_template

app = Flask(__name__)

# Define the route for the root URL
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=200)
