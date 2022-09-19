import axios from "axios";
import e from "express";
import { getgroups } from "process";
import React, { useEffect, useState } from "react";
import First from "../../components/steps/First";
import Second from "../../components/steps/Second";
import Third from "../../components/steps/Third";

import { Container, Wrapper, H1, P } from "./InvitationElements";

const Invitation = () => {
  const [element, setElement] = useState(<First />);
  const [path, setPath] = useState(window.location.pathname.slice(-1));
  useEffect(() => {
    if (path === "1") {
      setElement(<First />);
    } else if (path === "2") {
      setElement(<Second />);
    } else if (path === "3") {
      setElement(<Third />);
    }
  }, [path]);
  const groupId = window.location.pathname.split("/").slice(-2)[0];
  console.log(groupId);
  useEffect(() => {
    async function getGroup() {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/groups/find/" + groupId
        );
        console.log(res.data);
        localStorage.setItem("group", JSON.stringify(res.data));
      } catch (error) {
        console.log(error);
      }
    }
    getGroup();
  }, [groupId]);
  return (
    <Container>
      <Wrapper>
        <H1>Join our gift exchange</H1>

        {element}
      </Wrapper>
    </Container>
  );
};

export default Invitation;
