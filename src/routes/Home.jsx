import { BorderBottom, BorderColor, Image } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { Stack } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'
import bg_photo from '../images/calgary-saddledome.jpg'

import profile from '../images/Profile-1.PNG';


function Home() {
  return (
    <>
    <Box
      sx={{
      backgroundImage: `url(${bg_photo})`,
      backgroundRepeat: "no-repeat",
      backgroundColor: "black",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      height: "100vh",
      borderBottom: '8px solid',
      borderColor: "secondary.main",
      backgroundAttachment: "fixed"
      }}
    >

    </Box>
    <Stack>
      <Box component="img" src={profile} border="solid 10px" borderRadius="50%" width="30vw" alignSelf="center" mt="1.5rem"/>
      <Typography variant="h2" fontWeight="medium" align='center' mt="1rem">
        Welcome!
      </Typography>
      <Typography margin="1rem" align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam. Eleifend donec pretium vulputate sapien. Sit amet massa vitae tortor. Convallis convallis tellus id interdum velit laoreet id. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sodales neque sodales ut etiam sit amet. Faucibus vitae aliquet nec ullamcorper sit. Odio pellentesque diam volutpat commodo. Ac tortor vitae purus faucibus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Odio morbi quis commodo odio aenean sed adipiscing. In nisl nisi scelerisque eu. Varius morbi enim nunc faucibus a pellentesque sit amet. Dolor purus non enim praesent elementum facilisis.
        Magna sit amet purus gravida quis blandit. Scelerisque eleifend donec pretium vulputate sapien. Tincidunt augue interdum velit euismod in pellentesque. Amet volutpat consequat mauris nunc congue nisi. Mauris rhoncus aenean vel elit. Cras pulvinar mattis nunc sed blandit libero. Eget nunc lobortis mattis aliquam faucibus. Ut lectus arcu bibendum at. Metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu risus quis varius quam. Donec pretium vulputate sapien nec sagittis. Adipiscing elit duis tristique sollicitudin nibh sit amet. Lorem donec massa sapien faucibus et molestie ac feugiat.  
      </Typography>
    </Stack>

      {/* <div className='home-background'></div>
      <div className='profile-description'>
      <Image className="profile-pic" roundedCircle="true" src={profile}/>
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam. Eleifend donec pretium vulputate sapien. Sit amet massa vitae tortor. Convallis convallis tellus id interdum velit laoreet id. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sodales neque sodales ut etiam sit amet. Faucibus vitae aliquet nec ullamcorper sit. Odio pellentesque diam volutpat commodo. Ac tortor vitae purus faucibus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Odio morbi quis commodo odio aenean sed adipiscing. In nisl nisi scelerisque eu. Varius morbi enim nunc faucibus a pellentesque sit amet. Dolor purus non enim praesent elementum facilisis.
          Magna sit amet purus gravida quis blandit. Scelerisque eleifend donec pretium vulputate sapien. Tincidunt augue interdum velit euismod in pellentesque. Amet volutpat consequat mauris nunc congue nisi. Mauris rhoncus aenean vel elit. Cras pulvinar mattis nunc sed blandit libero. Eget nunc lobortis mattis aliquam faucibus. Ut lectus arcu bibendum at. Metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu risus quis varius quam. Donec pretium vulputate sapien nec sagittis. Adipiscing elit duis tristique sollicitudin nibh sit amet. Lorem donec massa sapien faucibus et molestie ac feugiat.
        </p>
      </div> */}
    </>
  );
}

export default Home