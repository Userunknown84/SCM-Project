from flask import Flask, request, jsonify 
import re  
# from flask_cors import CORS
# CORS(app)

from flask_cors import CORS
app = Flask(__name__)
CORS(app)


health_advice = {
    "fever": "If you have a fever, it's important to rest, drink plenty of fluids, and monitor your temperature. If your fever persists for more than 3 days or exceeds 104°F, consult a healthcare provider.",
    "headache": "If you're experiencing a headache, you may find relief with hydration, rest, and over-the-counter pain relievers. If the headache is severe or recurring, see a doctor.",
    "cough": "For a cough, drink warm fluids, avoid irritants like smoke, and rest. If your cough persists for more than 3 weeks or is accompanied by difficulty breathing, consult a doctor.",
    "cold": "For a cold, rest, drink fluids, and take over-the-counter cold medicine. If symptoms worsen or don't improve, see a healthcare provider.",
    "fatigue": "If you're feeling fatigued, ensure you're getting enough rest, staying hydrated, and eating a balanced diet. Persistent fatigue may require a visit to the doctor.",
    "general_health": "To take care of your health, maintain a balanced diet, exercise regularly, get adequate sleep, and avoid stress. Regular check-ups with a healthcare provider are also recommended."
}

@app.route('/medical-query', methods=['GET'])
def medical_query():
    query = request.args.get('query', '').lower()

    for key in health_advice.keys():
        if key in query:
            return jsonify({"advice": health_advice[key]})

    for key, advice in health_advice.items():
        if re.search(r'\b' + re.escape(key) + r'\b', query):
            return jsonify({"advice": advice})

    return jsonify({"message": "Sorry, I couldn't find advice for that query. Please ask another question."}), 404

if __name__ == '__main__':
    app.run(debug=True)
