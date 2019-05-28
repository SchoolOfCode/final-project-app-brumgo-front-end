import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
import FooterSection from "../FooterSection";

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
                size={90}
                rounded
                source={{
                  uri:
                    "https://cdn2.iconfinder.com/data/icons/people-round-icons/128/man_avatar-512.png"
                }}
              />
              <Text style={styles.name}>Joe Bloggs</Text>
            </View>

            <View style={styles.middle}>
              <Icon
                name="user-plus"
                type="font-awesome"
                color="#FCC133"
                raised
              />

              <Icon name="edit" type="font-awesome" color="#FCC133" raised />

              <Icon
                name="share-alt"
                type="font-awesome"
                color="#FCC133"
                raised
              />
            </View>

            <View style={styles.bottom}>
              <Icon
                name="credit-card"
                type="font-awesome"
                color="#E12B38"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#E12B38"
                }}
              >
                Offers & Discounts
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="#E12B38"
              />
            </View>
            <View style={styles.bottom}>
              <Icon
                name="star"
                type="font-awesome"
                color="#E12B38"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#E12B38"
                }}
              >
                Favourite Places
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="#E12B38"
              />
            </View>

            <View style={styles.bottom}>
              <Icon
                name="check"
                type="font-awesome"
                color="#E12B38"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#E12B38"
                }}
              >
                Locations Visited
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="#E12B38"
              />
            </View>
          </View>
          <FooterSection />
        </View>
      </ImageBackground>
    );
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
    width: "100%"
  },
  top: {
    backgroundColor: "#FFFFFF",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 15,
    paddingTop: 20,
    marginLeft: "25%",
    marginTop: "10%",
    width: 180,
  },
  middle: {
    backgroundColor: "transparent",
    flex: 0.05,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 60,
    margin: 10,
    padding: 10,
  },
  bottom: {
    backgroundColor: "transparent",
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    margin: 10
  },
  name: {
    fontSize: 25,
    margin: 10,
    fontWeight: "bold",
    color: "#D3D3D3"
  },
  icons: {
    flexDirection: "row"
  }
});
