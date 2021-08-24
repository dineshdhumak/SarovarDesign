import React from 'react';
import Container from '@material-ui/core/Container';
import CenteredGrid from '../Components/Gridtext';
import Card3 from '../Components/Card3';
export default function Page3() {
  
  return (
    <React.Fragment>
        <Container fixed>
          <CenteredGrid/> 
           <Card3/>   
          <br /> 
        </Container>
    </React.Fragment>
  );
}
