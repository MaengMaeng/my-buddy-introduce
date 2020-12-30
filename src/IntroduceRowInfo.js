import React, { useState, useEffect } from "react";

const IntroduceRowInfo = ({ key, data}) => {
    const [RowData, setRowData] = useState(data);

    return (
        <>
        <tr key={key}>
            <td>{RowData.number}</td>
            <td>{RowData.title}</td>
            <td>{RowData.contents}</td>
        </tr>
        </>
    )
};

export default IntroduceRowInfo;