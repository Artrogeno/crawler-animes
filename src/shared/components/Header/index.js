import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-info">
        <h1>
          <span>Page</span>
          <small>
            <FontAwesomeIcon icon={['fas', 'folder']} />
          </small>
        </h1>
        <h4>describe</h4>
      </div>
      <div>
        <Button color="green" className="btn-large">
          <FontAwesomeIcon icon={['fas', 'plus']} />
          <span> New task</span>
        </Button>
      </div>
    </header>
  )
}

export default Header
