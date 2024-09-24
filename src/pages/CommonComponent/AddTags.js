import React, { useState } from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';

export const colourOptions = [
    { value: 'Developer', label: 'Developer', color: '#025969' },
    { value: 'Designer', label: 'Designer', color: '#0052CC' },
    { value: 'Marketing', label: 'Marketing', color: '#2009a6' },
    { value: 'SEO', label: 'SEO', color: '#e6431f' },
    { value: 'DevOps', label: 'DevOps', color: '#b56708' },
    { value: 'Sales', label: 'Sales', color: '#9e7b0b' },
    { value: 'Extra', label: 'Extra', color: '#028750' },
    { value: 'MIS', label: 'MIS', color: '#670488' }
];

function AddTags() {
    // Set the options statically from the colourOptions array
    const [options] = useState(colourOptions);

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                    ? data.color
                    : isFocused
                    ? color.alpha(0.1).css()
                    : undefined,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                    ? 'white' // Text is white when selected
                    : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? data.color
                            : color.alpha(0.3).css()
                        : undefined,
                },
            };
        },
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: data.color, // Static background color from the predefined color in colourOptions
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: 'white', // Text color is always white
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: 'white', // Text color is white for the remove button
            backgroundColor: data.color, // Static background color for remove button
            ':hover': {
                backgroundColor: chroma(data.color).darken(0.3).css(), // Darken on hover
                color: 'white', // Keep text white
            },
        }),
    };

    return (
        <>
            <div className="custom-select-wrap">
                <Select
                    closeMenuOnSelect={false}
                    defaultValue={[options[0], options[1]]}
                    isMulti
                    options={options}
                    styles={colourStyles}
                />
            </div>
        </>
    );
}

export default AddTags;
