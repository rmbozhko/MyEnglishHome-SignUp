import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Modal } from './components/Modal/Modal';
import { MainCont } from './components/MainCont/MainCont';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div className="App">
      {isModalVisible ? <Modal setIsModalVisible={setIsModalVisible} /> : null}
      <Header />
      <MainCont setIsModalVisible={setIsModalVisible} />
      <Footer />
    </div>
  );
}

export default App;
