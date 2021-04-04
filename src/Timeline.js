import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.scss';
export const Timeline = () => {
    return (
        <div className="experience_timeline">
            <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                }}
                    contentArrowStyle={{
                    borderRight: '7px solid rgb(33, 150, 243)'
                }}
                    date="Jan 2021 - present"
                    iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                }}>
                    <h3 className="vertical-timeline-element-title">Anaplan</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cloud Solutions Developer</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                }}
                    contentArrowStyle={{
                    borderRight: '7px solid rgb(33, 150, 243)'
                }}
                    date="Apr 2020 - Sept 2020"
                    iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                }}>
                    <h3 className="vertical-timeline-element-title">Acoustic</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
                    <ul>
                    <li>Created UI components using latest React methodologies</li> 
                    <li>Implemented builds to run as part of a CI/CD integration</li>
                    <li>Utilized AWS services to provide well-structured data to front-end user</li>
                    <li>Optimized webpack configuration files allowing for 50% reduction in bundled code.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                }}
                    contentArrowStyle={{
                    borderRight: '7px solid rgb(33, 150, 243)'
                }}
                    date="Apr 2018 - Mar 2020"
                    iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                }}>
                    <h3 className="vertical-timeline-element-title">IBM</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
                    <ul>
                    <li>Utilize ReactJS to create a variety of web components</li> 
                    <li>Create unit test suites using Jest, Mocha and Chai</li>
                    <li>Use the latest JavaScript (ES6) to interact with APIs</li>
                    <li>Modified and created Docker images to be use by developers</li>
                    <li>Introduced new code coverage tools and expanded coverage to 80%</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}