export interface FeedbackEmailTicket {
    email: string;
    subject: string;
    description: string;
    status: number;
    priority: number;
    tags: string[];
}
export default class FreshDeskConnectManager {
    private feedbackEmailTicketPostingUrl;
    sendTicket(ticket: FeedbackEmailTicket): Promise<void>;
}
