import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import AddCriticalNumberModal from '../../CommonComponent/CriticalModal/AddCriticalNumberModal'
import ViewHistoricalGraphModal from '../../CommonComponent/ViewHistoricalModal/ViewHistoricalGraphModal'
import EditCriticalNumberModal from '../../CommonComponent/CriticalModal/EditCriticalNumberModal'

function AdvanceCriticalNumber() {
    // Critical Number start
    const [showAddCriticalNumberModal, setShowAddCriticalNumberModal] = useState(false);
    const handleCloseAddCriticalNumberModal = () => setShowAddCriticalNumberModal(false);
    const handleShowAddCriticalNumberModal = () => setShowAddCriticalNumberModal(true);
    // View Historical Graph Modal start
    const [showViewHistoricalGraphModal, setShowViewHistoricalGraphModal] = useState(false);
    const handleCloseViewHistoricalGraphModal = () => setShowViewHistoricalGraphModal(false);
    const handleShowViewHistoricalGraphModal = () => setShowViewHistoricalGraphModal(true);
    return (
        <>
            <div className='critical-number-wrap d-flex flex-wrap justify-content-between mb-4'>
                <div className='d-flex align-items-center'>
                    <h6 className='me-2 my-0'>Critical Numbers for <span>4D Weekly Meeting</span></h6>
                </div>
                <Tooltip title="Edit or Add Critical Number">
                    <button className='link-btn' onClick={handleShowAddCriticalNumberModal}>
                        <i className='fi fi-br-pencil'></i>
                    </button>
                </Tooltip>
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
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <div className='card mb-4 each-critical-card'>
                        <div className='card-header d-flex justify-content-between align-items-center'>
                            <h6 className='my-1 me-3'>Critical Number</h6>
                            <Dropdown align="end" className='ms-auto'>
                                <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                    <i className="fi fi-br-menu-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                    <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                    <Dropdown.Item >Edit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='card-body'>
                            <div className='content-card'>
                                <div className='content-card-header-part'>
                                    <div className='content-card-value'>

                                    </div>
                                    <div className='content-card-target'>
                                        Target: <span>300</span>
                                    </div>
                                </div>
                                <div className='content-card-graph'>
                                    <img className='w-100' src="data:image/png;base64,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" />
                                </div>
                                <div className='content-card-subtitle'>
                                    <span>20</span> <span> days since update</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer d-flex justify-content-between align-items-center'>
                            <div className="profile-wrap">
                                <div className="exp-avtar bg-secondary">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </div>
                                <div className="ps-2 profile-name-wrap text-truncate">
                                    <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                </div>
                            </div>
                            <div className='ms-auto'>
                                <Tooltip title="Manually Updated">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <div className='card mb-4 each-critical-card'>
                        <div className='card-header d-flex justify-content-between align-items-center'>
                            <h6 className='my-1 me-3'>Critical Number</h6>
                            <Dropdown align="end" className='ms-auto'>
                                <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                    <i className="fi fi-br-menu-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                    <Dropdown.Item >View Historical Graph</Dropdown.Item>
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='card-body'>
                            <div className='content-card'>
                                <div className='content-card-header-part'>
                                    <div className='content-card-value'>

                                    </div>
                                    <div className='content-card-target'>
                                        Target: <span>300</span>
                                    </div>
                                </div>
                                <div className='content-card-graph'>
                                    <img className='w-100' src="data:image/png;base64,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" />
                                </div>
                                <div className='content-card-subtitle'>
                                    <span>20</span> <span> days since update</span>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer d-flex justify-content-between align-items-center'>
                            <div className="profile-wrap">
                                <div className="exp-avtar bg-secondary">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </div>
                                <div className="ps-2 profile-name-wrap text-truncate">
                                    <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                </div>
                            </div>
                            <div className='ms-auto'>
                                <Tooltip title="Manually Updated">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <div className='card mb-4 each-critical-card'>
                        <div className='card-header d-flex justify-content-between align-items-center'>
                            <h6 className='my-1 me-3'>Critical Number</h6>
                            <Dropdown align="end" className='ms-auto'>
                                <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                    <i className="fi fi-br-menu-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                    <Dropdown.Item >View Historical Graph</Dropdown.Item>
                                    <Dropdown.Item >Edit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='card-body'>
                            <div className='content-card'>
                                <div className='content-card-header-part'>
                                    <div className='content-card-value'>

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
                        <div className='card-footer d-flex justify-content-between align-items-center'>
                            <div className="profile-wrap">
                                <div className="exp-avtar bg-secondary">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </div>
                                <div className="ps-2 profile-name-wrap text-truncate">
                                    <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                </div>
                            </div>
                            <div className='ms-auto'>
                                <Tooltip title="Manually Updated">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for critical numbers */}

            {/* Add Critical Modal start*/}
            <AddCriticalNumberModal
                show={showAddCriticalNumberModal}
                handleClose={handleCloseAddCriticalNumberModal}
            // ownerName={ownerName}
            // Metric={Metric}
            // formatOptionLabel={formatOptionLabel}
            />
            {/* Add Critical Modal end*/}
            {/* View Historical Modal start*/}
            <ViewHistoricalGraphModal
                show={showViewHistoricalGraphModal}
                handleClose={handleCloseViewHistoricalGraphModal}
            />
            {/* View Historical Modal end*/}
            {/* Edit Critical Modal start*/}
            <EditCriticalNumberModal
                show={showViewHistoricalGraphModal}
                handleClose={handleCloseViewHistoricalGraphModal}
            />
            {/* Add Critical Modal end*/}
        </>
    )
}

export default AdvanceCriticalNumber