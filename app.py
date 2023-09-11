from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# Define room types and their prices
room_types = {
    "BR001": {"name": "Standard Room", "price_per_night": 100},
    "BR002": {"name": "Deluxe Room", "price_per_night": 150},
    "BR003": {"name": "Suite", "price_per_night": 200},
}


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        room_type = request.form['room_type']
        nights = int(request.form['nights'])

        # Check if the number of nights is within the allowed range
        if nights > 30:
            return jsonify({"error": "Maximum 30 nights allowed"})

        # Calculate the cost
        base_price_per_night = room_types[room_type]['price_per_night']
        total_cost = base_price_per_night * nights

        return jsonify({"total_cost": total_cost})

    return render_template('index.html', room_types=room_types)



if __name__ == '__main__':
    app.run(debug=True)
