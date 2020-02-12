import React from 'react'

export default (props) => (
    <form onSubmit={props.onSubmit}>

        <label>Login email</label>
        <input 
            placeholder="email" 
            type="text"
            name="email" 
            value={props.email} 
            onChange={props.onChange}></input>
        <label>Password</label>
        <input 
            placeholder="password" 
            type="text"
            name='password'
            value={props.password} 
            onChange={props.onChange}></input>

        <input type="submit"></input>
    </form>
)