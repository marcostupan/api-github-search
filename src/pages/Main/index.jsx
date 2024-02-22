import React, { useState } from "react";
import { MdSearch } from "react-icons/md";


import { Container, Logo, Title, Form, Input, Button, } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

export default function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="API GitHub" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
