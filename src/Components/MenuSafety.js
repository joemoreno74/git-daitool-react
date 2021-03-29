import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const MenuSafety = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown  isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
            tag="a" className="nav-link" caret
            style={{color: 'white'}}
      >
        SAFETY
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Safety-1</DropdownItem>
        <DropdownItem>Safety-2</DropdownItem>
        <DropdownItem>Safety-3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MenuSafety;