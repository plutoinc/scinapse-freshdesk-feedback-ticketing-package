import axios from "axios";

export interface FeedbackEmailTicket {
  email: string;
  subject: string;
  description: string;
  status: number;
  priority: number;
  tags: string[];
}

export default class FreshDeskConnectManager {
  private feedbackEmailTicketPostingUrl =
    "https://qg6wp4ze48.execute-api.us-east-1.amazonaws.com/prod/ticket/new";

  public async sendTicket(ticket: FeedbackEmailTicket) {
    await axios.post(this.feedbackEmailTicketPostingUrl, ticket);
  }
}
