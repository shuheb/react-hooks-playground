import { useState, useRef, useCallback } from "react";

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function useDynamicCallback(callback) {
    const ref = useRef()
    ref.current = callback;
    return useCallback((...params) => ref.current.apply(this, params), [])
}

const WithRefHookComponent = () => {
    const [rowData, setRowData] = useState([]);

    const [editableColumnId, setEditableColumn] = useState('athlete');

    const onGridReady = params => {
        setRowData([{ athlete: "Michael Phelps", age: 23, country: "United States" }, { athlete: "Natalie Coughlin", age: 25, country: "United States" }, { athlete: "Aleksey Nemov", age: 24, country: "Russia" }])
    };

    const defaultColDef = {
        minWidth: 100,
        flex: 1,
        editable: useDynamicCallback((params) => {
            const columnId = params.column.getColId();
            return columnId === editableColumnId;
        }),
    }


    const columnDefs = [{ field: 'athlete' }, { field: 'age' }, { field: 'country' }]

    return (
        <div className="ag-theme-alpine" style={{ height: 300, width: 500, margin: 20 }}>
            <h1>useRef and useCallback (Custom Hook)</h1>
            <h2>Current editable column: {editableColumnId}</h2>
            click on button to allow column to be editable: {columnDefs.map((col, index) => (<button key={index} style={{ margin: '5px' }} onClick={() => setEditableColumn(col.field)}>{col.field}</button>))}
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}>
            </AgGridReact>
        </div>
    );
};
export default WithRefHookComponent;
