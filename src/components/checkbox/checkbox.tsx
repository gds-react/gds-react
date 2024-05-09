import React from "react";
import { CheckboxComponentProps } from "./checkbox.types";

import "./checkbox.scss";

const Checkbox: React.FC<CheckboxComponentProps> = ({ options }) => (
    options.map(option => (
        <div className="govuk-checkboxes__item" key={option.value}>
            <input className="govuk-checkboxes__input" id={option.value} name={option.value} type="checkbox" value={option.value} />
            <label className="govuk-label govuk-checkboxes__label" htmlFor={option.value}>
                {option.title}
            </label>
        </div>
    ))
);

export default Checkbox;