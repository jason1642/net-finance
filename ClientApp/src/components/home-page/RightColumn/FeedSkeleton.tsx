import * as React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@mui/material';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  gap: 5px;
  background-color: #393945;
    padding: 1rem 3rem;
    margin-bottom: 2px;
    width: 340px;
    border-bottom: 2px solid #32323e;
  `;


interface IFeedSkeletonProps {
}

const FeedSkeleton: React.FunctionComponent<IFeedSkeletonProps> = (props) => {
  return (
    <Container>
        <Skeleton
            sx={{marginBottom: '7px'}}
            variant='rectangular'
            width={105}
            height={18}
        />
         <Skeleton
            variant='rectangular'
            width={'100%'}
            height={30}
        />
         <Skeleton
            sx={{marginTop: '4px'}}
            variant='rectangular'
            width={'100%'}
            height={59}
        />
        
    </Container>
  );
};

export default FeedSkeleton;
