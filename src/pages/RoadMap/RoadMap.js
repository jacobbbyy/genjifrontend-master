import './Roadmap.css'
import Discord from './Discord'
import Footer from './GachaFooter'

const RoadMap = () => {
	return (
		<div className="roadmap">
			<div className='phase--container'>
				<div className='header-roadmap'>
					<div className='pre--phase'>
						<h1>PRE-PHASE (Q3 2021)</h1>
						<p>-Art pieces are drawn out and vigorously vetted through</p>
						<p>-Roadmap is planned out</p>
						<p>-Social media and domain registrations acquired</p>
					</div>

					<div className='phase--1'>
						<h1>PHASE 1 (Q4 2021)</h1>
						<p>-Discord, Twitter and Website are opened to the public</p>
						<p>-Sneak peeks of artwork/unique NFT giveaways are implemented on an incremental basis</p>
						<p>-Promotional campaigns go live.</p>
						<p>-Mint Day + secondary market listings(Solanart, Solsea, DigitalEyes)</p>
					</div>

					<div className='phase--2'>
						<h1>PHASE 2 (Q1 2022)</h1>
						<p>-A DAO will be implemented after mint with 50% royalties from the secondary market setting foot into a Community Wallet.</p>
						<p>-$GENJI tokens are airdropped to all holders</p>
					</div>

					<div className='phase--3'>
						<h1>PHASE 3 (Q2 2022)</h1>
						<p>-Collaborations with other Solana projects go live.</p>
						<p>-Future events to be fully decided by the community via a democratic process.</p>
					</div>
				</div>
			</div>
			<div className="roadmap-discord">
				<Discord />
			</div>
			<div className="roadmap-footer">
				<Footer />
			</div>
		</div>
	);
}

export default RoadMap;