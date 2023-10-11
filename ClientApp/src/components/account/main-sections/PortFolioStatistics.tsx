import * as React from 'react';
import styled from 'styled-components';


interface IPortfolioStatisticsProps {
}

const Container = styled.div`
  display: flex;
  /* padding: 2rem; */
  border: 1px solid green !important;
  border-top: 1px solid #9b9b9b33;
  border-bottom: 1px solid #9b9b9b33;
  
  flex-direction: column;
  @media (max-width: 485px) {
  padding: 1rem 0;
}
`;

const Title = styled.div`
  display: flex;
  font-size: 1.5em;
  @media (max-width: 600px) {
  /* flex-direction: column; */
    align-self: center;
    margin-bottom: 1rem;
}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 7px 0px;
  /* justify-content: space-between; */

  @media (max-width: 600px) {
  /* flex-direction: column; */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
}

@media (max-width: 485px) {
  width: 75%;
}
`;


const Item = styled.div`
  display: flex;
  line-height: 1.4em;
  padding: 1px 5px;
  padding-left: 0px;
  width: 42%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
  /* flex-direction: column; */
  width: 80%;
}
@media (max-width: 485px) {
  width: 100%;
}
`;
const DottedLine = styled.div`
  display:flex;
  height: 2px;
  align-self: center;
  margin: 0 .8em;
  flex-grow: 1;
  border-top: 2px dotted #9b9b9b8a;
`;
const Label = styled.div`
  color: #c0c0c0;
  @media (max-width: 485px) {
  font-size: .9em;
}
`;

const ItemValue = styled.div`
  display: flex;
`;

const statisticFieldOptions = [
    {
        name: 'Avg. Consensus P/E',
        value: '120.9x'
    },
    {
        name: 'Avg. Cons. Rev. Grth',
        value: '21.41%'
    },
    {
        name: 'Avg. Cons. EPS Grth',
        value: '(53.12%)'
    },
    {
        name: 'Net Exposure',
        value: '$2.60K'
    },
    {
        name: 'Gross Exposure',
        value: '$2.60K'
    },
    {
        name: 'Beta Adj. Net Exp.',
        value: '$3.36K'
    },
]



const PortfolioStatistics: React.FunctionComponent<IPortfolioStatisticsProps> = (props) => {
  return (
    <Container>
        <Title>Portfolio Statistics</Title>
        {/* <Wrapper>
            {statisticFieldOptions.map(item=>  
            <Item key={item.name}>
                <Label>{item.name}</Label>
                <DottedLine/>
                <ItemValue>{item.value}</ItemValue>
                </Item>)}
        </Wrapper> */}



    </Container>
  );
};

export default PortfolioStatistics;
