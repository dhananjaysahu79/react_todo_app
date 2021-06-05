import React ,{ useState, useEffect } from 'react';
import {FaTimes} from 'react-icons/fa';
import {
  GlobalStyle,
  Section,
  Container,
  Row,
  Column,
  Wrapper,
  Heading,
  Input,
  Button,
  Card,
  TodoContainer,
  TodoText
} from './App.elements';


function App() {

  const [input, setInput] = useState('');
  const [list,setList] = useState([]);

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleRemove = idx => {
    const temp = [...list];
    temp.splice(idx, 1);
    setList(temp);
  }

  const handleSubmit = e => {
    const temp = [ ...list, input];
    setList(temp);
    setInput('');
  };


  return (
    <>
    <GlobalStyle />
    <Section>
      <Container>
        <Row>
          <Column>
           <Wrapper>
            <Heading size = {'50px'}>ToDo-App</Heading>
            <Input onChange = {handleChange} value = {input}></Input>
            <Button onClick = {handleSubmit}>ADD Todo</Button>
           </Wrapper>
          </Column>
          <Column>
           <Card>
            <Wrapper>
            <Heading size ={'30px'}>My WorkList</Heading>
            {list.map(item => <TodoContainer>
              <TodoText>{[list.indexOf(item) + 1,item].join(". ")}</TodoText>
            <FaTimes  onClick = {() => handleRemove(list.indexOf(item))}/>
            </TodoContainer>)}
            </Wrapper>
           </Card>
          </Column>
        </Row>
      </Container>
    </Section>
    </>
  );
}

export default App;
