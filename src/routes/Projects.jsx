// import React, { useState } from 'react';
import * as React from 'react';
import CustomTimelineItem from '../components/CustomTimelineItem'
import Container from '@mui/material/Container';
import CircleIcon from '@mui/icons-material/Circle';

import '../App.css';
import NFP1 from '../images/calgary-peace-bridge.jpg';
import NFP2 from '../images/calgary-peace-bridge.jpg';
import IOP1 from '../images/refinery.jpg';
import MCP1 from '../images/calgary-peace-bridge.jpg';
import QCP1 from '../images/calgary-peace-bridge.jpg';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';

const placeholder_text = "placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text \
placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text \
placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text"

const projs = {
  BabelBrain: {
    company: "NeuroFUS",
    name: "BabelBrain",
    shortDescription: "Software program for planning of Low-Intensity Focused Ultrasound treatement",
    description: placeholder_text,
    image: NFP1,
    year: "2023"
  },
  Alarms: {
    company: "Imperial Oil",
    name: "Alarm Management",
    shortDescription: "Addressing alarm issues",
    description: placeholder_text,
    image: IOP1,
    year: "2020-2021"
  },
  Vivaldi: {
    company: "Murandi Communications",
    name: "Vivaldi Antenna",
    shortDescription: "Designing an ultra-wideband antenna for testing purposes",
    description: placeholder_text,
    image: MCP1,
    year: "2019"
  },
  SkullFrame: {
    company: "NeuroFUS",
    name: "Skull Frame",
    shortDescription: "Designing a custom skull holder for use in imaging",
    description: placeholder_text,
    image: NFP2,
    year: "2018"
  },
  Stroke: {
    company: "QuICR",
    name: "Stroke Centre Analysis",
    shortDescription: "Evaluating effectiveness of stroke centre location in a province/state",
    description: placeholder_text,
    image: QCP1,
    year: "2017"
  },
};

function Projects() {

  const ret = [];
  var i = 1;

  for (const key in projs){
    ret.push(
      <CustomTimelineItem project={projs[key]} index={i}/>
    )
    i++;
  }
    
  return (
    <>
      <Timeline sx={{paddingTop: "120px"}}>
        <TimelineItem>
          <TimelineOppositeContent />
          
          <TimelineSeparator>
              <Typography variant='h4'>Present</Typography>
              <Stack sx={{height:"30px", width:"30px", backgroundColor: "primary.main", borderRadius: "50%", mb: "12px"}}/>
              <TimelineConnector sx={{height:"50px"}}/>
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>
        {ret}
        <TimelineItem>
          <TimelineOppositeContent />
          <TimelineSeparator>
            <Stack sx={{height:"30px", width:"30px", backgroundColor: "primary.main", borderRadius: "50%", mt: "12px"}}/>
            </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default Projects