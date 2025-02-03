# JigJoy UI

JigJoy UI is a React UI library based on Tailwind CSS, inspired by HeroUI. It provides a collection of modern, accessible, and highly customizable components to streamline your development process.

## Installation

Before installing JigJoy UI, ensure that your project is set up with Tailwind CSS (v4). You can find installation guides for different frameworks on the official Tailwind CSS site:

[Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation/framework-guides)

### Step 1: Install Dependencies

Once Tailwind CSS is set up in your project, install `framer-motion` and `@jigjoy-io/ui` by running the following command:

```sh
npm install @jigjoy-io/ui framer-motion
```

### Step 2: Update Your Styles

Modify your `index.css` file to ensure Tailwind can access JigJoy UI styles. Add the following imports:

```css
@import "../node_modules/@jigjoy-io/ui/dist/index.css";
@import "../node_modules/@jigjoy-io/ui/dist/theme.css";

@import "tailwindcss";
```

### Step 3: Wrap Your App with `JigJoyUIProvider`

To use JigJoy UI components, wrap your application with `JigJoyUIProvider` in your `index.tsx` file:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { JigJoyUIProvider } from "@jigjoy-io/ui";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <JigJoyUIProvider theme="dark">
    <RouterProvider router={router} />
  </JigJoyUIProvider>
);
```

## Usage

Once the setup is complete, you can start using JigJoy UI components in your React application.

## License

JigJoy UI is open-source and licensed under the MIT License.

