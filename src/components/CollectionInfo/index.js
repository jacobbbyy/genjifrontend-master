
import {
	CollectionContainer,
	CollectionWrapper,
	CollectionRow,
	Column1,
	Column2,
	TextWrapper,
	CollectionH1,
	CollectionP,
	ImgWrap,
	Img
} from './CollectionElements'
import Collection from '../../assets/collectioninfo.jpg'


const CollectionInfo = () => {
	return (
		<CollectionContainer>
			<CollectionWrapper>
				<CollectionRow>
					<Column1>
						<TextWrapper>
							<CollectionH1>
								COLLECTION GENERAL INFO:
							</CollectionH1>
							<CollectionP>
								Neon genji(40%) {"\n"}  Normal genji(60%)
							</CollectionP>
							<CollectionP>
								Specific traits:
							</CollectionP>
							<CollectionP>
								Background, Skin, Face, Face accessories,{"\n"}
								Head + Hair + Ear, Shirt and also {"\n"}
								Clothes + Neck accessories{"\n"}
							</CollectionP>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img src={Collection} />
						</ImgWrap>
					</Column2>
				</CollectionRow>
			</CollectionWrapper>
		</CollectionContainer>
	);
}

export default CollectionInfo;