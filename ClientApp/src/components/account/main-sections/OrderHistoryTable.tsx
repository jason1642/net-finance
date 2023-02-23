import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCellMUI  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import type { UserAccountTypes, OrderHistoryItemTypes } from '../../../types/user-account';

const TableCell = styled(TableCellMUI)`
  color: white !important;
`;
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
  ) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }

  const Row: React.FunctionComponent<{order: OrderHistoryItemTypes}> = ({order: {symbol, action, created_at, price, status, quantity }}) =>{
   
    const [open, setOpen] = React.useState<boolean>(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset', color: 'white' } }}>
          <TableCell sx={{'& > *': {color: 'white'}}} >
            <IconButton
              aria-label="expand row"
              size="small"
              sx={{'& > *': {color: 'white'}}}
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell  component="th" scope="row">
            {symbol}
          </TableCell>
          <TableCell align="right">{action}</TableCell>
          <TableCell align="right">{created_at.toString()}</TableCell>
          <TableCell align="right">{status}</TableCell>
          <TableCell align="right">{quantity}</TableCell>
          <TableCell align="right">{price}</TableCell>

        </TableRow>
        {/* <TableRow sx={{'& > *': {color: 'white'}}}>
          <TableCell sx={{'& > *': {color: 'white'}}} style={{ paddingBottom: 0,  paddingTop: 0, color: 'white'}} colSpan={6}>
            <Collapse  in={open} timeout="auto" unmountOnExit>
              <Box >
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table  size="small" aria-label="purchases">
                  <TableHead  >
                    <TableRow >
                      <TableCell >Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow  key={historyRow.date}>
                        <TableCell sx={{color: '#d9d9d9'}} component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell sx={{color: '#d9d9d9'}}>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow> */}
      </React.Fragment>
    );
  }
  



interface IOrderHistoryTableProps {
  userData: UserAccountTypes;
}

const OrderHistoryTable: React.FunctionComponent<IOrderHistoryTableProps> = ({userData}) => {
  return(
  <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{'& > *': {color: 'white'}}}>
            <TableCell />
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {userData.order_history.map(order => (
            <Row key={order.created_at.toString()} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default OrderHistoryTable;
