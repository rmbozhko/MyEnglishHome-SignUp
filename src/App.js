import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { MainCont } from './components/MainCont/MainCont';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div className="App">
      {isModalVisible ? <Modal isSuccess={isSuccess} setIsModalVisible={setIsModalVisible} /> : null}
      <Header />
      <MainCont setIsSuccess={setIsSuccess} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <Footer />
    </div>
  );
}

export default App;