import Modal from "../UI/Modal/Modal";
import "./SidebarDrawer.css";

export default function SidebarDrawer(props) {
	const { drawerOpen, toggleDrawerOpen } = props;
	return (
		<>
			<Modal showing={drawerOpen} clicked={toggleDrawerOpen}>
				<div className="SidebarDrawer">
					<div
						className="SidebarDrawer-buttoncontainer"
						onClick={toggleDrawerOpen}
					>
						<button
							className="SidebarDrawer-backbutton"
							onClick={toggleDrawerOpen}
						></button>
					</div>
					<div className="SidebarDrawer-inner">{props.children}</div>
				</div>
			</Modal>
		</>
	);
}
