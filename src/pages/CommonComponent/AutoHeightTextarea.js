import React, { useRef, useEffect } from 'react';

function AutoHeightTextarea() {
    const textareaRef = useRef(null);

    // Adjust height on input change
    const handleInput = () => {
        const textarea = textareaRef.current;
        // Reset the height to recalculate the new height
        textarea.style.height = 'auto';
        // Set the height according to the scroll height
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    // Set initial height after rendering
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);

    return (
        <textarea
            ref={textareaRef}
            className='form-control'
            placeholder='Click or Tap to enter something...'
            rows={1}
            onInput={handleInput}
            style={{ overflow: 'hidden', resize: 'none' }} // Disable manual resize
        ></textarea>
    );
}

export default AutoHeightTextarea;
