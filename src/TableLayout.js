import React, { useState, useEffect } from "react";

const TableLayout = () => {
    const [rows, setRows] = useState([]);
    // const [inputs, setInputs] = useState({
    //     item: '',
    //     content: ''
    // })

        

    const changeText = id => e => { 
        const { value, name} = e.target;

        const tempRows = rows.map(row => { 
            if (row.id === id + 1) { 
                row[name] = value; 
            } return row; 
        }); 
        setRows(tempRows); 
    };

    const addRow = () => {
        let data = {
          id: rows.length + 1,
          item: '',
          content: ''
        };
        setRows([...rows, data]);
      };

    const allDeleteRow = () => { 
        setRows([]); 
    };

    const deleteRow = id => () => { 
        let tempRows = rows.filter(row => { 
            return row.id !== id + 1; 
        }); 
        setRows(tempRows); 
    };

    const display = () => { 
        console.log(rows); 
    };

    return (
        <>
          <h3>친구 소개 작성하기</h3>
          <div>
            {rows.length !== 0 && (
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>항목</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((d, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                      <input name="item"
                          type="text"
                          onChange={changeText(i)}
                          value={d.item}
                        />
                      </td>
                      <td>
                        <input name="content"
                          type="text"
                          onChange={changeText(i)}
                          value={d.content}
                        />
                      </td>
                      <td>
                        <button onClick={deleteRow(i)}>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <button onClick={addRow}>추가</button>
          <button onClick={allDeleteRow}>초기화</button>
          <button onClick={display}>state 확인</button>
        </>
      );
}

export default TableLayout;