# Hotel Room Booking System

The Hotel Room Booking System is a web-based application built using Flask, Python, and Bootstrap. It allows users to book hotel rooms, calculate the total cost based on the selected room type and number of nights, and display validation messages for invalid input.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshots](#Screenshots)
- [License](#license)

## Features

- Select from different room types with corresponding prices per night.
- Calculate the total cost based on the selected room type and number of nights.
- Display validation messages for invalid input, including non-numeric nights and exceeding the maximum allowed nights.
- Responsive web design using Bootstrap for a user-friendly interface.

## Project Structure

The project is structured as follows:

hotel_booking_system/
app.py
templates/
index.html
static/
style.css
script.js
README.md


- `app.py`: The Flask application with routing and business logic.
- `templates/`: Directory containing the HTML template.
- `static/`: Directory containing the CSS and JavaScript files.
- `script.js`: External JavaScript file for client-side validation.
- `README.md`: This file.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- Python and Flask installed on your system.
- Knowledge of HTML, CSS, and Bootstrap.
- Basic understanding of how Flask works.

## Getting Started

 Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/hotel-booking-system.git
   
1. Navigate to the project directory:
cd hotel_booking_system

2. Install the required dependencies:
pip install flask

Usage
1. Run the Flask application:
python app.py

2. Access the application in your web browser at http://localhost:5000.
3. Select a room type and enter the number of nights to calculate the total cost.
4. Submit the form to see the total cost or validation messages.

## Screenshots

![Screenshot 1]((https://github.com/Muntasir101/HotelRoomBooking/blob/master/Screenshots/Success.png))
*Description: This is the first screenshot of the application.*

![Screenshot 2]((https://github.com/Muntasir101/HotelRoomBooking/blob/master/Screenshots/data_types.png))
*Description: Here is another screenshot showing a data type validation.*

![Screenshot 3]((https://github.com/Muntasir101/HotelRoomBooking/blob/master/Screenshots/max_night.png)))
*Description: Here is another screenshot showing a max night validation.*

License
This project is licensed under the MIT License.

In this README template, you can provide an overview of your project, describe its features, explain the project structure, list prerequisites, provide instructions for getting started and usage, include screenshots if applicable, and specify the project's license. Make sure to replace placeholders like `your-username` with the actual values relevant to your project.
