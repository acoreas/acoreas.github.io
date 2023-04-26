import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PictureButton from './PictureButton';
import { Box, Stack } from '@mui/system';
import { Container, ImageListItem, Paper, Typography } from '@mui/material';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function CustomTimeLineItem({project, index}) {

  var TLContent;
  var TLOppContent;

  if (index % 2 == 1){
    TLContent = (
      <Stack height="100%" justifyContent="center" alignItems="flex-start" mr="50%">
        <Typography variant="h5">{project.year}</Typography>
        <Typography variant="h6">{project.name}</Typography>
        <Typography>{project.shortDescription}</Typography>
      </Stack>
    )
    TLOppContent = (
      <Stack height="100%" justifyContent="center" alignItems="flex-end">
        <PictureButton project={project}/>
      </Stack>
    )
  }
  else {
    TLContent = (
      <Stack height="100%" justifyContent="center" alignItems="flex-start">
        <PictureButton project={project}/>
      </Stack>
    )
    TLOppContent = (
      <Stack height="100%" justifyContent="center" alignItems="flex-end" ml="50%">
        <Typography variant="h5">{project.year}</Typography>
        <Typography variant="h6">{project.name}</Typography>
        <Typography>{project.shortDescription}</Typography>
      </Stack>
    )
  }

  return (
    <div>
      <TimelineItem >
        <TimelineOppositeContent my="5vh">
            {TLOppContent}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent my="5vh">
          {TLContent}
        </TimelineContent>
      </TimelineItem>
    </div>
  )
}

export default CustomTimeLineItem