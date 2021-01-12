import './App.css';
import LoginProvider from './Store/LoginContext';

import Introduce from './Introduce';
import TableLayout from './TableLayout';
import Header from './components/Header/Header';

import Mail from './components/Mail/Mail';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header/>
        <Mail></Mail>
        <Introduce />
        <TableLayout />
      </LoginProvider>
    </div>
  );
}

export default App;
