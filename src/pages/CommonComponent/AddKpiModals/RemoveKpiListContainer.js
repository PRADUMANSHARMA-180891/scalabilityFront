import { Tooltip } from 'antd';
import React from 'react';

const RemoveKpiListContainer = () => {
    const kpis = [
        {
            id: 1,
            owner: 'Subhadeep Chowdhury',
            name: 'A/R Days (Average)',
            value: 58,
            imgSrc: '/assets/images/user.png',
            isManuallyUpdated: true,
            isMetric: true,
            zapierEnabled: false,
            salesforceEnabled: false,
            hubspotEnabled: false,
            priority: false,
            criticalNumber: false,
        },
        {
            id: 2,
            owner: 'Moumeeta Shome',
            name: 'Avg Employee Onboarding Days',
            value: 6522,
            imgSrc: '/assets/images/user.png',
            isManuallyUpdated: false,
            isMetric: true,
            zapierEnabled: true,
            salesforceEnabled: false,
            hubspotEnabled: false,
            priority: false,
            criticalNumber: false,
        },
        {
            id: 3,
            owner: 'John Parker',
            name: 'Complete 5 Project Milestones',
            value: 95580,
            imgSrc: '/assets/images/user.png',
            isManuallyUpdated: true,
            isMetric: false,
            zapierEnabled: false,
            salesforceEnabled: false,
            hubspotEnabled: false,
            priority: true,
            criticalNumber: false,
        },
        {
            id: 4,
            owner: '',
            name: 'Critical Number',
            value: 95580,
            imgSrc: '',
            isManuallyUpdated: true,
            isMetric: false,
            zapierEnabled: false,
            salesforceEnabled: false,
            hubspotEnabled: false,
            priority: false,
            criticalNumber: true,
        },
        
    ];

    return (
        <div className="kpi-list-cont remove-kpi-cont">
            <div className="kpi-list-item">
                {kpis.map((kpi) => (
                    <div key={kpi.id} className="each-kip-card">
                        <i className="fi fi-rr-trash text-danger me-3"></i>
                        <div className="profile-wrap">
                            {kpi.owner && (
                                <Tooltip title={kpi.owner}>
                                    <div className="exp-avtar bg-white">
                                        <img className="prof-img" src={kpi.imgSrc} alt={kpi.owner} />
                                    </div>
                                </Tooltip>
                            )}
                        </div>
                        <div className="kpi-name-cont">
                            <span>{kpi.name}</span>
                        </div>
                        <div className="icons-cont">
                            {kpi.isManuallyUpdated && (
                                <Tooltip title="Manually Updated">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </Tooltip>
                            )}
                            {kpi.isMetric && (
                                <Tooltip title="Metric">
                                    <i className="fi fi-rr-hastag"></i>
                                </Tooltip>
                            )}
                            {kpi.zapierEnabled && (
                                <Tooltip title="Zapier Enabled">
                                    <i className="fi fi-rr-medical-star text-coral"></i>
                                </Tooltip>
                            )}
                            {kpi.salesforceEnabled && (
                                <Tooltip title="Salesforce Enabled">
                                    <i className="fi fi-sr-cloud text-primary"></i>
                                </Tooltip>
                            )}
                            {kpi.hubspotEnabled && (
                                <Tooltip title="Hubspot Enabled">
                                    <i className="fi fi-brands-hubspot text-coral"></i>
                                </Tooltip>
                            )}
                            {kpi.priority && (
                                <Tooltip title="Priority">
                                    <i className="fi fi-sr-arrow-trend-up"></i>
                                </Tooltip>
                            )}
                            {kpi.criticalNumber && (
                                <Tooltip title="Critical Number">
                                    <i className="fi fi-rr-dashboard"></i>
                                </Tooltip>
                            )}
                        </div>
                        <div className="value-cont">{kpi.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RemoveKpiListContainer;
