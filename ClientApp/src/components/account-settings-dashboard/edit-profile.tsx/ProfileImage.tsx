import * as React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';
import { UserAccountTypes } from '../../../types/user-account';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
interface IProfileImageProps {
    userData: UserAccountTypes;
    register: any;
}

const ProfilePicture = styled(Avatar)`
  height: 100%;
  position: relative;
  width: 100%;
`;
const ImageWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 2rem;
  height: 150px;
  width: 150px;
  position: relative;
  &:hover{
    cursor: pointer;
  }
`;

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const ChangePicture = styled('button')`
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

const ProfileImage: React.FunctionComponent<IProfileImageProps> = ({userData, register}) => {

    // add image file upload form

  return (
    <ImageWrapper>
        
    
    <ProfilePicture
      alt='avatar'
      src={`data:image/jpeg;base64,${userData.profile_picture.image_data}`}
      variant='rounded'
      sx={{height: '100%', width: '100%',}}
    />
    
    <Button
      component="label"
      sx={{marginTop:'.5rem', textTransform: 'none'}}
      role={undefined}
      variant="contained"
      size='small'
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Image
      <VisuallyHiddenInput type="file" />
    </Button>
        
  </ImageWrapper>
  );
};

export default ProfileImage;
