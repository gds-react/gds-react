import React, { FC } from 'react';
import SimpleTable from './simpleTable/simpleTable';
import CustomTable from './customTable/customTable';
import { StyleProps, TableType } from './table.types';
import { classBuilder } from '../../component-helpers';

import './table.scss';

// Define Row component
export const Row: FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = classBuilder('penultimate-custom-table', 'govuk-table', undefined, undefined);
  return <tr className={classes('row')}>{children}</tr>;
};

// Define CellHeader component
export const CellHeader: FC<{ children: React.ReactNode, scope: string, onClick?: () => void, style?: StyleProps }> = ({ children, scope, onClick, style }) => {
  const classes = classBuilder('penultimate-custom-table', 'govuk-table', undefined, undefined);
  return <th scope={scope} className={classes('header')} onClick={onClick} style={style}>{children}</th>;
};

// Define Cell component
export const Cell: FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = classBuilder('penultimate-custom-table', 'govuk-table', undefined, undefined);
  return <td className={classes('cell')}>{children}</td>;
};

// Define TableHeader component
export const TableHeader: FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = classBuilder('penultimate-custom-table', 'govuk-table', undefined, undefined);
  return <thead className={classes('head')}>
    {children}
  </thead>;
};

// Define TableBody component
export const TableBody: FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = classBuilder('penultimate-custom-table', 'govuk-table', undefined, undefined);
  return <tbody className={classes('body')}>
    {children}
  </tbody>;
};

const Table: TableType = ({ classBlock, variant, ...props }) => (
  variant === 'CustomTable' ? <CustomTable {...props} classBlock={classBlock || 'govuk-table'} /> : <SimpleTable {...props} classBlock={classBlock || 'govuk-table'} />
)

Table.CellHeader = CellHeader;
Table.Row = Row;
Table.Cell = Cell;
Table.Header = TableHeader;

export default Table;
