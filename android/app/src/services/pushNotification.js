import PushNotification from "react-native-push-notification";

const configure = () => {
    PushNotification.configure({
        onRegister: function(token) {
            //process token
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        popInitialNotification: true,
        requestPermissions: true
    });
};

export { configure };
