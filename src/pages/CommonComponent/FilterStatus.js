import React from 'react';
import Select from 'react-select';

function FilterStatus() {
    // Metric data    
    const Metric = [
        { value: "green", statusLabel: "", customStatus: "Green / Super Green", index: 1 },
        { value: "yellow", statusLabel: "", customStatus: "Yellow", index: 2 },
        { value: "red", statusLabel: "", customStatus: "Red / Super Red", index: 3 },
        { value: "notSet", statusLabel: "", customStatus: "Not Set", index: 4 }
    ];

    // Dynamically map the value to a Bootstrap background class
    const getBgClass = (value) => {
        switch (value) {
            case 'green':
                return 'bg-success';  // Green / Super Green
            case 'yellow':
                return 'bg-warning';  // Yellow
            case 'red':
                return 'bg-danger';   // Red / Super Red
            case 'notSet':
                return 'bg-secondary'; // Not Set (gray color)
            default:
                return 'bg-secondary'; // Default to gray
        }
    };

    // Custom label rendering with dynamic background
    const formatOptionLabel = ({ value, statusLabel, customStatus }) => (
        <div className='priority_status__ d-flex align-items-center'>
            <div className={`w-15px h-15px me-2 rounded ${getBgClass(value)}`}></div>
            <div>
                {customStatus}
            </div>
        </div>
    );

    return (
        <>
            <div className='custom-select-wrap'>
                <Select
                    name='Metric'
                    options={Metric}
                    getOptionLabel={(option) => option.statusLabel}
                    getOptionValue={(option) => option.customStatus}
                    formatOptionLabel={formatOptionLabel}
                    placeholder={'Status Color'}
                    isMulti
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            //primary25: '#e5f9f0',
                            //primary: '#00b386',
                        },
                    })}
                />
            </div>
        </>
    );
}

export default FilterStatus;
