# World Vision Dashboard

A modern, responsive economic intelligence dashboard built with React, TypeScript, and Tailwind CSS. This project provides comprehensive data visualization for economic indicators including GDP trends, unemployment rates, and inflation analysis.

## Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **Interactive Charts**: Beautiful data visualizations using Recharts
- **Authentication System**: Protected routes with user management
- **Real-time Data**: Dynamic data filtering and updates
- **TypeScript**: Full type safety and better development experience

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Build Tool**: Vite for fast development and building
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd world-vision-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── charts/         # Chart components
│   └── ui/            # shadcn/ui components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── utils/              # Utility functions and mock data
└── lib/                # Library configurations
```

## Features Overview

### Dashboard
- Economic indicators overview
- Interactive data filters
- Real-time chart updates
- Responsive grid layout

### Authentication
- User login/logout
- Protected routes
- Session management

### Data Visualization
- Line charts for trends
- Bar charts for comparisons
- Dynamic data filtering
- Responsive chart layouts

## Customization

The dashboard is highly customizable:
- Modify color schemes in `tailwind.config.ts`
- Update chart configurations in chart components
- Add new data sources in `utils/mockData.ts`
- Extend the design system in `lib/utils.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with modern web technologies
- Inspired by data-driven decision making
- Designed for economic analysts and researchers
