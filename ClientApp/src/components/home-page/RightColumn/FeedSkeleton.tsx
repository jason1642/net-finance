import * as React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@mui/material';

const Container = styled.div`
  display:flex;
`;


interface IFeedSkeletonProps {
}

const FeedSkeleton: React.FunctionComponent<IFeedSkeletonProps> = (props) => {
  return (
    <Container>a
aseda
    </Container>
  );
};

export default FeedSkeleton;
