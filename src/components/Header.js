import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import api from "../api/contacts";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import EditUser from './EditUser';
import UserList from "./UserList";
import UserDetail from './UserDetail';
import Tree from './Tree';

function Header() {

  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  //REtrive Contacts from API
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };


  const removeContactHandler = async (id) => {
    await api.delete(`contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm);
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { name, id, phone, email, team } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };


  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    }
    getAllContacts();
  }, []);



  return (
    <div className='ui '>
      <Router>
        <Navbar />
        <Switch>

          <Route
            path="/"
            exact
            render={(props) => (
              <Tree
                {...props}
                contacts={contacts}
              />
            )} />

          <Route
            path="/user"
            render={(props) => (
              <UserList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )} />


          <Route
            path="/add"
            render={(props) => (
              <AddUser
                {...props}
                addContactHandler={addContactHandler}
              />
            )} />

          <Route
            path="/update"
            render={(props) => (
              <EditUser
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )} />

          <Route
            path="/contact/:id" component={UserDetail}
          />


        </Switch>
        {/* <AddUser addContactHandler={addContactHandler}/>
      <UserList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>

    </div>
  );
}

export default Header;
