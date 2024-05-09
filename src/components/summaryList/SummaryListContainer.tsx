import React, { FC } from 'react';
import { classBuilder } from '../../component-helpers';
import { SummaryListContainerProps } from './summaryList.types';

export const SummaryListContainer: FC<SummaryListContainerProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('govuk-summary-list', classBlock, classModifiers, className);

  return (
    <dl {...attrs} className={classes()}>
      {children}
    </dl>
  );
};

SummaryListContainer.displayName = 'SummaryListContainer';

export default SummaryListContainer;
