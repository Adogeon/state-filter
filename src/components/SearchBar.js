import React from 'react';

const SearchBar = (props) => {
    return(
        <div className="searchBar">
            <form>
                <label>Type a state:
                    <input type="text" value={props.data} onChange={props.handleChange} />
                </label>
            </form>
        </div>
    )
}

export default SearchBar;