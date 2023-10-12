import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const SignInUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //////////////////////////////////////////////////
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[2].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  /////////////////////////////////////////////
  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(displayName + email + password);

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            // await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            alert(err.message);

            setLoading(false);
          }
        });
      });
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  };
  ////////////////

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  /////////////////
  return (
    <div className="bg-[#02030C] flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          <span>{isSignIn ? "Sign In" : "Sign Up"}</span> to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={isSignIn ? handleSignIn : handleSignUp}
        >
          {/* <div className="flex justify-evenly">
            <div className="h-10 w-10 bg-slate-100 m-2"></div>
            <div className="h-10 w-10 bg-slate-100 m-2"></div>
            <div className="h-10 w-10 bg-slate-100 m-2"></div>
            <div className="h-10 w-10 bg-slate-100 m-2"></div>
          </div> */}
          {isSignIn ? (
            <></>
          ) : (
            <div>
              <label
                for="username"
                className="text-[#F5F5F5]  text-opacity-85% md:text-md text-md "
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="name"
                  required
                  className={`my-2 p-4  text-lg font-bold w-full   bg-transparent rounded-lg text-white outline-none border-solid border-[0.5px] 
                    border-[#636363] max-h-32 h-10 md:h-14`}
                ></input>
              </div>
            </div>
          )}
          <div>
            <label
              for="email"
              className="text-[#F5F5F5]  text-opacity-85% md:text-md text-md "
            >
              Email address
            </label>
            <div className="text-[#F5F5F5]  text-opacity-85% md:text-md text-md ">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="my-2 p-4  text-lg font-bold w-full   bg-transparent rounded-lg text-white outline-none border-solid border-[0.5px] 
                border-[#636363] max-h-32 h-10 md:h-14"
              ></input>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-[#F5F5F5] hidden text-opacity-85% md:text-md text-md ">
                {isSignIn ? (
                  <button className="font-semibold text-[#02030C]">
                    Forgot password?
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="my-2 p-4  text-lg font-bold w-full   bg-transparent rounded-lg text-white outline-none border-solid border-[0.5px] 
                border-[#636363] max-h-32 h-10 md:h-14"
              ></input>
            </div>
            {isSignIn ? (
              <></>
            ) : (
              <div>
                {" "}
                <input
                  required
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                />
                <label
                  htmlFor="file"
                  className="text-[#F5F5F5]  text-opacity-85% md:text-md text-md "
                >
                  <div className=" flex pt-2 items-center">
                    <img
                      className="rounded-full h-10 w-10"
                      src={"https://pbs.twimg.com/media/D_eP7UDWwAA2mA8.png"}
                      alt=""
                    />
                    <span>click to add picture</span>
                  </div>
                </label>
              </div>
            )}
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#26D1D4] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {isSignIn ? "Not a member?" : "Already a member?"} {}
          <button
            onClick={() => {
              toggleForm();
            }}
            className="font-semibold leading-6 text-[#26D1D4] pl-2"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInUp;
