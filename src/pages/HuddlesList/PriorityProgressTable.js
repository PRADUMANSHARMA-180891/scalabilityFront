import React from 'react'

function PriorityProgressTable() {
    return (
        <>
            <div className='table-responsive'>
                <table className='table table-bordered priority-insight-table table-sm fixedFirstColumn'>
                    <thead>
                        <tr>
                            <th><div className='text-start fw-bold'>Weeks</div></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className='text-muted f-s-15 text-start fw-bold text-truncate progress-name'>All-in-One Solution for Teams of Any Size</div></td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-primary height-30'></td>
                            <td className='bg-danger height-30'>

                            </td>
                            <td className='gth-bg-danger height-30'></td>
                            <td className='bg-warning height-30'></td>
                            <td className='bg-success height-30'></td>
                            <td className='bg-light height-30'>

                            </td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-light height-30'>

                            </td>
                            <td className='bg-light height-30'></td>
                            <td className='bg-light height-30'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PriorityProgressTable