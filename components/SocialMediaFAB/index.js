import React, { Component } from 'react';
import { Container, Header, View, Button, Fab } from 'native-base';
import { Icon } from "react-native-elements"

export default class SocialMediaFAB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 'true'
        };
    }
    render() {
        return (
            <Container>
                <Header />
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#FCC133' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>

                        <Icon name="share" color="#FFFFFF" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="instagram" type="font-awesome" color="#FFFFFF"  />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="facebook" type="font-awesome" color="#FFFFFF" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="twitter" type="font-awesome" color="#FFFFFF" />
                        </Button>
                    </Fab>
                </View>
            </Container>
        );
    }
}