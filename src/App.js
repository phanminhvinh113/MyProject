import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Heading from './Heading/Heading.js';
import Source from './SourceReact/Source.js'
import HomePage from './Pages/Home'
import NewsPage from './Pages/News'
import ContactPage from './Pages/Contact'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Source/>
        <Heading/>
        <Heading pri/>
        <div className='Router'>
            <Link to ='/'>Home</Link>
            <Link to ='/News'>News</Link>
            <Link to ='/Contact'>Contact</Link>
        </div>
        
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Contact' element={<ContactPage/>}/>
       </Routes>
      </header>
     
    </div>
  );
}

export default App;
