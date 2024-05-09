import { StandardProps } from '../../component-helpers/index';
import { Cell, CellHeader, Row, TableHeader } from './table';

export interface StyleProps {
    cursor?: string;
}

export type SimpleTableProps<T> = StandardProps & {
    caption?: string
    data: T[]
    headings: T
    keys: (keyof T)[]
};

export type CustomTableProps = StandardProps & {
    caption?: string;
    head?: React.ReactNode;
    body?: React.ReactNode;
    children?: React.ReactNode;
    sortable?: boolean;
}

export type TableProps = CustomTableProps & SimpleTableProps<any> & {
    variant?: string;
    head?: React.ReactNode;
};

export interface TableType extends React.FC<TableProps> {
    CellHeader: typeof CellHeader;
    Row: typeof Row;
    Cell: typeof Cell;
    Header: typeof TableHeader;
}