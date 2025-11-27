# Questionnaire

Senior React Interview Questions - A comprehensive collection of interview questions and answers for React and React Native developers. Access it at [https://kalstack.com](https://kalstack.com)

## Getting Started

To run this application:

```bash
npm install
npm run start
```

## Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Linting & Formatting

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
npm run lint
npm run format
npm run check
```

## T3Env

T3Env can be used to add type safety to environment variables.

- Add environment variables to the `src/env.mjs` file
- Use the environment variables in your code

### Usage

```ts
import { env } from '@/env'

console.log(env.VITE_APP_TITLE)
```

## Shadcn

Components can be added using the latest version of [Shadcn](https://ui.shadcn.com/).

```bash
pnpx shadcn@latest add button
```

## Routing

This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add another a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from '@tanstack/react-router'
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you use the `<Outlet />` component.

Here is an example layout that includes a header:

```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```

The `<TanStackRouterDevtools />` component is not required so you can remove it if you don't want it in your layout.

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Git Branching Strategy: GitHub Flow

This project follows [GitHub Flow](https://www.geeksforgeeks.org/git/branching-strategies-in-git/), a streamlined branching model ideal for smaller teams and continuous deployment.

**Core Concepts:**

- **Main Branch**: Contains stable, production-ready code
- **Feature Branches**: Created from `main` for new features or bug fixes, then merged back after completion

**Key Advantages:**

- Fast, frequent releases aligned with Agile methodologies
- Quick feedback loops for identifying and resolving issues
- Single production version with continuous deployment
- Well-suited for small teams and web applications

**Important Notes:**

- Resolve merge conflicts before merging to `main`
- Ensure changes are tested before merging to maintain production stability

For more details on branching strategies, see the [Git Branching Strategies Guide](https://www.geeksforgeeks.org/git/branching-strategies-in-git/).

**Continuous Integration & Deployment:**

- When a PR is opened, the `ci.yml` workflow runs automated checks
- PRs can only be merged to `main` if CI checks pass successfully
- Merging to `main` automatically triggers a production deployment
- This enables fast, reliable releases with minimal manual intervention

## Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).
