import './App.css';
import LoginProvider from './Store/LoginContext';

import Introduce from './Introduce';
import TableLayout from './TableLayout';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header/>
      </LoginProvider>
      <Introduce />
      <TableLayout />
    </div>
  );
}

export default App;
