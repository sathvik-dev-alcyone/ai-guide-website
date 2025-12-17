'use server';
/**
 * @fileOverview A flow that summarizes a maintenance report into a concise ticket summary.
 *
 * - summarizeReportForTicket - A function that summarizes the report.
 * - SummarizeReportForTicketInput - The input type for the summarizeReportForTicket function.
 * - SummarizeReportForTicketOutput - The return type for the summarizeReportForTicket function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeReportForTicketInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the maintenance issue, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('A detailed description of the maintenance issue.'),
  location: z.string().describe('The location of the maintenance issue on campus.'),
});
export type SummarizeReportForTicketInput = z.infer<typeof SummarizeReportForTicketInputSchema>;

const SummarizeReportForTicketOutputSchema = z.object({
  ticketSummary: z.string().describe('A concise summary of the maintenance issue ticket.'),
});
export type SummarizeReportForTicketOutput = z.infer<typeof SummarizeReportForTicketOutputSchema>;

export async function summarizeReportForTicket(input: SummarizeReportForTicketInput): Promise<SummarizeReportForTicketOutput> {
  return summarizeReportForTicketFlow(input);
}

const summarizeReportForTicketPrompt = ai.definePrompt({
  name: 'summarizeReportForTicketPrompt',
  input: {schema: SummarizeReportForTicketInputSchema},
  output: {schema: SummarizeReportForTicketOutputSchema},
  prompt: `You are an AI assistant that summarizes maintenance reports into concise ticket summaries.

  Given the following information, create a ticket summary:

  Description: {{{description}}}
  Location: {{{location}}}
  Photo: {{media url=photoDataUri}}

  Ticket Summary:`,
});

const summarizeReportForTicketFlow = ai.defineFlow(
  {
    name: 'summarizeReportForTicketFlow',
    inputSchema: SummarizeReportForTicketInputSchema,
    outputSchema: SummarizeReportForTicketOutputSchema,
  },
  async input => {
    const {output} = await summarizeReportForTicketPrompt(input);
    return output!;
  }
);
