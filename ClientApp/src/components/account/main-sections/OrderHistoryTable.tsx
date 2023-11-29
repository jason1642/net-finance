import * as React from 'react';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCellMUI  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import type { UserAccountTypes, OrderHistoryItemTypes } from '../../../types/user-account';
import moment from 'moment'


const TableCell = styled(TableCellMUI)`
  color: white !important;
  border-bottom: 1px solid rgb(255 255 255 / 34%) !important;
`;
const Wrapper = styled.div`
  display:flex;
  width: 100%;
  flex-direction: column;
  
`;

const Title = styled.div`
  display:flex;
  font-size: 1.5em;
  padding: 1rem 0;
  align-self: center;
  margin-left: 1rem;
`;

  const Row: React.FunctionComponent<{order: OrderHistoryItemTypes}> = ({order: {symbol, action, created_at, price, status, quantity }}) =>{
   
    // const [open, setOpen] = React.useState<boolean>(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset', color: 'white' } }}>
          {/* <TableCell sx={{'& > *': {color: 'white'}}} >
            <IconButton
              aria-label="expand row"
              size="small"
              sx={{'& > *': {color: 'white'}}}
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell> */}
          <TableCell  component="th" scope="row">
            {symbol}
          </TableCell>
          <TableCell align="center">{action}</TableCell>
          <TableCell align="center">{moment(created_at).format('MM/DD/YYYY')}</TableCell>
          <TableCell align="center">{status}</TableCell>
          <TableCell align="center">{quantity}</TableCell>
          <TableCell align="center">${price.toFixed(2)}</TableCell>

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
    <Wrapper>

    <Title>Order History</Title>
  <TableContainer sx={{width: '95%', alignSelf: 'center'}}>

      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{'& > *': {color: 'white'}}}>
            {/* <TableCell /> */}
            <TableCell>Symbol</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {userData.order_history.map(order => (
            <Row key={order.created_at.toString()} order={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Wrapper>
  );
};

export default OrderHistoryTable;
