import firebase from "firebase";
import "@firebase/firestore";

export const cargarConfiguracion=()=> {
  console.log("Cargando Configuración");
  const firebaseConfig = {
    apiKey: "AIzaSyC8Q9IeOZU1PPSlpY2PwGRnEAeaRPxiTHw",
    authDomain: "imparables-2f443.firebaseapp.com",
    databaseURL: "https://imparables-2f443.firebaseio.com",
    projectId: "imparables-2f443",
    storageBucket: "imparables-2f443.appspot.com",
    messagingSenderId: "336319665066",
    appId: "1:336319665066:web:10772e5264a795429791d3"
  };

  firebaseApp = firebase.initializeApp(firebaseConfig);
  global.bdd = firebase.firestore();
  global.estaCargado = true;
  
};