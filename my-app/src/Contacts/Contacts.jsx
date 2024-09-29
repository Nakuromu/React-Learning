import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';

const  Contacts= () => {

    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if(parsedContacts){
            setContacts( parsedContacts)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const handleAddContact = event => {
        event.preventDefault();


        setContacts(
            [
                ...contacts,
                {
                    id: nanoid(),
                    name: name,
                    number: number,
                }
            ],
             setName(''),
             setNumber('')
        )
        event.currentTarget.reset();
     }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
          setName(value);
        } else if (name === 'number') {
          setNumber(value);
        } else if (name === 'filter') {
          setFilter(value);
        }

        if(contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())){
            return alert(`Name "${name}" is already here`);
        }
     }

    const removeContact = (id) => {
        setContacts((prev) => (prev.filter((contact ) => contact.id !== id)))
     }

        return (
            <form onSubmit={handleAddContact}>
            <h1>PhoneBook</h1>
            
            <h4>Name</h4>
            <input onChange={handleChange} value={name} type="text" name="name" required placeholder="Enter your name"/>
            
            <h4>Phone Number</h4>
            <input onChange={handleChange}  value={number} type="tel" name="number" required placeholder="Enter your phone number"/>
            
            <button style={{display: 'block'}} type="submit">Add contact</button>
            
            <p>find contacts by name</p>
            <input onChange={handleChange} value={filter} type="text" name="filter" placeholder="find contact"/>            

            <h2>Contacts</h2>
            <ul>
            {contacts.map(contact => {
                if(filter === ''){
                    return <li key={contact.id}>{contact.name}: {contact.number}
                    <button onClick={() => removeContact(contact.id)}>delete</button>
                    </li>
                }
                if(contact.name.toLowerCase().trim().includes(filter.toLowerCase())){
                    return <li key={contact.id}>{contact.name}: {contact.number}
                    <button onClick={() => removeContact(contact.id)}>delete</button>
                    </li>
                }
    })}
            </ul>
        </form>
        );

}
 
export default Contacts;