
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUsers, deleteUsers, updateUsers] = useFetch(baseUrl)
  const [styleModal, setStyleModal] = useState('false')

  useEffect(() => {
    getUsers('/users')
  },[])

  console.log(users)

  const handleForm = () => {
    if(styleModal === 'false'){
      setStyleModal('true')
    }else{
      setStyleModal('false')
    }
  }

  const handleForm2 = (e) => {
    e.preventDefault()
    if(styleModal === 'false'){
      setStyleModal('true')
    }else{
      setStyleModal('false')
    }
  }


  return (
    <div className="container">
    <div className="title-container">
    <h1>USERS</h1>
      <button onClick={handleForm}>Create new User</button>
      </div>
      <FormUser
      createUsers={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      styleModal={styleModal}
      handleForm2={handleForm2}
      />
      <div className="users-container">
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setInfoUpdate={setInfoUpdate}
            handleForm={handleForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
