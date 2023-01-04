import { useState } from "react";
import "./App.css";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons";

import headLogo from "./media/logo.jpg";

import { auth, provider } from "./firebase";
//import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  // const [user, setUser] = useState({
  //   displayName: "Suyog Kadam",
  //   email: "kadamsuyog1234@gmail.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL:
  //     "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg",
  // });

  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app__login">
          <img src={headLogo} alt="GalaxZ Cloud" />
          <button onClick={handleLogin}>Log in to GalaxZ Cloud</button>
        </div>
      )}
    </div>
  );
}

export default App;
