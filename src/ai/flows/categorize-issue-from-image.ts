'use server';
/**
 * @fileOverview An AI agent that categorizes maintenance issues based on an uploaded image and description.
 *
 * - categorizeIssueFromImage - A function that handles the issue categorization process.
 * - CategorizeIssueFromImageInput - The input type for the categorizeIssueFromImage function.
 * - CategorizeIssueFromImageOutput - The return type for the categorizeIssueFromImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeIssueFromImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the maintenance issue, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('The description of the maintenance issue.'),
});
export type CategorizeIssueFromImageInput = z.infer<typeof CategorizeIssueFromImageInputSchema>;

const CategorizeIssueFromImageOutputSchema = z.object({
  category: z
    .string()
    .describe('The category of the maintenance issue, e.g., plumbing, electrical, structural.'),
  confidence: z.number().describe('The confidence level of the categorization (0-1).'),
});
export type CategorizeIssueFromImageOutput = z.infer<typeof CategorizeIssueFromImageOutputSchema>;

export async function categorizeIssueFromImage(
  input: CategorizeIssueFromImageInput
): Promise<CategorizeIssueFromImageOutput> {
  return categorizeIssueFromImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeIssueFromImagePrompt',
  input: {schema: CategorizeIssueFromImageInputSchema},
  output: {schema: CategorizeIssueFromImageOutputSchema},
  prompt: `You are an expert maintenance issue categorizer. You will be provided with a photo and a description of a maintenance issue. Your task is to categorize the issue into one of the following categories: plumbing, electrical, structural, or other. You must also provide a confidence level (0-1) for your categorization.\n\nDescription: {{{description}}}\nPhoto: {{media url=photoDataUri}}\n\nCategory:`,
});

const categorizeIssueFromImageFlow = ai.defineFlow(
  {
    name: 'categorizeIssueFromImageFlow',
    inputSchema: CategorizeIssueFromImageInputSchema,
    outputSchema: CategorizeIssueFromImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
