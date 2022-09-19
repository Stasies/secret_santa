import React, { FC, useState } from "react";
import FormComponent from "../../components/form/Form";
import { Container, Wrapper, H1, P } from "./HomepageElements";

// interface HomepageProps {
//     foo?:number;
//     bar?: string;
// }
const Homepage: FC = (props) => {
  return (
    <Container>
      <Wrapper>
        <H1>Secret Santa Generator</H1>
        <P>Organize your Secret Santa using Email or Text Message.</P>
        <FormComponent />
      </Wrapper>
    </Container>
  );
};

export default Homepage;
