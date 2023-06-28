import { House, Hash, Bell, Envelope, Bookmark, FileText, User,DotsThreeCircle, Pencil }from 'phosphor-react'

import './SideBar.css'
import twitterLogo from '../assets/logo-twitter.svg'
import { NavLink } from 'react-router-dom'

export function SideBar() {
  return (
    <aside className="sidebar">
    <img className="logo" src={twitterLogo} alt="logo" />

    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill" />
        <span>Home</span>
      </NavLink>
      <a href="">
        <Hash />
        <span>Explore</span>
      </a>
      <a href="">
        <Bell />
        <span>Notification</span>
      </a>
      <a href="">
        <Envelope />
        <span>Messages</span>
      </a>
      <a href="">
        <Bookmark />
        <span>Booksmarks</span>
      </a>
      <a href="">
        <FileText />
        <span>Lists</span>
        </a>
      <a href="">
        <User />
        <span>Profile</span>
      </a>
      <a href="">
        <DotsThreeCircle />
        <span>More</span>
      </a>
    </nav>

    <button className="new-tweet">
      <Pencil />
      <span>Tweet</span>
    </button>
  </aside>
  )
}