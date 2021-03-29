import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const MenuTools = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
            tag="a" className="nav-link" caret
            style={{color: 'white'}}
      >
        TOOLS
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Tools-1</DropdownItem>
        <DropdownItem>Tools-2</DropdownItem>
        <DropdownItem>Tools-3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MenuTools;