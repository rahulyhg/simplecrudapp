import React, { Component } from 'react';
import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Icon } from 'native-base'

const width = Dimensions.get('window').width

export default class CartList extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Shopping Cart',
            headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'https://placeimg.com/640/640/nature' }} />
                        </Left>
                        <Body>
                            <Text style={{fontSize: 15}}>Name Name Name Name</Text>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                                <View style={{width: 25, height: 25, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon active name='ios-remove' style={{color: 'black', fontSize: 25}}/>
                                </View>
                                <View style={{width: 50, height: 25, backgroundColor: '#f7f7f7', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 15}}>2</Text>
                                </View>
                                <View style={{width: 25, height: 25, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon active name='ios-add' style={{color: 'black', fontSize: 25}}/>
                                </View>
                            </View>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon active name='ios-trash' style={{color: 'red', fontSize: 30}}/>
                            </Button>
                        </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
})