# 🌦️ React Weather App Documentation

A modern, responsive weather dashboard built with **React**, **TypeScript**, **Tailwind CSS**, and the **OpenWeatherMap API**. This documentation covers setup, development, structure, features, and deployment instructions.

---

## 📁 Project Structure

```
WeatherApp/
├── public/                  # Static files
├── src/
│   ├── assets/              # Icons, images, etc.
│   ├── components/          # UI components like Header, SearchBar, etc.
│   ├── hooks/               # Custom React hooks (e.g., useWeather)
│   ├── services/            # API service layer
│   ├── utils/               # Utility functions (e.g., formatDate)
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Entry point
├── .env.example             # API key placeholder
├── tailwind.config.js       # TailwindCSS configuration
├── vite.config.ts           # Vite build config
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project overview
```

---

## 🔧 Features

- ✅ Current weather by city name
- ✅ 5-day forecast display with icons
- ✅ Toggle between Celsius (°C) and Fahrenheit (°F)
- ✅ Responsive UI for all screen sizes
- ✅ Graceful error handling (e.g., invalid city input)
- ✅ Loading states and skeleton loaders

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/WeatherApp.git
cd WeatherApp
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

```constant
WEATHER_API_KEY=your_api_key_here
```

4. **Run the App**

```bash
npm run dev
```

5. **Build for Production**

```bash
npm run build
```

---

## 🌐 API Integration

- Uses **OpenWeatherMap API** for weather data.
- All API calls are handled in `src/services/weatherAPI.ts`.
- Example usage:

```ts
const response = await fetchWeatherByCity(city);
```

---

## 🎨 UI & Responsiveness

- Built with **Tailwind CSS** using mobile-first design.
- Breakpoints for `sm`, `md`, `lg`, and `xl`.
- Includes components like `SearchBar`, `Toggle`, and `ForecastList`.

---

## 📈 Performance

- Debounced input to avoid excessive API calls
- Lazy-loaded components using `React.lazy`
- Memoized components for optimized re-renders
- Efficient error boundaries and retry logic

---

## 🧠 AI Tool Usage

- **ChatGPT** was used to assist in:
  - Code organization suggestions
  - Boilerplate generation
  - Documentation formatting
  - Error message phrasing
- All code was reviewed and adapted manually.

---

## 🧪 Testing (Optional Enhancements)

- Add `Jest` for unit testing
- Use `React Testing Library` for component testing

---

## 📦 Deployment

- Deploy with **Vercel** or **Netlify**
- Add environment variable `WEATHER_API_KEY` in your deployment settings
