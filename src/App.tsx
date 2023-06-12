import Home from './pages/Home';
import Contact from './pages/Contact';
import Me from './pages/Me';
import ProjectsPage from './pages/Projects';
import { BrowserRouter } from 'react-router-dom';
import Provider from './Provider';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/me' element={ <Me /> }/>
          <Route path='/projects' element={ <ProjectsPage /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
