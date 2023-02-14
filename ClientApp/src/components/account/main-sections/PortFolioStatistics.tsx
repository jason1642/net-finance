import * as React from 'react';
import styled from 'styled-components';


interface IPortfolioStatisticsProps {
}

const Container = styled.div`
  display: flex;
  padding: 2rem;
  border-top: 1px solid #9b9b9b33;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  font-size: 1.5em;

`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 7px 0px;
  justify-content: space-between;
`;


const Item = styled.div`
  display: flex;
  line-height: 1.4em;
  padding: 1px 5px;
  padding-left: 0px;
  width: 42%;
  justify-content: space-between;

`;

const Label = styled.span`
  color: grey;
`;

const ItemValue = styled.span`
  
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
        <Wrapper>
            {statisticFieldOptions.map(item=>  
            <Item>
                <Label>{item.name}</Label>
                <ItemValue>{item.value}</ItemValue>
                </Item>)}
        </Wrapper>



    </Container>
  );
};

export default PortfolioStatistics;
