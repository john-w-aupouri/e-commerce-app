import React from 'react';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Styles
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

export default Directory;
