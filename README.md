# LunchBox

## Overview
Welcome to the repository of LunchBox, a cutting-edge platform designed for social networking restaurant tracking and logging. This application caters to everyone who enjoys food by offering features centered around restaurant information, user reviews and social connectivity. 

## Repository Structure
Our codebase is divided into two primary segments:

- **client/**
  - **web-app/**: Contains the React-based frontend for the web application.
  - **android-app/**: Houses the Java-based Android application, built using Android Studio.
- **server/**
  - Contains the backend API code, developed with Node.js, Express, and Sequelize for SQL database interactions.

## Technologies
- **Frontend (Web):** React, Bootstrap, Material UI
- **Frontend (Android):** Java, Kotlin, Android Studio
- **Backend (API):** Node.js, Express, Sequelize
- **Database**: PostgreSQL

## Getting Started

### Prerequisites
- Node.js and npm
- Java Development Kit (JDK)
- Android Studio
- A PostgreSQL database

### Installation

1. **Clone the Repository**
    ~~~
    git clone [repository-url]
    ~~~

2. **Web App Setup**
    ~~~
    cd client/web-app/frontend-postgreSQL
    npm install
    ~~~

3. **Android App Setup**
    - Open `client/android-app/astudio` in Android Studio.

4. **Server Setup**
    ~~~
    cd server/src
    npm install
    ~~~
    - Create a .env file
        ~~~
        DATABASE_URL=postgres://username:password@localhost:5432/lunchbox
        PORT=5000
        ~~~

### Running the Applications

- **Web App:**
    ~~~
    cd client/web-app/frontend-postgreSQL
    npm start
    ~~~
    - Access at `localhost:3000`.

- **Android App:**
    - Build and run in Android Studio.

- **Server:**
    ~~~
    cd server/src
    npm run dev
    ~~~


- Runs on `localhost:5000`.

<!-- ## Contributing

We welcome contributions! If you're interested in enhancing the LunchBox experience, please read our contributing guidelines and feel free to submit pull requests. -->

## Support

For issues or questions, please open an issue on this repository.

<!-- ## License

This project is under the [MIT License](LICENSE.md). -->

---

<!-- **For Recruiters:** This repository demonstrates our team's proficiency in full-stack development, showcasing real-world application of modern technologies.

**For Developers:** Dive into our code, and let's collaborate to make LunchBox even better!

🍱📲🌐 *Happy Coding!* -->
