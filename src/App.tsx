import './App.css'
import {Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import { useContext, useEffect, useState } from 'react';
import Filtering from './components/Filtering';
import Randomize from './components/Randomize';
import API from './components/API';
import { UseContextCounter } from './components/useContextCounter';
import RenderingCounter from './components/RenderingCounter';
import { RenderingContext } from './context';

function App() {
  const [URL,setURL] = useState("")

  const MoveToHome=()=>{
    setURL("/");
  }

  const MoveToArticle=()=>{
    setURL("/article");
  }

  const checkURL =()=>{
      console.log(URL);
  }

  const RenderingCounterParent = useContext(RenderingContext)
  useEffect(()=>{
    RenderingCounterParent.setRenderingTimes(RenderingCounterParent.RenderingTimes+1)
  },[])
  
  return (
    <>
      <main>
        <h1 className='bg-sky-300'>LearningReactApp</h1>
        <Router>
            <ul className='list-none flex flex-row'>
              <li className='basis-xs bg-green-300' onClick={MoveToHome}><Link to="/" className='px-12 py-8'>Counter</Link></li>
              <li className='basis-xs bg-red-300' onClick={MoveToArticle}><Link to="/todo" className='px-12 py-8'>toDo</Link></li>
              <li className='basis-xs bg-sky-300'><Link to="/filtering" className='px-12 py-8'>Filtering</Link></li>
              <li className='basis-xs bg-yellow-300'><Link to="/randomize" className='px-12 py-8'>Randomize</Link></li>
              <li className='basis-xs bg-black text-white'><Link to="/api" className='px-12 py-8'>API</Link></li>
            </ul>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/filtering" element={<Filtering />} />
            <Route path="/randomize" element={<Randomize />} />
            <Route path="/api" element={<API />} />
            <Route path="/usecontext" element={<UseContextCounter />} />
            <Route path="/rendering" element={<RenderingCounter />} />
          </Routes>
        <footer>
          <ul className='list-none flex flex-row'>
            <li className='basis-xs bg-purple-300'><Link to="/usecontext" className='px-12 py-8'>useContextCounter</Link></li>
            <li className='basis-xs bg-pink-300'><Link to="/rendering" className='px-12 py-8'>RenderingCounter</Link></li>
          </ul> 
          {/* <div className='bg-yellow-300' onClick={checkURL}>checkURL</div> */}
        </footer>
        </Router>
      </main>
    </>
  )
}

export default App
