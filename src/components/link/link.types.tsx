import { StandardProps } from "../../component-helpers";

export type LinkProps = StandardProps & {
    href: string;
    text: string;
    opensInNewTab?: boolean;
    noVisitedState?: boolean;
    isInverse?: boolean;
    noUnderline?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    visuallyHiddenText?: string;
}