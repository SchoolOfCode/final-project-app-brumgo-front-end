import React, { useState } from "react";
import { Icon } from "react-native-elements";

export default function TickIcon() {
    const [tick, setTick] = useState(false);

    return (
        <Icon
            name="check"
            type="font-awesome"
            color={tick ? "#FCC133" : "#D3D3D3"}
            onPress={() => setTick(!tick)}
        />
    );
}
