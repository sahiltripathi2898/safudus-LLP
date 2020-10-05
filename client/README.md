Type 'npm install' to install all the packages .

dependencies: {
axios: ^0.18.0, // For making requests to the backend
bootstrap: ^4.5.0, // Styling
classnames: ^2.2.6,  
jwt-decode: ^2.2.0, // to decode JWT token
react: ^16.6.3,
react-bootstrap: ^1.0.1,
react-dom: ^16.6.3,  
react-icons: ^3.10.0, // to import different icons
react-notifications: ^1.6.0, // for notifications (used in forgot password)
react-redux: ^5.1.1, // for state management
react-reveal: ^1.2.2, // animations
react-router-dom: ^4.3.1,
react-scripts: ^2.1.1,
react-scroll: ^1.7.16,
react-simple-chatbot: ^0.6.1, // react chatbot
react-slideshow-image: ^1.5.3, // react slideshow (corousel)
react-typical: ^0.1.3, // for typing animation
redux: ^4.0.1,
redux-thunk: ^2.3.0,
styled-components: ^5.1.1
},

There are 7 Major Components which i have imported in the src/App.js file
-Navbar (In components/layout/Navbar.jsx)
-Home (In components/layout/Home.jsx)
-Footer (In components/layout/footer.jsx)
-ChatBot (In components/chatbot/chatform.jsx)
-Team (In components/layout/team.jsx)
-ContactUs (In components/layout/contactus.jsx)
-Login/Register (In components/auth/login.js and register.js)

All the images and gif are in the src/components/layout/components/animations

1. Navbar
   Used to navigate to other pages

2. Home
   It has 5 components inside it
   -Landing (In components/layout/components/landing.jsx)
   -Cards (In components/layout/components/cards.jsx)
   -Slides (In components/layout/components/slides.jsx)
   -Products (In components/layout/components/products.jsx)
