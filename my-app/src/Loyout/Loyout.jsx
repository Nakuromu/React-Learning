import { useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import {nanoid} from 'nanoid';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';


const Loyout =() =>{ 

    const [isShow,setIsShow] = useState(false)

    const showModal = () => {
        setIsShow(true)
      }
    
    const closeModal = () => {
        setIsShow(false)
      }
    
    const createUser = (data) => {
       const newUser = {
        ...data,
        id:nanoid()
       }
       console.log(newUser)
  }
    

    return (
        <>
            {isShow&&(<Modal closeModal={closeModal}><LoginForm createUser={createUser} closeModal={closeModal}/></Modal>)}
            <Header showModal={showModal}/>
            <Outlet/>
        </>
    )
}

export default Loyout