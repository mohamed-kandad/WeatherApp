# 🌤️ React Native Weather App

A simple and beautiful mobile weather application built using **React Native CLI**, **TypeScript**, and **React Navigation**. It fetches real-time weather data and forecasts from the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 📁 Project Structure

```

WeatherApp/
├── public/ # Static files
├── components/ # UI components like Header, SearchBar, etc.
├── constant/
├── hooks/
├── types/
├── screens/
├── utils/ # Utility functions (e.g., fetchWeatherByCity)
├── App.tsx # Main application component
├── .env.example # API key placeholder
├── tailwind.config.js # TailwindCSS configuration
├── vite.config.ts # Vite build config
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project overview

```

## 📱 Features

- 🔍 Search for weather by **city name**
- 🌡️ View **current weather** (temperature, condition, icon)
- 📆 View a basic **forecast** (next few hours)
- 📶 Handles API loading and error states gracefully
- 🧠 State management using `useState`
- 🧭 Navigation using React Navigation (Stack)
- 💅 Clean and responsive UI

---

```
## Set Up Environment Variables

in file `constant` file:
WEATHER_API_KEY=your_api_key_here
```

```

## 🛠️ Installation

# Clone the repository
git clone https://github.com/mohamed-kandad/WeatherApp
cd weather-app

# Install dependencies
npm install

# Run the app
npx react-native run-android  # for Android
npx react-native run-ios      # for iOS
```
