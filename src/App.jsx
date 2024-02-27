import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Plugins } from '@capacitor/core';

const { ScreenOrientation } = Plugins;

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const lockOrientation = async () => {
      try {
        await ScreenOrientation.lock({
          orientation: 'landscape'
        });
        console.log('La orientación se ha bloqueado con éxito en horizontal.');
      } catch (error) {
        console.error('Error al bloquear la orientación:', error);
      }
    };

    lockOrientation();

    // Importante: desbloquear la orientación al salir de la aplicación
    return () => {
      ScreenOrientation.unlock();
    };
  }, []);

  return (
    <>
      <div>
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
