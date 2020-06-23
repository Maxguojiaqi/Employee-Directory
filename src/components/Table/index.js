import React from "react";


function Table(){
    return (
        <table
        id="table"
        data-sort-name="name"
        data-sort-order="desc"
        data-search-align="left"
        data-url="sampleData.json"
        data-filter-control="true">
        <thead>
            <tr>
            <th data-field="id" data-sortable="true">ID</th>
            <th data-field="name" data-filter-control="select">Employee Name <u>(use dropdown below to filter)</u></th>
            <th data-field="position" data-filter-control="select">Employee Position <u>(use dropdown below to filter)</u></th>
            </tr>
        </thead>
        </table>
    )
}

export default Table;