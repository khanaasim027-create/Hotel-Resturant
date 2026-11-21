// firebase-config.js
// Keep this file in the SAME folder as index.html (owner-index.html).

window.FB_CONFIG = {
  apiKey: "AIzaSyDeDANbFXTHWNJBcZBV2KMdPDnCFGOWxTo",
  authDomain: "hotel-restaurant-b00a0.firebaseapp.com",
  projectId: "hotel-restaurant-b00a0",
  storageBucket: "hotel-restaurant-b00a0.firebasestorage.app",
  messagingSenderId: "522887792630",
  appId: "1:522887792630:web:e5ac075464da3203d929d7"
};

// PAYMENTS (UPI): money comes directly to this UPI ID.
window.UPI_ID = "8888637898@ptyes";
window.UPI_NAME = "Restaurant App";          // name shown in the UPI app (optional)
// Your own Gmail. Only this Google account can approve payments inside the app.
window.ADMIN_EMAIL = "khanaasim027@gmail.com";

// OPTIONAL, leave these two lines commented out for now.
// window.RZP_KEY = "rzp_live_xxxxxxxx";        // Razorpay key, only when you start taking plan payments
// window.AI_ENDPOINT = "https://...";          // Menu photo scan endpoint, only when you set it up
