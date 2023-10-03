

import "./index.scss";
import JLS from "./public/materiais.jpeg";
import {BsWhatsapp} from 'react-icons/bs';

const Home = () => {

  

  return (
    <div>
      <nav>
        <ul>
            Home
          
        </ul> 
        <ul>
          <a href="https://web-site-loja-3b9t.vercel.app/">Produtos</a>
        </ul>    
      </nav>
      <h1 className="title">Seja nosso Cliente e tenha varias vantagens!</h1>
      
    <form action="https://formspree.io/f/xpzgolld" method="POST">
    <h3 className="title2">Faça o seu orçamento!  breve entraremos em contato.</h3>
      <label>Nome:</label><br/>
      <input type="text" placeholder="nome" required="required"  /><br/>
      <label>SobreNome:</label><br/>
      <input type="text" placeholder="sobrenome" required="required"  /><br/>
      <label>Contato:</label><br/>
      <input type="text" placeholder="contato" required="required"  /><br/>
      <label>Email:</label><br/>
      <input type="text" placeholder="email" required="required"  /><br/>
      <textarea placeholder="digite seu orçamento" cols="50" rows="10"/><br/>
      <button type="submit">Enviar</button>
    </form>

    <footer>
      <ul>
        <li className="phraseOne">Loja de material de construção</li>
        <a href="https://wa.me/qr/QCLBWYU4CFIHN1"><li>Atendimento via chat<BsWhatsapp/></li></a>
        <li className="phraseTwo">Entregamos sem custo</li>
      </ul>
      
      <img src={JLS} alt="logo" title="logo da loja"/>
    </footer>
    </div>
  )
}

export default Home;


