import React from "react";


function Table(){
    return (
        <table
        id="table"
        data-toggle="table"
        data-height="700"
        data-sort-name="name"
        data-sort-order="desc"
        data-url="sampleData.json">
        <thead>
            <tr>
            <th data-field="id" data-sortable="true">ID</th>
            <th data-field="name" data-sortable="true">Employee Name</th>
            <th data-field="position" data-sortable="true">Employee Title</th>
            </tr>
        </thead>
        </table>
    )
}

export default Table;