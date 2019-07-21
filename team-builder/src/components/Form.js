import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.memberToEdit ? props.editMember : props.addMember}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                onChange={props.changeHandler} 
                value={props.memberToEdit ? props.memberToEdit.name : props.formState.name} />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={props.changeHandler} 
                value={props.memberToEdit ? props.memberToEdit.email : props.formState.email} />
            <input 
                type="text" 
                name="role" 
                placeholder="Role" 
                onChange={props.changeHandler} 
                value={props.memberToEdit ? props.memberToEdit.role : props.formState.role} />

            <input type="submit" value={props.memberToEdit ? "Edit Member" : "Add Member"} />
        </form>
    )
}

export default Form;