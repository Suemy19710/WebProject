// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
// import App from './routes/App'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)

import { createRoot } from 'react-dom/client';
import App from './routes/App';
import './config/firebase';

// Render the app without StrictMode to avoid findDOMNode warning
const root = createRoot(document.getElementById('root'));
root.render(<App />);