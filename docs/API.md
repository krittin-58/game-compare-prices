# API Documentation

## Overview

This application integrates with the [CheapShark API](https://www.cheapshark.com/) to fetch real-time game deals and store information from multiple digital distribution platforms.

## CheapShark API

**Base URL**: `https://www.cheapshark.com/api/1.0`

**Official Documentation**: https://apidocs.cheapshark.com/

### API Client Implementation

The API client is implemented as a TypeScript singleton class located at `src/api/cheapshark/index.ts`.

#### Singleton Pattern

```typescript
class CheapSharkAPI {
  private static instance: CheapSharkAPI;
  private constructor() {}

  public static getInstance(): CheapSharkAPI {
    if (!CheapSharkAPI.instance) {
      CheapSharkAPI.instance = new CheapSharkAPI();
    }
    return CheapSharkAPI.instance;
  }
}

export default CheapSharkAPI.getInstance();
```

**Benefits:**
- Single shared instance across the application
- Consistent configuration
- Reduced memory overhead

## API Endpoints

### 1. Get Games

Search for games by title or Steam App ID.

**Method**: `getGames(params: GameParams)`

**Endpoint**: `GET /games`

**Parameters:**
```typescript
interface GameParams {
  title?: string;      // Game title to search for
  steamAppID?: string; // Steam application ID
  limit?: number;      // Number of results (default: 60)
  exact?: 0 | 1;      // Exact match (1) or fuzzy (0)
  [key: string]: any;
}
```

**Example Usage:**
```javascript
import cheapshark from '@/api/cheapshark/index';

// Search by title
const games = await cheapshark.getGames({ 
  title: 'Cyberpunk 2077',
  limit: 10 
});

// Exact match
const exactGame = await cheapshark.getGames({ 
  title: 'The Witcher 3',
  exact: 1 
});
```

**Response:**
```json
[
  {
    "gameID": "128",
    "steamAppID": "292030",
    "cheapest": "13.79",
    "cheapestDealID": "...",
    "external": "The Witcher 3: Wild Hunt",
    "thumb": "https://..."
  }
]
```

### 2. Game Lookup

Look up a specific game by its ID.

**Method**: `gameLookup(id: string)`

**Endpoint**: `GET /games?id={id}`

**Parameters:**
- `id` (string): The game ID from CheapShark

**Example Usage:**
```javascript
const gameDetails = await cheapshark.gameLookup('128');
```

**Response:**
```json
{
  "info": {
    "title": "The Witcher 3: Wild Hunt",
    "steamAppID": "292030",
    "thumb": "https://..."
  },
  "cheapestPriceEver": {
    "price": "13.79",
    "date": 1597190400
  },
  "deals": [...]
}
```

### 3. Multiple Game Lookup

Look up multiple games at once using comma-separated IDs.

**Method**: `multiGameLookup(ids: string)`

**Endpoint**: `GET /games?id={ids}`

**Parameters:**
- `ids` (string): Comma-separated list of game IDs

**Example Usage:**
```javascript
const games = await cheapshark.multiGameLookup('128,129,130');
```

### 4. Game Deals

Fetch current game deals, optionally filtered by store.

**Method**: `gameDeals(params: DealParams)`

**Endpoint**: `GET /deals`

**Parameters:**
```typescript
interface DealParams {
  storeID?: string;      // Filter by store ID (1-34)
  upperPrice?: number;   // Maximum price
  lowerPrice?: number;   // Minimum price  
  pageNumber?: number;   // Page number for pagination
  pageSize?: number;     // Results per page (default: 60)
  sortBy?: string;       // Sort field: Deal Rating, Title, Savings, Price, Metacritic, Reviews, Release, Store, recent
  desc?: 0 | 1;         // Sort descending (1) or ascending (0)
  [key: string]: any;
}
```

**Example Usage:**
```javascript
// All deals
const allDeals = await cheapshark.gameDeals();

// Steam deals only
const steamDeals = await cheapshark.gameDeals({ storeID: 1 });

// Deals under $10, sorted by savings
const cheapDeals = await cheapshark.gameDeals({ 
  upperPrice: 10,
  sortBy: 'Savings',
  desc: 1
});
```

**Response:**
```json
[
  {
    "internalName": "THEWOLFAMONGUS",
    "title": "The Wolf Among Us",
    "metacriticLink": "/game/pc/the-wolf-among-us",
    "dealID": "...",
    "storeID": "1",
    "gameID": "88",
    "salePrice": "3.74",
    "normalPrice": "14.99",
    "isOnSale": "1",
    "savings": "75.050034",
    "metacriticScore": "85",
    "steamRatingText": "Very Positive",
    "steamRatingPercent": "94",
    "steamRatingCount": "12345",
    "steamAppID": "250320",
    "releaseDate": 1381968000,
    "lastChange": 1597190400,
    "dealRating": "9.8",
    "thumb": "https://..."
  }
]
```

### 5. Deal Lookup

Look up a specific deal by its ID.

**Method**: `gameDealLookup(id: string)`

**Endpoint**: `GET /deals?id={id}`

**Parameters:**
- `id` (string): The deal ID from CheapShark

**Example Usage:**
```javascript
const dealDetails = await cheapshark.gameDealLookup('abc123xyz');
```

**Response:**
```json
{
  "gameInfo": {
    "storeID": "1",
    "gameID": "88",
    "name": "The Wolf Among Us",
    "steamAppID": "250320",
    "salePrice": "3.74",
    "retailPrice": "14.99",
    "steamRatingText": "Very Positive",
    "steamRatingPercent": "94",
    "steamRatingCount": "12345",
    "metacriticScore": "85",
    "releaseDate": 1381968000,
    "publisher": "Telltale Games",
    "steamworks": "1",
    "thumb": "https://..."
  },
  "cheaperStores": [...]
}
```

### 6. Store Information

Get information about game stores.

**Method**: `storeInfo(params = {})`

**Endpoint**: `GET /stores`

**Parameters:**
- `id` (optional): Specific store ID to retrieve

**Example Usage:**
```javascript
// All stores
const stores = await cheapshark.storeInfo();

// Specific store
const steam = await cheapshark.storeInfo({ id: 1 });
```

**Response:**
```json
[
  {
    "storeID": "1",
    "storeName": "Steam",
    "isActive": 1,
    "images": {
      "banner": "/img/stores/banners/0.png",
      "logo": "/img/stores/logos/0.png",
      "icon": "/img/stores/icons/0.png"
    }
  },
  {
    "storeID": "25",
    "storeName": "Epic Games Store",
    "isActive": 1,
    "images": {
      "banner": "/img/stores/banners/24.png",
      "logo": "/img/stores/logos/24.png",
      "icon": "/img/stores/icons/24.png"
    }
  }
]
```

### 7. Price Alerts

Set up email alerts for price drops (feature in development).

**Method**: `editAlertDeal({ action, email, gameID, price })`

**Endpoint**: `GET /alerts`

**Parameters:**
```typescript
interface AlertParams {
  action: 'set' | 'delete' | 'manage';  // Action to perform
  email: string;                         // Email address for alerts
  gameID?: string;                       // Game to watch (for set/delete)
  price?: number;                        // Price threshold (for set)
}
```

**Example Usage:**
```javascript
// Set an alert
await cheapshark.editAlertDeal({
  action: 'set',
  email: 'user@example.com',
  gameID: '128',
  price: 15.00
});

// Delete an alert
await cheapshark.editAlertDeal({
  action: 'delete',
  email: 'user@example.com',
  gameID: '128'
});
```

**Method**: `manageAlertDeal({ action, email })`

Manage all alerts for an email address.

**Example Usage:**
```javascript
// Get all alerts for an email
await cheapshark.manageAlertDeal({
  action: 'manage',
  email: 'user@example.com'
});
```

## Store IDs

The application supports deals from the following stores:

| Store ID | Store Name | Variable Name |
|----------|------------|---------------|
| 1 | Steam | steam |
| 2 | GamersGate | gamerGate |
| 3 | GreenManGaming | greenManGaming |
| 6 | Direct2Drive | direct2Drive |
| 7 | GOG | gog |
| 8 | Origin | origin |
| 11 | Humble Store | humblebundle |
| 13 | Uplay | ubisoft |
| 15 | Fanatical | fanatical |
| 21 | WinGameStore | wingamestore |
| 23 | GameBillet | gameBillet |
| 24 | Voidu | voidu |
| 25 | Epic Games Store | epicGameStore |
| 27 | Gamesplanet | gamePlanet |
| 28 | Gamesload | gamesload |
| 29 | 2Game | twoGames |
| 30 | IndieGala | indieGala |
| 31 | Blizzard Shop | blizzardShop |
| 32 | AllYouPlay | allYouPlay |
| 33 | DLGamer | dlGamer |
| 34 | Noctre | noctre |

## Error Handling

All API methods include try-catch error handling:

```typescript
async getGames(params: GameParams) {
  try {
    const response = await axios.get(`${cheapshark_endpoint_url}/games`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
}
```

**Error Types:**
- Network errors (no connection, timeout)
- API errors (invalid parameters, rate limits)
- Server errors (500, 503)

**Best Practices:**
1. Always use try-catch when calling API methods
2. Provide user feedback on errors
3. Implement retry logic for transient failures
4. Log errors for debugging

## Rate Limiting

CheapShark API does not specify strict rate limits, but best practices include:

1. **Caching**: Cache responses locally (current implementation caches daily)
2. **Batching**: Combine multiple requests when possible
3. **Throttling**: Don't make rapid successive calls
4. **Respect**: Monitor API availability and adjust usage

## Image URLs

Store images are served from CheapShark's CDN:

**Base URL**: `https://www.cheapshark.com/`

**Image Types:**
- Banner: `/img/stores/banners/{storeID}.png`
- Logo: `/img/stores/logos/{storeID}.png`
- Icon: `/img/stores/icons/{storeID}.png`

**Helper Function:**
```javascript
setupImageURL(path) {
  if (path) {
    return `https://www.cheapshark.com/${path}`;
  }
}
```

## Usage in Components

### Fetching Deals in HomeView

```javascript
import cheapshark from '@/api/cheapshark/index';

