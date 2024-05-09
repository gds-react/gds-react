import React from 'react';
import { LinkProps } from './link.types';

import './link.scss';
import VisuallyHidden from '../visuallyHidden/visuallyHidden';

const Link: React.FC<LinkProps> = ({
    href,
    text,
    opensInNewTab = false,
    noVisitedState = false,
    isInverse = false,
    noUnderline = false,
    onClick = () => { },
    visuallyHiddenText
}) => {
    return (
        <a href={href} className={`govuk-link${noVisitedState ? ' govuk-link--no-visited-state' : ''}${isInverse ? ' govuk-link--inverse' : ''}${noUnderline ? ' govuk-link--no-underline' : ''}`} rel={opensInNewTab ? 'noreferrer noopener' : ''} target={opensInNewTab ? '_blank' : ''} onClick={onClick}>
            {text}{visuallyHiddenText ? <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> : ''}
        </a>
    );
};

export default Link;
