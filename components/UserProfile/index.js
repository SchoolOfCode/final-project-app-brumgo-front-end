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
                size={100}
                rounded
                source={{
                  uri:
                    "https://pbs.twimg.com/profile_images/924260952488411137/tDSjYZpM_400x400.jpg"
                }}
              />
              <Text style={styles.name}>Sahela Rani</Text>
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
              <Icon name="credit-card" type="font-awesome" color="#FFFFFF" />
              <Text
                style={{
                  color: "#FFFFFF"
                }}
              >
                Offers & Discounts
              </Text>
              <Icon name="chevron-right" type="font-awesome" color="#FFFFFF" />
            </View>
            <View style={styles.bottom}>
              <Icon name="star" type="font-awesome" color="#FFFFFF" />
              <Text
                style={{
                  color: "#FFFFFF"
                }}
              >
                Favourite Places
              </Text>
              <Icon name="chevron-right" type="font-awesome" color="#FFFFFF" />
            </View>

            <View style={styles.bottom}>
              <Icon name="check" type="font-awesome" color="#FFFFFF" />
              <Text
                style={{
                  color: "#FFFFFF"
                }}
              >
                Locations Visited
              </Text>
              <Icon name="chevron-right" type="font-awesome" color="#FFFFFF" />
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
    backgroundColor: "rgba(225,225,255,0.7)"
  },
  container: {
    flex: 1,
    width: "100%"
  },
  top: {
    backgroundColor: "rgb(252,193,51)",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  middle: {
    backgroundColor: "rgba(252,193,51,0.9)",
    flex: 0.05,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  bottom: {
    backgroundColor: "rgba(252,193,51,0.9)",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    margin: 10
  },
  name: {
    fontSize: 25,
    margin: 10,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  icons: {
    flexDirection: "row"
  }
});
