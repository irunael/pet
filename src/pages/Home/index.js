import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pet1 from '../../assets/images/Home/Pet1.png'; 
import pet2 from '../../assets/images/Home/Pet2.png'; 
import celular from '../../assets/images/Home/Celular.png'; 
import gato_maltratado from '../../assets/images/Home/Gato_mal_tratado.jpg'; 
import pontos from '../../assets/images/Home/Pontos.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './css/styles.css';

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    "takn-e-Ug7E",
    "4QxjNX-8k7c",
    "n0wT5cjC4A8"
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="app">
      <Header />
      
      <div id="divulgacao">
        <div id="cara">
          <h1 id="titulo">Pet Vita <br /> é cuidado</h1>
          <div id="btn_consulta">
            <Link to="/pets" className="consulta-link">
              <button id="consulta">Acessar Perfil do Pet</button>
            </Link>
          </div>
        </div>
        
        <div id="info_quadro">
          <div id="info_quadro_texto">
            <h3>Confie-nos o melhor cuidado para o seu animal de estimação</h3>
            <p>Nossa equipe se dedica a garantir a felicidade e a saúde do seu amigo peludo</p>
          </div>
          <div id="info_quadro_imagens">
            <img src={pet1} alt="Cachorro 1" className="imagem-cachorro" />
            <img src={pet2} alt="Cachorro 2" className="imagem-cachorro" />
          </div>
          <div id="info_quadro_numeros">
            <div className="numero-item">
              <span className="numero">120+</span>
              <span className="label">Clientes</span>
            </div>
            <div className="numero-item">
              <span className="numero">130+</span>
              <span className="label">Animais em nosso cuidado</span>
            </div>
            <div className="numero-item">
              <span className="numero">145+</span>
              <span className="label">Parceiros</span>
            </div>
          </div>
        </div>
        
        <div id="infos">
          <div id="info_cell">
            <div id="cell">
              <img src={celular} alt="Imagem do aplicativo" />
            </div>
            <div id="info_cell_texto">
              <h4>Aplicativo</h4>
              <p>Temos também aplicativo mobile para cuidar do seu pet</p>
              <button>Conheça nosso aplicativo de perto</button>
            </div>
          </div>
          <div id="info_nos">
            <div id="info_pontinhos">
              <img src={pontos} alt="Imagem sobre nós" />
            </div>
            <div id="info_pontinhos_texto">
              <h4>Sobre nós</h4>
              <p>Conheça um pouco mais sobre nossa empresa</p>
              <button>Clique aqui</button>
            </div>
          </div>
        </div>
      </div>

      <div id="quadro_imagens">
        <div id="texto_quadro_imagens">
          <h4>Cuidado</h4>
          <p>Na Pet Vita, acreditamos que os pets são mais do que animais de estimação — são membros da família...</p>
        </div>
        <div id="videos">
          <div className="carrossel-container">
            <div className="carrossel" style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}>
              {videos.map((videoId, index) => (
                <div className="carrossel-item" key={videoId}>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Vídeo ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
            <button className="carrossel-btn anterior" onClick={prevVideo}>
              &lt;
            </button>
            <button className="carrossel-btn proximo" onClick={nextVideo}>
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div id="card_sentimento">
        <div id="card_sentimento_imagem">
          <img src={gato_maltratado} alt="Gato sendo cuidado" />
        </div>
        <div id="card_sentimento_texto">
          <h4>Cada animal merece uma segunda chance.</h4>
          <p>A imagem ao lado mostra um gatinho machucado...</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;