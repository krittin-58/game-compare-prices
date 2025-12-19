# Contributing Guide

Welcome to the Game Compare Prices project! This guide will help you get started with development, understand our coding standards, and contribute effectively.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Setup](#development-setup)
3. [Project Structure](#project-structure)
4. [Coding Standards](#coding-standards)
5. [Development Workflow](#development-workflow)
6. [Testing](#testing)
7. [Pull Request Process](#pull-request-process)
8. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v14.x or higher (v16.x recommended)
- **npm**: v6.x or higher (comes with Node.js)
- **Git**: For version control
- **Code Editor**: VS Code recommended with Vue extensions

### Recommended VS Code Extensions

- **Vetur**: Vue tooling for VS Code
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Vue VSCode Snippets**: Code snippets for Vue
- **TypeScript Vue Plugin (Volar)**: Enhanced TypeScript support

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/krittin-58/game-compare-prices.git
cd game-compare-prices
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages defined in `package.json`:
- Vue.js and Vue Router
- Vuetify (UI framework)
- Vuex (state management)
- Axios (HTTP client)
- TypeScript and related tools
- Development dependencies

### 3. Start Development Server

```bash
npm run serve
# or
npm run dev
```

The application will start at `http://localhost:8080` with hot-reload enabled.

### 4. Build for Production

```bash
npm run build
```

Production-ready files will be generated in the `/dist` directory.

### 5. Lint Code

```bash
npm run lint
```

This will check and auto-fix linting issues using ESLint.

## Project Structure

Understanding the project structure is crucial for effective contribution:

```
game-compare-prices/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── favicon.ico        # Site icon
├── src/                   # Source code
│   ├── api/              # API integration
│   │   └── cheapshark/   # CheapShark API client
│   │       ├── index.ts  # TypeScript API client
│   │       └── index.js  # JavaScript fallback
│   ├── assets/           # Images, fonts, etc.
│   │   ├── logo.png
│   │   └── logo.svg
│   ├── components/       # Reusable Vue components
│   │   └── Nav.vue       # Navigation component
│   ├── plugins/          # Vue plugins
│   │   ├── vuetify.js    # Vuetify configuration
│   │   └── vue-crontab.js
│   ├── router/           # Vue Router configuration
│   │   └── index.js      # Route definitions
│   ├── store/            # Vuex store
│   │   └── index.js      # State, mutations, getters
│   ├── views/            # Page components
│   │   ├── HomeView.vue  # Main deals page
│   │   └── BrowserView.vue # Search page
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── docs/                 # Documentation
│   ├── ARCHITECTURE.md   # Architecture documentation
│   ├── API.md           # API documentation
│   └── CONTRIBUTING.md   # This file
├── .browserslistrc      # Browser compatibility
├── .gitignore           # Git ignore rules
├── babel.config.js      # Babel configuration
├── jsconfig.json        # JavaScript configuration
├── tsconfig.json        # TypeScript configuration
├── vue.config.js        # Vue CLI configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project overview
```

## Coding Standards

### JavaScript/TypeScript Style

We follow standard JavaScript/TypeScript best practices with ESLint configuration.

#### General Guidelines

1. **Use `const` and `let`**: Never use `var`
2. **Arrow Functions**: Prefer arrow functions for callbacks
3. **Async/Await**: Use async/await over promises chains
4. **Template Literals**: Use template literals for string interpolation
5. **Semicolons**: Required at the end of statements

#### Examples

**Good:**
```javascript
// Arrow function
const getAllDeals = async () => {
  const response = await cheapshark.gameDeals();
  return response;
};

// Template literals
const imageUrl = `https://www.cheapshark.com/${path}`;

// Const for immutable values
const storeId = 1;
```

**Avoid:**
```javascript
// Old function syntax for simple callbacks
function getAllDeals() { ... }

// String concatenation
var imageUrl = 'https://www.cheapshark.com/' + path;

// Var declaration
var storeId = 1;
```

### Vue.js Style Guide

Follow the [Official Vue.js Style Guide](https://vuejs.org/style-guide/).

#### Component Naming

- **PascalCase** for component files: `HomeView.vue`, `Nav.vue`
- **kebab-case** for component tags in templates: `<nav-vue>`, `<router-view>`

#### Component Structure

Maintain consistent order in Vue components:

```vue
<template>
  <!-- Template content -->
</template>

<script>
// Imports
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ComponentName',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
/* Component-specific styles */
</style>
```

#### Props Validation

Always validate props with types:

```javascript
props: {
  title: {
    type: String,
    default: 'Default Title'
  },
  storeId: {
    type: Number,
    required: true
  }
}
```

### Vuex Conventions

#### State

- Keep state flat when possible
- Use arrays for lists
- Use objects for entities

#### Mutations

- **UPPERCASE** with underscores for mutation names
- Keep mutations synchronous
- Single responsibility

```javascript
mutations: {
  SET_DEALS(state, deals) {
    state.deals = deals;
  }
}
```

However, the current codebase uses camelCase for mutations (`listDeals`, `steam`, etc.). When contributing, match the existing style.

#### Getters

- Return derived state
- Use for computed values
- Keep pure (no side effects)

```javascript
getters: {
  steamDeals: (state) => state.steam.slice(0, 5)
}
```

### TypeScript Guidelines

When working with TypeScript files:

1. **Define Interfaces**: For function parameters and return types
2. **Use Type Annotations**: For better IDE support
3. **Avoid `any`**: Use specific types whenever possible
4. **Use Enums**: For sets of related constants

```typescript
interface GameParams {
  title?: string;
  steamAppID?: string;
  limit?: number;
}

async getGames(params: GameParams): Promise<Game[]> {
  // Implementation
}
```

### CSS/SCSS Guidelines

1. **Use Vuetify Classes**: Prefer Vuetify utility classes over custom CSS
2. **Scoped Styles**: Use `<style scoped>` for component-specific styles
3. **BEM Naming**: If custom CSS needed, use BEM methodology
4. **Mobile-First**: Design for mobile, enhance for desktop

## Development Workflow

### Branch Strategy

1. **main**: Production-ready code
2. **feature/feature-name**: New features
3. **fix/bug-description**: Bug fixes
4. **docs/documentation-topic**: Documentation updates

### Creating a Feature

1. **Create a branch**:
```bash
git checkout -b feature/price-history
```

2. **Make changes**:
   - Write code following style guidelines
   - Test your changes locally
   - Ensure no console errors

3. **Commit changes**:
```bash
git add .
git commit -m "feat: add price history tracking"
```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Build process or auxiliary tool changes

**Examples:**
```
feat: add price alert functionality
fix: correct store logo display issue
docs: update API documentation
refactor: simplify deal caching logic
```

### Testing Your Changes

#### Manual Testing Checklist

Before submitting a PR:

- [ ] Application starts without errors
- [ ] Navigation works correctly
- [ ] Deals load and display properly
- [ ] Search functionality works
- [ ] Store logos appear correctly
- [ ] No console errors
- [ ] Responsive design works on mobile
- [ ] Browser back/forward buttons work

#### Browser Testing

Test in major browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

### Debugging Tips

1. **Vue DevTools**: Install Vue DevTools browser extension
2. **Console Logs**: Use `console.log` for debugging (remove before committing)
3. **Vuex Inspector**: Check state in Vue DevTools Vuex tab
4. **Network Tab**: Monitor API calls in browser DevTools
5. **Vue Performance**: Use Vue DevTools performance tab

## Testing

### Current State

The project currently does not have automated tests.

### Adding Tests (Future)

When implementing tests, consider:

#### Unit Tests (Jest)

```javascript
// Example: Testing API client
import cheapshark from '@/api/cheapshark';

describe('CheapShark API', () => {
  it('fetches game deals', async () => {
    const deals = await cheapshark.gameDeals({ storeID: 1 });
    expect(deals).toBeDefined();
    expect(Array.isArray(deals)).toBe(true);
  });
});
```

#### Component Tests (Vue Test Utils)

```javascript
// Example: Testing Nav component
import { shallowMount } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';

describe('Nav.vue', () => {
  it('renders title prop', () => {
    const title = 'Test Title';
    const wrapper = shallowMount(Nav, {
      propsData: { title }
    });
    expect(wrapper.text()).toContain(title);
  });
});
```

## Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Run linter**: `npm run lint`
3. **Test thoroughly** on localhost
4. **Check git status**: Ensure only intended files are included
5. **Write clear commit messages**

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] Tested on multiple browsers
- [ ] No console errors

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Related Issues
Fixes #123
```

### Code Review

- Be open to feedback
- Respond to comments promptly
- Make requested changes
- Keep PRs focused (one feature/fix per PR)

## Common Tasks

### Adding a New Store

To add support for a new game store:

1. **Add store state in Vuex** (`src/store/index.js`):
```javascript
state: {
  newStore: []
}
```

2. **Add mutation**:
```javascript
mutations: {
  newStore(state, data) {
    state.newStore = data;
  }
}
```

3. **Add getter**:
```javascript
getters: {
  newStoreDeals: (state) => state.newStore.splice(0, 5)
}
```

4. **Fetch data in HomeView** (`src/views/HomeView.vue`):
```javascript
const newStoreDeals = await cheapshark.gameDeals({ storeID: XX });
this.$store.commit('newStore', newStoreDeals);
```

5. **Add display template** in HomeView.

### Adding a New Route

1. **Create view component** in `src/views/`
2. **Import in router** (`src/router/index.js`):
```javascript
import NewView from '../views/NewView.vue';
```

3. **Add route**:
```javascript
{
  path: '/new-route',
  name: 'newRoute',
  component: NewView
}
```

4. **Add navigation link** in Nav.vue

### Modifying the API Client

1. **Define TypeScript interface** for parameters
2. **Add method** to CheapSharkAPI class
3. **Include error handling**
4. **Export via singleton instance**
5. **Update API documentation**

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 8080
# macOS/Linux:
lsof -ti:8080 | xargs kill -9

# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

#### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vue CLI cache
rm -rf node_modules/.cache
```

#### CORS Issues

- Ensure API calls are made from the browser (not server-side)
- Check CheapShark API status
- Verify network connectivity

#### Vuetify Not Working

```bash
# Ensure Vuetify is properly imported
# Check src/plugins/vuetify.js
# Verify import in main.ts
```

#### TypeScript Errors

```bash
# Rebuild TypeScript
npm run build

# Check tsconfig.json for correct settings
```

### Getting Help

- Check existing issues on GitHub
- Review documentation in `/docs`
- Ask questions in discussions
- Contact project maintainers

## Best Practices Summary

1. **Write Clean Code**: Self-documenting, simple, and maintainable
2. **Follow Conventions**: Stick to established patterns
3. **Test Thoroughly**: Manual testing is required
4. **Document Changes**: Update docs when needed
5. **Small Commits**: Atomic, focused commits
6. **Code Review**: Review your own code before submitting
7. **Stay Updated**: Keep dependencies reasonably current
8. **Performance**: Consider performance implications
9. **Accessibility**: Follow basic accessibility guidelines
10. **Security**: Never commit secrets or API keys

## Resources

### Official Documentation

- [Vue.js Guide](https://vuejs.org/guide/)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Learning Resources

- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Tools

- [Vue DevTools](https://devtools.vuejs.org/)
- [Axios Documentation](https://axios-http.com/)
- [ESLint Rules](https://eslint.org/docs/rules/)

## Questions?

If you have questions about contributing, please:

1. Check the documentation
2. Search existing issues
3. Open a new issue with the `question` label
4. Contact the maintainers

Thank you for contributing to Game Compare Prices! 🎮
