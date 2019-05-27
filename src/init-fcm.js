import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    messagingSenderId: "534066718402"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BLQHB8Qgk5cwuRIS-9V2jpekP3UqwnYFj1iemDBuZRS04Cg1YRiVxS4rH8a-eqpw9FLiYh8nU11PFO7EwK1zB6g"
);

export { messaging };