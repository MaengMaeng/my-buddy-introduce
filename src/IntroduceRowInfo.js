import React, { useState, useEffect } from "react";

const IntroduceRowInfo = ({data}) => {
    const [RowData, setRowData] = useState(data);

    return (
        <>
        <tr>
            <td>{RowData.number}</td>
            <td>{RowData.title}</td>
            <td>{RowData.contents}</td>
        </tr>
        </>
    )
};

export default IntroduceRowInfo;