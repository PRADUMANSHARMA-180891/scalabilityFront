import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

function CompanyOtherPreferencesSettings() {
    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>Other Preferences and Settings
                    </h5>
                </div>
                <div className='card-body'>
                    <div className='w-100 mb-2'>
                        <label className="custom-checkbox mb-0">
                            <span className="text-">Company Priorities Displayed at the Top of the Manage Priorities Page</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='w-100'>
                        <label className="custom-checkbox mb-0">
                            <span className="text-">Enable AI Features</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Enable AI Features</h5>
                                        <p>
                                            Our integration with AI enhances your platform's efficiency and personalization while ensuring your data remains secure. We understand that AI isn't for everyone, so you can easily opt-out here via your company settings.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary f-s-13'></i></span>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyOtherPreferencesSettings