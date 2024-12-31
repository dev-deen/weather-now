import React from 'react'

function Navbar({location, setLocation, handleSearch}) {

    
  return (
    <div>
      <nav className="navbar bg-warning">
        <div className="container-fluid">
            <a className="navbar-brand text-primary">Weather Now</a>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
