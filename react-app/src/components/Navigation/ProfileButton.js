import React, { useState, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../../store/session"
import OpenModalButton from "../OpenModalButton"
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFormModal"

function ProfileButton({ className, user }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false)
  const ulRef = useRef()

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true)
  }

  useEffect(() => {
    if (!showMenu) return

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", closeMenu)

    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout()).then(history.push("/"))
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden")
  const closeMenu = () => setShowMenu(false)

  return (
    <div className={className}>
      <button onClick={openMenu}>
        <i className="fas fa-chevron-down" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user && (
          <>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default ProfileButton
