import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set custom page title
document.title = 'World Vision Analytics - Economic Intelligence Dashboard';

createRoot(document.getElementById("root")!).render(<App />);
