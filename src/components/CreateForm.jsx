import React from 'react'

export default (props) => (
    <form onSubmit={props.onSubmit}>

        <label>NEW Tree Name</label>
        <input 
            placeholder="title" 
            type="text"
            name="title" 
            value={props.title} 
            onChange={props.onChange}></input>
            
        <label>it's URL</label>
        <input 
            placeholder="url" 
            type="text"
            name='url'
            value={props.url} 
            onChange={props.onChange}></input>

        <input type="submit"></input>
    </form>
)