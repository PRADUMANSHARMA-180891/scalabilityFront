import React from 'react';
import "./company.css";
import { useSelector } from 'react-redux';
const Company = () => {
    const user = useSelector((state)=>state.auth.user);
    if(!user){
        return <div>!No user logged in</div>
    }
    console.log(user);
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-yellow fixed-top ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="profile-pic-url.jpg" alt="Profile Picture" class="profile-pic"/>
         <p>Welcome<span>{user.email}</span></p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex sign-out" role="search">
          <button class="btn btn-outline text-white" type="submit">Sign out</button> 
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Company
