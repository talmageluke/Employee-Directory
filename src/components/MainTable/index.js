import React, { Component } from 'react'
import "./MainTable.scss"
import DataTable from "react-data-table-component"
import TableStyles from "./TableStyles"
import orderBy from "lodash/orderBy"

export default class MainTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    name: "ID",
                    cell: row => <p>{row.id}</p>,
                    sortable: false,

                    selector: "id"
                },
                {
                    name: "Name",
                    cell: row => <p>{row.name}</p>,
                    sortable: true,
                    selector: "name",

                },
                {
                    name: "Age",
                    cell: row => <p>{row.age}</p>,
                    sortable: false,
                    selector: "age"
                },
                {
                    name: "Email",
                    cell: row => <p>{row.email}</p>,
                    sortable: true,
                    selector: "email"
                }
            ],
            employees: [
                {
                    id: 1,
                    name: "Talmage",
                    age: 24,
                    email: "talmagelucas@gmail.com"

                },
                {
                    id: 2,
                    name: "Jacob",
                    age: 29,
                    email: "jacob@gmail.com"

                },
                {
                    id: 3,
                    name: "Osama",
                    age: 24,
                    email: "ZOsama@gmail.com"

                }
            ]


        }
    }
    sortTable = (rows, field, direction) => {
        const handleField = row => {
            if (row[field]) {
                return row[field].toLowerCase()
            }
            return row[field]
        }
        return orderBy(rows, handleField, direction)


    }
    handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);
    render() {

        const { columns, name, employees } = this.state
        return (
            <div className="main" >
                <DataTable
                    className="data_table"
                    customStyles={TableStyles}
                    columns={columns}
                    fixedHeader={true}
                    data={employees}
                    onSort={this.handleSort}
                    //defaultSortField="name"
                    // sortable={true}
                    sortFunction={this.sortTable}
                />
            </div>
        )
    }
}
