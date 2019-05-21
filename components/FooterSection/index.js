import React, { useState } from "react";
import { Footer, FooterTab, Button, Icon } from "native-base";
import Search from "../Search";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default function FooterSection(props) {
  // const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Footer>
        <FooterTab
          style={{
            backgroundColor: "#D3D3D3",
            height: "100%"
          }}
        >
          <Button>
            <Icon name="home" style={{ color: "#FFFFFF" }} />
          </Button>
          <Button>
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
          <Button onPress={() => props.navigation.push("UserProfile")}>
            <Icon name="person" style={{ color: "#FFFFFF" }} />
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
}
