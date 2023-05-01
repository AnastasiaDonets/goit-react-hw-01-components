import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 400px;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  margin-bottom: 20px;
  background-color: black;
`;

export const Thead = styled.thead`
  background-color: #88b8c2;
`;

export const TableRow = styled.tr`
  background-color: #dff4f4;
`;

export const TableTitle = styled.th`
  color: black;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
`;

export const TableItem = styled.td`
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: black;
`;
