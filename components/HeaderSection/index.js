import React, { useContext } from "react";
import { Header, Left, Body, Right, Button, Title } from "native-base";
import { Icon } from "react-native-elements";
import NavContext from "../NavigationContext";

export default (HeaderIconExample = props => {
  const navigation = useContext(NavContext);
  return (
    <Header style={{ backgroundColor: "#E12B38", height: 50 }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" type="font-awesome" color="#FFFFFF" />
        </Button>
      </Left>
      <Body>
        <Title style={{ marginLeft: "60%" }}>Profile</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="cog" type="font-awesome" color="#FFFFFF" />
        </Button>
      </Right>
    </Header>
  );
});
