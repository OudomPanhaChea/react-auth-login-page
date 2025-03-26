import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  // Initialize firebase authentication and navigation
  const auth = getAuth();
  const navigate = useNavigate();

  // State variable for managing authentication state, email, password, and error messages
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle sign-in with Google
  const signInWithGoogle = () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider()).then(response => {
      console.log(response.user.uid);
      navigate('/');
    }).catch(error => {
      console.log(error);
      setAuthing(false);
    })
  }

  // Function to handle sign-in with email and password
  const signInWithEmail = () => {
    setAuthing(true);
    setError('');

    signInWithEmailAndPassword(auth, email, password).then(response => {
      console.log(response.user.uid);
      navigate('/');
    }).catch(error => {
      console.log(error);
      setError(error.message);
      setAuthing(false);
    })
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full hidden lg:flex flex-col bg-[#282c34] items-center justify-center">

      </div>

      {/* login from */}
      <div className="w-full lg:w-1/2 h-full bg-[#1a1a1a] flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">

          {/* header section */}
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-4xl font-bold mb-2">Login</h3>
            <p className="text-lg mb-2">Welcome back! Please enter your details.</p>
          </div>

          {/* input field */}
          <div className="w-full flex flex-col mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* button */}
          <div className="w-full flex flex-col mb-4">
            <button
              className="w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              onClick={signInWithEmail}
              disabled={authing}
            >
              Login with Email and Password
            </button>
          </div>

          {/* display error */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* text 'or' */}
          <div className="w-full flex justify-center items-center py-4 relative">
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p className="text-lg absolute text-gray-500 bg-[#1a1a1a] px-2">OR</p>
          </div>

          {/* button login with google */}
          <button
            onClick={signInWithGoogle}
            disabled={authing}
            className="w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-7"
          >
            login with Google
          </button>
        </div>

        {/* link to signup page */}
        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Don't you have an account? 
            <span className='font-semibold text-white cursor-pointer underline ml-2'>
              <a href='/react-auth-login-page/signup'>Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
