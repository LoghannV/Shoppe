import React,{useState,useEffect} from 'react'
import Menu from './componentes/Menu';
import Carroseul from './componentes/Carroseul';
import CarroseulItem from './componentes/CarrouselItem';
import CarrouselIndicators from './componentes/CarrouselIndicators';
import ButtonIndicator from './componentes/ButtonIndicator';
import IconButton from './componentes/icon/IconButton';
import CarroseulCard from './componentes/CarrouselCard';
import CarroseulBoxCard from './componentes/CarroseulBoxCard';

function App() {

  return (
    <>
      <Menu/>
      <div class="row container mx-auto mt-1">
          <div class="col-8 ">
            <Carroseul ident="carouselExampleIndicators">
              <CarrouselIndicators>
                  <ButtonIndicator target="#carouselExampleIndicators" slide="0" cls="active"/>
                  <ButtonIndicator target="#carouselExampleIndicators" slide="1" cls=""/>
                  <ButtonIndicator target="#carouselExampleIndicators" slide="2" cls=""/>
              </CarrouselIndicators>
                <div class="carousel-inner">
                    <CarroseulItem img="./img/catalogo/1.jpg" classe="carousel-item active"/>
                    <CarroseulItem img="./img/catalogo/2.jpg" classe="carousel-item"/>
                    <CarroseulItem img="./img/catalogo/3.webp" classe="carousel-item"/>
                </div>
            </Carroseul>
          </div>
          <div class="col-4">
             <img src='./img/promocoes/2.png' class="img-fluid mb-1"/>
             <img src='./img/promocoes/2.png' class="img-fluid"/>
          </div>
      </div>
      <div class="bg-light container p-1 icon-main">
        <div class="icon-box">
          <IconButton img="../img/Icons/coin.svg" descricao="Moedas" target="pagina de vendas"/>
          <IconButton img="../img/Icons/game.svg" descricao="Jogos e Premios" target="pagina de jogos"/>
          <IconButton img="../img/Icons/truck.svg" descricao="Frete Gratis" target="pagina de frete"/>
          <IconButton img="../img/Icons/cupom.svg" descricao="Cupons" target="pagina de cupons"/>
          <IconButton img="../img/Icons/shopp.svg" descricao="ShoPP Oficial" target="pagina de ShoPP"/>
          <IconButton img="../img/Icons/mercado.svg" descricao="Mercado" target="pagina de Mercado"/>
          <IconButton img="../img/Icons/phone.svg" descricao="Tecnologia" target="pagina de tecnologia"/>
          <IconButton img="../img/Icons/beleza.svg" descricao="Clube de Beleza" target="pagina de beleza"/>
          <IconButton img="../img/Icons/cam.svg" descricao="Lives" target="pagina de Lives"/>
          <IconButton img="../img/Icons/donate.svg" descricao="Doação" target="pagina de Doação"/>
        </div>
      </div>
      <div class="container mx-auto box-img">
          <img src="../img/promocoes/banner.png"/>
      </div>
      <div class="container mx-auto">
          <p class="text-start fs-4 text-orange">Ofertas Relâmpagos</p>
          <CarroseulBoxCard ident="OfertasRelampago">
              <CarroseulCard img="../img/ofertas/1.jpg" preco="R$ 120,00"/>
              <CarroseulCard img="../img/ofertas/2.jfif" preco="R$ 100,00"/>
              <CarroseulCard img="../img/ofertas/3.jpg" preco="R$ 200,00"/>
              <CarroseulCard img="../img/ofertas/4.webp" preco="R$ 80,00"/>
              <CarroseulCard img="../img/ofertas/5.jfif" preco="R$ 110,00"/>
          </CarroseulBoxCard >
      </div>
      <button onClick={'http://youtube.com/cfbcursos'}>Pagina 1</button>
    </>
  );
}

export default App;
