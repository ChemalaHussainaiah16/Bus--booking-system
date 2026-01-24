const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// Data
const stations = ['Ahmedabad', 'Vadodara', 'Surat', 'Mumbai'];

const seats = [];
for (let i = 1; i <= 10; i++) {
  seats.push({ id: i, type: 'sleeper', status: 'available' });
}

let bookings = [];
let bookingIdCounter = 1;

// Helper: Check if two segments overlap
function segmentsOverlap(from1, to1, from2, to2) {
  const stationsOrder = stations;
  const idx1 = stationsOrder.indexOf(from1);
  const idx2 = stationsOrder.indexOf(to1);
  const idx3 = stationsOrder.indexOf(from2);
  const idx4 = stationsOrder.indexOf(to2);
  return !(idx2 <= idx3 || idx4 <= idx1);
}

// API: GET /stations
app.get('/stations', (req, res) => {
  res.json(stations);
});

// API: GET /seats
app.get('/seats', (req, res) => {
  const { from, to } = req.query;
  if (!from || !to || !stations.includes(from) || !stations.includes(to)) {
    return res.status(400).json({ error: 'Invalid from or to station' });
  }
  const availableSeats = seats.filter(seat => {
    if (seat.status !== 'available') return false;
    // Check if any booking overlaps
    return !bookings.some(booking => booking.seatId === seat.id && segmentsOverlap(from, to, booking.from, booking.to));
  });
  res.json(availableSeats);
});

// API: POST /book-seat
app.post('/book-seat', (req, res) => {
  const { passengerName, seatId, from, to } = req.body;
  if (!passengerName || !seatId || !from || !to) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const seat = seats.find(s => s.id == seatId);
  if (!seat || seat.status !== 'available') {
    return res.status(400).json({ error: 'Seat not available' });
  }
  // Check overlap
  const overlaps = bookings.some(b => b.seatId === seatId && segmentsOverlap(from, to, b.from, b.to));
  if (overlaps) {
    return res.status(400).json({ error: 'Seat not available for this route' });
  }
  const booking = {
    id: bookingIdCounter++,
    passengerName,
    seatId,
    from,
    to,
    meal: null,
    status: 'confirmed'
  };
  bookings.push(booking);
  seat.status = 'booked';
  res.json({ bookingId: booking.id, message: 'Seat booked successfully' });
});

// API: POST /book-meal
app.post('/book-meal', (req, res) => {
  const { bookingId, meal } = req.body;
  const booking = bookings.find(b => b.id == bookingId);
  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' });
  }
  booking.meal = meal;
  res.json({ message: 'Meal added successfully' });
});

// API: POST /cancel-booking
app.post('/cancel-booking', (req, res) => {
  const { bookingId } = req.body;
  const index = bookings.findIndex(b => b.id == bookingId);
  if (index === -1) {
    return res.status(404).json({ error: 'Booking not found' });
  }
  const booking = bookings[index];
  const seat = seats.find(s => s.id === booking.seatId);
  seat.status = 'available';
  bookings.splice(index, 1);
  res.json({ message: 'Booking cancelled successfully' });
});

// Optional: GET /booking-history
app.get('/booking-history', (req, res) => {
  // In real app, filter by user, but here return all
  res.json(bookings);
});

// Mock AI Prediction
function predictConfirmation(seatId, from, to) {
  // Mock logic
  let prob = 80; // base
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0=Sun, 6=Sat
  if ((hour >= 6 && hour <= 9) || (hour >= 17 && hour <= 20)) prob -= 20; // peak
  if (day === 0 || day === 6) prob -= 10; // weekend
  const availableCount = seats.filter(s => s.status === 'available').length;
  if (availableCount < 5) prob -= 30;
  if (from === 'Ahmedabad' && to === 'Mumbai') prob += 10; // full route
  return Math.max(0, Math.min(100, prob));
}

// Optional: GET /predict
app.get('/predict', (req, res) => {
  const { seatId, from, to } = req.query;
  const prob = predictConfirmation(seatId, from, to);
  res.json({ probability: prob });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});