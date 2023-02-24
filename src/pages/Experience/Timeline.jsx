import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from "react";

const Timeline = ({ id, courseName, college, board, addrs, mark, year }) => {

    return (
        <VerticalTimeline lineColor={'red'} layout={'2-columns'} >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
                position={id % 2 == 0 ? 'left' : 'right'}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

export default Timeline