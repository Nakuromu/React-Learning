import { Component } from "react";
import {nanoid} from 'nanoid';

class Contacts extends Component {
    state = { 
        contacts: [],
          filter: '',
          name: '',
          number: ''
     } 

     componentDidMount(prevProps, prevState){
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if(parsedContacts){
            this.setState({contacts: parsedContacts})
        }
     }

     componentDidUpdate(prevProps, prevState){
        if(prevState.contacts !== this.state.contacts){
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
     }

     handleAddContact = event => {
        event.preventDefault();

        const {contacts} = this.state;
        const {name, number} = this.state;

        this.setState({
            contacts: [...contacts,
                {
                    id: nanoid(),
                    name: name,
                    number: number,
                }
            ],
             name: '',
             number: ''
        })
        event.currentTarget.reset();
     }

     handleChange = (event) => {
        event.preventDefault();
        const { contacts, name, number } = this.state;
        this.setState({
            [event.target.name]: event.target.value,
        })

        if(contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())){
            return alert(`Name "${name}" is already here`);
        }
     }

     removeContact = (id) => {
        this.setState((prev) => ({contacts: prev.contacts.filter((contact ) => contact.id !== id)}))
     }

    render() { 
        return (
            <form onSubmit={this.handleAddContact}>
            <h1>PhoneBook</h1>
            
            <h4>Name</h4>
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name" required placeholder="Enter your name"/>
            
            <h4>Phone Number</h4>
            <input onChange={this.handleChange}  value={this.state.number} type="tel" name="number" required placeholder="Enter your phone number"/>
            
            <button style={{display: 'block'}} type="submit">Add contact</button>
            
            <p>find contacts by name</p>
            <input onChange={this.handleChange} value={this.state.filter} type="text" name="filter" placeholder="find contact"/>            

            <h2>Contacts</h2>
            <ul>
            {this.state.contacts.map(contact => {
                if(this.state.filter === ''){
                    return <li key={contact.id}>{contact.name}: {contact.number}
                    <button onClick={() => this.removeContact(contact.id)}>delete</button>
                    </li>
                }
                if(contact.name.toLowerCase().trim().includes(this.state.filter.toLowerCase())){
                    return <li key={contact.id}>{contact.name}: {contact.number}
                    <button onClick={() => this.removeContact(contact.id)}>delete</button>
                    </li>
                }
    })}
            </ul>
        </form>
        );
    }
}
 
export default Contacts;