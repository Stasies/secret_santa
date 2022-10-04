import React, { FC, useState } from "react";
import FormComponent from "../../components/form/Form";
import { H1, P } from "./RegisterpageElements";
import PageTemplate from "../PageTemplate";

// interface HomepageProps {
//     foo?:number;
//     bar?: string;
// }
const Homepage: FC = (props) => {
  return (
    <PageTemplate>
      <H1>Secret Santa Generator</H1>
      <P>Organize your Secret Santa using Email or Text Message.</P>
      <FormComponent />
    </PageTemplate>
  );
};

export default Homepage;
