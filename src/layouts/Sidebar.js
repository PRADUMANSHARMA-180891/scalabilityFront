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
          <div className="accordion menu-accordian" id="menuAccordian">
            <div className="sidebar-item">
              <Link to="/dashboard" className={`sidebar-nav-link ${location.pathname === "/dashboard" ? 'active' : ''}  `}>
                <i className="sidebar-nav-icon fi fi-sr-dashboard" />
                <p>Dashboard</p>
              </Link>
            </div>
            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/employees-kpi" || location.pathname === "/bottle-neck-report" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu1" aria-expanded={false} aria-controls="menu1">
                  <i className="sidebar-nav-icon fi fi-sr-dashboard-panel" />
                  <p>Management Dashboard</p>
                </button>
              </div>
              <div id="menu1" className={`accordion-collapse collapse ${location.pathname === "/employees-kpi" || location.pathname === "/bottle-neck-report" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/employees-kpi" className={`sidebar-nav-link ${location.pathname === "/employees-kpi" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-curve-arrow" />
                        <p>Employee's KPI</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/bottle-neck-report" className={`sidebar-nav-link ${location.pathname === "/bottle-neck-report" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon fi fi-sr-chart-mixed-up-circle-currency" />
                        <p>Bottle-Neck Report</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sidebar-item">
              <Link to="/task" className={`sidebar-nav-link ${location.pathname === "/task" || location.pathname === "/checksheet" || location.pathname === "/dashboard-flow" || location.pathname === "/dashboard-calendar" ? 'active' : ''} `}>
                <i className="sidebar-nav-icon fi fi-sr-to-do" />
                <p>Tasks</p>
              </Link>
            </div>
            {/*<div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/my-workflow-task" || location.pathname.split('/')[1] === 'my-task-done' || location.pathname === "/my-workflow-task-details" || location.pathname === "/my-checklist-task" || location.pathname === "/my-task-tracker" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu2" aria-expanded="false" aria-controls="menu2">
                  <i className="sidebar-nav-icon bi bi-clipboard-data" />
                  <p>My Tasks </p>
                </button>
              </div>
               <div id="menu2" className={`accordion-collapse collapse ${location.pathname === "/my-workflow-task" || location.pathname.split('/')[1] === 'my-task-done' || location.pathname === "/my-workflow-task-details" || location.pathname === "/my-checklist-task" || location.pathname === "/my-task-tracker" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/my-workflow-task" className={`sidebar-nav-link ${location.pathname === "/my-workflow-task" || location.pathname === "/my-workflow-task-details" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-vector-pen" />
                        <p>Work Flow</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/my-checklist-task" className={`sidebar-nav-link ${location.pathname === "/my-checklist-task" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-clipboard2-check" />
                        <p>Checksheet</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/my-task-tracker" className={`sidebar-nav-link ${location.pathname === "/my-task-tracker" || location.pathname.split('/')[1] === 'my-task-done' ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-card-checklist" />
                        <p>Task Tracker</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> 
            </div>*/}
            {/* <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/workflow" || location.pathname === "/task-tracker" || location.pathname === "/add-task-tracker" || location.pathname === "/edit-task-tracker" || location.pathname === "/new-workflow-template" || location.pathname === "/create-new-workflow-task" || location.pathname === "/edit-workflow-task" || location.pathname === "/checksheet" || location.pathname === "/add-new-checksheet" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu3" aria-expanded="false" aria-controls="menu3">
                  <i className="sidebar-nav-icon bi bi-list-task" />
                  <p>Task Manager</p>
                </button>
              </div>
              <div id="menu3" className={`accordion-collapse collapse ${location.pathname === "/workflow" || location.pathname === "/task-tracker" || location.pathname === "/add-task-tracker" || location.pathname === "/edit-task-tracker" || location.pathname === "/new-workflow-template" || location.pathname === "/create-new-workflow-task" || location.pathname === "/edit-workflow-task" || location.pathname === "/checksheet" || location.pathname === "/add-new-checksheet" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    <li className="sidebar-item">
                      <Link to="/workflow" className={`sidebar-nav-link ${location.pathname === "/workflow" || location.pathname === "/new-workflow-template" || location.pathname === "/create-new-workflow-task" || location.pathname === "/edit-workflow-task" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-vector-pen" />
                        <p>Work Flow</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/checksheet" className={`sidebar-nav-link ${location.pathname === "/checksheet" || location.pathname === "/add-new-checksheet" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-clipboard2-check" />
                        <p>Checksheet</p>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/task-tracker" className={`sidebar-nav-link ${location.pathname === "/task-tracker" || location.pathname === "/add-task-tracker" || location.pathname === "/edit-task-tracker" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-card-checklist" />
                        <p>Task Tracker</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            <div className="accordion-item">
              <div className="accordion-header sidebar-item">
                <button className={`accordion-button ${location.pathname === "/system-task" || location.pathname === "/system-checksheet" ? '' : 'collapsed'} sidebar-nav-link`} type="button" data-bs-toggle="collapse" data-bs-target="#menu4" aria-expanded="false" aria-controls="menu4">
                  <i className="sidebar-nav-icon fi fi-sr-admin-alt" />
                  <p>System Controller</p>
                </button>
              </div>
              <div id="menu4" className={`accordion-collapse collapse ${location.pathname === "/system-task" || location.pathname === "/system-checksheet" ? 'show' : ''} `} data-bs-parent="#menuAccordian">
                <div className="accordion-body p-0">
                  <ul className="sidebar-submenu">
                    {/* <li className="sidebar-item">
                      <Link to="/workflow" className={`sidebar-nav-link ${location.pathname === "/workflow" || location.pathname === "/new-workflow-template" || location.pathname === "/create-new-workflow-task" || location.pathname === "/edit-workflow-task" ? 'active' : ''}`}>
                        <i className="sidebar-nav-icon bi bi-vector-pen" />
                        <p>Work Flow</p>
                      </Link>
                    </li> */}
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
            </div>
          </div>


        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>


  )
}

export default Sidebar