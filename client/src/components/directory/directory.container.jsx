import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Directory from './directory.component';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const DirectoryContainer = compose(
  connect(mapStateToProps),
)(Directory); 

export default DirectoryContainer;
 