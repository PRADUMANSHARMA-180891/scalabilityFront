import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation();
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-1 exp-main-nav header-3">
      <a href className="brand-link d-flex justify-content-center">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo-icon.webp`} alt="Logo" className="brand-image img-fluid" />
        <span className="brand-text"><img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} alt="Logo" className="img-fluid brand-name" /></span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">

        <nav className='nav-customSidebar'>
          <div className='text-center mb-3'>
            <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" className="img-fluid" />
          </div>
          <div className="accordion menu-accordian" id="menuAccordian">
            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/dashboard" || location.pathname === "/company-dashboard" || location.pathname === "/annual-initiatives" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#dashboardMenu" aria-expanded={false} aria-controls="dashboardMenu">
                  <i className="sidebar-nav-icon fi fi-sr-home" />
                  <p>Dashboard</p>
                </button>
              </div>
              <div id="dashboardMenu" className={`accordion-collapse collapse ${location.pathname === "/dashboard" || location.pathname === "/company-dashboard" || location.pathname === "/annual-initiatives" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/dashboard" className={`sidebar-nav-link ${location.pathname === "/dashboard" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-dashboard-panel" />
                        <p>My Dashboard</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/company-dashboard" className={`sidebar-nav-link ${location.pathname === "/company-dashboard" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-globe" />
                        <p>Company Dashboard</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/annual-initiatives" className={`sidebar-nav-link ${location.pathname === "/annual-initiatives" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-chart-pie-alt" />
                        <p>Annual Initiatives</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/process-accountability" || location.pathname === "/seven-strata" || location.pathname === "/cash-acceleration-strategies" || location.pathname === "/alignment-checklist" || location.pathname === "/cash-power-of-one" || location.pathname === "/functional-accountability" || location.pathname === "/four-d-vision-summery" || location.pathname === "/one-page-strategic-plan" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu1" aria-expanded={false} aria-controls="menu1">
                  <i className="sidebar-nav-icon fi fi-br-bullseye-arrow" />
                  <p>Strategy</p>
                </button>
              </div>
              <div id="menu1" className={`accordion-collapse collapse ${location.pathname === "/process-accountability" || location.pathname === "/seven-strata" || location.pathname === "/cash-acceleration-strategies" || location.pathname === "/cash-power-of-one" || location.pathname === "/functional-accountability" || location.pathname === "/alignment-checklist" || location.pathname === "/four-d-vision-summery" || location.pathname === "/one-page-strategic-plan" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/one-page-strategic-plan" className={`sidebar-nav-link ${location.pathname === "/one-page-strategic-plan" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>One Page Strategic Plan</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/alignment-checklist" className={`sidebar-nav-link ${location.pathname === "/alignment-checklist" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Alignment Checklist</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/four-d-vision-summery" className={`sidebar-nav-link ${location.pathname === "/four-d-vision-summery" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>4D Vision Summary</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/functional-accountability" className={`sidebar-nav-link ${location.pathname === "/functional-accountability" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Functional Accountability</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/process-accountability" className={`sidebar-nav-link ${location.pathname === "/process-accountability" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Process Accountability</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/seven-strata" className={`sidebar-nav-link ${location.pathname === "/seven-strata" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>7 Strata</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/cash-acceleration-strategies" className={`sidebar-nav-link ${location.pathname === "/cash-acceleration-strategies" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Cash Acceleration Strategies</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/cash-power-of-one" className={`sidebar-nav-link ${location.pathname === "/cash-power-of-one" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Cash: Power of One</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/manage-enps" || location.pathname === "/enps-schedule" || location.pathname === "/enps-results" || location.pathname === "/surveys" || location.pathname === "/create-survey" || location.pathname === "/survey-results" || location.pathname === "/announcement-list" || location.pathname === "/suggestion-list" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu2" aria-expanded="false" aria-controls="menu2">
                  <i className="sidebar-nav-icon fi fi-sr-choose" />
                  <p>Culture</p>
                </button>
              </div>
              <div id="menu2" className={`accordion-collapse collapse ${location.pathname === "/manage-enps" || location.pathname === "/enps-schedule" || location.pathname === "/enps-results" || location.pathname === "/surveys" || location.pathname === "/create-survey" || location.pathname === "/survey-results" || location.pathname === "/announcement-list" || location.pathname === "/suggestion-list" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/manage-enps" className={`sidebar-nav-link ${location.pathname === "/manage-enps" || location.pathname === "/enps-schedule" || location.pathname === "/enps-results" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>eNPS</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/surveys" className={`sidebar-nav-link ${location.pathname === "/surveys" || location.pathname === "/create-survey" || location.pathname === "/survey-results" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Surveys</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/announcement-list" className={`sidebar-nav-link ${location.pathname === "/announcement-list" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Announcements</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/suggestion-list" className={`sidebar-nav-link ${location.pathname === "/suggestion-list" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Suggestions</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

           

            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/manage-user" || location.pathname === "/manage-huddle" || location.pathname === "/company-settings" ||location.pathname === "/company-profile" || location.pathname === "/kpi-listing" || location.pathname === "/create-huddle" || location.pathname === "/manage-subscription" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu3" aria-expanded="false" aria-controls="menu3">
                  <i className="sidebar-nav-icon fi fi-sr-review" />
                  <p>Adminstrator</p>
                </button>
              </div>
              <div id="menu3" className={`accordion-collapse collapse ${location.pathname === "/manage-user" || location.pathname === "/manage-huddle" || location.pathname === "/company-settings" || location.pathname === "/company-profile" || location.pathname === "/kpi-listing" || location.pathname === "/create-huddle" || location.pathname === "/manage-subscription" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/manage-user" className={`sidebar-nav-link ${location.pathname === "/manage-user" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Manage Users</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/manage-huddle" className={`sidebar-nav-link ${location.pathname === "/manage-huddle" || location.pathname === "/create-huddle" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Manage Huddles</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/company-settings" className={`sidebar-nav-link ${location.pathname === "/company-settings" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Company Settings</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/company-profile" className={`sidebar-nav-link ${location.pathname === "/company-profile" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Company Profile</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/kpi-listing" className={`sidebar-nav-link ${location.pathname === "/kpi-listing" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>KPI Listing</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/manage-subscription" className={`sidebar-nav-link ${location.pathname === "/manage-subscription" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Manage Subscription</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="sidebar-item">
              <Link to="/manage-priorities" className={`sidebar-nav-link ${location.pathname === "/manage-priorities" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-br-arrow-trend-up" />
                <p>Priorities</p>
              </Link>
            </div>

            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/action-items" || location.pathname === "/tasks" || location.pathname === "/stucks" || location.pathname === "/top-priority-calendar" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu4" aria-expanded="false" aria-controls="menu4">
                  <i className="sidebar-nav-icon fi fi-br-to-do" />
                  <p>Action Items</p>
                </button>
              </div>
              <div id="menu4" className={`accordion-collapse collapse ${location.pathname === "/tasks" || location.pathname === "/tasks" || location.pathname === "/stucks" || location.pathname === "/top-priority-calendar" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/tasks" className={`sidebar-nav-link ${location.pathname === "/tasks" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Tasks</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/top-priority-calendar" className={`sidebar-nav-link ${location.pathname === "/top-priority-calendar" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Top Priority Calendar</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/stucks" className={`sidebar-nav-link ${location.pathname === "/stucks" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Stucks</p>
                      </Link>
                    </li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="sidebar-item">
              <Link to="/huddles-list" className={`sidebar-nav-link ${location.pathname === "/huddles-list" || location.pathname === "/classic-huddles" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-br-users-alt" />
                <p>Huddles</p>
              </Link>
            </div>

            <div className="sidebar-item">
              <Link to="/metrics" className={`sidebar-nav-link ${location.pathname === "/metrics" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-br-hastag" />
                <p>Metrics</p>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link to="/report" className={`sidebar-nav-link ${location.pathname === "/report" || location.pathname === "/alignment-report" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-sr-newspaper" />
                <p>Reports</p>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link to="/help" className={`sidebar-nav-link ${location.pathname === "/help" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-sr-interrogation" />
                <p>Help</p>
              </Link>
            </div>
            
          </div>


        </nav>
        {/* sidebar-menu */}
      </div>
      {/* sidebar */}
    </aside>


  )
}

export default Sidebar