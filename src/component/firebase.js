import {createContext, useContext} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push, onValue } from "firebase/database";
import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyAt8pkzRqvgRwVGepQTIIza0AaXBbzwGlc",
    authDomain: "weather-web-app-3dc15.firebaseapp.com",
    projectId: "weather-web-app-3dc15",
    storageBucket: "weather-web-app-3dc15.appspot.com",
    messagingSenderId: "880821369951",
    appId: "1:880821369951:web:f43e34c4e5455d9e1f6fea",
    databaseUrl: "https://weather-web-app-3dc15-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);
const firebaseContext = createContext(null);
export const useFirebase = () => {
  const context = useContext(firebaseContext);

  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }

  return context;
};

const putData = (key, data) => {
  try {
    const newRef = push(ref(fireDb, key));
    set(newRef, data);
  } catch (error) {
    console.error("Error while updating data:", error);
  }
};
export const firebaseProvider = ({ children }) => {
  return (
    <firebaseContext.Provider value={{ putData }}>
      {children}
    </firebaseContext.Provider>
  );
};
export default fireDb;