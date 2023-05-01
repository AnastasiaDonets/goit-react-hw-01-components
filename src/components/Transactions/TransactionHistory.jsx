import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TableRow,
  TableTitle,
  TableItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </Thead>

      <tbody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <>
                <TableItem>{item.type}</TableItem>
                <TableItem>{item.amount}</TableItem>
                <TableItem>{item.currency}</TableItem>
              </>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
