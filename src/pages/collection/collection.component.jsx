import React from 'react';
import { connect } from 'react-redux';

// Components
import CollectionItemContainer from '../../components/collection-item/collection-item.container';

// Selectors 
import { selectCollection } from '../../redux/shop/shop.selectors';

// Styles
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {

  const { title, items } = collection;
  
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
