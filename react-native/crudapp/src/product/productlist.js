import React, { Component } from 'react';
import { AsyncStorage, Text, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Icon, Body } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

const width = Dimensions.get('window').width


export default class ProductList extends Component {
    static goTo = this;

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Hot Products',
            headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('handleUser')}>
                    <Icon active name='ios-log-out' style={{marginRight: 10}} />
                </TouchableOpacity>
            )
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.getProductListApi()
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleUser: this.removeUser });
      }

    getProductListApi() {
        fetch('http://appfes.com/simplecrudapp/api/product/list', {
            method : 'GET',
        })
        .then((response) => {
            response.json()
            .then((responseJson) => {
                if(response.status === 200) {
                    this.setState({
                        data: responseJson.value
                    })
                }
                else {
                    alert(responseJson.message)
                }
            })
        })
        .done();
    }

    removeUser() {
        AsyncStorage.removeItem('@username');
        // const resetAction = StackActions.reset({
        //     index: 0, // Reset nav stack
        //     key: null,
        //     actions: [
        //         NavigationActions.navigate({
        //             routeName: 'StackAuth', // Call home stack
        //             action: NavigationActions.navigate({
        //                 routeName: 'Login',
        //             }),
        //         }),
        //     ],
        // })
        // this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <Card style={styles.card}>
                                <CardItem cardBody style= {{alignSelf:'center'}} button onPress={() => alert('Coming soon.')}>
                                    <Image source={{uri: 'http://10.111.240.96/simplecrudapp/product/images/iphonexsmax1.jpeg'}}
                                    style={{height: 150, width: 150, }}/>
                                </CardItem>
                                <CardItem>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text>RM {item.price}</Text>
                                </Body>
                                </CardItem>
                            </Card>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: (width / 2) - 15,
        marginLeft: 10,
        marginTop: 10,
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }
})