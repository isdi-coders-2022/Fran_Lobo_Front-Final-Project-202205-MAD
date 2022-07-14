import { Navigate } from 'react-router-dom';
import { NavBar } from '../../components/layout/nav-bar';

export default function InfoPage() {
  return (
    <>
      <NavBar></NavBar>
      <h1>Info</h1>
      <div className="shopGame">
        <h2>ZACATRUS</h2>
        <img src="https://zaragozaguia.com/wp-content/uploads/2021/01/Zacatrus-Zaragoza.jpg"></img>
        <h3>C. de Fernández de los Ríos, 57</h3>
        <h3>TLF: 910 76 76 06</h3>
      </div>
      <div className="shopGame2">
        <h2>CUARTO DE JUEGOS</h2>
        <img src="https://t2.salir.ltmcdn.com/es/places/9/6/2/cuarto-de-juegos_134269_0_600.jpg"></img>
        <h3>C. de Jorge Juan, 42</h3>
        <h3>TLF: 914 35 00 99</h3>
      </div>
      <div className="shopGame3">
        <h2>ATLÁNTICA JUEGOS</h2>
        <img src="https://darthtxelos.files.wordpress.com/2012/03/atlantica2.jpg"></img>
        <h3>C. de la Luna, 6</h3>
        <h3>TLF: 915 23 17 67</h3>
      </div>
      <div className="shopGame4">
        <h2>JÚPITTER JUEGOS</h2>
        <img src="https://www.jupiterjuegos.com/themes/jupiterjuegos/templates/paginas-propias/img/tiendas/tienda-8.jpg"></img>
        <h3>Calle de Manuel Silvela, 8</h3>
        <h3>TLF: 917 58 25 63</h3>
      </div>
    </>
  );
}
