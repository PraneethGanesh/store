import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>PRO Shopping Cart</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for PRO Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
