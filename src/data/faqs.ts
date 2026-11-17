import { SUPPORT_EMAIL } from '../lib/contact';
import type { FaqEntry } from '../lib/seo';

export const FAQS: readonly FaqEntry[] = [
	{
		question: 'What exactly is OBII?',
		answer: `OBII is a paid investment research membership built around real named expert commentary. It helps self-directed investors find views on the shares they follow, explore the available reasoning and check the original dated sources.`,
	},
	{
		question: 'What makes OBII different from watching ausbiz for free?',
		answer: `ausbiz is where you watch or hear the original expert interviews for free. OBII is where you research the record: search relevant perspectives, use watchlists and follow experts, with source links back to the original material.`,
	},
	{
		question: 'What do you mean by investment intelligence?',
		answer: `Technology helps organise and search expert commentary around the shares and people you follow. Real market professionals supply the views; OBII helps you research them. You remain responsible for your own decisions.`,
	},
	{
		question: 'Why would I come back every few days?',
		answer: `New market commentary continues to appear. Return to the companies and experts you follow to research fresh perspectives and check the original sources where available.`,
	},
	{
		question: 'Can I try the product before subscribing?',
		answer: `Yes. The public offer is a seven-day trial with no credit card required to start. After exploring OBII, you can decide whether to choose a paid membership.`,
	},
	{
		question: 'How much is Standard or Pro?',
		answer: `Standard is A$49 per month and Pro is A$149 per month. GST is added at checkout. See Pricing for the full feature comparison.`,
	},
	{
		question: 'What happens when the seven days end?',
		answer: `The published no-card trial lets you explore before choosing a paid plan. If you want to keep access, choose Standard or Pro and review the billing details before confirming your subscription.`,
	},
	{
		question: 'Can I cancel my subscription?',
		answer: `The published service FAQ says members can cancel through their account at any time. Review the current subscription terms at checkout for the details that apply to your plan.`,
	},
	{
		question: 'Is OBII personalised financial advice?',
		answer: `No. It is a tool for researching general market information and original expert commentary. It does not make individual investment decisions for you or guarantee investment outcomes.`,
	},
	{
		question: 'Can I verify what an expert really said?',
		answer: `That is central to the proposition. Available views should be attributable to real named experts and original dated interviews, so you can check the underlying source for yourself.`,
	},
	{
		question: 'How can I get help?',
		answer: `If you need a hand or have any questions about OBII, our team is here to help. Simply fill out our contact form or email us at ${SUPPORT_EMAIL}, and we’ll be in touch.`,
	},
];
