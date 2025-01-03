from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    features = [
        {
            "icon": "fa-shield-alt",
            "title": "Anonim SMS Bomber",
            "description": "End-to-end şifreleme ile güvenli SMS Gönderme"
        },
        {
            "icon": "fa-bolt",
            "title": "Hızlı İletişim",
            "description": "Anlık mesaj gönderimi"
        },
        {
            "icon": "fa-code",
            "title": "Python Teknolojisi",
            "description": "%100 Python ile geliştirilmiş altyapı"
        }
    ]
    return render_template('index.html', features=features)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port) 