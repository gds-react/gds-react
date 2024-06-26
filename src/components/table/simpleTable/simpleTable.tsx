import React, { FC } from 'react';
import { classBuilder } from '../../../component-helpers/index';
import { SimpleTableProps } from '../table.types';

import '../table.scss';

const SimpleTable: FC<SimpleTableProps<any>> = ({ caption, classBlock, classModifiers, className, data, headings, keys, ...attrs }) => {
  const classes = classBuilder('penultimate-simple-table', classBlock, classModifiers, className);
  return (
    <table {...attrs} className={classes()}>
      {caption && (<caption className={classes('caption')}>{caption}</caption>)}
      <thead className={classes('head')}>
        <tr className={classes('row')}>
          {keys.map((k, i) => (
            <th key={i} scope="col" className={classes('header')}>{headings[k]}</th>
          ))}
        </tr>
      </thead>
      <tbody className={classes('body')}>
        {data.map((e, io) => (
          <tr key={io} className={classes('row')}>
            {keys.map((k, i) => (
              i === 0
                ? (<th key={i} scope="row" className={classes('header')}>{e[k]}</th>)
                : (<td key={i} className={classes('cell')}>{e[k]}</td>)
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
