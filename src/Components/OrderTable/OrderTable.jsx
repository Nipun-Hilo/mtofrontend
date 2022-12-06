import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row({ order }) {
    const [open, setOpen] = React.useState(false);
    const [orderItem, setOrderItem] = React.useState({});
    console.log(order);

    React.useEffect((e) => {
        setOrderItem({
            OrderID: order.id ? order.id : "-",
            CustomerID: order.customer.id ? order.customer.id : "-",
            Date: order.created_at.split("T")[0],
            CustomerName: order.customer.first_name.split(" ")[0] + " " + order.customer.last_name.split(" ")[0],
            Phone: order.customer.phone ? order.customer.phone : order.shipping_address.phone ? order.shipping_address.phone : "-",
            Channel: "_",
            Amount: order?.current_subtotal_price,
            Payment: order.financial_status ? order.financial_status : "-",
            Fullfilled: order.fulfillment_status ? order.fulfillment_status : "-",
            DeliveryMethod: order?.shipping_lines[0]?.title,
        });
    }, []);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {orderItem.OrderID}
                </TableCell>
                <TableCell align="right">{orderItem.CustomerID}</TableCell>
                <TableCell align="right">{orderItem.Date}</TableCell>
                <TableCell align="right">{orderItem.CustomerName}</TableCell>
                <TableCell align="right">{orderItem.Phone}</TableCell>
                <TableCell align="right">{orderItem.Channel}</TableCell>
                <TableCell align="right">{orderItem.Amount}</TableCell>
                <TableCell align="right">{orderItem.Payment}</TableCell>
                <TableCell align="right">{orderItem.Fullfilled}</TableCell>
                <TableCell align="right">{orderItem.DeliveryMethod}</TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
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




export default function OrderTable({ orders }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ color: "#C39971" }}>
                        <TableCell />
                        <TableCell align="right">Order ID</TableCell>
                        <TableCell align="right">Customer ID</TableCell>
                        <TableCell align="right">Date of Creation</TableCell>
                        <TableCell align="right">Customer Name</TableCell>
                        <TableCell align="right">Phone Number</TableCell>
                        <TableCell align="right">Channel</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Payment</TableCell>
                        <TableCell align="right">Fulfilled Status</TableCell>
                        <TableCell align="right">Delivary Method</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((orderItem) => (
                        <Row order={orderItem} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}