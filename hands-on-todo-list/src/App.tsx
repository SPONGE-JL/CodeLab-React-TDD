import React from 'react';
import Styled from 'styled-components';

import { Button, Input } from 'Components';

//- Sytled Component
const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Contents = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: : #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = Styled.div`
  display: flex;
  width: 50%;
  min-width: 400px;
`;

//- React Component
function App() {
  return (
    <Container>
      <Contents>
        <InputContainer>
          <Input placeholder="Insert a new task" onChange={(inputText) => console.log(inputText)} />
          <Button label="Add" onClick={() => alert('Click Event! (Add)')} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
