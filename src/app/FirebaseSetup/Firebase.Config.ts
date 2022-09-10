import { environment } from "src/environments/environment";

const firebaseConfig = {
  apiKey: environment.REACT_APP_FIREBASE_API_KEY,
  authDomain: environment.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: environment.REACT_APP_FIREBASE_PROJECT_ID, 
  storageBucket: environment.REACT_APP_FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: environment.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
  appId: environment.REACT_APP_FIREBASE_APP_ID,
};
export default firebaseConfig;