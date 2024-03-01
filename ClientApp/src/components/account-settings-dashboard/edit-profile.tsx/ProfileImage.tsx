import * as React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { UserAccountTypes } from '../../../types/user-account';

interface IProfileImageProps {
    userData: UserAccountTypes;
}

const ProfilePicture = styled(Avatar)`
  
`;
const ImageWrapper = styled.div`
  display:flex;
  align-self: center;
  margin-bottom: 2rem;
  height: 150px;
  width: 150px;
  position: relative;
  &:hover{
    cursor: pointer;
  }
`;

const ChangePicture = styled.div`
  background-color: grey;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  top: 50%;
  height: 50%;
  width: 100%;
  border-radius: 20% 20% 0 0;
  opacity: 0;

 
  @keyframes appear {
    0% {opacity: 0}
    /* 50% {opacity: .4} */
    100% {opacity: .8}
  }
 &:hover {
    opacity: .8;
    animation: appear 500ms ease-in-out;

  }
`;

const ProfileImage: React.FunctionComponent<IProfileImageProps> = ({userData}) => {

    // add image file upload form

  return (
    <ImageWrapper>

    <ProfilePicture
      alt='avatar'
      src={`data:image/jpeg;base64,${userData.profile_picture.image_data}`}
      variant='rounded'
      sx={{height: '100%', width: '100%',}}
    />
    <ChangePicture >Edit Image</ChangePicture>
  </ImageWrapper>
  );
};

export default ProfileImage;
