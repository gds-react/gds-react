import React, { FC, useState } from 'react';
import { TagProps } from './tag.types';
import { classBuilder } from '../../component-helpers';

import './tag.scss';

const Tag: FC<TagProps> = ({ children, classBlock, classModifiers, className, text, ...attrs }) => {
    const classes = classBuilder('govuk-tag', classBlock, classModifiers, className);

    return (
        <strong {...attrs} className={classes()}>{text || children}</strong>
    );
};

export default Tag;
