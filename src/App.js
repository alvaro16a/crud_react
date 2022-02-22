import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {

  const usersData = [
    { id: uuidv4(), name: "Tania", userName: 'floppydiskette' },
    { id: uuidv4(), name: "dania", userName: 'flasdadiskette' },
    { id: uuidv4(), name: "lania", userName: 'flgdasdiskette' },
  ]

  // state

  const [users, setUsers] = useState(usersData);

  //Agregar Usuario

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar Usuario

  const deleteUser = (id) => {

    const arrayFiltrado = users.filter(user => user.id !== id) //se conservan todos los usuarios con id diferente
    setUsers(arrayFiltrado)
  }

  //Editar Usuario

  const [editing, setEditing] = useState(false);

  const [currentUser,setCurrentUser] = useState({
    id: null, name:'', userName:''
  });

  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({
    id:user.id,name:user.name, userName:user.userName
    })
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser = {currentUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow ={editRow}/>
        </div>
      </div>

    </div>
  );
}

export default App;
