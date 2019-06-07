import React, { useContext } from "react";
import { Footer, FooterTab, Button, Icon } from "native-base";

import NavContext from "../NavigationContext";
import { PoiContext } from "../PoiContextProvider";

export default function FooterSection(props) {
  const navigation = useContext(NavContext);
  const [{ directionsData }, { setDestination }] = useContext(PoiContext);

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
              backgroundColor: directionsData ? "#3EB650" : "#FCC133"
            }}
            active
            onPress={
              directionsData
                ? () => setDestination(null)
                : () => props.navigation.navigate("List")
            }
          >
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="camera" style={{ color: "#FFFFFF" }} />
          </Button>
          <Button
            onPress={
              navigation.state.routeName === "UserProfile"
                ? () => navigation.goBack()
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
