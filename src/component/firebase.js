import firebase from "firebase/app";
import "firebase/database"
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAt8pkzRqvgRwVGepQTIIza0AaXBbzwGlc",
    authDomain: "weather-web-app-3dc15.firebaseapp.com",
    projectId: "weather-web-app-3dc15",
    storageBucket: "weather-web-app-3dc15.appspot.com",
    messagingSenderId: "880821369951",
    appId: "1:880821369951:web:f43e34c4e5455d9e1f6fea"
  };

  const fireDb = initializeApp(firebaseConfig);
  // const fireDb = fireDB.database().ref();
  export default getDatabase(fireDb)