import React from "react";
import "../scss/Logout.scss"
import { useSelector } from "react-redux";
import { logout } from "../stores/auth";
import { useDispatch } from "react-redux";
import NoPage404 from "../pages/NoPage404"

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        
        dispatch(logout())
        window.location.href = '/'
    }
    return (
      <>
        {!user ?
          <NoPage404 /> :
          <div className="logout">
            <h1>
                Welcome <span className="userName">{user.email}</span>
            </h1>
            <button className="logoutBtn" onClick={(e) => handleLogout(e)}>Çıkış Yap</button>
          </div>
        }
      </>
    )
}

export default Profile