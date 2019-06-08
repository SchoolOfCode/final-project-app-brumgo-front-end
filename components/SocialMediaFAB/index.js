import React, { useState } from "react";
import { Button, Fab } from "native-base";
import { Icon } from "react-native-elements";
import posed from "react-native-pose";

const PosedButton = posed(Button)({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default function SocialMediaFAB(props) {
  const [active, setActive] = useState(false);

  return (
    <Fab
      active={active}
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: "#FCC133" }}
      position="bottomRight"
      onPress={() => setActive(!active)}
    >
      <Icon name="share" color="#FFFFFF" />
      <PosedButton
        pose={active ? "visible" : "hidden"}
        style={{ backgroundColor: "#34A34F" }}
      >
        <Icon name="instagram" type="font-awesome" color="#FFFFFF" />
      </PosedButton>
      <PosedButton
        pose={active ? "visible" : "hidden"}
        style={{ backgroundColor: "#3B5998" }}
      >
        <Icon name="facebook" type="font-awesome" color="#FFFFFF" />
      </PosedButton>
      <PosedButton
        pose={active ? "visible" : "hidden"}
        disabled
        style={{ backgroundColor: "#DD5144" }}
      >
        <Icon name="twitter" type="font-awesome" color="#FFFFFF" />
      </PosedButton>
    </Fab>
  );
}
