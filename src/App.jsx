import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './Pages/Landing.pg';
import LogIn from './pages/LogIn';
import Register from './pages/Registor';
import ShoppingForm from './Pages/ShoppingForm';
import View from './Pages/View'
import { AuthProvider } from './Pages/authContex';
import PrivacyPolicy from './Components/Privacy'
import NoPage from './Pages/NoPage'
import ShoppingList from './Pages/ShoppingList';

const App = () => {
  return (
    <AuthProvider>
    <div className="flex flex-col min-h-screen">
    
      <Router>
       
        <Navigation />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
          <Route path="/privacy" element={<PrivacyPolicy/>} /> 
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<ShoppingForm />} />
            <Route path="/all" element={<View />} />
            <Route path="/list/:id" element={<ShoppingList />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    </AuthProvider>
  );
};

export default App;
