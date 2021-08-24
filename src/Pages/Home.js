import React from 'react';
import Container from '@material-ui/core/Container';
import TextMobileStepper from '../Components/Mobilesteppertext';
import Card2 from '../Components/Card2';
import RecipeReviewCard from '../Components/Complexcard';
import Sl1 from '../Components/slider';
export default function Home() {
  
  return (
    <React.Fragment>
        <Container fixed>
          <TextMobileStepper/>
          <Sl1 />
          <Card2 />
          <RecipeReviewCard />
        </Container>
    </React.Fragment>
  );
}
