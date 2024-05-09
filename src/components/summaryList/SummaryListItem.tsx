import React, { FC, ReactNode } from 'react';
import { classBuilder } from '../../component-helpers/index';
import { SummaryListItemProps } from './summaryList.types';

export const SummaryListItem: FC<SummaryListItemProps> = ({
  actions: _actions = [],
  value,
  classBlock,
  classModifiers,
  className,
  name,
  ...attrs
}) => {
  const classes = classBuilder('govuk-summary-list', classBlock);
  const renderedActions: ReactNode[] = (
    Array.isArray(_actions)
      ? _actions
      : [_actions]
  );

  return (
    <div {...attrs} className={classes('row', classModifiers, className)}>
      <dt className={classes('key')}>
        {name}
      </dt>
      <dd className={classes('value')}>
        {value}
      </dd>
      {renderedActions.length === 0 ? null : (
        <dd className={classes('actions')}>
          {renderedActions.length === 1 ? (
            renderedActions[0]
          ) : (
            <ol className='govuk-list'>
              {renderedActions.map((renderedAction, index) => {
                return <li key={index} className={classes()}>
                  {renderedAction}
                </li>
              })}
            </ol>
          )
          }
        </dd>
      )}
    </div>
  );
};

SummaryListItem.displayName = 'SummaryListItem';

export default SummaryListItem;
