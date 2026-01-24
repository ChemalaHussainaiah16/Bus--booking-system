# AI/ML Booking Confirmation Prediction

## Overview
This system includes a mock AI/ML model to predict the probability of booking confirmation. The prediction helps users understand the likelihood of their booking being successful, especially in high-demand scenarios.

## Prediction Logic
The mock model simulates a machine learning approach using logistic regression. It takes into account various features to compute a confirmation probability.

### Features Used
- **Time of Booking**: Hour of the day (e.g., peak hours like morning/evening have lower probability).
- **Day of Week**: Weekends have higher demand, thus lower confirmation probability.
- **Seat Type**: Sleeper seats (all in this system) have standard probability.
- **Route Popularity**: Based on from/to stations (e.g., full route vs. short segments).
- **Available Seats**: Fewer available seats lower the probability.
- **Booking History**: If user has previous bookings, slight boost.

### Dataset
Since this is a mock implementation, no real dataset is used. The model uses predefined weights and thresholds to simulate predictions:
- Peak hours: 6-9 AM, 5-8 PM → -0.2 probability adjustment
- Weekends: Saturday/Sunday → -0.1 adjustment
- Available seats < 5 → -0.3 adjustment
- Full route booking → +0.1 adjustment

### Model Output
- **Output**: A percentage (0-100%) indicating the probability of booking confirmation.
- **Formula**: Base probability 80% + adjustments based on features.
- **Example**: For a weekday booking at 10 AM with 8 seats available, probability = 85%.

### Limitations
- Mock implementation; not trained on real data.
- Does not account for real-time demand spikes.
- Probability is static and does not update with actual bookings.

This mock serves as a placeholder for a real ML model that would be trained on historical booking data.