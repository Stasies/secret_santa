import React from "react";
import PageTemplate from "../PageTemplate";
import { H1, P } from "../../shared/Shared";
import { Button } from "./StartpageElements";

const Startpage = () => {
  return (
    <PageTemplate>
      <H1>Draw names for your Secret Santa gift exchange!</H1>
      <P>
        DrawNames® is the best free Secret Santa Generator online for Christmas
        and other festivities!
      </P>
      <Button href="/register">Start Drawing Names</Button>
    </PageTemplate>
  );
};

export default Startpage;
