import React, { useEffect } from "react";
import router from "next/router";
import { getAuth } from "firebase/auth";

import initFirebase from "./firebase";

initFirebase();
const auth = getAuth();

const withAuth = (Component) => (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router.push("/nova-conta");
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default withAuth;
