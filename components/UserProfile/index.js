import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'



export default class UserProfile extends Component {
    render() {
        return (
            <ImageBackground
                source={require("../LoadingPage/brum.jpg")}
                style={styles.background}
            >
                <View style={styles.overlay}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Avatar
                        size={100}
                        rounded
                        source={{
                            uri:
                                'https://pbs.twimg.com/profile_images/924260952488411137/tDSjYZpM_400x400.jpg',
                        }}
                    />
                    <Text style={styles.name}>Sahela Rani</Text>
                
                </View>

                        <View style={styles.middle}>
                         
                            <Icon
                                name='user-plus'
                                type='font-awesome'
                                color='#FCC133'
                                raised
                            />

                            <Icon
                                name='edit'
                                type='font-awesome'
                                color='#FCC133'
                                raised
                                />

                            <Icon
                            name='share-alt'
                            type='font-awesome'
                            color='#FCC133'
                            raised
                        />
                        </View>


                        <View style={styles.bottom}>
                            <Icon
                                name='credit-card'
                                type='font-awesome'
                                color='#FCC133'
                        
                            />
                    <Text style={{ color: "#000000" }}>Offers & Discounts</Text>
                    <Icon
                        name='chevron-right'
                        type='font-awesome'
                        color='#D3D3D3'
                    />
                    </View>
                        <View style={styles.bottom}>
                            <Icon
                                name='star'
                                type='font-awesome'
                                color='#FCC133'
                            
                            />
                            <Text style={{ color: "#000000" }}>Favourite Places</Text>
                            <Icon
                                name='chevron-right'
                                type='font-awesome'
                                color='#D3D3D3'
                            />
                        </View>

                        <View style={styles.bottom}>
                            <Icon
                                name='check'
                                type='font-awesome'
                                color='#FCC133'
                                
                            />
                            <Text style={{ color: "#000000" }}>Locations Visited</Text>
                            <Icon
                                name='chevron-right'
                                type='font-awesome'
                                color='#D3D3D3'
                            />
                        </View>
            </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(152,152,152,0.7)"
    },
    container: {
        flex: 1,
        width: "100%",
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
        backgroundColor: "#FFFFFF",
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
        backgroundColor: "#FFFFFF",
        flex: 0.2,
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
    name: {
        fontSize: 25,
        margin: 10,
    },
    icons: {
        flexDirection: "row",
    },

})