import React from "react";
import { Image, Text } from "react-native";
import factory from "../../assets/images/pictures/birds-custard-factory.jpg";

export default class ReadMore extends React.Component {
    state = {
        customBackgroundDialog: false,
        defaultAnimationDialog: false,
        scaleAnimationDialog: false,
        slideAnimationDialog: false
    };

    render() {
        // const custardFactory = {
        //     uri:
        //         "https://brunelbusinessschool.files.wordpress.com/2015/09/birds-custard-factory.jpg"
        // };
        // const extraPoiTrivia = pois[3].extraPoiTrivia;
        return (
            <>
                <Image source={factory} style={{ width: 100, height: 58 }} />
                <Text>
                    You might be asking why Alfred Bird developed this recipe,
                    well, it was all down to his wife allergy to eggs, the key
                    ingredient used to thicken traditional custard. The Birds
                    continued to serve real custard to dinner guests, until one
                    evening when the egg-free custard was served instead, either
                    by accident or design. The dessert was so well received by
                    the other diners that Alfred Bird put the recipe into wider
                    production. DID YOU KNOW...? The company was one of the
                    early users of promotional items and colourful advertising
                    campaigns. The famous 'three bird' logo, however, was
                    relatively late in arriving, only introduced in 1929.
                </Text>
            </>
        );
    }
}

//     render() {
//         const { extraPoiTrivia, urlExtra } = this.props.poi;

//         return (
//             <>
//                 <Image source={urlExtra} style={{ width: 100, height: 58 }} />
//                 <Text>{extraPoiTrivia}</Text>
//             </>
//         );
//     }
// }
