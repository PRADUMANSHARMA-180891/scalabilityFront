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
              <div id="dashboardMenu" className={`accordion-collapse collapse ${location.pathname === "/dashboard" || location.pathname === "/company-dashboard" || location.pathname === "/annual-initiatives"? 'show' : ''} `} data-bs-parent="#menuAccordian">
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
            {/* <div className="accordion-item">
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
            </div> */}
            {/* <div className="sidebar-item">
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