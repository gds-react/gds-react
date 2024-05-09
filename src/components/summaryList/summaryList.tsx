import React, { FC } from 'react';
import { SummaryListContainer } from './SummaryListContainer';
import { SummaryListItem } from './SummaryListItem';
import { SummaryListProps, SummaryListContainerProps, SummaryListItemProps } from './summaryList.types';

import './summaryList.scss';

const SummaryListComponent: FC<SummaryListProps> = ({
  children,
  classBlock = 'govuk-summary-list',
  items,
  ...props
}) => {
  return (
    <SummaryListContainer {...props} classBlock={classBlock}>
      {items.map((itemProps, i: number) => (
        <SummaryListItem key={i}  {...itemProps} />
      ))}
    </SummaryListContainer>
  );
};

export const SummaryList: FC<SummaryListProps> & {
  Container: FC<SummaryListContainerProps>,
  Item: FC<SummaryListItemProps>
} = Object.assign(SummaryListComponent, { Container: SummaryListContainer, Item: SummaryListItem });

SummaryList.displayName = 'SummaryList';

export default SummaryList;
