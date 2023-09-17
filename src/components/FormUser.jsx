import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

  const FormUser = ({createUser, infoUpdate, updateUser, setInfoUpdate}) => {
  
    const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
      reset(infoUpdate)
    }, [infoUpdate])
    
    const submit = data => {
      if(infoUpdate){
        updateUser("/users", infoUpdate.id, data)
        setInfoUpdate()
      } else {
        createUser("/users", data)
      }
      reset({
        email: "",
        password:"",
        first_name: "",
        last_name:"",
        birthday: ""
      })
    }




  return (
    <div className="form-container">
      <form  onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="first_name">First name</label>
        <input {...register("first_name")} type="text" id="first_name" />
      </div>
      <div>
        <label htmlFor="last_name">Last name</label>
        <input {...register("last_name")} type="text" id="last_name" />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input {...register("birthday")} type="date" id="birthday" />
      </div>
      <button>{infoUpdate ? "update" : "Create"}</button>
    </form>
    </div>
    
  )
}

export default FormUser