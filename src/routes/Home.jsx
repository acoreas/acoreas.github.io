import React from 'react'
import Image from 'react-bootstrap/Image'

import profile from '../images/Profile-1.PNG';


function Home() {
  return (
    <>
      <div className='home-background'></div>
      <div className='profile-description'>
      <Image className="profile-pic" roundedCircle="true" src={profile}/>
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam. Eleifend donec pretium vulputate sapien. Sit amet massa vitae tortor. Convallis convallis tellus id interdum velit laoreet id. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Sodales neque sodales ut etiam sit amet. Faucibus vitae aliquet nec ullamcorper sit. Odio pellentesque diam volutpat commodo. Ac tortor vitae purus faucibus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Odio morbi quis commodo odio aenean sed adipiscing. In nisl nisi scelerisque eu. Varius morbi enim nunc faucibus a pellentesque sit amet. Dolor purus non enim praesent elementum facilisis.
          Magna sit amet purus gravida quis blandit. Scelerisque eleifend donec pretium vulputate sapien. Tincidunt augue interdum velit euismod in pellentesque. Amet volutpat consequat mauris nunc congue nisi. Mauris rhoncus aenean vel elit. Cras pulvinar mattis nunc sed blandit libero. Eget nunc lobortis mattis aliquam faucibus. Ut lectus arcu bibendum at. Metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu risus quis varius quam. Donec pretium vulputate sapien nec sagittis. Adipiscing elit duis tristique sollicitudin nibh sit amet. Lorem donec massa sapien faucibus et molestie ac feugiat.
        </p>
      </div>
    </>
  );
}

export default Home