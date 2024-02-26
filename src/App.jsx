import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Verificar y cambiar la orientación automáticamente
    const checkOrientation = () => {
      if (window.screen.orientation.type === 'portrait-primary') {
        window.screen.orientation.lock('landscape-primary')
          .then(() => console.log('La orientación se ha bloqueado con éxito en horizontal.'))
          .catch(err => console.error('Error al bloquear la orientación:', err));
      }
    };

    // Ejecutar la función al cargar la página
    checkOrientation();
  }, [])

  return (
    <>
      <div style={{ height: "100vh" }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
