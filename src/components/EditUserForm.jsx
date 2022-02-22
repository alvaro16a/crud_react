import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data, e) => {
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                {...register('name', {
                    required: { value: true, message: 'Se necesita un nombre' },
                    minLength: { value: 3, message: 'El nombre debe tener minimo 3 letras' }
                })
                } />
                <span className='text-danger text-small d-block mb-2'>
                    {errors?.name?.message}
                </span>
            <label>Username</label>
            <input
                type="text"
                name="userName"
                {...register('userName', {
                    required: { value: true, message: 'Se necesita un nombre de usuario' },
                    minLength: { value: 2, message: 'El nombre deusuario debe tener mas de 2 letras' }
                })
                } />
                <span className='text-danger text-small d-block mb-2'>
                    {errors?.username?.message}
                </span>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;