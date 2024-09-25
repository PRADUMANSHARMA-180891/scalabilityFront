import React, { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Select from 'react-select';

function CompanySecurityPreference() {
    // Security Preferences options
    const securityPreferences = [
        { value: "value1", authenticationLabel: "Not Set", authenticationDescriptionText: "Multifactor Authentication has not been set.", index: 0 },
        { value: "value2", authenticationLabel: "Optional", authenticationDescriptionText: "Users can turn on Multifactor Authentication for their account but MFA is not required.", index: 1 },
        { value: "value3", authenticationLabel: "Required", authenticationDescriptionText: "Users must use a second factor when logging in.", index: 2 }
    ];
    
    const [selectedOption, setSelectedOption] = useState(securityPreferences[0]);
    
    const formatOptionLabel = ({ authenticationLabel, authenticationDescriptionText }, { context }) => {
        if (context === 'menu') {
           
            return (
                <div className='multifactorAuthenticationValue'>
                    <div className='fw-bold'>{authenticationLabel}</div>
                    <div className='ps-2'>{authenticationDescriptionText}</div>
                </div>
            );
        }        
        return <div>{authenticationLabel}</div>;
    };
    
    const handleChange = (option) => {
        setSelectedOption(option);
    };
    // Security Preferences options end

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>Security Preferences</h5>
                </div>
                <div className='card-body pb-1'>
                    <div className='form-group'>
                        <label className='form-label'>Multifactor Authentication:
                            <OverlayTrigger
                                trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={
                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                        <div className="unique-outer-wrap">
                                            <h5>Multifactor Authentication</h5>
                                            <p>
                                                Multifactor authentication provides additional security to your account. When multifactor authentication is required, the Email and Password not enough to complete the login process. After the Email and correct Password are entered, a second factor must be provided. The second factor is a Verification Code that is sent in an email to the User's Email address. The Verification Code is valid for 15 minutes. After the correct Verification Code is provided, the User is logged in.
                                            </p>
                                            <p>
                                                When the User uses Remember Me on the device, the authentication information will be stored on the device and used to automatically log the User into the application. This is true when multifactor authentication is used. The token that is stored is valid for 15 days after a successful login. When the User comes back, the token is extended for another 15 days. Signing out of the application clears the authentication information, including the multifactor authentication token so that the Email, Password and a new Verification Code will need to be entered to access the application.
                                            </p>
                                            <p>
                                                <b>Multifactor Authentication Settings</b>
                                            </p>
                                            <ul className='mb-0'>
                                                <li className='mb-2'>
                                                    <b>Required</b>: This will require that all Users of the Company will be required to provide a second factor to access the application. This is true when the User is linked to multiple Companies whether or not the other Companies required Multifactor Authentication.
                                                </li>
                                                <li className='mb-2'>
                                                    <b>Optional</b>: When this setting is available, turning this on will allow Users in the Company to turn on multifactor authentication for their User account under their User Profile Settings.
                                                </li>
                                                <li>
                                                    <b>Not Set</b>: This indicates that the Company has made no determination about Multifactor Authentication. It is neither required nor optional for its Users.
                                                </li>
                                            </ul>
                                        </div>
                                    </Popover>
                                }
                            >
                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                            </OverlayTrigger>
                        </label>
                        <div className='custom-select-wrap'>
                            <Select
                                name='MultifactorAuthentication'
                                options={securityPreferences}
                                value={selectedOption} // Display selected option (default is first option)
                                onChange={handleChange} // Handle selection change
                                formatOptionLabel={formatOptionLabel} // Format dropdown and selected options
                                placeholder={'Select'} // Placeholder when nothing is selected
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                    },
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompanySecurityPreference;
