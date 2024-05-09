import { StandardProps } from '../../component-helpers/index';

export type TagProps = StandardProps & {
    /** Text to be displayed within the tag */
    text?: string,
    children?: React.ReactNode
};