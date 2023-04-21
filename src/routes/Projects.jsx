import React, { useState } from 'react';
import Card from '../components/Card'

import '../App.css';
import NFP1 from '../images/calgary-peace-bridge.jpg';
import NFP2 from '../images/calgary-peace-bridge.jpg';
import IOP1 from '../images/refinery.jpg';
import MCP1 from '../images/calgary-peace-bridge.jpg';
import QCP1 from '../images/calgary-peace-bridge.jpg';

const placeholder_text = "placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text \
placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text \
placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text"

const projs = {
  BabelBrain: {
    company: "NeuroFUS",
    name: "BabelBrain",
    description: placeholder_text,
    image: NFP1
  },
  SkullFrame: {
    company: "NeuroFUS",
    name: "Skull Frame",
    description: placeholder_text,
    image: NFP2
  },
  Alarms: {
    company: "Imperial Oil",
    name: "Alarm Management",
    description: placeholder_text,
    image: IOP1
  },
  Vivaldi: {
    company: "Murandi Communications",
    name: "Vivaldi Antenna",
    description: placeholder_text,
    image: MCP1
  },
  Stroke: {
    company: "QuICR",
    name: "Stroke Centre Analysis",
    description: placeholder_text,
    image: QCP1
  },
};

function Projects() {
  
  const headers = [];
  const ret = [];

  for (const key in projs){
    if (headers.includes(projs[key].company)){
      ret.push(
      <>
        <Card projectInfo={projs[key]} />
      </>
      )

    }
    else{
      headers.push(projs[key].company)
      ret.push(
        <>
          <h1 className='company-header'>{projs[key].company}</h1>
          <Card projectInfo={projs[key]} />
        </>
      )
    }
  }

  return(
    <>
      {ret}
    </>
  );
}

export default Projects