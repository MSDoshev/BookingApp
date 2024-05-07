<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <a href="https://bookingapp-effea.web.app" style="text-decoration: none; color: #fff; font-size: 3rem; font-family: 'Great Vibes', cursive;">
    BookingApp
    </a>
</div>

## About The Project

![BookingApp Screen Shot][product-screenshot]

BookingApp is a ReactJS project I independently developed. It serves as a
comprehensive platform for exploring and selecting accommodations on the stunning
island of Mykonos. Within the app, users can explore the island's key attractions, select
their ideal villa, make reservations, and share their feedback through reviews.

### Built With

- JavaScript
- React + create-react-app
- React Router
- Redux
- Firebase Authentication
- Firebase Realtime Database
- framer-motion

<!-- GETTING STARTED -->

## Getting Started

To run the BookingApp project locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/) and follow the installation instructions for your operating system.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MSDoshev/BookingSite
   ```
2. Navigate to the project directory
   ```sh
   cd booking-app
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set up Firebase

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication and Firebase Realtime Database within your Firebase project settings.
   - Copy your Firebase configuration settings.
   - Create a `.env` file in the root directory of the project and add your Firebase configuration:

     ```makefile
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

     Replace `your_api_key`, `your_auth_domain`, `your_project_id`, `your_storage_bucket`, `your_sender_id`, and `your_app_id` with your actual Firebase configuration values.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Welcome to the Usage section of the BookingApp! Here, you'll find guidance on how to effectively utilize the features of this application.

### Getting Started

1. **Sign Up/Login**: Start by signing up or logging into your account to access the full functionality of the app.
   ![Login Screen Shot][login-screenshot]
   ![Register Screen Shot][register-screenshot]

2. **Explore Mykonos**: Browse through the available accommodations and attractions on the stunning island of Mykonos.
   ![Villas Screen Shot][villas-screenshot]
   ![The Island Screen Shot][theIsland-screenshot]

3. **Select Your Villa**: Find your ideal villa based on your preferences, budget, and desired amenities.
   ![VillaDetails Screen Shot][villaDetails-screenshot]
4. **Make Reservations**: Once you've found the perfect villa, proceed to make reservations for your stay.
   ![Booking Screen Shot][booking-screenshot]
   ![Successfull Booking Screen Shot][successfullBooking-screenshot]
   ![Reservations Screen Shot][reservations-screenshot]
5. **Share Your Experience**: After your trip, share your feedback and experiences by leaving reviews for the accommodations and attractions you visited.
![Leave Review Screen Shot][leaveReview-screenshot]
![Leave Review Done Screen Shot][leaveReviewDone-screenshot]
![Review Success Screen Shot][reviewSuccess-screenshot]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Mihail Doshev - mihaildo@outlook.com

LinkedIn: [@mihail-doshev](https://www.linkedin.com/in/mihail-doshev-42a074201/)

Project Link: [https://github.com/MSDoshev/BookingSite](https://github.com/MSDoshev/BookingSite)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Screenshots -->

[product-screenshot]: public/images/BookingAppScreentshot.png
[login-screenshot]: public/images/LoginScreenshot.png
[register-screenshot]: public/images/RegisterScreenshot.png
[villas-screenshot]: public/images/VillasScreenshot.png
[villaDetails-screenshot]: public/images/VillaDetailsScreenshot.png
[theIsland-screenshot]: public/images/TheIslandScreenshot.png
[booking-screenshot]: public/images/BookingScreenshot.png
[successfullBooking-screenshot]: public/images/SuccessfullReservationScreenshot.png
[reservations-screenshot]: public/images/ReservationsScreenshot.png
[leaveReview-screenshot]: public/images/LeaveAReviewScreenshot.png
[leaveReviewDone-screenshot]: public/images/LeaveAReviewDoneScreenshot.png
[reviewSuccess-screenshot]: public/images/ReviewSuccess.png
