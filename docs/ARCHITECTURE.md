# Architecture Documentation

## System Overview

Game Compare Prices is a client-side Vue.js 2 application that aggregates video game deals from multiple digital distribution platforms through the CheapShark API. The application follows a component-based architecture with centralized state management.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        User Interface                        │
│                         (Vuetify)                            │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                      Vue Components                          │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Nav    │  │  HomeView    │  │   BrowserView        │  │
│  └──────────┘  └──────────────┘  └──────────────────────┘  │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                     Vue Router                               │
│              (Route Management & Navigation)                 │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                    Vuex Store                                │
│         (State Management + LocalStorage Persistence)        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  State: deals, stores, alerts, per-store deals       │  │
│  │  Mutations: Update state                             │  │
│  │  Getters: Computed state (top 5 deals per store)     │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                  CheapShark API Client                       │
│              (Singleton Pattern, TypeScript)                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  - getGames()                                        │  │
│  │  - gameDeals(storeID)                                │  │
│  │  - storeInfo()                                       │  │
│  │  - editAlertDeal()                                   │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────┬────────────────────────────────────────────┘
                 │
                 │ HTTP (Axios)
                 │
┌────────────────┴────────────────────────────────────────────┐
│                   CheapShark API                             │
│              (External REST API Service)                     │
│            https://www.cheapshark.com/api/1.0                │
└──────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Application Layer

#### App.vue
- Root component of the application
- Sets up the main layout with Vuetify's `v-app` container
- Renders the navigation bar and router view
- Provides the application title

#### Main.ts
- Application entry point
- Initializes Vue instance with plugins:
  - Vue Router (routing)
  - Vuetify (UI framework)
  - Vuex Store (state management)
- Mounts the app to the DOM

### 2. Routing Layer (Vue Router)

The application uses Vue Router with history mode for clean URLs.

**Routes:**
- `/` (home) - HomeView component - Main deals dashboard
- `/browser` - BrowserView component - Game search and browse interface

### 3. View Components

#### HomeView.vue
**Purpose**: Main dashboard displaying deals from all active stores

**Key Features:**
- Displays store logos and names
- Shows top 5 deals per store
- Implements data caching strategy (daily refresh)
- Loading states with skeleton loaders
- Responsive grid layout (4 columns on desktop)

**Data Flow:**
1. On component creation, fetches all deals and stores
2. Checks localStorage for cached data
3. If cache is stale (different day), fetches fresh data from API
4. Stores data in Vuex for persistence
5. Filters and displays active stores only

**Store-Specific Sections:**
The component renders individual sections for 20+ stores:
- Steam (storeID: 1)
- GamersGate (storeID: 2)
- GreenManGaming (storeID: 3)
- Direct2Drive (storeID: 6)
- GOG (storeID: 7)
- Origin (storeID: 8)
- Humble Bundle (storeID: 11)
- Ubisoft/Uplay (storeID: 13)
- Fanatical (storeID: 15)
- WinGameStore (storeID: 21)
- GameBillet (storeID: 23)
- Voidu (storeID: 24)
- Epic Games Store (storeID: 25)
- Gamesplanet (storeID: 27)
- Gamesload (storeID: 28)
- 2Game (storeID: 29)
- IndieGala (storeID: 30)
- Blizzard Shop (storeID: 31)
- AllYouPlay (storeID: 32)
- DLGamer (storeID: 33)
- Noctre (storeID: 34)

#### BrowserView.vue
**Purpose**: Advanced game search and browsing interface

**Key Features:**
- Searchable data table with all deals
- Column headers: Thumb, Title, Store, Normal Price, Sale Price, Actions
- Store logo display in table
- Price alert button (functionality in development)
- Multiple selection support

**Data Flow:**
1. Uses deals from Vuex store (populated by HomeView)
2. Filters stores to display logos
3. Provides search functionality via v-data-table
4. Prepares alert configuration for price notifications

### 4. UI Components

#### Nav.vue
**Purpose**: Application navigation bar and price alert dialog

