// import React, { useState } from 'react';
import React, {useEffect} from 'react';
import CustomTimelineItem from '../components/CustomTimelineItem'

import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const portfolioWebsiteImages = require.context('../images/projects/portfolio-website', true);
const babelBrainImages = require.context('../images/projects/babel-brain', true);
const tremorAnalysisImages = require.context('../images/projects/tremor-analysis', true);
const brainEstimationImages = require.context('../images/projects/brain-estimation', true);
const alarmManagementImages = require.context('../images/projects/alarm-management', true);
const vivaldiAntennaImages = require.context('../images/projects/vivaldi-antenna', true);
const I4HImages = require.context('../images/projects/i4h-competition', true);
const skullFrameImages = require.context('../images/projects/skull-frame', true);
const strokeCentreAnalysisImages = require.context('../images/projects/stroke-centre-analysis', true);

const portfolioWebsiteImageList = portfolioWebsiteImages.keys().map(image => portfolioWebsiteImages(image));
const babelBrainImageList = babelBrainImages.keys().map(image => babelBrainImages(image));
const tremorAnalysisImageList = tremorAnalysisImages.keys().map(image => tremorAnalysisImages(image));
const brainEstimationImageList = brainEstimationImages.keys().map(image => brainEstimationImages(image));
const alarmManagementImageList = alarmManagementImages.keys().map(image => alarmManagementImages(image));
const vivaldiAntennaImageList = vivaldiAntennaImages.keys().map(image => vivaldiAntennaImages(image));
const I4HImageList = I4HImages.keys().map(image => I4HImages(image));
const skullFrameImageList = skullFrameImages.keys().map(image => skullFrameImages(image));
const strokeCentreAnalysisImageList = strokeCentreAnalysisImages.keys().map(image => strokeCentreAnalysisImages(image));

