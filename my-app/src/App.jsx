import {Routes, Route} from 'react-router-dom'
import Loyout from './Loyout/Loyout'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import ToDoPage from './pages/ToDoPage'
import TodoDetails from './TodoList/ToDoDetails'

const App = () => {
    return(
        <Routes>
            <Route path='/' element={<Loyout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='pokemon' element={<PokemonPage/>}/>
                <Route path='todo' element={<ToDoPage/>}/>

                <Route path='todo/:id' element={<TodoDetails/>}/>
            </Route>
        </Routes>
    )
}

export default App