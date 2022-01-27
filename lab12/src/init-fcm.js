import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyA5ejZj1AgAyqKnhZc9BgLNh3WZR1KomM4",
  authDomain: "react-sec02-066.firebaseapp.com",
  projectId: "react-sec02-066",
  storageBucket: "react-sec02-066.appspot.com",
  messagingSenderId: "189967559394",
  appId: "1:189967559394:web:a14de6b593b450e5338cbb"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BPtZ6dz97W4WQ5J3Fv-NO8_8Dh1ZaPwTlLlTIPlt0jNW6bBdkLuegb_vGn-0agN4gzQhzIfzkiSy3zN1opNFXWU"
);

export { messaging };