export default {
  methods: {
    async getAllDeals() {
      // Fetch deals for all stores
      const steamDeals = await cheapshark.gameDeals({ storeID: 1 });
      const gogDeals = await cheapshark.gameDeals({ storeID: 7 });
      
      // Store in Vuex
      this.$store.commit('steam', steamDeals);
      this.$store.commit('gog', gogDeals);
    }
  }
}
```

### Fetching Stores

```javascript
async getAllStores() {
  const response = await cheapshark.storeInfo();
  if (response) {
    this.$store.commit('listStores', response);
  }
}
```

## Data Persistence

The application uses a combination of:

1. **Vuex Store**: In-memory state
2. **LocalStorage**: Persistent cache via `vuex-persistedstate`
3. **Date-based Invalidation**: Refreshes cache daily

**Cache Strategy:**
```javascript
let unixTimeToday = new Date().toDateString();
let dateLocalStorage = localStorage.getItem('date');

if (!vuexLocalStorage || (dateLocalStorage !== unixTimeToday)) {
  // Fetch fresh data from API
  localStorage.setItem('date', unixTimeToday);
  // ... API calls
} else {
  // Use cached data from Vuex/localStorage
}
```

## API Response Times

Typical response times (may vary):
- Single store deals: 200-500ms
- All deals: 300-800ms
- Store info: 100-200ms
- Game search: 150-400ms

**Optimization:**
- Parallel requests for multiple stores
- Cached responses loaded from localStorage instantly
- Loading states improve perceived performance

## Testing API Endpoints

You can test the API directly using curl or browser:

```bash
# Get all stores
curl https://www.cheapshark.com/api/1.0/stores

