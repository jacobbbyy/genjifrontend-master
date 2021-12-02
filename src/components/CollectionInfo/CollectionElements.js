import styled from 'styled-components'


export const CollectionContainer = styled.div`
	color: #000;
    
`

export const CollectionWrapper = styled.div`     
	display: grid;
	z-index: 1;	
	width: 90%;
	max-width: 1100px;
	margin: 70px auto;
	padding: 0 24px;
	justify-content: center;
	@media screen and (max-width: 600px) {
		padding: 0;
	}
`

export const CollectionRow = styled.div`
	display: flex;	
	align-items: center;
	display: flex;
  flex-direction: row-reverse;
	@media screen and (max-width: 600px) {
		flex-direction: column-reverse;
	}
`

export const Column1 = styled.div`
	margin-top: 40px;
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
    
`
export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 20;
	padding-bottom: 60px;
	text-align: left;
	margin-left: 10px;
`

export const CollectionH1 = styled.h1`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: #F8F5B3;
`

export const CollectionP = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: antiquewhite;
    white-space: pre-line;
`

export const ImgWrap = styled.div`
    max-width: 555px;
      height: 100%;

`

export const Img = styled.img`
      width: 70%;
      height: 100%;
      margin: 0 0 10px 0;
      padding-right: 0;
`
