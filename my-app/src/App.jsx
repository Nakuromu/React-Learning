import {Routes, Route} from 'react-router-dom'
import Loyout from './Loyout/Loyout'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import ToDoPage from './pages/ToDoPage'

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Loyout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='pokemon' element={<PokemonPage/>}/>
                <Route path='todo' element={<ToDoPage/>}/>
            </Route>
        </Routes>
    )
}

export default App