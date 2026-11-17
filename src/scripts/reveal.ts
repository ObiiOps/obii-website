const BLOCK_SELECTOR = 'section:not(.hero) > .wrap > *';
const GRID_SELECTOR =
	'.cols3, .bencards, .howsteps, .compare-grid, .prices, .reassure-grid, .companygrid, .peoplecards, .expert-grid, .price-grid, .people';
const VIEWPORT_MARGIN = '0px 0px -8% 0px';
const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 5;
const REVEAL_DURATION_MS = 700;
const CLEANUP_BUFFER_MS = 100;

function collectTargets(): HTMLElement[] {
	const blocks = Array.from(document.querySelectorAll<HTMLElement>(BLOCK_SELECTOR));
	return blocks.flatMap((block) =>
		block.matches(GRID_SELECTOR) ? Array.from(block.children).filter(isHtmlElement) : [block],
	);
}

function isHtmlElement(node: Element): node is HTMLElement {
	return node instanceof HTMLElement;
}

function startsBelowFold(element: HTMLElement): boolean {
	return element.getBoundingClientRect().top > window.innerHeight;
}

function reveal(element: HTMLElement, step: number): void {
	const delay = Math.min(step, MAX_STAGGER_STEPS) * STAGGER_MS;
	element.style.setProperty('--reveal-delay', `${delay}ms`);
	element.classList.add('is-revealed');

	// Hand the element back to its normal styles once the reveal has played.
	window.setTimeout(() => {
		element.removeAttribute('data-reveal');
		element.classList.remove('is-revealed');
		element.style.removeProperty('--reveal-delay');
	}, delay + REVEAL_DURATION_MS + CLEANUP_BUFFER_MS);
}

export function initReveal(): void {
	if (!('IntersectionObserver' in window)) return;

	const targets = collectTargets().filter(startsBelowFold);
	if (targets.length === 0) return;

	const observer = new IntersectionObserver(
		(entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting);
			visible.forEach((entry, index) => {
				observer.unobserve(entry.target);
				reveal(entry.target as HTMLElement, index);
			});
		},
		{ rootMargin: VIEWPORT_MARGIN },
	);

	targets.forEach((target) => {
		target.setAttribute('data-reveal', '');
		observer.observe(target);
	});
}
