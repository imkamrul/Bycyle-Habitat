import firebaseConfig from "./Firebase.confiq";
import { initializeApp } from "firebase/app";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;