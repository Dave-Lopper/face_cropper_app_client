/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';

import './switch.css';

function Switch({handleThemeChange, darkThemeEnabled}) {
    return (
        <>
            <input
                className="react-switch-checkbox"
                id="react-switch-new"
                type="checkbox"
                checked={darkThemeEnabled}
                onChange={handleThemeChange}
            />
            <label className="react-switch-label" htmlFor="react-switch-new">
                <MdWbSunny className="sunIcon" />
                <span className="react-switch-button" />
                <BsMoon className="moonIcon" />
            </label>
        </>
    );
}
Switch.propTypes = {
    darkThemeEnabled: PropTypes.bool.isRequired,
    handleThemeChange: PropTypes.func.isRequired
}
export default Switch;
