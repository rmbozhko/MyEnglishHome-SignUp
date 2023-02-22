import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { SignUpForm } from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default App;
