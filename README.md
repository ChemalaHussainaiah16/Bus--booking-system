# Bus Booking System

## Overview
A web-based Sleeper Bus Ticket Booking System for the route from Ahmedabad to Mumbai. Supports one bus with multiple intermediate stations. No payment gateway integration.

## Features
- Route selection (from/to stations)
- Seat layout visualization
- Seat selection
- Meal selection
- Booking confirmation with AI-based prediction
- Booking cancellation
- Booking history

## Workflow
1. Select Route: Choose departure and arrival stations.
2. View Seat Layout: Display available seats for the selected route.
3. Select Seat: Choose an available seat.
4. Select Meal: Choose a meal option.
5. Confirm Booking: Submit booking with passenger details.
6. Cancel Booking: Cancel an existing booking.

## Backend APIs
- `GET /seats?from=<station>&to=<station>`: Get available seats for the route.
- `POST /book-seat`: Book a seat (initial booking).
- `POST /book-meal`: Add meal to booking.
- `POST /cancel-booking`: Cancel a booking.
- `GET /stations`: Get list of stations.
- `GET /booking-history`: Get user's booking history.

## Technologies
- Backend: Node.js with Express
- Frontend: HTML, CSS, JavaScript
- AI/ML: Mock prediction logic

## Setup
1. Navigate to backend directory.
2. Run `npm install`.
3. Run `npm start` to start the server.
4. Open frontend/index.html in a browser.

## AI Prediction
See PREDICTION_APPROACH.md for details on the mock AI booking confirmation prediction.