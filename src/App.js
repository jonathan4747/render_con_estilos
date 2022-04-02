import {BrowserRouter,Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './componentes/Home/Home';
import Number from './componentes/Number/Number';
import Letra from './componentes/Letra/Letra';

function App() {
  return (
    <BrowserRouter >
        <Switch>
          <Route exact path="/home"
                  render={(routeProps)=><Home {...routeProps}/>}/>
          <Route exact path="/:number"
                  render={(routeProps)=><Number {...routeProps}/>}/>
          <Route exact path="/:palabra/:color/:fondo"
                  render={(routeProps)=> <Letra {...routeProps}/>}/>
        </Switch>
        
    </BrowserRouter>
  );
}

export default App;
