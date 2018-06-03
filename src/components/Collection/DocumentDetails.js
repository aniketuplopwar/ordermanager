import React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';


const DocumentDetails = ({classes, document, config})=>{
    return (
        <Table className={classes.table}>
            <TableBody>
                {Object.keys(config).map((key, idx )=> {
                    return (
                        <TableRow key={"document-detail-" + idx}>
                            <TableCell>{config[key].label} </TableCell>
                            <TableCell>{document.data[key].toString()}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default DocumentDetails;