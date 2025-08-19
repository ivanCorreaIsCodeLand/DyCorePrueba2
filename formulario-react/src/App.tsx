import Formulario from "./components/Formulario";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Prueba Técnica 2 Frontend - Iván Sala</h1>
        <h2>Formulario React</h2>
      </header>

      <section className="app-description">
        <p>
          Tarea 2: Crear un componente de formulario en React que permita a un usuario ingresar su
          nombre y email, y al enviar, muestre los datos ingresados debajo del formulario.
        </p>
        <p>
          <strong>Requisitos:</strong><br />
          - Utilizar hooks de estado para manejar los datos del formulario.<br />
          - Validar que los campos no estén vacíos antes de mostrar los datos ingresados.
        </p>
      </section>

      <Formulario />
    </div>
  );
}

export default App;
