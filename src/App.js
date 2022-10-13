
import './App.css';
import '../src/hojas-estilos/botones.css';
import frecode from '../src/img/freecode.jpg';
import Boton from './componentes/boton.js'
import Contador from '../src/componentes/contador';
import {useState} from 'react';


function App() {
  {/**hooks useState agrega un estado inicial */}
  const [numClics,setNumeroClics] = useState(0)

  function hacerClick(){
    setNumeroClics(numClics+1);
  }

  function reiniciar(){
   setNumeroClics(0);
  }



  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
          <img 
            alt='logo Fecodecamp' 
            className='freecodecamp-logo'
            src={frecode}  
            />
      </div> 

      <div className='contendor-principal'>
         {/**Contador 
            numClics viene del hook useState
         */}
          <Contador
            numClics ={numClics}
          />

        {/**Botones */}
        <Boton
          texto = 'Click'
          esBotonDeClick = {true}
          manejarClick = {hacerClick}
        />
        
          <Boton
          texto = 'Reiniciar'
          esBotonDeClick = {false}
          manejarClick = {reiniciar}
        />
    

      </div>


    </div>
  )
}

export default App;
