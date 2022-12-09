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
import styles from "./OrderPendingTable.module.css";
import GreenCheck from "../../assets/Orders/GreenCheck.svg";
import RedCheck from "../../assets/Orders/RedCheck.svg";
import Pencil from "../../assets/Orders/Pencil.svg";


function Row({ order }) {
    const [open, setOpen] = React.useState(false);
    const [orderItem, setOrderItem] = React.useState({});

    React.useEffect((e) => {
        setOrderItem({
            OrderID: order.id ? order.id : "-",
            CustomerID: order.customer.id ? order.customer.id : "-",
            Date: order.created_at.split("T")[0],
            CustomerName: order.customer.first_name.split(" ")[0] + " " + order.customer.last_name.split(" ")[0],
            Phone: order?.customer?.phone ? order?.customer?.phone : order?.shipping_address?.phone ? order?.shipping_address?.phone : "-",
            Channel: "_",
            Amount: order?.current_subtotal_price,
            Payment: order.financial_status ? order.financial_status : "-",
            Fullfilled: order.fulfillment_status ? order.fulfillment_status : "-",
            DeliveryMethod: order?.shipping_lines[0]?.title,
        });
    }, []);

    const onCheckButtonClick = (e) => {

    }

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
                <TableCell align="right">
                    {orderItem.OrderID}
                </TableCell>
                <TableCell align="right">{orderItem.CustomerID}</TableCell>
                <TableCell align="right">{orderItem.CustomerName}</TableCell>
                <TableCell align="right">{orderItem.Phone}</TableCell>
                <TableCell align="right">{orderItem.Channel}</TableCell>
                <TableCell align="right"><button className={styles.btn}><img src={GreenCheck} /></button></TableCell>
                <TableCell align="right"><button className={styles.btn}><img src={RedCheck} /></button></TableCell>
                <TableCell align="right"><button className={styles.btn}><img src={Pencil} /></button></TableCell>

            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow style={{
                                        backgroundColor: "#c39971",
                                        margin: "15px"
                                    }}>
                                        <TableCell align="right">Product Name</TableCell>
                                        <TableCell align="right">Product ID </TableCell>
                                        <TableCell align="right">Size</TableCell>
                                        <TableCell align="right">Number</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                        <TableCell align="right">Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.line_items.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell align="right">
                                                {item.name}
                                            </TableCell>
                                            <TableCell align="right">{item.sku}</TableCell>
                                            <TableCell align="right">{item.variant_title}</TableCell>
                                            <TableCell align="right">
                                                {item.fulfillable_quantity}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.fulfillment_status}
                                            </TableCell>
                                            <TableCell align="right">
                                                {item.fulfillment_service}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

        </React.Fragment>
    );
}




export default function OrderPendingTable({ orders }) {

    const PendingOrders = orders;

    return (
        <div className={styles.mainWrapper}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead style={{
                        backgroundColor: "#c39971"
                    }}>
                        <TableRow sx={{ color: "#C39971" }}>
                            <TableCell />
                            <TableCell align="right">Order ID</TableCell>
                            <TableCell align="right">Customer ID</TableCell>
                            <TableCell align="right">Customer Name</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Channel</TableCell>
                            <TableCell />
                            <TableCell />
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {PendingOrders.map((orderItem) => (
                            <Row order={orderItem} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}