import React, { useState } from "react";
import { Icon } from "react-native-elements";

export default function FavIcon() {
    const [star, setStar] = useState(false);

    return (
        <Icon
            name="star"
            type="font-awesome"
            color={star ? "#FCC133" : "#D3D3D3"}
            onPress={() => setStar(!star)}
        />
    );
}
