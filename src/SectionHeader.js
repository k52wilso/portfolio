import React from 'react';

export const SectionHeader = ({number, title, subtitle}) => {
    return (
        <div className="section_header" id={`${title.toLowerCase()}`}>
            <h2><span>{number}</span>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}