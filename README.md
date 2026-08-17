# Movies App

A React + TypeScript SPA built with Vite, extending the base Movies lab app with actors, authentication, and protected routes.

---

## Features Added

### New Data Entity — Actors

A new data entity, **Actor**, was introduced with its own API calls, components, and pages.

**New API functions** (`src/api/tmdb-api.ts`):
- `getPopularActors(page)` — fetches paginated popular actors from TMDB `/person/popular`
- `getTrending(range, page)` — fetches trending actors for `"day"` or `"week"` from TMDB `/trending/person/{range}`
- `getActorDetails(id)` — fetches a single actor's biography, birthday, place of birth, and profile image

**New components**:
- `ActorCard` — displays actor name, gender, popularity, profile image, and a "More Info" link
- `ActorList` — renders a grid of `ActorCard` components
- `TemplateActorListPage` — page layout wrapper for actor list pages
- `TemplateActorPage` — page layout for actor detail, showing profile image alongside detail content
- `ActorDetails` — displays actor biography, birthday, place of birth, department, and popularity
- `ToggleButton` — MUI `ToggleButtonGroup` for selecting trending range (Today / This Week / All Time)

**New pages**:
- `/actors/popular` — paginated list of popular actors; authenticated users can filter by trending range
- `/actors/:id` — actor detail page (parameterised URL)

**New types** (`src/types/interfaces.ts`):
- `Actor`, `PopularActors`, `ActorResults`, `ActorDetailsProps`

---

### Pagination

The Popular Actors page supports page navigation using React Query's `keepPreviousData`:
- Previous / Next buttons navigate between pages
- `hasMore` flag (derived from TMDB `total_pages`) disables Next on the last page
- Page resets to 1 when the trending filter changes

---

### Authentication & Protected Routes

**New files**: `src/contexts/authContext.tsx`, `src/components/protectedRoute/index.tsx`, `src/pages/loginPage.tsx`, `src/utils.ts`

- `AuthContext` manages a session token using `fakeAuth`; exposes `authenticate` and `signout`
- `ProtectedRoute` wraps routes that require login — unauthenticated users are redirected to `/login` with the originally requested location stored in router state (`intent`)
- After login, `AuthContext` reads `location.state.intent` and redirects back to the intended page
- `/movies/favourites` is protected — requires authentication to access
- On `/actors/popular`, the trending toggle is a **premium feature** — it is hidden from unauthenticated users; a login prompt is shown instead, which also passes `intent` so the user returns to the actors page after login. Authenticated users can filter actors by "Today", "This Week", or "All Time" using a MUI `ToggleButtonGroup` that switches between the TMDB `/trending/person/{range}` and `/person/popular` endpoints.

---

### Additional Route

- `/actors/:id` — parameterised route linking each actor card to their detail page

---

### Site Header

`src/components/siteHeader/index.tsx` was updated to include navigation links for the new pages and a sign-out button when a user is authenticated.

---

## Setup

### Prerequisites
- Node.js
- A [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
npm install
```

Create a `.env` file in the root:
```
VITE_TMDB_KEY=your_api_key_here
```

Start the dev server:
```bash
npm run dev
```

### Other Scripts
```bash
npm run build        # production build
npm run storybook    # launch Storybook on port 6006
npm run lint         # run ESLint
```

---