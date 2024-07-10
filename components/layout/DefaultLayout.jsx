import PagesMetaHead from '../PagesMetaHead';
import AppHeader from '../shared/AppHeader';
const DefaultLayout = ({ children }) => {
	return (
		<div className="font-Chillax-Variable" style={{background: "#1B1C25", padding: 0, margin: 0 }}>
			<PagesMetaHead />
			<AppHeader/>
				<div>
					{children}
				</div>
			{/* <Footer /> */}
		</div>
	);
};

export default DefaultLayout;