# Get Steam deals
curl https://www.cheapshark.com/api/1.0/deals?storeID=1

# Search for a game
curl "https://www.cheapshark.com/api/1.0/games?title=witcher&limit=3"
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: CheapShark API supports CORS, but ensure requests are made from the browser
2. **Empty Responses**: Some stores may have no active deals
3. **Stale Data**: Clear localStorage to force fresh API calls
4. **Image Loading**: Verify image paths are correctly constructed

### Debug Mode

Add debug logging:

```javascript
async getGames(params) {
  console.log('API Request:', params);
  try {
    const response = await axios.get(`${cheapshark_endpoint_url}/games`, { params });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

## Future API Enhancements

1. **Request Queue**: Implement request queueing to prevent rate limiting
2. **Response Caching**: Add configurable cache TTL
3. **Retry Logic**: Automatic retry on failures
4. **Request Cancellation**: Cancel pending requests on component unmount
5. **Type Generation**: Auto-generate TypeScript types from API responses
6. **GraphQL Wrapper**: Consider GraphQL layer for efficient data fetching

## External Resources

- **CheapShark API Docs**: https://apidocs.cheapshark.com/
- **CheapShark Website**: https://www.cheapshark.com/
- **Axios Documentation**: https://axios-http.com/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

## Conclusion

The CheapShark API integration provides a robust foundation for fetching game deals from multiple stores. The singleton pattern ensures consistent API usage, while TypeScript interfaces provide type safety. The caching strategy balances fresh data with performance and API courtesy.
