import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Card,
  CardItem,
  Right,
  Left,
  Text,
  Button,
  Badge,
  Input,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function PatientViewTab({route, navigation}) {
  const {name} = route.params;
  const state= {
    hr:0,
    min:0
  }

  const postRequest = () =>{
    fetch('http://prevelcer.herokuapp.com/', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
  })
});

  }

  return (
    <Container>
      <Header noLeft>
        <Left />
        <Body>
          <Title style={{textTransform: 'capitalize'}}>Patient</Title>
        </Body>
        <Right>
          <Icon name="bed" style={{fontSize: 30, color: '#e4e213'}} />
        </Right>
      </Header>

      <Content>
        <Card>
          <CardItem>
            <Text> {name}</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Text> Next Reposition in </Text>
          
            <Input
            keyboardType="number-pad"
            placeholder="hr"
            onChangeText={(text) => this.setState({hr: text})}
          />

          <Input
          keyboardType="number-pad"
          placeholder="min"
          onChangeText={(text) => this.setState({min: text})}
          />
          </CardItem>
        </Card>

     
          <Button onPress={()=>postRequest() }><Text> Post Request</Text></Button>
          
          
      
      </Content>
    </Container>
  );
}