**Features:**
- Primary color toolbar with app title
- Navigation buttons to Home and Browser pages
- Price alert dialog (modal)
- Email input for alert configuration

**Alert System** (In Development):
- Dialog for setting up price alerts
- Email input field
- Integration with CheapShark alert API
- Currently disabled (confirm button is disabled)

### 5. State Management (Vuex)

#### Store Structure

**State:**
```javascript
{
  listGames: [],      // All games
  listDeals: [],      // All current deals
  listStores: [],     // Store information
  steam: [],          // Steam-specific deals
  humblebundle: [],   // Humble Bundle deals
  // ... 18+ more store-specific arrays
  alertConfig: {      // Price alert configuration
    action: null,
    email: null,
    gameID: null,
    price: 0
  }
}
```

**Getters:**
- Return top 5 deals for each store
- Example: `steamDeals`, `humbleDeals`, `gogDeals`, etc.
- `listDeals`: Returns all deals

**Note**: The current implementation uses `splice(0, 5)` in getters, which mutates the state array. This should be `slice(0, 5)` to avoid side effects and comply with Vuex best practices. This is a known issue.

**Mutations:**
- `listGames`: Set games list
- `listStores`: Set stores list
- `listDeals`: Set all deals
- Store-specific mutations: `steam`, `humblebundle`, etc.
- `setAlertConfig`: Update alert configuration
- `clearAlertConfig`: Reset alert configuration

**Plugins:**
- `vuex-persistedstate`: Automatically persists state to localStorage

#### Caching Strategy

The application implements a smart caching strategy:

1. **Daily Refresh**: Cache is tied to the current date
2. **Storage Check**: On app load, compares cached date with current date
3. **Conditional Fetch**: Only fetches new data if:
   - No cache exists
   - Cached date differs from current date
4. **Persistence**: Vuex state persisted via localStorage

This approach:
- Reduces API calls significantly
- Improves load times for returning users
- Ensures data freshness (daily updates)
- Respects CheapShark API rate limits

### 6. API Integration Layer

#### CheapSharkAPI Class (Singleton)

**Location**: `src/api/cheapshark/index.ts`

**Pattern**: Singleton - ensures single instance across the app

**Methods:**

```typescript
// Game search and lookup
getGames(params: GameParams)
gameLookup(id: string)
multiGameLookup(ids: string)

// Deal retrieval
gameDeals(params: DealParams)
gameDealLookup(id: string)

// Store information
storeInfo(params = {})

// Price alerts
editAlertDeal({ action, email, gameID, price })
manageAlertDeal({ action, email })
```

**Error Handling:**
- Try-catch blocks for all async operations
- Console error logging
- Error propagation to calling components

**Type Safety:**
- TypeScript interfaces for parameters
- GameParams, DealParams, AlertParams interfaces
- Ensures type-safe API calls

### 7. Plugin Configuration

#### Vuetify (`plugins/vuetify.js`)
- Material Design component framework
- Theming and styling
- Responsive grid system
- UI components (buttons, cards, tables, dialogs, etc.)

#### Vue Crontab (`plugins/vue-crontab.js`)
- Scheduled task functionality
- Potential for automatic deal refresh

## Data Flow

### Initial Load Sequence

1. **User visits application**
2. **Vue Router** determines which view to render
3. **View component** created
4. **Component lifecycle** (created hook):
   - Calls `getAllDeals()`
   - Calls `getAllStores()`
5. **Cache check**:
   - Read localStorage for cached date
   - Compare with current date
6. **Data fetch** (if cache is stale):
   - API client calls CheapShark API
   - Multiple parallel requests for different stores
   - 20+ individual API calls per store
7. **State update**:
   - Mutations commit data to Vuex store
   - Vuex persists to localStorage
8. **Render**:
   - Computed properties derive display data
   - Components render with fresh data

### Search Flow (BrowserView)

1. **User types** in search field
2. **v-data-table** filters deals locally
3. **Real-time results** displayed
4. **No API calls** - all data already in state

### Price Alert Flow (Planned)