export const projs = {
  BabelBrain: {
    company: "NeuroFUS",
    name: "BabelBrain",
    shortDescription: "Improving software planning tool for LIFU treatment",
    description:
    <Box>
      <Typography variant='h6' fontWeight="bold">LIFU? What's That?</Typography>
      <Typography>
        Low Intensity Focused Ultrasound is a treatment by which multiple ultrasound transducers are used to treat the
        body rather than image it. By aiming multiple transducers at the same target location, ultrasound waves converge and begin to heat tissue 
        inside the body non-invasively and is most commonly used on the brain. While this can be used to ablate/burn harmful tissues such as 
        lesions, at lower levels, focused ultrasound has been observed to produce neuromodulation effects and continues to be a great point of 
        interest in research.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">What's BabelBrain?</Typography>
      <Typography>
        Well, since LIFU is done non-invasively, there needs to be a way to determine that the treatment will indeed
        hit the intended target especially since skull characteristics vary from person to person. That's where BabelBrain comes in, BabelBrain 
        is a software tool that takes MRI brain scans and generates image masks that are then used in transducer acoustic and thermal simulations 
        to predict LIFU heating location (More info 
        available <Typography component={Link} to="https://proteusmrighifu.github.io/BabelBrain/" sx={{textDecoration: 'none'}}>here</Typography>).
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">What Needed Improving?</Typography>
      <Typography>
          While an incredible useful tool, the image processing and mask generation steps were a bit sloooooow and no one likes working with
          slow programs. While certain steps were already offloaded to available GPUs in order to speed up time, there were more that 
          could be restructured to also work on the GPU side.

          In addition to that, there was a desire to make the software more accessible to the research community and not everyone likes 
          starting applications through a command line. So work was done on packaging it up into a single executable file to improve
          user experience.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Results</Typography>
      <Typography>
        <ul>
          <li>Processing time <Typography variant='body' fontWeight="bold">reduced by {'>'}20%</Typography></li>
          <li>Implementation in multiple parallel computing frameworks</li>
          <ul>
            <li>CUDA</li>
            <li>OpenCL</li>
            <li>Metal</li>
          </ul>
          <li>Creation of standalone installations for Linux and Windows</li>
        </ul>
      </Typography>
    </Box>,
    images: babelBrainImageList,
    year: "2023"
  },
  Website: {
    company: "",
    name: "Portfolio Website",
    shortDescription: "Creating a website using React + Material UI libraries",
    description:
    <Box>
      <Typography variant='h6' fontWeight="bold">No Website Builder?</Typography>
      <Typography>
        That's right, no website builder here! This entire website was created using ReactJs and the Material UI component
        library and is hosted on GitHub Pages, because who wants to pay for things (source 
        code <Typography component={Link} to="https://github.com/acoreas/acoreas.github.io" sx={{textDecoration: 'none'}}>here</Typography>). 
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Why make this?</Typography>
      <Typography>
        Completed in a little over a month (including time to learn React), this website was a way to showcase the various projects I've had 
        the pleasure to work on, but also give you some insights into who I am as a person. Best viewed on desktop, this website still needs
        some work to becoming fully responsive, but it's well on its way so stay tuned!
      </Typography>
      <Container component="img" sx={{width:"30%", paddingTop:"30px"}} src={portfolioWebsiteImageList.filter(image => image.includes("mobile"))}></Container>
    </Box>,
    images: portfolioWebsiteImageList,
    year: "2023"
  },
  Biometrics: {
    company: "University of Calgary",
    name: "Hand Tremor Analysis",
    shortDescription: "Classifying tremor presence using Leap Motion data and a LSTM neural network",
    description:
    <Box>
      <Typography variant='h6' fontWeight="bold">Background</Typography>
      <Typography>
        A Pathological Hand Tremor (PHT), is a common motor symptom of disorders such as Parkinsons and can severely affect a
        patients’ independence and quality of life. To develop advanced rehabilitation and assistive technologies, accurate detection and 
        characterization of hand tremors is critical. This project looked at developing a method to t classify the presence of PHT using hand
        motion tracking.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Process</Typography>
      <Typography>
        The process for creating a method for classifying tremor presence can be broken down into 3 steps:<br/>
        <br/>
        <ol>
          <li>Collecting/formatting hand motion data</li>
          <li>Building and training machine learning model</li>
          <li>Testing and evaluating model</li>
        </ol>
        
        <Container display="flex" component="img" sx={{width:"80%"}} src={tremorAnalysisImageList.filter(image => image.includes("process"))}></Container>

        <b>Step 1: Data Collection & Formatting</b><br/>
        Using a leap motion tracker, a circular hand motion was recorded as a csv file with values for pitch, roll, yaw, finger lengths, etc. tracked 
        over time. Multiple sets of data were recorded for both tremor absence and presence. In a Juypter notebook, the features of interest 
        were extracted and labels created indicating tremor presence/absence.
        <br/><br/>
        <Container display="flex" component="img" sx={{width:"70%"}} src={tremorAnalysisImageList.filter(image => image.includes("motion"))}></Container>
        <br/>
        <b>Step 2: Model Building and Training</b><br/>
        Next, we implemented a Long Short Term Memory (LSTM) network, a type of recurrent neural network. Now if you're not familiar with machine/deep learning, that maybe sounds like
        gibberish. Neural networks are a type of algorithm great at recognizing patterns and classifying data. Earning it's name, due to the fact that it's modeled after
        the human brain, neural networks pass data along nodes or "neurons" only if it exceeds a certain threshold value. Normal neural networks only take one set of inputs to produce 
        an output. What makes the LSTM neural network different is that it can also account for past inputs (hence recurrent), which is great for sequences of data like the
        the time series data for motion used here.
        <br/>
        <br/>
        A portion of our collected was data was then used to train the model. To create the best model possible, the following parameters were tweaked and results for each version were recorded:
        <ul>
          <li>
            <b>Epoch Number:</b> Number of times the entire training dataset passes through the model
            <ul><li>10, 50, 100</li></ul>
          </li>
          <li>
            <b>Test Data Percentage:</b> Percentage of total available data used for model training
            <ul><li>20%, 30%, 40%</li></ul>
          </li>
          <li>
            <b>Model Type:</b> Unidirectional vs Bidirectional
            <ul><li>More on this later, but for now, focus was on Unidirectional...</li></ul>
          </li>
        </ul>
        <b>Step 3: Model Testing and Evaluation</b><br/>
        Next, the remaining data was feed into the model and it's classified outputs were recorded. The match rate of predicted label vs actual label
        for each version was calculated and plotted. Confusion matrices showing the breakdown of predicted vs actual labels were alos generated.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Results</Typography>
      <Typography>

        Results are in! The best unidirectional LSTM neural network (blue bars) had a match rate of 60%... not going to lie, that sucks. Now I could've given some excuse
        about not enough training data, but I wanted an actual working model. That's when some further research showed how a bidirectional model could improve things. 
        <br/>
        <Container component="img" sx={{width:"80%"}} src={tremorAnalysisImageList.filter(image => image.includes("results"))}></Container>
        <br/>
        These models pass data both forwards and backwards, making it easier to understand/predict motion data. A simple example illustrating this would be trying the predict the 
        next word in the following sentence: "John went to the...", there are numerous possibilities, however if we also have information about the end of the sentence like 
        "and swam for an hour", we can now narrow our choices to places like the pool, beach, etc. The bidirectional model results are coloured in red and show incredible
        improvement, with almost each model version matching at 100%. A confusion matrix for one of the best models is shown below.
        <br/>
        <br/>
        <Container component="img" sx={{width:"60%"}}  src={tremorAnalysisImageList.filter(image => image.includes("confusion-matrix"))}></Container>
      </Typography>
    </Box>,
    images: tremorAnalysisImageList,
    year: "2022"
  },
  // ML: {
  //   company: "University of Calgary",
  //   name: "Brain Estimation Project",
  //   shortDescription: "Estimating age based on brain scans using image processing and a gradient boosting model",
  //   description:
  //   <Box>
  //     <Typography variant='h6' fontWeight="bold">Background</Typography>
  //     <Typography>
  //       Background Text
  //     </Typography>
  //     <br/>
  //     <Typography variant='h6' fontWeight="bold">Process</Typography>
  //     <Typography>
  //       Process Text 1
        
  //       <Container component="img" sx={{width:"80%", paddingY:"40px"}} src={brainEstimationImageList.filter(image => image.includes("grey-white"))}></Container>

  //       Process Text 2
  //     </Typography>
  //     <br/>
  //     <Typography variant='h6' fontWeight="bold">Results</Typography>
  //     <Typography>
  //       Results text
  //       <br/>
  //       <Container component="img" sx={{width:"80%"}}  src={brainEstimationImageList.filter(image => image.includes("error"))}></Container>
  //     </Typography>
  //   </Box>,
  //   images: brainEstimationImageList,
  //   year: "2022"
  // },
  Alarms: {
    company: "Imperial Oil",
    name: "Alarm Management",
    shortDescription: "Addressing plant alarm issues to alleviate control room operator workload",
    description:
    <Box>
      <Typography variant='h6' fontWeight="bold">What Is Alarm Management? Why Is It Important?</Typography>
      <Typography>
        To ensure a successful production, there are multiple processes throughout the plant involving factors such as pressure, temperature, etc.
        that must be kept in check. When left unchecked, these processes have the potential to affect product quality, damage equipment, 
        injure personnel, and worst of all, result in loss of life.
        <br/>
        <br/>
        Fortunately, there are systems in place to monitor each process and alert control room operators (CROs) when they start to leave normal 
        ranges so they can take corrective action. However, what happens when multiple illegitimate alarms are being sent to the CROs? CRO response
        becomes slower as there are more alarms to manage and it becomes difficult to determine which ones are a legitimate concern requiring action.
        This increases the possibility that a dangerous situation is not addressed in time leading to the consequences listed previously.
        Therefore, these "fake" alarms have a direct impact on plant safety.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">How Do You Get It Under Control?</Typography>
      <Typography>
        First, you need to separate and track the different kinds of illegitimate alarms. They can be categorized into two types:
        <br/>
        <br/>
        <b>Nuisance Alarms</b>: Alarms that turn on and off frequently especially in short periods of time<br/>
        <b>Standing Alarms</b>: Alarms that stay on even though the plant is running normally
        <br/>
        <br/>
        Working with CROs and plant personnel to find the root cause of the most troublesome alarms, we addressed alarms in batches and included changes such as:
        <br/><br/>
        <ul>
          <li>Updating alarm range to appropriate values</li>
          <li>Removing alarms that did not require CRO action</li>
          <li>Removing faulty alarms temporarily</li>
          <li>and much more...</li>
        </ul>
        In addition to that, I implemented a new alarm tracker webpage to give better visibility on the status of certain alarm issues. This tracker allowed comments
        to be recorded by the various parties (engineers, personnel, and most importantly CROs) to facilitate communication.
        <br/>
        <br/>
        However, eliminating nuisance/standing alarms isn't enough. Since equipment is continually being replaced or upgraded, and parts of the plant are
        expanded, new alarms are continually added to the system. Not all of these alarms are helpful, but are added as quick fix to "improve" process safety.
        Therefore, we continually delivered presentations to different divisions of the company to bring awareness to this alarm management issue and help groups
        implement alarms that have appropriate ranges that require a CRO action.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Results</Typography>
      <Typography>
        Addressed hundreds of nuisance and standing alarms, with the standing alarm counts meeting key performance indicators for the first time since
        plant commission.
      </Typography>
    </Box>,
    images: alarmManagementImageList,
    year: "2020-2021"
  },
  // Vivaldi: {
  //   company: "Murandi Communications",
  //   name: "Vivaldi Antenna",
  //   shortDescription: "Designing an ultra-wideband antenna for testing purposes",
  //   description: placeholder_text,
  //   images: vivaldiAntennaImageList,
  //   year: "2019"
  // },
  // BCI: {
  //   company: "",
  //   name: "BCI Game Jam",
  //   shortDescription: "Designing a Unity game to be used with a Brain Controller Interface (BCI) device",
  //   description: placeholder_text,
  //   images: BCIImageList,
  //   year: "2019"
  // },
  // I4H: {
  //   company: "",
  //   name: "Innovation 4 Health Competition",
  //   shortDescription: "Developing a wireless animals vital monitor for use in high stress situations",
  //   description: placeholder_text,
  //   images: I4HImageList,
  //   year: "2018"
  // },
  SkullFrame: {
    company: "NeuroFUS",
    name: "Phantom Skull Frame",
    shortDescription: "Designing/3D printing a custom phantom skull frame for use in imaging",
    description:
    <Box>
      <Typography variant='h6' fontWeight="bold">Phantom Skull? What's That?</Typography>
      <Typography>
        Phantoms are objects that replicate human tissues and properties for use in imaging either for calibration purposes or for providing
        test data.Therefore a phantom skull is essentially a fake skull that possesses the properties of a real one.
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Why Did You Need a Frame?</Typography>
      <Typography>
        Since the NeuroFUS lab was frequently running simulations involving the phantom skull CT data, there was great interest in obtaining
        higher resolution CT scans, which was possible with the Xtreme CT Scanner II. The issue was creating a frame to hold the skull in place
        during scans that fit within the limited space.
      </Typography>
      <Container xs={8} component="img" sx={{width:"80%",height:"80vh", objectFit:"cover", paddingY:"40px"}} src={skullFrameImageList.filter(image => image.includes("Scanner"))}/>
      <br/>
      <Typography variant='h6' fontWeight="bold">How Did You Make It?</Typography>
      <Typography>
        The goal was to make a frame that was molded to the skull, to accomplish this, the following steps were taken:
        <br/>
        <br/>
        <ol>
          <li>Using 3D Slicer, the standard CT DICOM data was used to create a 3D stl model.</li>
          <li>Using blender, non skull elements were removed and the skull was modified to give a more organic look</li>

          <Stack direction="row">
            <Container component="img" sx={{width:"60%", paddingY:"40px"}} src={skullFrameImageList.filter(image => image.includes("Slicer"))}></Container>
            <Container component="img" sx={{width:"40%", paddingY:"40px"}} src={skullFrameImageList.filter(image => image.includes("stl"))}></Container>
          </Stack>
          <Typography>
          <li>Continuing with blender, a rectangular element representing the frame was created and intersected with the skull.</li>
          <li>Using a subtraction boolean operation, a skull shaped hole was created in the frame. The inner element was then removed.</li>
          </Typography>
          <Container component="img" sx={{width:"80%", paddingY:"40px"}} src={skullFrameImageList.filter(image => image.includes("intersection"))}></Container>
          <Typography>
          <li>Holes for nuts and bolts were then added to the frame.</li>
          <li>Frame was printed using different materials, and the sturdiest frame was selected.</li>
          </Typography>
        </ol>
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Results</Typography>
      <Typography>
        <Stack direction="row" paddingTop="10px" spacing={3} justifyContent="space-evenly">
          <Box component="img" sx={{width:"32%"}}  src={skullFrameImageList.filter(image => image.includes("Front"))}></Box>
          <Box component="img" sx={{width:"32%"}}  src={skullFrameImageList.filter(image => image.includes("Back"))}></Box>
          <Box component="img" sx={{width:"32%"}}  src={skullFrameImageList.filter(image => image.includes("Side"))}></Box>
        </Stack>
      </Typography>
    </Box>,
    images: skullFrameImageList,
    year: "2018"
  },
  Stroke: {
    company: "QuICR",
    name: "Stroke Centre Analysis",
    shortDescription: "Evaluating effectiveness of stroke centre placement in a province/state",
    description:
    <Box>
      <Typography variant='h6' fontWeight="bold">Background</Typography>
      <Typography>
        Imagine you or a loved one has just begun experiencing an ischemic stroke, bloodflow to the brain is blocked and with each passing second, <b>1.9 million neurons</b> are dying. 
        You call an ambulance, and it takes you to the nearest hospital. Upon treatment, it's determined that the drug offered at the hospital (a primary stroke centre or PSC)
        is not sufficient for your type of stroke, and an invasive Endovascular Treatment (EVT) is needed instead, but is only offered at comprehensive stroke centres (CSCs). You ride in
        an ambulance yet again to the nearest CSC and get treatment fast enough to not see any long term effects. 
        <br/>
        <br/>
        You lucked out, but for others (especially those in rural regions), this isn't always the case. Often, there is a choice where patients must either head to PSC and potentially still need 
        to go to a CSC (Drip and Ship approach) or head directly to a CSC (Mothership approach). DESTINE was created as a visual tool to show the prefered method throughout a province/state as well
        as the probability of a good outcome for the patient based on factors such as time to First Medical Response (FMR), Door to Needle times (DNTs) for drug treatment, and travel times to hospitals. 
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Process</Typography>
      <Typography>
        Implemented in MATLAB, ArcGIS map data for the selected province/state was loaded in and was divided into a grid with each point on the map treated as a starting location. Using Google Distance 
        Matrix API, travel times were requested from each origin to the closest PSC and CSC. Using the travel times returned, probability of a good outcome was calculated and each grid spot assigned a colour
        based on whether 'Drip and Ship' had the better probability, 'Mothership' had the better probability, or if both were valid (within 2.5%).
      </Typography>
      <br/>
      <Typography variant='h6' fontWeight="bold">Results</Typography>
      <Typography>
        Multiple maps were generated showing the effect of FMR and DNT time on which method of transports would result in a higher probability of a good outcome. Where longer DNT times begin to favour the
        'Mothership' approach and longer FMR times result in one option being much more favourable to the other as the orange regions decrease.
        <Container component="img" sx={{width:"100%", marginY:"40px"}}  src={strokeCentreAnalysisImageList.filter(image => image.includes("grid"))}></Container>
        In addition to Alberta maps, new maps were generated for both the state of California and province of Ontario due to interest from their corresponding medical committees
        <Stack direction="row" marginTop="40px" spacing="10%" justifyContent="space-evenly">
          <Typography variant='h5' sx={{fontVariant:"small-caps", fontWeight:"bold"}}>Alberta</Typography>
          <Typography variant='h5' sx={{fontVariant:"small-caps", fontWeight:"bold"}}>California</Typography>
          <Typography variant='h5' sx={{fontVariant:"small-caps", fontWeight:"bold"}}>Ontario</Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-evenly">
          <Box component="img" sx={{width:"30%"}}  src={strokeCentreAnalysisImageList.filter(image => image.includes("alberta"))}></Box>
          <Box component="img" sx={{width:"30%"}}  src={strokeCentreAnalysisImageList.filter(image => image.includes("california"))}></Box>
          <Box component="img" sx={{width:"30%"}}  src={strokeCentreAnalysisImageList.filter(image => image.includes("ontario"))}></Box>
        </Stack>
      </Typography>
    </Box>,
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
      <Timeline sx={{paddingTop: "30px"}}>
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