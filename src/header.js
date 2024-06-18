import React from "react";
import ReactDOM from "react-dom/client";

export default function Header(){
    return(
        <div className="header">
            <Logo/>
            <ProfileImg/>
        </div>
    );
}

function Logo() {
  return (
    <div className="img-box">
      <img src="/logo.png" alt="Logo loading... " className="logo-img" />
    </div>
  );
}

function ProfileImg() {
  return (
    <div className="profile-img-box">
      <img src="/profile-pic.png" alt="Logo loading..." className="profile-img" />
    </div>
  );
}
