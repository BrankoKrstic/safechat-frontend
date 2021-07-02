import Modal from "../UI/Modal/Modal";
import "./SidebarDrawer.css";

export default function SidebarDrawer(props) {
	const { drawerOpen, toggleDrawerOpen } = props;
	return (
		<>
			<Modal showing={drawerOpen} clicked={toggleDrawerOpen} />
			<div
				className={`SidebarDrawer ${
					drawerOpen ? "SidebarDrawer-open" : "SidebarDrawer-closed"
				}`}
			>
				{props.children}
			</div>
		</>
	);
}
