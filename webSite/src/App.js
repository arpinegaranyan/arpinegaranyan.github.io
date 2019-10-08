import React from 'react';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import About from './components/About';
import {Skills} from './components/Skills';
import {Contacts} from './components/Contacts';




function App() {
  return (
    <div className="App">
      <BrowserRouter >
       <Header />
       <Switch>
           <Route path='/' exact component={ImageContainer} />  
           <Route path='/about' exact component={About} />
           <Route path='/skills'  exact component={Skills} />
           <Route path='/contacts' exact component={Contacts} />
       </Switch>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
