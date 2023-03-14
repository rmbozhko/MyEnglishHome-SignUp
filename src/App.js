import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { MainCont } from './components/MainCont/MainCont';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className="App">
      {isModalVisible ? <Modal isSuccess={isSuccess} setIsModalVisible={setIsModalVisible} /> : null}
      <Header isMobile={isMobile} />
      <MainCont isMobile={isMobile} setIsSuccess={setIsSuccess} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      {!isMobile && <Footer />}
    </div>
  );
}

export default App;