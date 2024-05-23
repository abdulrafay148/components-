import React from 'react';

interface TableProps {
  data: string[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
