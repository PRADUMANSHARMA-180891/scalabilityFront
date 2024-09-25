import { Tooltip } from 'antd'
import React from 'react'

function CompanyIntegrations() {
    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>
                        Integrations
                    </h5>
                </div>
                <div className='card-body'>
                    <div className='table-responsive'>
                        <table className='table table-striped border'>
                            <thead>
                                <tr>
                                    <th style={{ width: '80%' }}>Application</th>
                                    <th style={{ width: '10%' }}>Enabled</th>
                                    <th style={{ width: '10%' }}>Configure</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>HubSpot</div>
                                    </td>
                                    <td>
                                        <div className='text-center text-success f-s-16'>
                                            <i class="fi fi-br-progress-complete"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='text-center'>
                                            <Tooltip title="Configure...">
                                                <button className='table-action-btn' >
                                                    <i className="fi fi-br-trash"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Salesforce</div>
                                    </td>
                                    <td>
                                        <div className='text-center text-success f-s-16'>
                                            <i class="fi fi-br-progress-complete"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='text-center'>
                                            <Tooltip title="Configure...">
                                                <button className='table-action-btn' >
                                                    <i className="fi fi-br-trash"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Slack</div>
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        <div className='text-center'>
                                            <Tooltip title="Configure...">
                                                <button className='table-action-btn' >
                                                    <i className="fi fi-br-trash"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Zapier</div>
                                    </td>
                                    <td>
                                        <div className='text-center text-success f-s-16'>
                                            <i class="fi fi-br-progress-complete"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='text-center'>
                                            <Tooltip title="Configure...">
                                                <button className='table-action-btn' >
                                                    <i className="fi fi-br-trash"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyIntegrations