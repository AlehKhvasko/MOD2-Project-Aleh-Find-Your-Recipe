import React from 'react';

export default function SearchForm(props) {
    
    return (
        <div>
            <form className="search-form">
                <input 
                loading icon='user'
                type="text"
                onChange={props.inputChange}
                placeholder='Recipe search'
                value={props.info}/>
            </form>
        </div>
    )
}
