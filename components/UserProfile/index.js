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
                    "https://banner2.kisspng.com/20180328/dew/kisspng-computer-icons-social-media-blog-avatar-material-5abbf0d5b48680.3023774615222663257395.jpg"
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
                color="rgba(255,45,58,0.8)"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "rgba(255,45,58,0.8)"
                }}
              >
                Offers & Discounts
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="rgba(255,45,58,0.8)"
              />
            </View>
            <View style={styles.bottom}>
              <Icon
                name="star"
                type="font-awesome"
                color="rgba(255,45,58,0.8)"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "rgba(255,45,58,0.8)"
                }}
              >
                Favourite Places
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="rgba(255,45,58,0.8)"
              />
            </View>

            <View style={styles.bottom}>
              <Icon
                name="check"
                type="font-awesome"
                color="rgba(255,45,58,0.8)"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "rgba(255,45,58,0.8)"
                }}
              >
                Locations Visited
              </Text>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="rgba(255,45,58,0.8)"
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
    backgroundColor: "rgba(255,255,255,0.7)"
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
    margin: 10,
    paddingTop: 10
  },
  middle: {
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    flex: 0.05,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 60,
    margin: 10,
    borderWidth: 3,
    padding: 10,
    opacity: 0.8
  },
  bottom: {
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 60,
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
