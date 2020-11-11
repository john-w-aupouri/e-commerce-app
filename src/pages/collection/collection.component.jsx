import React from 'react';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Styles
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  console.log(match)
  return (
    <div className='CatergoryPage'>
      <h2>CatergoryPage Page</h2>
    </div>
  )
}

export default CollectionPage;
