import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginaInicial from './componentes/PaginaInicial';
import Pagina1 from './componentes/views/PaginaOne';
function App() {


  return (
    <>
      <header>

      </header>
      <main>
          <Routes>
            <Route exact path="/" element={<PaginaInicial/>}/>
            <Route exact path="/pagina" element={<Pagina1/>}/>
          </Routes>
      </main>
    </>
  );
}

export default App;
