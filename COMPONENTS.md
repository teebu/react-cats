# Component Documentation

## Overview

This document provides comprehensive documentation for all React components in the React Cats application.

## Table of Contents

- [Core Components](#core-components)
- [Feature Components](#feature-components)
- [Utility Components](#utility-components)
- [Page Components](#page-components)
- [Custom Hooks](#custom-hooks)
- [Context Providers](#context-providers)

---

## Core Components

### App
**Location:** `src/App.tsx`

Main application component with routing and error boundaries.

**Features:**
- HashRouter configuration for GitHub Pages
- Lazy-loaded page components
- Error boundary wrapper
- Loading fallback with animated cat icon
- Skip-to-content link for accessibility

---

### Nav
**Location:** `src/helpers/nav.tsx`

Main navigation component with responsive hamburger menu.

**Props:** None

**Features:**
- Responsive mobile menu
- Theme toggle integration
- Favorites badge with count
- Keyboard accessible

---

### ErrorBoundary
**Location:** `src/components/ErrorBoundary.tsx`

Catches JavaScript errors anywhere in the component tree.

**Props:**
- `children: ReactNode` - Components to wrap

**Features:**
- Graceful error handling
- Error logging
- User-friendly error message

---

## Feature Components

### ThemeToggle
**Location:** `src/components/ThemeToggle.tsx`

Button to toggle between light and dark themes.

**Props:** None

**Features:**
- Uses ThemeContext
- Smooth transitions
- Accessible with ARIA labels
- Emoji icons (🌙/☀️)

---

### FavoriteButton
**Location:** `src/components/FavoriteButton.tsx`

Heart button to favorite/unfavorite cat images.

**Props:**
```typescript
interface FavoriteButtonProps {
  catId: string;
  catUrl: string;
  width?: number;
  height?: number;
}
```

**Features:**
- Uses FavoritesContext
- Animated heart icon (🤍/❤️)
- localStorage persistence
- Hover and active states

---

### SearchBar
**Location:** `src/components/SearchBar.tsx`

Reusable search input with debouncing.

**Props:**
```typescript
interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number; // Default: 300ms
}
```

**Features:**
- Debounced search
- Clear button
- Accessible with ARIA labels

---

### ShareButton
**Location:** `src/components/ShareButton.tsx`

Share button using Web Share API with clipboard fallback.

**Props:**
```typescript
interface ShareButtonProps {
  url: string;
  title: string;
  text?: string;
}
```

**Features:**
- Web Share API for mobile
- Clipboard copy fallback for desktop
- Visual feedback on copy

---

### SkipLink
**Location:** `src/components/SkipLink.tsx`

Accessibility link to skip to main content.

**Props:** None

**Features:**
- Hidden until focused
- Keyboard accessible
- Jumps to main content

---

## Utility Components

### Skeleton
**Location:** `src/components/Skeleton.tsx`

Loading skeleton placeholder.

**Props:**
```typescript
interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}
```

**Features:**
- Shimmering animation
- Customizable dimensions
- Dark mode support

---

### ImageGridSkeleton
**Location:** `src/components/ImageGridSkeleton.tsx`

Grid of skeleton placeholders for image loading.

**Props:**
```typescript
interface ImageGridSkeletonProps {
  count?: number; // Default: 9
}
```

---

### ImageHolder
**Location:** `src/helpers/ImageHolder.tsx`

Progressive image loading component.

**Props:**
```typescript
interface ImageHolderProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}
```

**Features:**
- Progressive image loading
- Blur-up effect
- Responsive sizing

---

## Page Components

### Home
**Location:** `src/pages/Home.tsx`

Home page with auto-refreshing cat carousel.

**Features:**
- Interval-based cat refresh (15 seconds)
- Random cat from API

---

### Cats
**Location:** `src/pages/Cats.tsx`

Grid of cat images with infinite scroll.

**Props:**
```typescript
interface CatsProps {
  size?: number; // Default: 15
}
```

**Features:**
- Infinite scroll with Intersection Observer
- Favorite buttons on each cat
- Loading indicators
- End of results message

---

### Breeds
**Location:** `src/pages/Breeds.tsx`

Searchable list of cat breeds.

**Features:**
- Search by name, country, or pattern
- Results count display
- Loading skeleton

---

### Facts
**Location:** `src/pages/Facts.tsx`

Searchable list of cat facts.

**Features:**
- Search by fact content
- Results count display
- Loading skeleton

---

### Favorites
**Location:** `src/pages/Favorites.tsx`

User's favorited cats.

**Features:**
- Grid layout of favorites
- Empty state
- Remove from favorites
- Link to explore more cats

---

### CatDetail
**Location:** `src/pages/CatDetail.tsx`

Detailed view of a single cat.

**Features:**
- Large cat image
- Favorite button
- Share button
- Back to cats navigation

---

### About
**Location:** `src/pages/About.tsx`

Information about the project.

---

## Custom Hooks

### useTheme
**Location:** `src/context/ThemeContext.tsx`

Hook to access and control theme.

**Returns:**
```typescript
{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
```

**Usage:**
```typescript
const { theme, toggleTheme } = useTheme();
```

---

### useFavorites
**Location:** `src/context/FavoritesContext.tsx`

Hook to manage favorite cats.

**Returns:**
```typescript
{
  favorites: FavoriteCat[];
  addFavorite: (cat: FavoriteCat) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  favoritesCount: number;
}
```

---

### useFetch
**Location:** `src/hooks/useFetch.ts`

Generic data fetching hook.

**Parameters:**
```typescript
useFetch<T>(url: string, dependencies?: unknown[])
```

**Returns:**
```typescript
{
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}
```

---

### useLocalStorage
**Location:** `src/hooks/useLocalStorage.ts`

Hook for localStorage with type safety.

**Parameters:**
```typescript
useLocalStorage<T>(key: string, initialValue: T)
```

**Returns:**
```typescript
[T, Dispatch<SetStateAction<T>>]
```

---

### useInterval
**Location:** `src/hooks/useInterval.ts`

Safe interval hook following React best practices.

**Parameters:**
```typescript
useInterval(callback: () => void, delay: number | null)
```

---

### useInfiniteScroll
**Location:** `src/hooks/useInfiniteScroll.ts`

Infinite scroll with Intersection Observer.

**Parameters:**
```typescript
interface UseInfiniteScrollProps {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  rootMargin?: string;
  threshold?: number;
}
```

**Returns:**
```typescript
React.RefObject<HTMLDivElement>
```

---

### useCatApi
**Location:** `src/hooks/useCatApi.ts`

Hook for fetching cat images from TheCatAPI.

**Parameters:**
```typescript
interface UseCatApiOptions {
  limit?: number;
  breed_ids?: string;
  autoFetch?: boolean;
}
```

**Returns:**
```typescript
{
  cats: CatImage[];
  loading: boolean;
  error: Error | null;
  fetchCats: () => void;
}
```

---

### useCatBreeds
**Location:** `src/hooks/useCatApi.ts`

Hook for fetching cat breeds.

**Returns:**
```typescript
{
  breeds: CatBreed[];
  loading: boolean;
  error: Error | null;
}
```

---

## Context Providers

### ThemeProvider
**Location:** `src/context/ThemeContext.tsx`

Provides theme state and controls.

**Features:**
- localStorage persistence
- System preference detection
- Smooth theme transitions

---

### FavoritesProvider
**Location:** `src/context/FavoritesContext.tsx`

Provides favorites state and management.

**Features:**
- localStorage persistence
- Add/remove favorites
- Favorites count

---

## Styling

### CSS Variables

The app uses CSS custom properties for theming:

```css
/* Light Theme */
--bg-primary: #ffffff
--text-primary: #000000
--nav-bg: #293953

/* Dark Theme */
--bg-primary: #1a1a1a
--text-primary: #e0e0e0
--nav-bg: #0f1419
```

### Typography

- **Body Font:** Inter (Google Fonts)
- **Heading Font:** Poppins (Google Fonts)
- **Fluid Typography:** Using CSS clamp() for responsive sizing

---

## Best Practices

1. **TypeScript:** All components use strict TypeScript with proper interfaces
2. **Accessibility:** ARIA labels, keyboard navigation, skip links
3. **Performance:** Lazy loading, code splitting, image optimization
4. **Responsive:** Mobile-first design with breakpoints
5. **Error Handling:** Error boundaries and try-catch blocks
6. **Testing:** Vitest for unit and integration tests

---

## Contributing

When adding new components:

1. Create TypeScript interfaces for props
2. Add proper ARIA labels
3. Support dark mode
4. Make it responsive
5. Write tests
6. Document in this file
