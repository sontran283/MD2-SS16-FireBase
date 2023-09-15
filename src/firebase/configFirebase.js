import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1i3aX3WL0tk5w-OLOM4NySzIjhjxCEXo", // moi may co mot key khac nhau
  authDomain: "project-module02-7661a.firebaseapp.com", // ten mien
  projectId: "project-module02-7661a", // id project
  storageBucket: "project-module02-7661a.appspot.com",
  messagingSenderId: "542800668445",
  appId: "1:542800668445:web:a99a51e913afb81cbba3f4",
};

// khoi tao firebase
const app = initializeApp(firebaseConfig);

// khoi tao tham chieu den dich vu luu tru, duoc su dung de tham chieu trong toan bo ung dung cua mk
const storage = getStorage(app);

// export ra ben ngoai de su dung
export { storage };
