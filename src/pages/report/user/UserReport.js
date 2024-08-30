import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyReport } from '../../company/CompanySlice';

const UserReport = () => {
  const companies = useSelector((state) => state.company.report);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyReport());
  }, [dispatch]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Company Report', 20, 10);
  
    if (companies.length > 0) {
      let yOffset = 20; // Start position for the first company
  
      companies.forEach((company) => {
        doc.text(`Company: ${company.company_name}`, 20, yOffset);
        yOffset += 10; // Move down for the table
  
        const tableData = company.users.map((user) => [
          user.name,
          user.email,
          user.phone,
          user.birthday,
          user.hire_date,
          user.title,
        ]);
  
        doc.autoTable({
          startY: yOffset,
          head: [['User Name', 'Email', 'Phone Number', 'Birthday', 'Hire Date', 'Title']],
          body: tableData,
          didDrawPage: () => {
            yOffset = doc.autoTable.previous.finalY + 10; // Update yOffset after table
          },
        });
      });
    } else {
      doc.text('No company data available.', 20, 50);
    }
  
    doc.save('company_report.pdf');
  };
  

  const generateCSV = () => {
    if (companies.length > 0) {
      const csvData = companies.flatMap((company) =>
        company.users.map((user) => ({
          Company: company.company_name,
          'User Name': user.name,
          Email: user.email,
          'Phone Number': user.phone,
          Birthday: user.birthday,
          'Hire Date': user.hire_date,
          Title: user.title,
        }))
      );
      const csv = Papa.unparse(csvData);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'company_report.csv');
    } else {
      console.error('No company data available.');
    }
  };

  const generateExcel = () => {
    if (companies.length > 0) {
      const excelData = companies.flatMap((company) =>
        company.users.map((user) => ({
          Company: company.company_name,
          'User Name': user.name,
          Email: user.email,
          'Phone Number': user.phone,
          Birthday: user.birthday,
          'Hire Date': user.hire_date,
          Title: user.title,
        }))
      );
      const worksheet = XLSX.utils.json_to_sheet(excelData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, 'company_report.xlsx');
    } else {
      console.error('No company data available.');
    }
  };

  return (
    <div>
      <h1>Company Report</h1>
      <div>
        <button className="mb-2 ml-2" onClick={generatePDF}>
          Generate PDF
        </button>
        <button className="mb-2 ml-2" onClick={generateCSV}>
          Generate CSV
        </button>
        <button className="mb-2 ml-2" onClick={generateExcel}>
          Generate Excel
        </button>
      </div>
      {companies.map((company) => (
        <div key={company.id} className="mb-4">
          <h2>{company.company_name}</h2>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Birthday</th>
                <th>Hire Date</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {company.users.length > 0 ? (
                company.users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.birthday}</td>
                    <td>{user.hire_date}</td>
                    <td>{user.title}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No users available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default UserReport;
