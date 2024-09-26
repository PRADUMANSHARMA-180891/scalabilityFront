import React from 'react'

function PriorityGraph() {
    return (
        <>
            <ul class="nav nav-tabs exp-tabs" id="priority_details_graph" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#priorityGraph"
                        type="button"
                        role="tab"
                        aria-controls="priorityGraph"
                        aria-selected="true"
                    >
                        Graph
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#priorityHeatMap"
                        type="button"
                        role="tab"
                        aria-controls="priorityHeatMap"
                        aria-selected="false"
                    >
                        Heatmap
                    </button>
                </li>
            </ul>

            <div class="tab-content">
                <div
                    class="tab-pane active"
                    id="priorityGraph"
                    role="tabpanel"
                >
                    <div>
                        <img className='img-fluid' src="data:image/png;base64,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" />
                    </div>                    
                </div>
                <div
                    class="tab-pane"
                    id="priorityHeatMap"
                    role="tabpanel"
                >
                    <div className="table-responsive">
                        <table className="table table-bordered priority-insight-table table-sm">
                            <thead>
                                <tr>
                                    <th>Week</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>12</td>
                                    <td>14</td>
                                    <td>15</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-secondary height-30" />
                                    <td className="bg-secondary height-30" />
                                    <td className="bg-secondary height-30" />
                                    <td className="bg-secondary height-30" />
                                    <td className="bg-secondary height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                    <td className="bg-light height-30" />
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PriorityGraph