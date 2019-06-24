import React from 'react';
import { Card } from 'antd';
import Header from '../Header/header'
import ImgProfile from '../ImgProfile/Imgprofile'
import Body from '../Body/Body'

import pic from '../mebg.jpg'
import './page.css'
function App() {
  return (
    <div>
      <div className='setcenter'>
        <Card   cover={<img src={pic} className="bg"/>} className="sizeCard">
          
          <Body/>
        </Card>
      </div>
    </div>
  );
}

export default App;
