import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-report-for-ticket.ts';
import '@/ai/flows/categorize-issue-from-image.ts';