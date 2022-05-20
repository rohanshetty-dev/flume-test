import React, {useState} from 'react'
import {useRootEngine} from 'flume'
import engine from './engine'

const fakeUser = {
    firstName: "Rohan",
    lastName: "Shetty",
    isLoggedIn: true,
    isAdmin: false
  }

const nullUser = {
    firstName: "",
    lastName: "",
    isLoggedIn: false,
    isAdmin: false
  };

const Homepage = ({nodes})=>{
    const [user, setUser] = useState(fakeUser);
    const {title, description, showSignup, copyrightYear, sum} = useRootEngine(nodes, engine, {user});
    const login = ()=>setUser(fakeUser);
    const logout = ()=>setUser(nullUser);
    console.log('title', title);

    return (
      <div className="homepage">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {
        user.isLoggedIn ?
        <button onClick={logout}>Logout</button>
        :
        <button onClick={login}>Login</button>
      }
      {
        showSignup &&
        <form className="signup">
          <input type="email" />
          <button>Signup!</button>
        </form>
      }
      <p>Sum of two numbers : {sum}</p>
      <footer>© flume {copyrightYear}</footer>
    </div>
    );
}

export default Homepage