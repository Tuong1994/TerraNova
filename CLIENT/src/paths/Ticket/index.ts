import { domain } from "../../configs/setting";

export const ticketPaths = {
    getTicketList: `${domain}/api/ticketManagement/getTicketList`,
    bookTicket: `${domain}/api/ticketManagement/bookTicket`,
    updateTicket: `${domain}/api/ticketManagement/updateTicket`,
    removeTicket: `${domain}/api/ticketManagement/removeTicket`,
}