// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Navigate,
// } from 'react-router-dom';

// import Layout from './Pages/Layout';
// import PDFProcessor from './Pages/PdfProcessor';
// import DocumentContainer from './components/document-management/DocumentContainer';
// import MissingDocsDashboard from './components/document-management/MissingDocsDashboard';

// const App = () => {
//   // Define the Router
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route>
//         <Route path="/" element={<Layout />}>
//           <Route
//             path="/my-files"
//             element={

//               <DocumentContainer />
             
//             }
//           />

//           <Route
//             path="/new-workflow"
//             element={
//               <PDFProcessor />
//             }
//           />
//           <Route
//             path="/"
//             element={
              
//               // <PDFUploaderPage />
//               <MissingDocsDashboard />
             
//             }
//           />
          
         
          
//         </Route>
        
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// };

// // Render the App
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );



import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

import Layout from './Pages/Layout';
import PDFProcessor from './Pages/PdfProcessor';
import DocumentContainer from './components/document-management/DocumentContainer';
import MissingDocsDashboard from './components/document-management/MissingDocsDashboard';
import { LoginPage } from './Pages/LoginPage';
import ExternalIntegrations from './Pages/ExternalIntegrations';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const auth = localStorage.getItem('auth');
      setIsAuthenticated(auth === 'true');
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const handleLogin = (password) => {
    // For demo purposes - replace with real authentication
    if (password === "1234") {
      localStorage.setItem('auth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        
        <Route
          element={<Layout isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
        >
          <Route
            path="/"
            element={<MissingDocsDashboard />}
          />
          
          <Route
            path="/my-files"
            element={<DocumentContainer />}
          />
          
          <Route
            path="/new-workflow"
            element={<PDFProcessor />}
          />
          <Route
            path='/external-integrations'
            element={<ExternalIntegrations/>}
          />
        </Route>

        {/* Redirect unmatched routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);