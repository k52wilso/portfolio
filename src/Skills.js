import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import { CONSTANTS } from './constants';
import "./Skills.scss";
export const Skills = () => {
    return (
        <div className="skills">
            {CONSTANTS.SKILLS.map((skill) => {
                return (
                    <div className="skill">
                        <p>{skill.skill}</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="#c6c6c6"
                            percentage={skill.progress}
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                        />
                    </div>
                )
            })}
        </div>
    );
}