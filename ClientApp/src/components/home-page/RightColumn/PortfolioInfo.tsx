import * as React from 'react';
import styled from 'styled-components';
// import {Link} from 'react-router-dom'

interface IPortfolioInfoProps {
    user: any;
}





const Container = styled.div` display: flex;
padding: 2rem 3rem;
margin-bottom: 2rem;
border-radius: 20px;
background-color: #393945;
flex-direction: column;

`;

const Title = styled.div` font-size: 24px;
margin-right: 1rem;
font-weight: 400;
color: #8f94ab;
`;
const TextRow = styled.div` display: flex;
align-items: flex-start;
justify-content: space-between;
color: white;
margin-top: 1rem;
/* padding: 10px 0px; */
`;

// const LinkButton = styled(Link)` display: flex;
// align-items: center;
// font-size: 14px;
// font-weight: bold;
// text-decoration: none;
// color: #40c4ff;
// padding: 10px 18px;
// align-items: center;
// border-radius: 30px;
// justify-content: center;
// margin-left: 12px;
// min-width: 150px;
// background-color: #4d505f;

// &:hover {
//   cursor: pointer;
//   /* background-color: #bab9b9; */
// }

// `;




const PortfolioInfo: React.FunctionComponent<IPortfolioInfoProps> = ({user}) => {
  
    return (
    <Container>
           <Title> My Portfolio </Title>

           <TextRow>
            <div>{user.portfolio.account_value}$</div>
           </TextRow>
    </Container>
  );
};

export default PortfolioInfo;
