
# FAIRflow

FAIRflow is an interactive web application built with **React** and **Vite** that allows users to visualize data streams and learn about FAIR principles. It is hosted on **GitHub Pages**.

## Features

- **Data Stream Plot:** View a real-time plot of a simulated random-walk data stream, with a button to generate a new stream on demand.
- **FAIR Principles:** Learn about FAIR principles, which promote Findability, Accessibility, Interoperability, and Reusability of data.

## Live Demo

The app is deployed on GitHub Pages:  
👉 **[https://garethcmurphy.github.io/OpenFAIRDataAI/](https://garethcmurphy.github.io/OpenFAIRDataAI/)**

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Recharts](https://recharts.org/) | Data visualisation |
| [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) | Unit testing |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Hosting |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/garethcmurphy/OpenFAIRDataAI.git
   cd OpenFAIRDataAI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run unit tests |
| `npm run lint` | Lint source files |

## Deployment

The app is automatically built and deployed to GitHub Pages on every push to `main` via the [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow.

To enable GitHub Pages in your fork:

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.

## Project Structure

```
OpenFAIRDataAI/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── DataStream.jsx   # Data stream chart component
│   │   ├── FairPrinciples.jsx  # FAIR principles content
│   │   └── Sidebar.jsx      # Navigation sidebar
│   ├── test/             # Vitest unit tests
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Contributing

Contributions are welcome! Please create a new issue or submit a pull request if you have any suggestions, feature requests, or bug fixes.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

