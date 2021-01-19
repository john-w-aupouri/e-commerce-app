import React from 'react';

// HOC
import DirectoryContainer from '../../components/directory/directory.container';

// Styles
import { HomepageContainer } from './homepage.styles';

const HomePage = () => (
  <HomepageContainer>
    <DirectoryContainer />
  </HomepageContainer>
);

export default HomePage;
