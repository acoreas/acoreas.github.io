// import React, { useState } from 'react';
import React, {useEffect} from 'react';
import CustomTimelineItem from '../components/CustomTimelineItem'

import '../App.css';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const portfolioWebsiteImages = require.context('../images/projects/portfolio-website', true);
const babelBrainImages = require.context('../images/projects/babel-brain', true);
const tremorAnalysisImages = require.context('../images/projects/tremor-analysis', true);
const brainEstimationImages = require.context('../images/projects/brain-estimation', true);
const alarmManagementImages = require.context('../images/projects/alarm-management', true);
const vivaldiAntennaImages = require.context('../images/projects/vivaldi-antenna', true);
const skullFrameImages = require.context('../images/projects/skull-frame', true);
const strokeCentreAnalysisImages = require.context('../images/projects/stroke-centre-analysis', true);

const portfolioWebsiteImageList = portfolioWebsiteImages.keys().map(image => portfolioWebsiteImages(image));
const babelBrainImageList = babelBrainImages.keys().map(image => babelBrainImages(image));
const tremorAnalysisImageList = tremorAnalysisImages.keys().map(image => tremorAnalysisImages(image));
const brainEstimationImageList = brainEstimationImages.keys().map(image => brainEstimationImages(image));
const alarmManagementImageList = alarmManagementImages.keys().map(image => alarmManagementImages(image));
const vivaldiAntennaImageList = vivaldiAntennaImages.keys().map(image => vivaldiAntennaImages(image));
const skullFrameImageList = skullFrameImages.keys().map(image => skullFrameImages(image));
const strokeCentreAnalysisImageList = strokeCentreAnalysisImages.keys().map(image => strokeCentreAnalysisImages(image));

const placeholder_text = "placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text"

const projs = {
  Website: {
    company: "",
    name: "Portfolio Website",
    shortDescription: "A website created using React + Material UI libraries",
    description: placeholder_text,
    images: portfolioWebsiteImageList,
    year: "2023"
  },
  BabelBrain: {
    company: "NeuroFUS",
    name: "BabelBrain",
    shortDescription: "Software program for planning of Low-Intensity Focused Ultrasound treatment",
    description: placeholder_text,
    images: babelBrainImageList,
    year: "2023"
  },
  Biometrics: {
    company: "University of Calgary",
    name: "Hand Tremor Analysis",
    shortDescription: "Hand Tremor Analysis",
    description: placeholder_text,
    images: tremorAnalysisImageList,
    year: "2022"
  },
  ML: {
    company: "University of Calgary",
    name: "Brain Estimation Project",
    shortDescription: "Machine Learning algorithm",
    description: placeholder_text,
    images: brainEstimationImageList,
    year: "2022"
  },
  Alarms: {
    company: "Imperial Oil",
    name: "Alarm Management",
    shortDescription: "Addressing alarm issues",
    description: placeholder_text,
    images: alarmManagementImageList,
    year: "2020-2021"
  },
  Vivaldi: {
    company: "Murandi Communications",
    name: "Vivaldi Antenna",
    shortDescription: "Designing an ultra-wideband antenna for testing purposes",
    description: placeholder_text,
    images: vivaldiAntennaImageList,
    year: "2019"
  },
  SkullFrame: {
    company: "NeuroFUS",
    name: "Skull Frame",
    shortDescription: "Designing a custom skull holder for use in imaging",
    description: placeholder_text,
    images: skullFrameImageList,
    year: "2018"
  },
  Stroke: {
    company: "QuICR",
    name: "Stroke Centre Analysis",
    shortDescription: "Evaluating effectiveness of stroke centre placement in a province/state",
    description: placeholder_text,
    images: strokeCentreAnalysisImageList,
    year: "2017"
  },
};

function Projects() {

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  },[])

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
      <Timeline sx={{paddingTop: "50px"}}>
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