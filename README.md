# Game Compare Prices

A Vue.js web application for comparing video game prices across multiple digital distribution platforms. This application aggregates deals from various gaming stores including Steam, Epic Games Store, GOG, Humble Bundle, and many more using the CheapShark API.

## 📋 Overview

Game Compare Prices helps gamers find the best deals on video games by displaying current prices and sales from 20+ digital game stores in a single, easy-to-use interface. Users can browse deals by store or search for specific games across all platforms.

## ✨ Features

- **Multi-Store Price Comparison**: View deals from 20+ gaming platforms including:
  - Steam
  - Epic Games Store
  - GOG (Good Old Games)
  - Humble Bundle
  - Green Man Gaming
  - Fanatical
  - GamersGate
  - And many more...

- **Real-time Deal Aggregation**: Fetches the latest deals from CheapShark API
- **Smart Caching**: Stores deal data locally to minimize API calls (refreshed daily)
- **Game Search**: Search for specific games across all stores
- **Price Alert System**: Set up email alerts for price drops (feature in development)
- **Responsive Design**: Built with Vuetify for a modern, mobile-friendly interface
- **Store Filtering**: View only active stores with current deals

## 🛠️ Tech Stack

- **Framework**: Vue.js 2.7
- **UI Library**: Vuetify 2.7
- **State Management**: Vuex with persistence
- **Routing**: Vue Router
- **HTTP Client**: Axios
- **Language**: JavaScript/TypeScript
- **Build Tool**: Vue CLI 5.0

## 📦 Project Setup

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/krittin-58/game-compare-prices.git
cd game-compare-prices
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with hot-reload:
```bash
npm run serve
# or
npm run dev
```

The application will be available at `http://localhost:8080`

### Production Build

Compile and minify for production:
```bash
npm run build
```

Build files will be generated in the `/dist` directory.

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 🏗️ Project Structure

```
game-compare-prices/
├── public/              # Static assets
├── src/
│   ├── api/            # API integration
│   │   └── cheapshark/ # CheapShark API client
│   ├── assets/         # Images and static resources
│   ├── components/     # Vue components
│   │   └── Nav.vue     # Navigation bar component
│   ├── plugins/        # Vue plugins configuration
│   │   ├── vuetify.js  # Vuetify setup
│   │   └── vue-crontab.js
│   ├── router/         # Vue Router configuration
│   ├── store/          # Vuex store (state management)
│   ├── views/          # Page components
│   │   ├── HomeView.vue    # Main deals dashboard
│   │   └── BrowserView.vue # Game search interface
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── .browserslistrc     # Browser compatibility
├── babel.config.js     # Babel configuration
├── tsconfig.json       # TypeScript configuration
├── vue.config.js       # Vue CLI configuration
└── package.json        # Project dependencies
```

## 🎮 Usage

### Home Page
The home page displays deals from all active stores, showing:
- Store logos
- Top 5 deals per store
- Original and sale prices
- Loading states while fetching data

### Browser/Search Page
The browser page provides:
- Advanced game search functionality
- Filterable data table with all deals
- Store information with logos
- Price alert setup (coming soon)

### Data Caching
- Deal data is cached in localStorage
- Cache is automatically refreshed daily
- Reduces API calls and improves performance

## 🔌 API Integration

This project uses the [CheapShark API](https://apidocs.cheapshark.com/) to fetch game deals and store information. The API client is implemented as a singleton TypeScript class with methods for:

- Fetching game deals by store
- Looking up specific games
- Retrieving store information
- Managing price alerts (in development)

For detailed API documentation, see [API.md](./docs/API.md)

## 📱 Browser Support

This project follows the browserslist configuration for modern browsers. See `.browserslistrc` for specific browser versions supported.

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for development guidelines.

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- [CheapShark API](https://www.cheapshark.com/) for providing game deal data
- [Vuetify](https://vuetifyjs.com/) for the Material Design component framework
- All the digital game stores for making deals available to gamers

## 📞 Support

For issues, questions, or contributions, please open an issue on the GitHub repository.

## 🔗 Additional Documentation

- [Architecture Documentation](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Contributing Guide](./docs/CONTRIBUTING.md)

## 📝 Configuration

See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/) for advanced configuration options.