1. **User clicks** alert button on deal
2. **Dialog opens** requesting email
3. **User enters** email and price threshold
4. **API call** to CheapShark alert endpoint
5. **Confirmation** displayed to user
6. **CheapShark** monitors price and sends email when threshold met

## Technology Decisions

### Why Vue 2.7?
- Stable, mature framework
- Large ecosystem of plugins
- Composition API backported from Vue 3
- Compatible with Vuetify 2

### Why Vuetify?
- Complete Material Design component library
- Responsive by default
- Rich data table component
- Consistent UI/UX

### Why Vuex?
- Centralized state management
- Predictable state mutations
- DevTools support
- Plugin ecosystem (persistence)

### Why Singleton for API Client?
- Single point of configuration
- Shared instance reduces overhead
- Centralized error handling
- Consistent API interface

### Why LocalStorage Caching?
- Reduces API load
- Faster initial renders
- Works offline (with stale data)
- Simple implementation

## Performance Considerations

### Optimizations
1. **Lazy Loading**: BrowserView loaded on-demand (webpack chunk)
2. **Data Caching**: Reduces redundant API calls
3. **Image Lazy Loading**: Store logos load progressively
4. **Computed Properties**: Efficient data derivation
5. **Skeleton Loaders**: Perceived performance improvement

### Potential Improvements
1. **Virtual Scrolling**: For large deal lists
2. **Request Batching**: Combine multiple store requests
3. **Service Worker**: For true offline support
4. **Code Splitting**: Further reduce initial bundle
5. **Image Optimization**: Compress and cache store logos

## Security Considerations

### Current State
- Client-side only application
- No authentication required
- No sensitive data storage
- External API dependency

### Recommendations
1. **Environment Variables**: API endpoint configuration
2. **Rate Limiting**: Respect CheapShark API limits
3. **Input Validation**: Sanitize search inputs
4. **XSS Prevention**: Vue's automatic escaping
5. **HTTPS**: Ensure secure API communication

## Scalability

### Current Limitations
1. **API Dependency**: Reliant on CheapShark availability
2. **Client-Side Processing**: Limited by browser capabilities
3. **No Pagination**: Loads all deals at once
4. **No Backend**: Cannot implement advanced features

### Growth Path
1. **Backend Service**: For caching and aggregation
2. **Database**: Store historical price data
3. **User Accounts**: Save favorite games and alerts
4. **Real-time Updates**: WebSocket for live deal notifications
5. **Analytics**: Track popular games and deals

## Deployment

### Build Process
1. **Development**: `npm run serve` - Hot reload server
2. **Production**: `npm run build` - Optimized bundle
3. **Output**: Static files in `/dist` directory
4. **Hosting**: Can deploy to any static host (Vercel, GitHub Pages, etc.)

### Environment Configuration
- `process.env.BASE_URL`: Base URL for router
- `process.env.NODE_ENV`: Development/production mode

## Testing Strategy

### Current State
No automated tests currently implemented.

### Recommended Testing
1. **Unit Tests**: 
   - API client methods
   - Vuex mutations and getters
   - Utility functions
2. **Component Tests**:
   - Component rendering
   - User interactions
   - Data binding
3. **E2E Tests**:
   - Complete user flows
   - Navigation
   - Search functionality

### Testing Tools Recommendations
- Jest: Unit testing
- Vue Test Utils: Component testing
- Cypress: E2E testing

## Browser Compatibility

Targets modern browsers as defined in `.browserslistrc`:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

### Short Term
1. Complete price alert functionality
2. Add user favorites
3. Implement sorting options
4. Add price history graphs
5. Mobile app version

### Long Term
1. User authentication
2. Social features (share deals)
3. Price prediction (ML)
4. Multi-currency support
5. Regional pricing
6. Deal notifications
7. Community ratings and reviews

## Conclusion

The Game Compare Prices application demonstrates a well-structured Vue.js application with clear separation of concerns, efficient state management, and smart caching strategies. The architecture is suitable for the current scope and can be evolved to support more advanced features as the application grows.
