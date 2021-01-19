import React, { Profiler } from 'react';

// HOC
import DirectoryContainer from '../../components/directory/directory.container';

// Styles
import { HomepageContainer } from './homepage.styles';

const HomePage = () => (
  <HomepageContainer>
    <Profiler
      id='Directory'
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}>
      <DirectoryContainer />
    </Profiler>
  </HomepageContainer>
);

export default HomePage;
