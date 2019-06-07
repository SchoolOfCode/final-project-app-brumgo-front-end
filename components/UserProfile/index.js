import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
import FooterSection from "../FooterSection";
import NavContext from "../NavigationContext";
import Header from "../HeaderSection";
import { PoiContextProvider } from "../PoiContextProvider";

export default (UserProfile = props => {
  return (
    <PoiContextProvider>
      <NavContext.Provider value={props.navigation}>
        <Header />
        <ImageBackground
          source={require("../LoadingPage/brum.jpg")}
          style={styles.background}
        >
          <View style={styles.overlay}>
            <View style={styles.container}>
              <View style={styles.top}>
                <Icon
                  name="user-circle"
                  type="font-awesome"
                  color="#FFFFFF"
                  size={80}
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
                <Icon
                  name="edit"
                  type="font-awesome"
                  color="#FCC133"
                  size={35}
                  raised
                />
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
                    fontWeight: "bold",
                    color: "#FFFFFF"
                  }}
                >
                  Offers & Discounts
                </Text>
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  color="#FFFFFF"
                />
              </View>
              <View style={styles.bottom}>
                <Icon name="star" type="font-awesome" color="#FFFFFF" />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#FFFFFF"
                  }}
                >
                  Favourite Places
                </Text>
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.bottom}>
                <Icon name="check" type="font-awesome" color="#FFFFFF" />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#FFFFFF"
                  }}
                >
                  Locations Visited
                </Text>
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  color="#FFFFFF"
                />
              </View>
            </View>
            <FooterSection {...props} />
          </View>
        </ImageBackground>
      </NavContext.Provider>
    </PoiContextProvider>
  );
});

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
    backgroundColor: "transparent",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 23,
    marginLeft: "25%",
    marginTop: "10%",
    width: 180,
    borderWidth: 3,
    borderColor: "#FFFFFF"
  },
  middle: {
    backgroundColor: "transparent",
    flex: 0.05,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 60,
    margin: 10,
    padding: 10
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
    margin: 18
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
