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

## UI Prototype
Figma Prototype Link: [https://lines-spore-49915809.figma.site/]

Create a high-fidelity Figma prototype for a web-based Sleeper Bus Ticket Booking System. The system handles bookings for one bus route from Ahmedabad to Mumbai with multiple intermediate stations (e.g., Vadodara, Surat, etc.). Key features include route selection, seat visualization, seat booking, meal selection, booking confirmation with AI prediction, cancellation, and history. No payment integration is needed.

**Design Style Guidelines:**
- Modern, clean UI with a blue and white color scheme (primary: #007BFF, secondary: #F8F9FA).
- Mobile-first responsive design, optimized for desktop and mobile.
- Use sans-serif fonts (e.g., Roboto or Inter) for readability.
- Include subtle shadows, rounded corners (8px radius), and hover effects for interactivity.
- Icons: Use Material Design icons for consistency (e.g., bus, seat, meal, calendar).
- Accessibility: High contrast, alt text for images, keyboard navigation hints.

**Screens and Components:**
1. **Landing/Home Page:**
   - Header: Logo (bus icon), navigation menu (Home, Book Ticket, My Bookings, About).
   - Hero section: Large banner with "Book Your Sleeper Bus Ticket" headline, search bar for quick route input (from/to dropdowns), "Search Buses" button.
   - Featured routes: Cards showing popular routes (e.g., Ahmedabad to Mumbai) with bus image, duration, and price placeholder.
   - Footer: Contact info, links to terms/privacy.

2. **Route Selection Page:**
   - Form: Dropdowns for "From" and "To" stations (populate from API: Ahmedabad, Vadodara, Surat, Mumbai, etc.).
   - Date picker for travel date.
   - "View Seats" button to proceed.
   - Display available buses (only one bus shown) with details: Bus name, departure/arrival times, duration, sleeper seats available.

3. **Seat Layout Visualization Page:**
   - Interactive seat map: Grid layout for sleeper bus (e.g., 2x2 berths per row, upper/lower).
   - Seats: Green for available, red for booked, gray for unavailable.
   - Legend: Icons explaining seat status.
   - Hover: Show seat number and type (upper/lower).
   - Click to select/deselect seats (max 1 seat per booking).

4. **Seat Selection and Passenger Details Page:**
   - Selected seat summary: Seat number, type, price.
   - Form: Fields for passenger name, age, gender, contact, email.
   - "Proceed to Meal Selection" button.

5. **Meal Selection Page:**
   - Options: Dropdown or cards for meals (e.g., Veg Thali, Non-Veg, Snacks) with prices.
   - Add/remove meals, update total cost.
   - "Confirm Booking" button.

6. **Booking Confirmation Page:**
   - Summary: Route, seat, meal, passenger details, total price.
   - AI Prediction: Mock section showing "Booking Success Probability: 95%" with a progress bar or icon.
   - "Confirm" button (triggers API call), success message with booking ID.
   - Option to print/download ticket.

7. **Booking History Page:**
   - List of past bookings: Cards with booking ID, route, date, status (confirmed/cancelled), actions (view details, cancel if active).
   - Filter by date/status.

8. **Cancellation Page:**
   - Form: Enter booking ID, reason for cancellation.
   - Confirmation dialog: "Are you sure? Refund policy applies."
   - Success message on cancellation.

**Interactions and Flows:**
- Prototype should include clickable hotspots linking screens (e.g., buttons navigate to next screen).
- Use Figma's prototyping features for transitions (e.g., slide-in for seat selection).
- Error states: Show messages for invalid inputs (e.g., "No seats available" on route selection).
- Loading states: Spinners during API calls (e.g., fetching seats).

**Additional Notes:**
- Ensure the prototype reflects the backend API structure (e.g., GET /seats for layout).
- Include annotations or notes in Figma for developer handoff (e.g., "Use API endpoint here").
- Total screens: 8-10, with variants for mobile/desktop.

## Setup
1. Navigate to backend directory.
2. Run `npm install`.
3. Run `npm start` to start the server.
4. Open frontend/index.html in a browser.

## AI Prediction
See PREDICTION_APPROACH.md for details on the mock AI booking confirmation prediction.
