import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-28 border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div className=""><h3
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">Charts &amp; Helpers</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/area-charts"><span>Area Charts</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/line-charts"><span>Line Charts</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/bar-charts"><span>Bar Charts</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/donut-charts"><span>Donut Charts</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/chart-tooltips"><span>Chart Tooltips</span></Link></li>
            </ul>
          </div>
          <div className=""><h3
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">Advanced
            Visualizations</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/bar-lists"><span>Bar Lists</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/status-monitoring"><span>Status Monitoring</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/spark-charts"><span>Spark Charts</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/kpi-cards"><span>KPI Cards</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/chart-compositions"><span>Chart Compositions</span></Link></li>
            </ul>
          </div>
          <div className=""><h3
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">Inputs &amp; Forms</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/form-layouts"><span>Standard Forms</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/file-upload"><span>File Uploads</span></Link></li>
            </ul>
          </div>
          <div className=""><h3
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">Tables</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/tables"><span>Standard Tables</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/table-actions"><span>Table Actions</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/table-pagination"><span>Table Pagination</span></Link></li>
            </ul>
          </div>
          <div className=""><h3
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">Layout &amp; Forms</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/page-shells"><span>Page Shells</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/filterbar"><span>Filterbar</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/empty-states"><span>Empty States</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/dialogs"><span>Dialogs</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/grid-lists"><span>Grid Lists</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/banners"><span>Banner</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/badges"><span>Badges</span></Link></li>
            </ul>
          </div>
          <div className=""><h3
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">Marketing</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/pricing-sections"><span>Pricing Sections</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/logins"><span>Logins</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/account-and-user-management"><span>User Management</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/onboarding-feed"><span>Onboarding &amp; Feed</span></Link></li>
              <li><Link
                className="group text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50"
                href="/blocks/billing-usage"><span>Billing &amp; Usage</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;