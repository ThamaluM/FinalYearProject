import React, {useEffect} from 'react';
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
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Alert, StyleSheet, View, Image} from 'react-native';
import Img from '../../images/profile_pic.png';

function LandingTab({route, navigation}) {
  const {param} = route.params;
  param.isLoggedIn = true;

  const logOutHandler = () => {
    Alert.alert('Log out?', 'You are about to Log out!', [
      {text: 'Cancel', style: 'cancel', onPress: () => {}},
      {
        text: 'Log Out',
        style: 'destructive',
        onPress: () => {
          param.isLoggedIn = false;
          navigation.reset({
            index: 0,
            routes: [{name: 'auth'}],
          });
        },
      },
    ]);
  };

  //hardware backbutton prevent going back
  useEffect(() =>
    navigation.addListener('beforeRemove', (e) => {
      if (param.isLoggedIn) {
        e.preventDefault();
        logOutHandler();
      }
    }),
  );

  return (
    <Container>
      <Header>
        <Left>
          <Button
            style={{width: 50, justifyContent: 'center'}}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="reorder" style={{fontSize: 30, color: 'white'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{textTransform: 'capitalize'}}>{param.selected}</Title>
        </Body>
        <Right />
      </Header>

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={Img} />

            <Text style={{fontWeight: 'bold', fontSize: 35, color: 'white'}}>
              {param.username}{' '}
            </Text>
          </View>
        </View>
      </View>

      <Content style={{padding: 20}}>
        <Card
          style={{
            height: 300,
            justifyContent: 'flex-start',
            borderRadius: 5,
          }}>
          <CardItem style={{alignSelf: 'center'}} header></CardItem>
          <CardItem>
            <Body>
              <Text>Registration ID : </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Doctor : </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Caretaker : </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Room Number : </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Status : </Text>
            </Body>
          </CardItem>
        </Card>
        <View style={{margin: 15}}>
          <Button
            block
            style={{alignSelf: 'center', padding: 5, borderRadius: 5}}
            onPress={() => navigation.navigate('editTab')}>
            <Icon
              name="edit"
              style={{fontSize: 20, color: 'white', paddingLeft: 10}}
            />
            <Text>Edit</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

export default LandingTab;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
});
