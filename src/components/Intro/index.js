import {
	IntroContainer,
	IntroWrapper,
	IntroRow,
	Column1,
	Column2,
	TextWrapper,
	IntroH1,
	IntroP,
	ImgWrap,
	Img,
	DotContainer,
	IntroJap,
	IndiP,
	IndiDiv
} from './IntroElements'

import Genji from '../../assets/generativetest.gif'
import Aos from 'aos';
import "aos/dist/aos.css";
import Dots from '../../assets/dots.png'
import Jap from '../../assets/japintro.png'
import { useState, useEffect, useRef } from "react";


const Intro = () => {
	useEffect(()=>{Aos.init({duration: 3000});}, []);
	return (
		<IntroContainer>
			<DotContainer data-aos="fade-up">
				<img width="80%" src={Dots} />
			</DotContainer>
			<IntroJap data-aos="fade-up">
				<img width="60%" src={Jap} />
			</IntroJap>
			<IntroWrapper>
				<IntroRow>
					<Column1 data-aos="fade-up">
						<TextWrapper>
							<IntroH1>
								GENJI IS A HIGH RESOLUTION{"\n"}
								3D COLLECTION OF 5555 NFTS
							</IntroH1>
							<IntroP>
								The sheriff’s notice is in. 5,555 Edition 1 Genji figurines have{"\n"}
								MYSTERIOUSLY VANISHED from the locked warehouses at the
								headquarters of Genji Holdings Inc ®.
							</IntroP>
							<IntroP>
								Several eyewitnesses have reported sightings of “little toys
								kicking doors open and breaking locks before running out to the
								streets". CCTV footage has revealed an assemble of metallic
								bobble-head figurines no more than 4 inches tall- making their
								escape and causing a HUGE mess. Police on Wednesday
								stepped up the hunt for the extremely valuable figurines and
								roadblocks have also been set up at all roads and highways in
								and out of Solana District to contain them.
							</IntroP>

						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap data-aos="fade-up">
							<Img src={Genji} />
						</ImgWrap>
					</Column2>
				</IntroRow>
				<IndiDiv data-aos="fade-up">
					<IndiP data-aos="fade-up">
						Genji Holdings has tasked YOU to do your civic duty to use non-lethal force to appropriate these
						assets. Capture as many as you can and bring them back to us!

					</IndiP>
				</IndiDiv>
			</IntroWrapper>
		</IntroContainer>
	);
}

export default Intro;