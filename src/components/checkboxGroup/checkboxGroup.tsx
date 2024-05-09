import React from "react";
import Checkbox from "../checkbox/checkbox";
import { CheckboxGroupComponentProps } from "./checkboxGroup.types";

import "./checkboxGroup.scss";

const CheckboxGroup: React.FC<CheckboxGroupComponentProps> = ({ text, hintText, options }) => (
    <div className="govuk-form-group">
        <fieldset className="govuk-fieldset" aria-describedby="waste-hint">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                <h1 className="govuk-fieldset__heading">
                    {text}
                </h1>
            </legend>
            <div id="waste-hint" className="govuk-hint">
                {hintText}
            </div>
            <div className="govuk-checkboxes" data-module="govuk-checkboxes">
                <Checkbox options={options} />
            </div>
        </fieldset>
    </div>
);

export default CheckboxGroup;