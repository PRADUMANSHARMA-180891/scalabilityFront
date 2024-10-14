import React from 'react'
import { useSelector } from 'react-redux';
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
                      <Link to="/dashboard" className={`sidebar-nav-link ${location.pathname === "/company-dashboard" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-globe" />
                        <p>Company Dashboard</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/dashboard" className={`sidebar-nav-link ${location.pathname === "/annual-initiatives" ? 'active' : ''}`}>
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
                <button className={`accordion-button ${location.pathname === "/proccess-accountability" || location.pathname === "/SevenStrata" || location.pathname === "/CashAccelerationStrategies" || location.pathname === "/CashPowerOfOne" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu1" aria-expanded={false} aria-controls="menu1">
                  <i className="sidebar-nav-icon fi fi-br-bullseye-arrow" />
                  <p>Strategy</p>
                </button>
              </div>
              
              <div id="menu1" className={`accordion-collapse collapse ${location.pathname === "/proccess-accountability" || location.pathname === "/SevenStrata" || location.pathname === "/CashAccelerationStrategies" || location.pathname === "/CashPowerOfOne" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                  <li className="sidebar-item">
                      <Link to="/one-page-strategic-plan" className={`sidebar-nav-link ${location.pathname === "/one-page-strategic-plan" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>one page strategic plan</p>
                      </Link>
                    </li>
                  <li className="sidebar-item">
                      <Link to="/alignment-checklist" className={`sidebar-nav-link ${location.pathname === "/alignment-checklist" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Alignment Checklist</p>
                      </Link>
                    </li>
                  <li className="sidebar-item">
                      <Link to="/four-d-vision" className={`sidebar-nav-link ${location.pathname === "/four-d-vision" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>4 D Vision</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/function-accountability" className={`sidebar-nav-link ${location.pathname === "/function-accountability" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Functional Accountability</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/proccess-accountability" className={`sidebar-nav-link ${location.pathname === "/proccess-accountability" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Process Accountability</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/SevenStrata" className={`sidebar-nav-link ${location.pathname === "/SevenStrata" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>7 Strata</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/CashAccelerationStrategies" className={`sidebar-nav-link ${location.pathname === "/CashAccelerationStrategies" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Cash Acceleration Strategies</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/CashPowerOfOne" className={`sidebar-nav-link ${location.pathname === "/CashPowerOfOne" ? 'active' : ''}`}>
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
                <button className={`accordion-button ${location.pathname === "/nps" || location.pathname === "/surveys" || location.pathname === "/announcements" || location.pathname === "/suggestions" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu2" aria-expanded="false" aria-controls="menu2">
                  <i className="sidebar-nav-icon fi fi-br-department" />
                  <p>Culture</p>
                </button>
              </div>
              <div id="menu2" className={`accordion-collapse collapse ${location.pathname === "/nps" || location.pathname === "/surveys" || location.pathname === "/announcements" || location.pathname === "/suggestions" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/enps" className={`sidebar-nav-link ${location.pathname === "/enps" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>eNPS</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/surveys" className={`sidebar-nav-link ${location.pathname === "/surveys" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Surveys</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/announcements" className={`sidebar-nav-link ${location.pathname === "/announcements" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Announcements</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/suggestions" className={`sidebar-nav-link ${location.pathname === "/suggestions" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Suggestions</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sidebar-item">
              <Link to="/report" className={`sidebar-nav-link ${location.pathname === "/report" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-sr-newspaper" />
                <p>Reports</p>
              </Link>
            </div>

            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/manage-user" || location.pathname === "/manage-huddle" || location.pathname === "/company-settings" || location.pathname === "/kpi-listing" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu3" aria-expanded="false" aria-controls="menu3">
                  <i className="sidebar-nav-icon fi fi-sr-review" />
                  <p>Adminstrator</p>
                </button>
              </div>
              <div id="menu3" className={`accordion-collapse collapse ${location.pathname === "/manage-user" || location.pathname === "/manage-huddle" || location.pathname === "/company-settings" || location.pathname === "/kpi-listing" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/manage-user" className={`sidebar-nav-link ${location.pathname === "/manage-user" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Manage Users</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/manage-huddle" className={`sidebar-nav-link ${location.pathname === "/manage-huddle" ? 'active' : ''}`}>
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
                      <Link to="#" className={`sidebar-nav-link ${location.pathname === "/" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-br-bullet" />
                        <p>Manage Subscription</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sidebar-item">
              <Link to="/help" className={`sidebar-nav-link ${location.pathname === "/help" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-sr-interrogation" />
                <p>Help</p>
              </Link>
            </div>
            {/* <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/system-task" || location.pathname === "/system-checksheet" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu4" aria-expanded="false" aria-controls="menu4">
                  <i className="sidebar-nav-icon fi fi-sr-admin-alt" />
                  <p>System Controller</p>
                </button>
              </div>
              <div id="menu4" className={`accordion-collapse collapse ${location.pathname === "/system-task" || location.pathname === "/system-checksheet" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">                   
                    <li className="sidebar-item">
                      <Link to="/system-checksheet" className={`sidebar-nav-link ${location.pathname === "/system-checksheet" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-to-do-alt" />
                        <p>Checksheet</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/system-task" className={`sidebar-nav-link ${location.pathname === "/system-task" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-to-do" />
                        <p>Task Tracker</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/task-properties" || location.pathname === "/office-timing" || location.pathname === "/department" || location.pathname === "/notification-setting" || location.pathname === "/whatsapp-setting" || location.pathname === "/holiday" || location.pathname === "/company-info" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu5" aria-expanded="false" aria-controls="menu5">
                  <i className="sidebar-nav-icon fi fi-sr-customize" />
                  <p>Settings</p>
                </button>
              </div>
              <div id="menu5" className={`accordion-collapse collapse ${location.pathname === "/task-properties" || location.pathname === "/office-timing" || location.pathname === "/department" || location.pathname === "/notification-setting" || location.pathname === "/whatsapp-setting" || location.pathname === "/holiday" || location.pathname === "/company-info" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/office-timing" className={`sidebar-nav-link ${location.pathname === "/office-timing" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-clock-five" />
                        <p>Office Timing</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/department" className={`sidebar-nav-link ${location.pathname === "/department" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-department-structure" />
                        <p>Departments</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/notification-setting" className={`sidebar-nav-link ${location.pathname === "/notification-setting" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-bell-ring" />
                        <p>Notification Settings</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/whatsapp-setting" className={`sidebar-nav-link ${location.pathname === "/whatsapp-setting" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-api" />
                        <p>Whatsapp Settings</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/task-properties" className={`sidebar-nav-link ${location.pathname === "/task-properties" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-operating-system-upgrade" />
                        <p>Task Properties</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/holiday" className={`sidebar-nav-link ${location.pathname === "/holiday" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-umbrella-beach" />
                        <p>Holidays</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/company-info" className={`sidebar-nav-link ${location.pathname === "/company-info" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-ss-info-guide" />
                        <p>Company Info</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sidebar-item">
              <Link to="/users" className={`sidebar-nav-link ${location.pathname === "/users" ? 'active' : ''} `}>
                <i className="sidebar-nav-icon fi fi-sr-users" />
                <p>Users</p>
              </Link>
            </div> */}
          </div>


        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>


  )
}

export default Sidebar