import PagesMetaHead from '../PagesMetaHead';
import AppHeader from '../shared/AppHeader';

const DefaultLayout = ({ children }) => {
	return (
		<div  style={{background: "#1B1C25", padding: 0, margin: 0, fontFamily: 'Helvetica, Arial, sans-serif'}}>
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
