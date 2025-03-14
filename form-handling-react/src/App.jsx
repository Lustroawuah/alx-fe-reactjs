// src/App.jsx
import { useState } from 'react';
import FormikForm from './components/formikForm';
import RegistrationForm from './components/RegistrationForm'; // Add this line
import './App.css';


function App() {
  const [activeForm, setActiveForm] = useState('controlled');

  return (
    <div className="app">
      <header>
        <h1>React Form Handling Example</h1>
        <div className="form-toggle">
          <button 
            className={activeForm === 'controlled' ? 'active' : ''}
            onClick={() => setActiveForm('controlled')}
          >
            Controlled Components
          </button>
          <button 
            className={activeForm === 'formik' ? 'active' : ''}
            onClick={() => setActiveForm('formik')}
          >
            Formik
          </button>
        </div>
      </header>
      
      <main>
      {activeForm === 'controlled' ? <RegistrationForm /> :<FormikForm /> }
      </main>
      
      <footer>
        <p>A demonstration of form handling techniques in React</p>
      </footer>
    </div>
  );
}

export default App;
