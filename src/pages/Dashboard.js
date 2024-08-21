import React, { useContext, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
// import { UserContext } from '../routes/ProtectedRoute';
ChartJS.register(ArcElement, Legend);
//data workflow




function Dashboard() {
    // const user = useContext(UserContext);
    // dashboard edit modal start
    const [showDashboardEditModal, setShowDashboardEditModal] = useState(false);
    const handleCloseDashboardEditModal = () => setShowDashboardEditModal(false);
    const handleShowDashboardEditModal = () => setShowDashboardEditModal(true);
    // dashboard edit help modal start
    const [showDashboardEditHelpModal, setShowDashboardEditHelpModal] = useState(false);
    const handleCloseDashboardEditHelpModal = () => setShowDashboardEditHelpModal(false);
    const handleShowDashboardEditHelpModal = () => setShowDashboardEditHelpModal(true);
    // dashboard edit Period modal start
    const [showDashboardEditPeriodModal, setShowDashboardEditPeriodModal] = useState(false);
    const handleCloseDashboardEditPeriodModal = () => setShowDashboardEditPeriodModal(false);
    const handleShowDashboardEditPeriodModal = () => setShowDashboardEditPeriodModal(true);
    // dashboard Create New Period start
    const [showCreateNewPeriodModal, setShowCreateNewPeriodModal] = useState(false);
    const handleCloseCreateNewPeriodModal = () => setShowCreateNewPeriodModal(false);
    const handleShowCreateNewPeriodModal = () => setShowCreateNewPeriodModal(true);
    // dashboard Create New Period start
    const [showAddCriticalNumberModal, setShowAddCriticalNumberModal] = useState(false);
    const handleCloseAddCriticalNumberModal = () => setShowAddCriticalNumberModal(false);
    const handleShowAddCriticalNumberModal = () => setShowAddCriticalNumberModal(true);
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);
    // Delete Critical Modal start
    const [showDeleteCriticalModal, setShowDeleteCriticalModal] = useState(false);
    const handleCloseDeleteCriticalModal = () => setShowDeleteCriticalModal(false);
    const handleShowDeleteCriticalModal = () => setShowDeleteCriticalModal(true);
    // Link Your Daily Update Modal start
    const [showDailyLinkModal, setShowDailyLinkModal] = useState(false);
    const handleCloseDailyLinkModal = () => setShowDailyLinkModal(false);
    const handleShowDailyLinkModal = () => setShowDailyLinkModal(true);

    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]
    //Metric Select
    const [valueSource, setValueSource] = useState('Critical Number');
    // select Progress Calculation
    const [selectCustomTargets, setSelectCustomTargets] = useState('Custom Targets');
    //Metric    
    const Metric = [
        { value: "create", label: "+ Create New Metric", customAbbreviation: "", index: 0 },
        { value: "ardays", label: "AR/Days", customAbbreviation: "58", index: 1 },
        { value: "AnnualRevenueperEmployee", label: "Annual Revenue per Employee", customAbbreviation: "123456", index: 2 }
    ];

    const formatOptionLabel = ({ value, label, customAbbreviation }) => (
        <div className='matrixValue d-flex justify-content-between'>
            <div>{label}</div>
            <div>
                {customAbbreviation}
            </div>
        </div>
    );
    //for Unique Identifier
    const UniqueIdentifier = (
        <Popover id="unique-Identifier" className="unique-outer-wrap">
            <div className="unique-outer-wrap">
                <h5>Unique Identifier</h5>
                <p>The Unique Identifier is used with integrations like Zapier to identify the Metric. This is the value that is used in a Zap to connect to the Metric.</p>
                <p>You can choose your own unique string of characters for the value, or you can use the default value which will be generated based on the name of the metric. Just make sure that your value does not include square brackets and spaces ("[ ]" and " ")</p>
            </div>
        </Popover>
    );
    //for UniqueI dentifier
    //for add Matric Status
    const addMatricStatus = (
        <Popover id="unique-Identifier" className="unique-outer-wrap">
            <div className="unique-outer-wrap">
                <h5>Status</h5>
                <p>The Status of the Metric determines its availability and behavior in the system. There are three available status values: Active, Inactive and Deprecated. Active is the default status value for a Metric. </p>
                <p className='fw-bold'>Status Value Definitions</p>
                <ul>
                    <li>
                        <b>Active</b>: The Metric is available to provide the value to other numbers in the system like Critical Numbers, Priorities and to be used as a KPI. Integrations like Salesforce and HubSpot will poll for updated values on a daily basis and on-demand. This is the default state for a Metric.
                    </li>
                    <li>
                        <b>Draft</b>: The Metric has been created but the configuration is not yet complete or it's not ready for use. It highlights that more work is required. When that work is complete, the Status should be changed to Active. Metrics created by the KPI Suggestions feature are created with a Draft Status.
                    </li>
                    <li>
                        <b>Inactive</b>: The Metric is no longer used in the system. It will not be available in the Metric selection list for other numbers in the system and not provided to Zapier as an available Metric. Salesforce and HubSpot will not update Inactive Metrics.
                    </li>
                    <li>
                        <b>Deprecated</b>: The Metric is on its way to being inactive and no longer used in the system but still needs to receive integration updates. It is a state between Active and Inactive that is used during the transition away from one Metric to another. Generally, a Deprecated Metric should not be connected to provide the value for a Critical Number, Priority, etc.
                    </li>
                </ul>
            </div>
        </Popover>
    );
    //for add Matric end
    //for add Matric Status
    const formulaBuilder = (
        <Popover id="unique-Identifier" className="unique-outer-wrap">
            <div className="unique-outer-wrap">
                <h5>Creating a Formula Driven Metric in Align</h5>
                <p className='fw-bold'>How do I create a Formula Driven metric in Align?</p>
                <p>To create a Formula Driven metric in Align, you can use the formula builder to combine manual metrics and other Formula Driven metrics in the app. Once you have created your formula, you can save it as a new metric and begin using it in your reporting and analysis.</p>
            </div>
        </Popover>
    );
    //for add Matric end
    //for add Matric Cadence
    const AddMetricCadence = (
        <Popover id="unique-Identifier" className="unique-outer-wrap">
            <div className="unique-outer-wrap">
                <h5>How to use the Number Cadence Feature</h5>
                <p>Create metrics with a specific cadence of weekly or monthly.</p>
                <p>Ex: A metric without cadence may say we have walked 100 miles as of today, the cadence metric will say that we have walked 10 miles this week or 50 miles this month.</p>
                <p className='mt-3'>
                    <b>Setting Up a Metric with Number Cadence</b>
                </p>
                <ol>
                    <li>
                        Create a metric for the number you want to track, such as "Miles Walked."
                    </li>
                    <li>
                        Choose a Weekly or Monthly cadence.
                    </li>
                    <li>
                        Input your current value (typically zero) or your starting point for the week or month.
                    </li>
                    <li>
                        For a Weekly cadence, select the day of the week you want your value to reset, such as Sunday. For a Monthly cadence, the value will reset on the first day of each month.
                    </li>
                    <li>
                        Set the reset value (usually 0) for when the metric resets and save your metric.
                    </li>
                </ol>
                <p>
                    <b>Where do you use this Metric with Cadence?</b> On a KPI Card - either as a standalone number that resets on your cadence or by adding a target to the KPI Card.
                </p>
                <p>
                    Don't forget...Time-based targets for weekly cadences are set for one week, and for monthly cadences, one month only. Priorities take the full quarter, so you cannot use a Metric with a Cadence to drive a Priority Success Measurement.
                </p>
            </div>
        </Popover>
    );
    //for add Matric end
    //select metric
    const [selectValueSource, setSelectValueSource] = useState('Metric');
    // Select period
    const [selectedPeriod, setSelectedPeriod] = useState('');
    //KPI Unit    
    const kpiUnit = [
        { value: "hms", label: "hms", customAbbreviation: "2 demo hms", index: 1 },
        { value: "ConfidenceRating", label: "Confidence Rating", customAbbreviation: "This KPI is more of a gut feeling and is simple to use. With the higher the number the higher your confidence is that you are on the path to completing the priority over the time period 10 = confident 1 = not confident. Example – 6 on a confidence level", index: 2 }
    ];

    const kpiUnitlabel = ({ value, label, customAbbreviation }) => (
        <div className='kpiUnit-box d-flex '>
            <div className='fw-bold label-wrap'>{label}</div>
            <div className='ps-2 desc-wrap'>
                {customAbbreviation}
            </div>
        </div>
    );
    //repeat critical numbers
    const [criticalNumber, setCriticalNumber] = useState([1]); // Initialize with one div

    const handleAddAnother = () => {
        setCriticalNumber([...criticalNumber, criticalNumber.length + 1]); // Add a new item to the array
    };


    return (
        <React.Fragment>
            <div className="">
                <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                    <div className="pageTitle me-2">Dashboard </div>
                    <div className='d-flex align-items-center me-4'>
                        <button type="button" className="btn btn-outline-primary btn-sm fit-button me-2" onClick={handleShowDashboardEditModal}>
                            <i className="fi fi-rr-pencil me-1"></i> Edit
                        </button>
                        <div className='cursor-pointer' onClick={handleShowDashboardEditHelpModal} title='Dashboad Edit Help'>
                            <i className="fi fi-sr-question-square text-primary"></i>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Link to="#">
                            <i className="fi fi-rr-angle-circle-left"></i>
                        </Link>
                        <span className='ms-2'>1/3/2024</span>
                        <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                        </div>

                        <Link className='ms-2' onClick={handleShowDashboardEditPeriodModal} title='Edit Period'>
                            <i className="fi fi-rr-edit"></i>
                        </Link>
                        <span className='ms-2'>4/4/2024 <span><em>(Current)</em></span></span>
                        <Link to="#" className='ms-2'>
                            <i className="fi fi-rr-angle-circle-right"></i>
                        </Link>
                        <Link to="#" className='ms-3' title='Add Period' onClick={handleShowCreateNewPeriodModal}>
                            <i className="fi fi-sr-add"></i>
                        </Link>
                    </div>
                </div>

                <div className='dashboard-cont-wrap p-4'>
                    <div className='critical-number-wrap d-flex flex-wrap justify-content-between mb-3'>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0'>Critical Numbers for</h6>
                            <Dropdown className='company-dropdown'>
                                <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Company Name</Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate company-dropdown-wrap py-0' align="end">
                                    <button className='dropdown-item manage-teams-btn'><i className="fi fi-rr-plus me-2"></i>Manage Teams</button>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>
                                    Edit or Add Critical Number
                                </Tooltip>
                            }
                        >
                            <button className='link-btn' onClick={handleShowAddCriticalNumberModal}>
                                <i className='fi fi-rr-pencil'></i>
                            </button>
                        </OverlayTrigger>
                    </div>
                    {/* this is for empty data */}
                    <div className="empty-cont-box shadow mb-3">
                        <div className="empty-container" onClick={handleShowAddCriticalNumberModal}>
                            <p className='mb-1 fs-5'>Add Critical Numbers</p>
                            <i className="fi fi-sr-add fs-2"></i>
                        </div>
                        <div className="text-center text-muted">
                            Track the 3-5 most important metrics for the company's success.
                        </div>
                    </div>
                    {/* this is for empty data */}
                    {/* for critical numbers */}
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className='card mb-4'>
                                <div className='card-header d-flex justify-content-between align-items-center'>
                                    <h6 className='my-1 me-3'>Critical Number</h6>
                                    <Dropdown align="end" className='ms-auto'>
                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                            <Dropdown.Item> View Historical Graph</Dropdown.Item>
                                            <Dropdown.Item> Edit </Dropdown.Item>
                                            <Dropdown.Item> Make "No Change" Update</Dropdown.Item>
                                            <Dropdown.Item> Add Past Update </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='card-body'>
                                    <div className='content-card'>
                                        <div className='content-card-header-part'>
                                            <div className='content-card-value'>
                                                1
                                            </div>
                                            <div className='content-card-target'>
                                                Target: <span>300</span>
                                            </div>
                                        </div>
                                        <div className='content-card-graph'>
                                            <img className='w-100' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAABGCAYAAABsfB5aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqySURBVHhe7Z0LUFTnFcf/y3t5LaA8BUpUDCgKFRETRalJRk3TRGs6NZk66oxt2mZaZ9I2Jk3j2KTWvKbVTDNV47QmYzTa6RRtmhiND6wKgg8EVEAQ5f1QnrvLAvvo/djDFBUE9j723t37m7lzv3Ouw6zy8+z5vv32Xo2NAyrjw2IE9Dfth4E7euoBay939HHX2Jk7Bs5czPDwBbz87OeBwwdf26z4d1Ay5gcnIyUwAcn+cfDSeNr/vMqYUQUeC52lQHuRXVZDNWBqoguOs1eXig167mcNId43HGlBU5CkjcUToWmYE5RIV1RGQhV4OLpvcNIWAx0l9rOlhy4Ix59C52BLVwVFwxPs6T8g8uNclc4MTsKMgHi6ojKIKvAgHVeAu/lcpb0IGGspKR4bQ+did1cZRWPjUf9YfCdkFpaFzcEC3QzKujfuLbC+Cmg7bxeXVV0JWReSgcPd5RSNn7TAKZzI6VjCHTMDEijrfrinwE1HgNbTXLW9TAnpWaqbiUL9bYr4kc1V5eUTH8PqyMWUcR/cS+DWM0DjYXtv62SS/GLR2t9FkTDM103H+qgleHbiPMq4Pu4hcEcRUM+JezePEs7F6OmHOPhQJDysR/5J9DIsDEmhjOvi2gKzZa+6HKD5GCXkQbVvJOaYhV/ZuJ8XIrLxUswyl+6RXVfg2n8ANftFWQLjy/nAaXi6h/9a8lgI9NTildgV2BD7HGVcC9cTmC2HMXHZWaZ8oUvDGvYpnoRk6VLwq7gVA2dXwoPOyodV2uq/AcWvyVpeRp3Gi0bS8d/OUiwvfRtv3d4HvQzflRzFNQRmH/UW/dreNiiAWxoaOIHtdYfwTMlm5MpgJUYIlC9wywmg9Hf2CZtCqGGbfZxIieEWnr+6BTsavqSMclG2wKzXLXvfvvNLQdzqN9LIeVhhwxvVn2BD5U7KKBNlTuKsZqDiA6765lJCWcR4h6GX/R1kQnrQVBydtYUiZaE4ga03L8Ljzg7AVEcZJxI4GdDGAr4TAb8IwCfcfmaxt86+L5jtCTab7GeK9xsbUG5qQpmxFuXGOtT0ttIPdB7+nr6onfcpRcpBUQKb65pg+Mun8IoyIiCzAuhvpysSEfAtICgJCEkFQr/NSRpCF/hR33sX14013FGLU9zk6lRHMV2RnrvzD9BIGShGYOvddnT94SNY2zsHYu2iYGinFgA2kd+Kw7M4WdOB4GSuTEmzH7fdrMc37UU42nYRX3FHj8STPiVJrAiBrXoDOl97Dzb9vZOfwO/q4BN5liIBYZV2wgIgYqFk0o7EoMw5d/JwpO0CZcVHKRLLX2CzBW0/e5NrF/opcS9BzwfDO/gcRTxh1XYid7CzDDnJtRZ7m08MyCwFSpBY9gK3rf0NjUYmeHUgvLzzKXKAcK7Sxq6w97cK4FzndXzWchKfS7AKI3eJZS1w9/sfo//qw783NohunTc8NePcoM72BUxazlXd+ZRQFpf1Vdjd+LWoIj8ZmoYD01+nSH7IVmDTV6dgPPAfisZGyI9t8LBcpeghaKM5cbmKG/M9Siibvc0nsbXmAJr6xFmV2fLIGvw05mmK5IUsBe7LL4J+x2cUjR0Pf2/oVndB019FmWGIWgIkrAV8hFkCkwuVPQ2cxAdF6493TfslVobL751KdgL3l1Wh+50dFI0fr9gABD9Tx/0vqKfMEBLWAPGrKHBNdjceGRC5w2ygjHDkzHgTWTL7loes9kKwtV7Dnn9S5BjmOgP0ZxI4k3WU4fCdACRtdHl5GeujlyInZZMo38LYcG0vjjRdo0geyErgnpxjsDbx/1i1r7QThuKZ3PuLFzdRmwEk/xaIyKarrg+Td1/yq4Le2SfdkoXLV0JxqEIGH+EPQTYtRF/eZeh37qNIGLRPhEH7w5e4fjeMMu7Hc6Vv4UznGCa2I+Bt88F0/WKcrG6hDLD/qWexamoyRc5FFhXY2tWNnsPfUCQMPhmzoF39ulvLyzjEtRNLwmZTND6m2JKgq1twj7yM7cUX0NFrosi5yEJg06HjsDTe+4/EByZv4MurKVLZl7wRv5g0viXDdPNCFJb4o6K9gzL/J7+5Ae8WnafIuThd4L4LJTAdF24/gyrv8GxO+BFWRSyiaGQibNFI616KY9f0lBmebVcuILdB/HvIjYbTBTZ9cYJG/FHlfTgfJf4cqWwP8wikWNNhqU3GiftahuEwWcx45zKPj+8FwqkC957Kh/mWMLNa7xmJqrxj4MuZv4ePxpsiO2yilm56EqdLbbjR8WDLMBJHam7iw5KLFDkHJwssTB+lCdBC+wN5ftQpN/w8fHB45iaK7BO1KW2LcayijTLjY+ulPNzolPiLBUNwmsBCVl9/Tl6vhFiKVEYjI2gaPpiyHrP7s9ByOxLn6h2fQDcZDdhWXEiR9DhRYGGqr2/2vIFDZXysi3oKE/rjcLurmzKOc7CyDM2cyM7AKQILVX1Z1WXVV8Ux3p67EL6e/B8sc8fUg4NV47vbvFA4R+DcAhrxg/W9rP9VcYxEXSj+mDn60tpYcBuB+4vLYK7mv37I2ga28qDCj1dSM7Agiv/84UxjHY7V3qJIOiQXuK9AmBvv+WZn0kiFL2+kP0YjfjijCksqsPVOG/oK+d/zgFVfddVBOJbGT8bLKY7tlxjKwarrqNUL+9iE0ZBUYCavrZeeXskDtfoKz6tpmYj0D6DIMbr6+gZWJKREWoEL1OorV+KDgvFi4nSKHEfqNkIygftLygWavKnVVyyEELigpRFHJZzMSSawuZz//XvZZh21+orHnPAorJz8KEWOU9DSQCPxka4Clwkg8NxUGqmIxYvThKnCUiGJwNbObpgr+b2teE6KGqjAKuLy/UemISMimiLHcDmB+69V0shxVHmlg28vzPZFFEoksSQCm68LIPBcVWCpYAIHefN7kmheszR9sDQVmKfArPp6xkRSpCI2EVp/zI3k10aw781JgegCs3v6Wlsd2yw9iFfSyF+DURGHjHBl9MGiC2wR4EYlavWVnkyeFbiqsx31Bv57jUdDdIGtzXdo5Dhe8ZNopCIV2TH870wvRR8s+wrsGR2h7vl1AiG+fkgPj6LIMS61iv9Ac/kLPEltH5xFVjS/Tz0bDA+/t4QQSCAwvxbCMz6GRipSsygmjkaO0WB0CYH5VWC1/3UecYHBNHIMxVdgW48JIz1daKx4hA25z6+KpIT4+NLIMer1Cl+FuP+5bo6g8R99AldT14A9+/ndGFvlQXTcRI4PHX3iP6BRVIGtQggc4E+jBym/cRO79uzHu9sdfySBysjouArsodFQ5Bhi3y9C5ArM78Vr/Hyh0T74NlZUeg3bd/4dH+7agytXr1NWRWi8PTwQxrMKiz2Rk3UF1gTd+x2tvMJLeGfbX/HxJ5+jorKasipiEspXYJEncvKuwFz7YLFYcPz0OWza+mfsPZiD2nrp9pqq2D/Q4IPYFVjUZ2QY/3WURg9HQ30WeylsPPiSyjs6cLrPMKZqmzE7FWtfWEmRilBsLjxDo5EZ+vtjDP0dMjZnLKCR8MjuOXHDUV55E7lnz+NK6cj9riqwe6IIgQe5XVuP0+cKkH/hwWciqwK7J4oSeJDWO20DFTn3bD6s9PJVgd0TRQo8iJ6bJOZyFZnJPD0pURXYDVG0wIOwlQom8eKFj1NGxT0A/gffAxLyv2GzHgAAAABJRU5ErkJggg==" />
                                        </div>
                                        <div className='content-card-subtitle'>
                                            <span>20</span> <span> days since update</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <div className="profile-wrap">
                                        <div className="exp-avtar bg-white">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </div>
                                        <div className="ps-2 profile-name-wrap text-truncate">
                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for critical numbers */}
                    {/* for whats up section */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card mb-4'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'><Link to="#" className='text-dark'>What's Up</Link></h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    Join Meeting
                                                </Tooltip>
                                            }
                                        >
                                            <button className='link-btn' >
                                                <i className="fi fi-sr-video-camera-alt"></i>
                                            </button>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    Navigate to this What's Up Huddle
                                                </Tooltip>
                                            }
                                        >
                                            <button className='link-btn'>
                                                <i className="fi fi-sr-sign-out-alt"></i>
                                            </button>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    While this feature is enabled, all changes you make to one huddle will be copied over to your other huddles
                                                </Tooltip>
                                            }
                                        >
                                            <button className='link-btn' onClick={handleShowDailyLinkModal}>
                                                <i className="fi fi-rr-link-alt"></i>
                                            </button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                                <div className='card-body pb-1'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <textarea className="form-control" rows="4" placeholder="You have not told us. What's Up?"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for whats up section */}
                    {/* for My Tasks section */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card mb-4'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'><Link to="#" className='text-dark'>My Tasks</Link></h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    New Task
                                                </Tooltip>
                                            }
                                        >
                                            <button className='link-btn' >
                                                <i className="fi fi-rr-add"></i>
                                            </button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                                <div className='card-body pb-1'>
                                    <div className="d-flex task-wrap-header">
                                        <div className='task-name text-secondary'>
                                            <span>Task Metrics</span> for Current Period
                                        </div>
                                        <div className="completedd">
                                            Completed:<br />
                                            <span className='text-success'>5</span>
                                        </div>
                                        <div className="completedd">
                                            Upcoming:<br />
                                            <span className='text-dark'>0</span>
                                        </div>
                                        <div className="completedd">
                                            Overdue:<br />
                                            <span className='text-warning'>0</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for My Tasks section */}

                </div>
            </div>

            {/* dashboard edit modal start  */}
            <form>
                <Modal id="dashboard-edit-modal" show={showDashboardEditModal} onHide={handleCloseDashboardEditModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Dashboard</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pb-0">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <select className="form-select">
                                        <option>Select a component to add to the Dashboard</option>
                                        <option>Announcement</option>
                                        <option>KPIs</option>
                                        <option>My Top Piorety</option>
                                        <option>Persons of Interest</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card shadow-none border'>
                                    <div className='card-body'>
                                        <p className='text-dark fw-bold'>Selected Dashboard Components:</p>
                                        <div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDashboardEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDashboardEditModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard edit Modal End*/}
            {/* dashboard edit help Modal start*/}
            <form>
                <Modal id="dashboard-edit-help-modal" show={showDashboardEditHelpModal} onHide={handleCloseDashboardEditHelpModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Dashboard Help</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Click the Edit button to customize your Dashboard.<br />
                            You can add, remove and re-order the contents of your Dashboard to give you what you need to get the important things done with ease.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn btn-primary" onClick={handleCloseDashboardEditHelpModal}>
                            Ok
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard edit help Modal end*/}
            {/* dashboard Period edit Modal start*/}
            <form>
                <Modal id="edit-period-modal" show={showDashboardEditPeriodModal} onHide={handleCloseDashboardEditPeriodModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDashboardEditPeriodModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDashboardEditPeriodModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard period edit Modal end*/}
            {/* dashboard Create New Period Modal start*/}
            <form>
                <Modal id="Create-New-Period" show={showCreateNewPeriodModal} onHide={handleCloseCreateNewPeriodModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Create New Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseCreateNewPeriodModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseCreateNewPeriodModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard Create New Periodt Modal end*/}

            {/* add critical Modal start*/}
            <form>
                <Modal id="add-critical-modal" show={showAddCriticalNumberModal} onHide={handleCloseAddCriticalNumberModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0'>Critical Numbers for</h6>
                            <Dropdown className='company-dropdown'>
                                <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Company Name</Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate' align="end">
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            {criticalNumber.map((_, index) => (
                                <div className='col-lg-6'>
                                    <div className='card shadow-none border critica-card'>
                                        <div className='card-body position-relative'>
                                            <button className='link-btn position-absolute top-0 end-0' onClick={handleShowDeleteCriticalModal}>
                                                <i className='fi fi-sr-trash text-danger'></i>
                                            </button>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Title</label>
                                                        <input type="text" placeholder="Critical Number: Enter Name" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Owner</label>
                                                        <div className='custom-select-wrap'>
                                                            <Select
                                                                name='Owner'
                                                                options={ownerName}
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
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Progress Calculation</label>
                                                        <div className="d-flex flex-wrap">
                                                            <label className="custom-radio me-3 mb-2">
                                                                <input
                                                                    type="radio"
                                                                    name="ProgressCalculation"
                                                                    value="Custom Targets"
                                                                    checked={selectCustomTargets === 'Custom Targets'}
                                                                    onChange={() => setSelectCustomTargets('Custom Targets')}
                                                                />
                                                                <span className="checkmark" />
                                                                <span className="text-">Custom Targets</span>
                                                            </label>
                                                            <label className="custom-radio me-3 mb-2">
                                                                <input
                                                                    type="radio"
                                                                    name="ProgressCalculation"
                                                                    value="Time-Based"
                                                                    checked={selectCustomTargets === 'Time-Based'}
                                                                    onChange={() => setSelectCustomTargets('Time-Based')}
                                                                />
                                                                <span className="checkmark" />
                                                                <span className="text-">Time-Based</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Value Source</label>
                                                        <div className='custom-select-wrap'>
                                                            <select
                                                                className='form-select'
                                                                value={valueSource}
                                                                onChange={(e) => setValueSource(e.target.value)}
                                                            >
                                                                <option value='Critical Number'>Critical Number</option>
                                                                <option value='Align Metric'>Align Metric</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {valueSource === 'Align Metric' && (
                                                    <div className='col-12 metric-div'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>Metric</label>
                                                            <Select
                                                                name='Metric'
                                                                options={Metric}
                                                                getOptionLabel={(option) => option.label}
                                                                getOptionValue={(option) => option.value}
                                                                formatOptionLabel={formatOptionLabel}
                                                                placeholder={'Search for Metric or create a new Metric'}
                                                                theme={(theme) => ({
                                                                    ...theme,
                                                                    colors: {
                                                                        ...theme.colors,
                                                                        //primary25: '#e5f9f0',
                                                                        //primary: '#00b386',
                                                                    },
                                                                })}
                                                                onChange={(data) => {
                                                                    if (data.index == 0) {
                                                                        //console.log("abc");
                                                                        handleShowAddMetricModal()
                                                                    }
                                                                }}
                                                            />
                                                            <label className='text-muted f-s-12'><em>Metrics with a cadence are currently not supported.</em></label>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        {selectCustomTargets === 'Custom Targets' && (
                                                            <div className='forCustomtarget'>
                                                                <label className='form-label'>Targets</label>
                                                                <ul className='target-list'>
                                                                    <li className='dark-green-border'>
                                                                        <input className='form-control border-input' placeholder='400' type='text' />
                                                                    </li>
                                                                    <li className='green-border'>
                                                                        <input className='form-control border-input' placeholder='300' type='text' />
                                                                    </li>
                                                                    <li className='yellow-border'>
                                                                        <input className='form-control border-input' placeholder='200' type='text' />
                                                                    </li>
                                                                    <li className='red-border'>
                                                                        <input className='form-control border-input' placeholder='100' type='text' />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {selectCustomTargets === 'Time-Based' && (
                                                            <div className='forTimeBased'>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>
                                                                        Start
                                                                    </label>
                                                                    <input className='form-control' placeholder='100' type="number" />
                                                                </div>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>
                                                                        Target
                                                                    </label>
                                                                    <input className='form-control' placeholder='100' type="number" />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Current Value</label>
                                                        <input className='form-control' placeholder='Current Value' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddCriticalNumberModal}>
                            Cancel
                        </button>
                        <button className="btn btn-outline-success" onClick={handleAddAnother}>
                            Add Another
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddCriticalNumberModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* add critical Modal end*/}
            {/* Add Metric Modal start*/}
            <form>
                <Modal id="addMetric" show={showAddMetricModal} onHide={handleCloseAddMetricModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Add Metric</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Name</label>
                                    <input type='text' className='form-control' placeholder='Name of the Metric' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Unique Identifier
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="auto"
                                            overlay={UniqueIdentifier}
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <input type='text' className='form-control' placeholder='Enter unique identifier' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
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
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Status
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="auto"
                                            overlay={addMatricStatus}
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option>Select</option>
                                            <option>Active</option>
                                            <option>Deprecated</option>
                                            <option>Inactive</option>
                                            <option>Draft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Description</label>
                                    <textarea className='form-control' placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Value Source</label>
                                    <div className='custom-select-wrap'>
                                        <select
                                            className='form-select'
                                            value={selectValueSource}
                                            onChange={(e) => setSelectValueSource(e.target.value)}
                                        >
                                            <option value='Metric'>Metric</option>
                                            <option value='Formula'>Formula</option>
                                            <option value='Hubspot'>Hubspot</option>
                                            <option value='Salesforce'>Salesforce</option>
                                            <option value='Zapier'>Zapier</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {selectValueSource === 'Metric' && (
                                <div className='addMatric-'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Hubspot' && (
                                <div className='addHubspot- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>HubSpot Metric</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>Total Contacts</option>
                                                                <option>Total Deals</option>
                                                                <option>Deals Closed Won</option>
                                                                <option>Close Rate</option>
                                                                <option>Total Deal Value</option>
                                                                <option>Deals Closed Total</option>
                                                                <option>Total Open Deals</option>
                                                                <option>Average Deal Value</option>
                                                                <option>Average Won Deal Size</option>
                                                                <option>Average Days To Close</option>
                                                                <option>Win Rate</option>
                                                                <option>Sales Velocity</option>
                                                                <option>Total MQLs</option>
                                                                <option>Total SQLs</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Pipeline</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>Select</option>
                                                                <option>Sales Pipeline</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Date Range</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>All Time</option>
                                                                <option>Week To Date</option>
                                                                <option>Month To Date</option>
                                                                <option>Period To Date</option>
                                                                <option>Year To Date</option>
                                                                <option>Custom</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row forCustomDate'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Start Date</label>
                                                        <div className="exp-datepicker-cont">
                                                            <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                                            <DatePicker
                                                                //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                                                dateFormat="dd/MM/YYYY"
                                                                placeholderText='Select Date'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>End Date</label>
                                                        <div className="exp-datepicker-cont">
                                                            <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                                            <DatePicker
                                                                //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                                                dateFormat="dd/MM/YYYY"
                                                                placeholderText='Select Date'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Salesforce' && (
                                <div className='addSalesforce- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' readOnly />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Salesforce Report</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>None</option>
                                                                <option>Sandbox: Conversion Metrics</option>
                                                                <option>Sandbox: Quarterly Demos</option>
                                                                <option>Sandbox: Quarterly Leads and Opportunities</option>
                                                                <option>Sandbox: Quarterly Revenue</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Salesforce Metric</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>None</option>
                                                                <option>MQLs</option>
                                                                <option>Opportunities</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Zapier' && (
                                <div className='addZapier- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                        <label className='mb-0 text-muted'><em>Zapier will use the Unique Identifier above to locate and update the Metric's Value.</em></label>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Formula' && (
                                <div className='addFormula- mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Format
                                                </label>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                    <option>Number</option>
                                                    <option>Percent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Current Value</label>
                                                <input type='text' className='form-control' placeholder='Value' readOnly />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='rounded-10 border pt-3 px-3 pb-1'>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>Formula Builder
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    rootClose
                                                                    placement="auto"
                                                                    overlay={formulaBuilder}
                                                                >
                                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                                </OverlayTrigger>
                                                            </label>
                                                            <div className='calculated-area'>
                                                                <div className='calculate-box'>
                                                                    <span className='calculated-pill-wrap'>
                                                                        <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                                        <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                                    </span>
                                                                    <span className='calculated-pill-wrap'>
                                                                        <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                                        <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                                    </span>
                                                                </div>
                                                                <div className='calculated-action-btn'>
                                                                    <span className='cursor-pointer'>
                                                                        <i className="fi fi-sr-cross-circle gth-text-danger fs-5"></i>
                                                                    </span>
                                                                    <span className='cursor-pointer'>
                                                                        <i className="fi fi-ss-check-circle gth-text-success fs-5"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className='row align-items-end'>
                                                            <div className='col-md-6'>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>Search Metric</label>
                                                                    <input className='form-control' placeholder='Name or Owner' />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='form-group'>
                                                                    <div className='text-end'>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-plus"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-minus"></i></button>
                                                                        <button className='icon-btn me-2'>/</button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-sr-bahai"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round-right"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className='metric-selection'>
                                                            <div className='metric-selection-list-wrap'>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={
                                                                                            <Tooltip>
                                                                                                Subhadeep Chowdhury
                                                                                            </Tooltip>
                                                                                        }
                                                                                    >
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </OverlayTrigger>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={
                                                                                        <Tooltip>
                                                                                            Manualy Update
                                                                                        </Tooltip>
                                                                                    }
                                                                                >
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={
                                                                                            <Tooltip>
                                                                                                Subhadeep Chowdhury
                                                                                            </Tooltip>
                                                                                        }
                                                                                    >
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </OverlayTrigger>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={
                                                                                        <Tooltip>
                                                                                            Manualy Update
                                                                                        </Tooltip>
                                                                                    }
                                                                                >
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={
                                                                                            <Tooltip>
                                                                                                Subhadeep Chowdhury
                                                                                            </Tooltip>
                                                                                        }
                                                                                    >
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </OverlayTrigger>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={
                                                                                        <Tooltip>
                                                                                            Manualy Update
                                                                                        </Tooltip>
                                                                                    }
                                                                                >
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={
                                                                                            <Tooltip>
                                                                                                Subhadeep Chowdhury
                                                                                            </Tooltip>
                                                                                        }
                                                                                    >
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </OverlayTrigger>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={
                                                                                        <Tooltip>
                                                                                            Manualy Update
                                                                                        </Tooltip>
                                                                                    }
                                                                                >
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <OverlayTrigger
                                                                                        placement="top"
                                                                                        overlay={
                                                                                            <Tooltip>
                                                                                                Subhadeep Chowdhury
                                                                                            </Tooltip>
                                                                                        }
                                                                                    >
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </OverlayTrigger>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <OverlayTrigger
                                                                                    placement="top"
                                                                                    overlay={
                                                                                        <Tooltip>
                                                                                            Manualy Update
                                                                                        </Tooltip>
                                                                                    }
                                                                                >
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                            <div className='col-12'>
                                <div className='rounded-10 border pt-3 px-3 pb-1 mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Cadence
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        rootClose
                                                        placement="auto"
                                                        overlay={AddMetricCadence}
                                                    >
                                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                    </OverlayTrigger>
                                                </label>
                                                <div className='custom-select-wrap'>
                                                    <select
                                                        className='form-select'
                                                        value={selectedPeriod}
                                                        onChange={(e) => setSelectedPeriod(e.target.value)}
                                                    >
                                                        <option value=''>Period</option>
                                                        <option value='Weekly'>Weekly</option>
                                                        <option value='Monthly'>Monthly</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {(selectedPeriod === 'Weekly' || selectedPeriod === 'Monthly') && (
                                            <>
                                                <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Resets On
                                                        </label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select' disabled={selectedPeriod === 'Monthly'}>
                                                                <option>Sunday</option>
                                                                <option>Monday</option>
                                                                <option>Tuesday</option>
                                                                <option>Wednesday</option>
                                                                <option>Thursday</option>
                                                                <option>Friday</option>
                                                                <option>Saturday</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Reset Value
                                                        </label>
                                                        <input type='text' placeholder='Enter a Value' className='form-control' />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>KPI Unit</label>
                                    <Select
                                        name='KPI Unit'
                                        options={kpiUnit}
                                        formatOptionLabel={kpiUnitlabel}
                                        placeholder={'Search for Metric or create a new Metric'}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                // primary25: '#ddddff',
                                                // primary: '#0479d6',
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Comments</label>
                                    <textarea className='form-control' placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddMetricModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddMetricModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Add Metric Modal end*/}
            {/* Delete modal start */}
            <form>
                <Modal id="delete-Critical-modal"
                    show={showDeleteCriticalModal}
                    onHide={handleCloseDeleteCriticalModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton className="">
                        <Modal.Title className="gth-text-danger">Delete Critical Number?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="delete-confirm-wrap d-flex align-items-start">
                            <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                                <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
                            </div>
                            <div>
                                <p className="text-muted f-s-14 mb-1">
                                    Do you want to delete the Critical Number, critical number?
                                </p>
                                <p className="text-muted f-s-14 mb-1">
                                    <span className='fw-bold'>Note:</span> All historical data for the Critical Number in the Period will also be removed.
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-center gth-light-red-bg'>
                        <button className='btn btn-secondary' onClick={handleCloseDeleteCriticalModal}>
                            <i className="fi fi-rr-cross me-2"></i>No
                        </button>
                        <button className='btn btn-exp-red'>
                            <i className="fi fi-rr-check me-2"></i>Yes
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Delete modal end */}
            {/* Link your Daily Updates? Modal start*/}
            <form>
                <Modal id="LinkYourDailyUpdates" show={showDailyLinkModal} onHide={handleCloseDailyLinkModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Link your Daily Updates?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='f-s-14'>
                            Linking your "What's Up" allows you to have one "What's Up" that will sync between all of your Daily Huddles.
                        </p>
                        <p className='mb-0 f-s-14'>
                            Linking now will copy the "What's Up" in your current view to all of your Daily Huddles and link your updates for the rest of the day.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDailyLinkModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDailyLinkModal}>
                            Link
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/*Link your Daily Updates? Modal end*/}

        </React.Fragment>
    )
}

export default Dashboard