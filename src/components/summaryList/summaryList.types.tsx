import { HTMLAttributes, ReactNode } from 'react';
import { StandardProps } from '../../component-helpers/index';

export type SummaryListItemProps = StandardProps & HTMLAttributes<HTMLDivElement> & {
    /** Name or 'key' of the item */
    name: ReactNode | string
    /** Value of the item */
    value: ReactNode
    /** Actions available for the item */
    actions?: ReactNode | ReactNode[]
};

export type SummaryListContainerProps = StandardProps & HTMLAttributes<HTMLDListElement> & {
};

export type SummaryListProps = SummaryListContainerProps & {
    /** Items to be summarised */
    items: SummaryListItemProps[]
};