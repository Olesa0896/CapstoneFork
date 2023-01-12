import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { Icons } from "../utils"

const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  gap: 10px;

  // height: 604px;
  // left: calc(50% - 1440px/2);
  // top: 672px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 0px;
  gap: 32px;
  height: 476px;
`;
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const PrepTitle = styled.p`
  ${typography.text.button};
  color: ${colors.gray.dark};
  letter-spacing: 0.1px;
  margin:0;
`;

const Title = styled.h1`
  ${typography.head.md};
  color: ${colors.pink.dark};
  margin: 0;
`;
const CardContainer = styled.div`
  position:relative;
  width: 300px;
  height: 360px;


  display: flex;
  flex-direction: column;
  // justify-content:space-between;
  
  background: ${colors.white}

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 7px solid ${colors.pink.dark};
  border-radius: 8px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-radius: 8px;
  border-top-right-radius:8px;
  border-top-left-radius:8px;


`;

const Property = styled.img`
  width: 300px;
  height: 200px;
  bordes: 1px solid ${colors.gray.dark};
  border-top-right-radius:8px;
  border-top-left-radius:8px;
  Width:300px;
  Height:200px;
`;

const Tag = styled.div`
  position:absolute;
  width: 110px;
  height: 28px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items:center;
  color:${colors.white};
  background-color:${colors.pink.medium};
  border-top-right-radius:8px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:${colors.gray.medium};
  padding:8px;
`;

const Category = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 300px;
  height: 32px;
  
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 12px;
  ${typography.head.sm}
  color: ${colors.gray.dark}
  width: 161px;
  height: 32px;
`;

const HomeType = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 4px;
  ${typography.text.md}
  color: ${colors.gray.medium}

  width: 113px;
  height: 24px;
`;

const Address = styled.div`
  ${typography.text.md}
  color: ${colors.gray.dark}
  letter-spacing: 0.15px;
  margin-top:8px;

  width: 284px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
 `;

const Features = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  margin-top: 16px;
  width: 235px;
  height: 18px;
  
`;

const Bed = styled.div`
  display: flex;
  align-items: center;
`;

const Bath = styled.div`
  display: flex;
  align-items: center;
`;

const Area = styled.div`
  display: flex;
  align-items: center;
`;

const Pet = styled.div`
  display: flex;
  align-items: center;
`;

export function PropertyCard({ property, showProperty}) {


  return (

    
    

    <Wrapp onClick={showProperty}>
      {/* <Container> */}

        {/* <TextContainer>
          <PrepTitle>Find an Appartment you Love</PrepTitle>
          <Title>Homes for rent at the best prices</Title>
        </TextContainer> */}
        <CardContainer>
          <ImgContainer>
            <Property src={property.url} />
            <Tag>
              {Icons.coins}
              {property.property.mode === 1 ? "For Sale" : "For Rental" }
            </Tag>
          </ImgContainer>
          <InformationContainer>
            <Category>
              <Price >
                {Icons.dollarCircle}
                {property.property.price}
              </Price>
              <HomeType>
                {Icons.building}
                {property.property.property_type === 1 ? "Apartment" : "House"}
              </HomeType>
            </Category>
            <Address>
                {property.property.address} 
            </Address>
            <Features>
              <Bed>{Icons.bed} {property.property.bedrooms}</Bed>
              <Bath>{Icons.bath} {property.property.bathrooms}</Bath>
              <Area>{Icons.area} {property.property.area} m2</Area>
               <Pet>{property.property.pet_allowed ? Icons.paw : null }</Pet>
            </Features>

          </InformationContainer>

        </CardContainer>
      {/* </Container> */}
    </Wrapp>

  )
}