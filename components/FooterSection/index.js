import React, { useContext } from "react";
import { Footer, FooterTab, Button, Icon } from "native-base";
import Search from "../Search";
import { PoiContext } from "../PoiContextProvider";

export default function FooterSection(props) {
<<<<<<< HEAD
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
                    <Button
                        onPress={() => {
                            props.navigation.navigate("Map");
                            console.log(props);
                        }}
                    >
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
                    <Button
                        onPress={() => {
                            props.navigation.navigate("UserProfile"),
                                console.log(` hello`, props);
                        }}
                    >
                        <Icon name="person" style={{ color: "#FFFFFF" }} />
                    </Button>
                </FooterTab>
            </Footer>
        </>
    );
=======
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
          <Button onPress={() => {
                            props.navigation.navigate("Map");
                            console.log(props);
                        }}>
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
          <Button>
            <Icon name="person" style={{ color: "#FFFFFF" }} />
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
>>>>>>> changing filtered categories in context implemented (CategoryToggles.js), some image fixes and replacements, icon library js added and used throughout code, search bar unstyled created
}
