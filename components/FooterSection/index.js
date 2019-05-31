import React, { useState, useContext } from "react";
import { Footer, FooterTab, Button, Icon } from "native-base";
import Search from "../Search";
import { PoiContext } from "../PoiContextProvider";
import NavContext from "../NavigationContext";

export default function FooterSection(props) {
  const navigation = useContext(NavContext);
  console.log("footermasternavigation State", navigation.state);
  return (
    <>
      <Footer>
        <FooterTab
          style={{
            backgroundColor: "#D3D3D3",
            height: "100%"
          }}
        >
          <Button onPress={() => navigation.push("Home")}>
            <Icon name="home" style={{ color: "#FFFFFF" }} />
          </Button>
          <Button onPress={props.searchingToggle}>
            <Icon name="search" style={{ color: "#FFFFFF" }} />
          </Button>
          <Button
            style={{
              height: 70,
              width: 70,
              bottom: 8,
              borderWidth: 3,
              borderColor: "#FFFFFF",
              borderRadius: 35,
              backgroundColor: "#FCC133"
            }}
            active
          >
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="camera" style={{ color: "#FFFFFF" }} />
          </Button>
          <Button
            onPress={
              navigation.state.routeName === "UserProfile"
                ? () => navigation.push("Main")
                : () => navigation.push("UserProfile")
            }
          >
            <Icon name="person" style={{ color: "#FFFFFF" }} />
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
}
