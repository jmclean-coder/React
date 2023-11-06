import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// identifying the root in our webpage, telling react where to inject our React App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
