import React from 'react'
import { Link } from 'react-router-dom'

function CDCompanyEnps() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card mb-4'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Company eNPS</Link></h6>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <div className='card shadow-none border'>
                                        <div className='card-body'>
                                            <div>
                                                <span className='fs-1 line-height-1 fw-bold'>-100</span>
                                            </div>
                                            <hr />
                                            <div>
                                                <h6 className='fw-medium f-s-16 mb-1'>Latest eNPS</h6>
                                                <p className='text-muted f-s-14 mb-0 fw-medium'><span className='text-success'>0%</span> Promoters - <span className='text-danger'>100%</span> Detractors</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card shadow-none border'>
                                        <div className='card-body'>
                                            <div>
                                                <h6 className='fw-medium f-s-16 mb-1'>Today's Align eNPS Benchmark</h6>
                                                <p className='text-muted mb-0 fw-medium'><span className='text-success fs-3 line-height-1 fw-bold'>39</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='card shadow-none border'>
                                        <div className='card-body'>
                                            <div className='d-flex mb-2'>
                                                <div className='flex-grow-1 text-center'>
                                                    <h6 className='fw-medium mb-1'>1</h6>
                                                    <p className='mb-0'>Detractors</p>
                                                </div>
                                                <div className='flex-grow-1 text-center'>
                                                    <h6 className='fw-medium mb-1'>2</h6>
                                                    <p className='mb-0'>Passives</p>
                                                </div>
                                                <div className='flex-grow-1 text-center'>
                                                    <h6 className='fw-medium mb-1'>3</h6>
                                                    <p className='mb-0'>Promoters</p>
                                                </div>
                                            </div>
                                            <div className="progress enps-progress">
                                                <div className="progress-bar fw-bold text-white" role="progressbar" style={{ width: '25%', backgroundColor: 'rgb(44, 11, 14)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>0</div>
                                                <div className="progress-bar fw-bold text-white" role="progressbar" style={{ width: '25%', backgroundColor: 'rgb(96, 5, 5)' }} ria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>0</div>
                                                <div className="progress-bar fw-bold text-white" role="progressbar" style={{ width: '25%', backgroundColor: 'rgb(130, 0, 0)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>0</div>
                                                <div className="progress-bar fw-bold text-white" role="progressbar" style={{ width: '25%', backgroundColor: 'rgb(175, 18, 34)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>0</div>
                                                <div className="progress-bar fw-bold text-white" role="progressbar" style={{ width: '25%', backgroundColor: 'rgb(200, 20, 38)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>0</div>
                                                <div className="progress-bar fw-bold text-white" role="progressbar" style={{ width: '25%', backgroundColor: 'rgb(255, 56, 0)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card shadow-none border'>
                                        <div className='card-body'>
                                            <img className='img-fluid' src="data:image/png;base64,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wLPPPhuDg4Pxtre97RWD//79+2PZsmXzvJeaT4AAgYUnIPgvvJrqEQECBGZMYGRkJB566KG44YYbIgX6Cy+8MC644II46qijxq7xwAMPxN69e+O8886LHTt2xLe+9a34whe+ECtXrpyxdjgRAQIECExfQPCfvqEzECBAYMEK7Ny5M+6///5obm6OAwcOxN133x1PPPFEbNiwIU444YSi32nO/9KlS4vvb7nllvjiF78Yp5xyyoI10TECBAjMVwHBf75WTrsJECAwCwLjR/PT5V5++eXo6uqKJ598Mq6++uo4+uiji+CffiuQXmttbY03velNs9AylyBAgACBcgUE/3LF7E+AAIGMBJ5++um46667ipB/zDHHFD1PAf/222+PFStWRGNjY/zsZz+Le++9N6655hrTezK6N3SVAIH5JyD4z7+aaTEBAgRmTSCF/DR9J03lufTSS2PJkiXFtdMHeF133XXx+c9/Pqqrq4s3A+Pn/c9aA12IAAECBEoWEPxLprIjAQIE8hRIH9i1ZcuWOOuss6KhoaEI/3v27In29vZYv3591NTU5Amj1wQIEJhnAoL/PCuY5hIgQOBICOzatSuuvfbaOPHEE4uVfZ566qlI/4FcddVVxYd52QgQIEBg7gsI/nO/RlpIgACBigqkaTppLv/u3bvjrW9969hc/nTR9EFdnZ2dReD/wAc+EI8++mhs27YtzjzzzGL5TtN7KloaJydAgMCMCgj+M8rpZAQIEJhfAins33jjjbFq1ao49thj47vf/W5cccUVxbSeFPq/+c1vFn9+5jOfKVbwsREgQIDA/BUQ/Odv7bScAAEC0xZ4+OGHY2hoqPhQrkWLFsUzzzxTrMOfHuQ944wz4ic/+Umce+65xQo+NgIECBCY3wKC//yun9YTIEBgWgL33HNPMUc/TdtJW3poN43yp0/g/dznPhennnrqtM7vYAIECBCYOwKC/9yphZYQIEBg1gV+/etfF8t1pk/iXblyZTHi/6Mf/agY7X/kkUeK5TqXL18+6+1yQQIECBCYeQHBf+ZNnZEAAQJzUmBkZKT4hN0bbrgh9u/fX6zO87GPfSwee+yxuOmmm+K4444r2t3W1hZvfOMbi5996lOfKh7stREgQIDA/BcQ/Od/DfWAAAECJQns3Lkz7r///mhubo4DBw7E3XffHU888UQx2p8+lTdN83nNa14Ty5YtixdffDFuvvnmuPLKK4uHfm0ECBAgMP8FBP/5X0M9IECAQEkCDzzwQOzdu3dsPn9axrOrqyuefPLJuPrqq4sHeNOqPmnOf09PT7zjHe+ID33oQyWd204ECBAgMPcFBP+5XyMtJECAwIwIpLX677rrriLkpxH+tKXwf/vttxeh/5Of/GQMDg7GL37xizj99NPjLW95S7HSj40AAQIEFoaA4L8w6qgXBAgQmFIghfz0IO/SpUuL5TqXLFlSHPPcc8/FddddVzzIaz7/lIx2IECAwLwVqFjwT78mvvzyy8dgbr311qitrS2+7+7uji1btoy91tjYGE1NTSUhHqrBJR1sJwIECGQu8Pzzzxf//qYP6GpoaCjCf5rb397eHuvXr4+amprMhXSfAAECC1egIsF/eHg4rr/++mL0qLq6upgrunXr1uI/lvR9R0dHrF69Ourr68uWFfzLJnMAAQIEJgjs2rUrrr322mJ0P63s89RTT0X6t/Wqq64q5vfbCBAgQGBhClQk+E+mSm8EWlpaipUkTjvttGKpuDTSNPobgHJoBf9ytOxLgEBuAn/605/it7/9bbznPe8Zm8ozarB79+7iYd73ve998frXvz4effTR2LZtW5x55pnFA79HHXVUblz6S4AAgawEZiX49/b2xqZNm4qv173udcWbgPSpkGlbs2bN2G8CSpEX/EtRsg8BArkKpH9b0yBL+nf23HPPHXs4929/+1t89atfjTe/+c1x8cUX+1CuXG8Q/SZAIGuBigf/NHc0jfCvXbu2mNoz/k1Amkuapv0MDQ1Fa2trSb9iFvyzvl91ngCBKQT++Mc/xp133lmszvPhD384PvjBDxbhP30ab3qI94ILLjjoNwFQCRAgQCAPgRkJ/im8d3Z2FmLjH9QdDf3pY+AP9fDu5DcCk9n7+/tjYGAgj2roJQECBKYp8Ne//jV+/OMfR11dXXznO9+J97///fGGN7yhGFhJH85lI0CAAIG8BdL/D5O3RSPps92nsY3O609z+V/tId4U/NNDv5s3by4e/J1qM+I/lZDXCRDIWSANuNx2221x0UUXRXqIN63Zv3z58uI3ryeffHLONPpOgACB7AVmZMR/suLk6T3jX08r/KSHy0an9qTfFqTNcp7Z34sACBAoQyCNzfzqV7+Kb3/728VIflo+OX3gVlqrPwX/devWFdMo04pqacnOL33pS3HKKaeUcQW7EiBAgMBCE6hI8E+j+OnhsjTHdPw2upb/+HX8039Opc7vT+cy4r/QbkH9IUDgcAS2b98eDz30UFxyySXFcpz33ntvsURnmtaTPp03zef/wx/+ENdcc0309fXF97///eLvpvscjrZjCBAgsDAEKhL8K0kj+FdS17kJEJgPAum3qmkk/+Mf/3icdNJJxSj/1772tXjve99bLJP805/+NH74wx8Wn6WSlu20ESBAgACBVxtAn/Yc/0rxCv6VknVeAgTmi8BLL71UfEjiRz7ykTj11FOLZqdpk+9617uK4J+mAaWvxYsXz5cuaScBAgQIzIKAEf9ZQHYJAgQIzLTAE088UUzrWbVq1UHB/8CBA0XwT3P7bQQIECBAYFRA8HcvECBAYI4LpBCf5vPfcMMNsX///rjwwguL9fhHP2l33759xepo559/fqxevbpYQCEtg3zllVfG0qVL53jvNI8AAQIEZktA8J8tadchQIDAYQrs3Lkz7r///mLRhDSaf/fdd0ca8d+wYUOccMIJkeb833TTTcXUn4cffjj+8pe/xFVXXeVB3sP0dhgBAgQWqoDgv1Arq18ECCwYgQceeCD27t0b5513XtGn9DBvGtV/8skni3X601z+NOf/z3/+czHn/9Of/nSsWLFiwfRfRwgQIEBgZgQE/5lxdBYCBAhUTODpp58uluhMIf+YY44ZC/+33357EfDT1J+bb745jj766Lj44ouLD+yyESBAgACByQKCv3uCAAECc0wgje4/8sgjxQj+2WefXczbv+WWW4r5+pdeeunYQ7tprf7rrruuWLYzvSFIbwI80DvHiqk5BAgQmEMCgv8cKoamECBAYPfu3XHjjTdGTU1NHHfccXHnnXcWc/nT6j1btmyJs846KxoaGoqAn+b2p4d6169fX+xvI0CAAAECryYg+Ls/CBAgMIcE0sO5u3btKh7UTduDDz4YzzzzTFxxxRXFz9On85544onF9J70ib3pH/H0IG9VVdUc6oWmECBAgMBcFBD852JVtIkAgWwF7rnnnjj++OPjnHPOKQx6enri8ccfj6ampuL7tHTno48+Gtu2bYszzzyzeOB3dFnPbNF0nAABAgRKEhD8S2KyEwECBGZH4He/+12xWk99fX0xnWdy8J+dVrgKAQIECCxEAcF/IVZVnwgQWDACaerP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" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='task-table-wrap'>
                                <div className="table-responsive">
                                    <table className="table mb-0 border table-striped">
                                        <thead>
                                            <tr className="text-dark">
                                                <th>Sent Date</th>
                                                <th>Responded</th>
                                                <th>Recipients</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    8/1/2024 4:11 PM
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8/1/2024 4:11 PM
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8/1/2024 4:11 PM
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                                <td>
                                                    4
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='task-table-footer mt-3 d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination mb-0">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <select className='form-select mx-2 w-70px'>
                                            <option>5</option>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>50</option>
                                        </select>
                                        <span className='text-muted'>
                                            items per page
                                        </span>
                                    </div>
                                    <div className='text-muted'>
                                        1 - 6 of 6 items
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CDCompanyEnps