import React from 'react'
import{ ButtonGroup , Button ,
 DropdownButton,

} from "react-bootstrap"
import { Dropdown } from 'react-bootstrap'
import "../assets/css/navbar.css"
import { faUser,faCog, faKey} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function TwoButtons() {
  return (
    <div className='twobuttons'>
      <div className='round-button secondry-color z-depth-1-half' > Supprimer</div>

      <Dropdown>
                        <Dropdown.Toggle as="span" bsPrefix="img-dropdown">
                        <div className='round-button secondry-color z-depth-1-half' > Modifier </div>
                        </Dropdown.Toggle>
                        <div>
                        <Dropdown.Menu className="z-depth-1-half  dropdown-container" style={{marginTop:"25px"}}>
                            <Dropdown.Item href="#/action-1"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" /><p className="dropdown-itm">Ajouter une ligne </p></div></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" /><p className="dropdown-itm">Ajouter une colonne</p></div></Dropdown.Item>
                            <Dropdown.Divider />
                           
                        </Dropdown.Menu>
                        </div>
                    </Dropdown>
                    
    </div>
  )
}
