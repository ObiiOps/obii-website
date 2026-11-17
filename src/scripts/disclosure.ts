const ACCORDION_SELECTOR = '.faq-list details';
const MENU_SELECTOR = 'details.menu';
const ACCORDION_DURATION_MS = 340;
const ACCORDION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
const MENU_CLOSING_CLASS = 'is-closing';
const MENU_CLOSE_FALLBACK_MS = 250;

function measureHeight(details: HTMLDetailsElement, open: boolean): number {
	const wasOpen = details.open;
	details.open = open;
	const height = details.offsetHeight;
	details.open = wasOpen;
	return height;
}

function setUpAccordion(details: HTMLDetailsElement): void {
	const summary = details.querySelector('summary');
	if (!summary) return;

	let animation: Animation | null = null;
	let isExpanded = details.open;

	summary.addEventListener('click', (event) => {
		event.preventDefault();

		const startHeight = details.offsetHeight;
		animation?.cancel();
		isExpanded = !isExpanded;
		const willOpen = isExpanded;
		const endHeight = measureHeight(details, willOpen);

		// Content must stay rendered while it collapses, so keep it open until the end.
		details.open = true;
		details.style.overflow = 'hidden';

		const current = details.animate(
			{ height: [`${startHeight}px`, `${endHeight}px`] },
			{ duration: ACCORDION_DURATION_MS, easing: ACCORDION_EASING },
		);
		animation = current;

		current.onfinish = () => {
			details.open = willOpen;
			details.style.overflow = '';
			animation = null;
		};
	});
}

function setUpMenu(menu: HTMLDetailsElement): void {
	const summary = menu.querySelector('summary');
	const panel = menu.querySelector<HTMLElement>('.menu-panel');
	if (!summary || !panel) return;

	const finishClosing = (): void => {
		if (!menu.classList.contains(MENU_CLOSING_CLASS)) return;
		menu.classList.remove(MENU_CLOSING_CLASS);
		menu.open = false;
	};

	panel.addEventListener('animationend', finishClosing);

	summary.addEventListener('click', (event) => {
		if (!menu.open || menu.classList.contains(MENU_CLOSING_CLASS)) return;
		event.preventDefault();
		menu.classList.add(MENU_CLOSING_CLASS);
		window.setTimeout(finishClosing, MENU_CLOSE_FALLBACK_MS);
	});
}

export function initDisclosures(): void {
	document.querySelectorAll<HTMLDetailsElement>(ACCORDION_SELECTOR).forEach(setUpAccordion);
	document.querySelectorAll<HTMLDetailsElement>(MENU_SELECTOR).forEach(setUpMenu);
}
