import React, { FC } from 'react';
import { TableHeader, TableBody } from '../table';
import { CustomTableProps } from '../table.types';
import { classBuilder } from '../../../component-helpers/index';

import '../table.scss';

const CustomTable: FC<CustomTableProps> = ({ caption, classBlock, classModifiers, className, body, head, children, ...attrs }: CustomTableProps) => {

  const classes = classBuilder('penultimate-custom-table', classBlock || 'govuk-table', classModifiers, className);
  return (
    <table {...attrs} className={classes()}>
      {caption && (<caption className={classes('caption')}>{caption}</caption>)}
      {head && <TableHeader>{head}</TableHeader>}
      <TableBody>{body}</TableBody>
    </table>
  );
};

export default CustomTable;
