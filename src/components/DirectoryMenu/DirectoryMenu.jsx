import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from './../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

import './DirectoryMenu.scss';

const DirectoryMenu = () => {
  const { sections } = useSelector(
    createStructuredSelector({ sections: selectDirectorySections })
  );

  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
