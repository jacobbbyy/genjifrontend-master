import './GenjiMerch.css'
import Discord from './Discord';
import Footer from './GachaFooter';
import Jap from '../../assets/jap6.png'

const Gachapon = () => {
	return (
		<div className="genjimerch">
			<div className='gachapon-content'>
				<h1 >{"  "}</h1>
				<p1>COMING </p1>
				<p2>SOON</p2>
				<img src={Jap} alt='jpnlog' />
			</div>

			<div className="discord-join">
				<Discord />
			</div>
			<div className="gacha-footer">
				<Footer />
			</div>
		</div>
	);
}

export default Gachapon;