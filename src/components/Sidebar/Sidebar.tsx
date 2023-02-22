import { NavLink } from 'react-router-dom';

import twitterLogo from '../../assets/logo-twitter.svg';
import {
	House,
	Hash,
	Bell,
	Envelope,
	BookmarkSimple,
	FileText,
	User,
	DotsThreeCircle,
	Pencil,
} from 'phosphor-react';

import './Sidebar.css';

export function Sidebar() {
	return (
		<aside className="sidebar">
			<img className="logo" src={twitterLogo} alt="Logo"></img>

			<nav className="main-navigation">
				<NavLink to="/">
					<House weight="fill" />
					<span>Home</span>
				</NavLink>
				<NavLink to="/explore">
					<Hash />
					<span>Explore</span>
				</NavLink>
				<NavLink to="/notification">
					<Bell />
					<span>Notification</span>
				</NavLink>
				<NavLink to="/messages">
					<Envelope />
					<span>Messages</span>
				</NavLink>
				<NavLink to="/bookmarks">
					<BookmarkSimple />
					<span>Bookmarks</span>
				</NavLink>
				<NavLink to="/lists">
					<FileText />
					<span>Lists</span>
				</NavLink>
				<NavLink to="/profile">
					<User />
					<span>Profile</span>
				</NavLink>
				<NavLink to="/more">
					<DotsThreeCircle />
					<span>More</span>
				</NavLink>
			</nav>
			<button className="new-tweet">
				<Pencil />
				<span>Tweet</span>
			</button>
		</aside>
	);
}
