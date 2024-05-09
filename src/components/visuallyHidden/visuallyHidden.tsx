import React, { FC } from 'react';
import { classBuilder } from '../../component-helpers/index';
import { VisuallyHiddenProps } from './visuallyHidden.types';

import './visuallyHidden.scss';

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children, classBlock, classModifiers, className, ...attrs }) => {
    const classes = classBuilder('govuk-visually-hidden', classBlock, classModifiers, className);

    return (
        <span {...attrs} className={classes()}>{children}</span>
    );
};

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
