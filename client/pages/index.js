import React from "react";
import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => {

    if (!currentUser) return <h1>You are NOT signed in</h1>

    return (
        <div>
            <h1>Tickets</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{
                    tickets.map((ticket) =>
                        <tr key={ticket.id} style={{ textDecorationLine: (ticket.orderId) ? 'line-through' : 'none' }}>
                            <td>{ticket.title}</td>
                            <td>{ticket.price}</td>
                            <td>
                                <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                                    <a>View</a>
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

LandingPage.getInitialProps = async ({ currentUser, client }) => {
    const { data } = await client.get('/api/tickets');
    return { currentUser, tickets: data };
};

export default LandingPage;
