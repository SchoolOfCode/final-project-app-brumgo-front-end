import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'

const list = [
    {
        title: 'Email',
        icon: 'email'

    },
    {
        title: 'Phone',
        icon: 'phone'
    },
    {
        title: 'Password',
        icon: 'lock'
    },

]


export default class UserProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Avatar
                        size={100}
                        rounded
                        source={{
                            uri:
                                'https://pbs.twimg.com/profile_images/924260952488411137/tDSjYZpM_400x400.jpg',
                        }}
                        showEditButton
                    />
                    <Text style={styles.name}>Sahela Rani</Text>
                    <View style={styles.icons}>

                        <Icon
                            name='users'
                            type='font-awesome'
                            color='#D3D3D3'
                            raised
                        />

                        <Icon
                            name='gamepad'
                            type='font-awesome'
                            color='#FCC133'
                            raised
                            size={30}

                        />
                        <Icon
                            name='share-alt'
                            type='font-awesome'
                            color='#D3D3D3'
                            raised

                        />
                    </View>
                </View>


                <View style={styles.middle}>
                    <Image style={{ height: 50, width: 50 }} />
                    <Text style={{ color: "#FFFFFF" }}>Invite friends and earn free discounts</Text>
                    <Icon
                        name='chevron-right'
                        type='font-awesome'
                        color='#D3D3D3'

                    />
                </View>


                <View style={styles.bottom}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                            />
                        ))
                    }
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderBottomWidth: 0,
        shadowColor: '#FCC133',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,

    },
    middle: {
        backgroundColor: "#000000",
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    bottom: {
        flex: 1,
        backgroundColor: "#D3D3D3",
    },
    name: {
        fontSize: 25,
        margin: 10,
    },
    icons: {
        flexDirection: "row",
    },

})