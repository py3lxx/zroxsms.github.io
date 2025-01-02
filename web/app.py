from flask import Flask, render_template
import os

app = Flask(__name__)

# Özellikler listesi
features = [
    {
        "icon": "fa-shield-alt",
        "title": "Güvenli",
        "description": "Gelişmiş güvenlik önlemleri ile verileriniz güvende."
    },
    {
        "icon": "fa-bolt",
        "title": "Hızlı",
        "description": "Yüksek performanslı SMS gönderimi."
    },
    {
        "icon": "fa-user-secret",
        "title": "Anonim",
        "description": "Gizlilik odaklı tasarım ile anonim kullanım."
    }
]

@app.route('/')
def index():
    return render_template('index.html', features=features)

if __name__ == '__main__':
    app.run() 