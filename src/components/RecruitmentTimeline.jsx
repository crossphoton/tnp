import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper } from '@material-ui/core';
import TimelineSteps from '../Content/TimelineSteps';

const paperstyle={
    padding: '8px 5px',
    textAlign:'center',
    fontSize:'20px'
}

export default function RecruitmentTimeline() {
	return (

        <Timeline align="alternate">
           { 
               TimelineSteps.map((step) => {
                return (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="#35166b" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper 
                        elevation={3} style={paperstyle}> {step}
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                )})
           }
        </Timeline>
	);
}
