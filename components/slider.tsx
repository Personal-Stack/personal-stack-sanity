import React from "react";
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, { set, unset } from "@sanity/form-builder/lib/PatchEvent";
import styles from "./slider.css";

const createPatchFrom = (value: any) =>
  PatchEvent.from(value === "" ? unset() : set(Number(value)));

export default class Slider extends React.Component<{ [key: string]: any }> {
  [x: string]: any;
  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus();
  }

  render() {
    const { type, value, onChange } = this.props;
    const { min, max, step } = type.options.range;

    return (
      <FormField label={type.title} description={type.description}>
        <div>{type.title}</div>
        <div>{value}</div>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            className={styles.slider}
            value={value === undefined ? "" : value}
            onChange={(event) => onChange(createPatchFrom(event.target.value))}
            ref={(element) => (this._inputElement = element)}
          />
        </div>
      </FormField>
    );
  }
}
