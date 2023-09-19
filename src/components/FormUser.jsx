import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import '../assets/styles/FormUser.css'

const FormUser = ({ createUsers, infoUpdate, updateUsers, setInfoUpdate, styleModal, handleForm2 }) => {

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const { handleSubmit, register, reset } = useForm()



    const submit = data => {
        if (infoUpdate) {
            //Update
            updateUsers('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUsers('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    return (
        <div className={`${styleModal} contaioner-form`}>
            <form onSubmit={handleSubmit(submit)} className='form' >
                <h2>New User</h2>
                <button onClick={handleForm2}>Close</button>
                <div>
                    <label htmlFor="email">Email <br /></label>
                    <input {...register('email')} type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password <br /></label>
                    <input {...register('password')} type="password" id="password" />
                </div>
                <div>
                    <label htmlFor="first_name">First name <br /></label>
                    <input {...register('first_name')} type="text" id="first_name" />
                </div>
                <div>
                    <label htmlFor="last_name">Last name <br /></label>
                    <input {...register('last_name')} type="text" id="last_name" />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday <br /></label>
                    <input {...register('birthday')} type="date" id="birthday" />
                </div>
                <br />
                <button>{infoUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>

    )
}

export default FormUser