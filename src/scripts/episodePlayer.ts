const PLAYER_SELECTOR = '[data-episode-player]';
const PLAY_BUTTON_SELECTOR = '[data-episode-play]';
const ERROR_SELECTOR = '[data-episode-error]';
const PLAYING_CLASS = 'is-playing';

function createVideo(src: string, startSeconds: number, title: string): HTMLVideoElement {
	const video = document.createElement('video');
	video.controls = true;
	video.playsInline = true;
	video.preload = 'metadata';
	video.title = title;
	// The media fragment starts playback at the chosen moment of the programme.
	video.src = `${src}#t=${startSeconds}`;

	// Fallback for browsers that ignore the media fragment.
	video.addEventListener(
		'loadedmetadata',
		() => {
			if (video.currentTime < startSeconds) video.currentTime = startSeconds;
		},
		{ once: true },
	);

	return video;
}

function setUpPlayer(player: HTMLElement): void {
	const button = player.querySelector<HTMLButtonElement>(PLAY_BUTTON_SELECTOR);
	const errorMessage = player.querySelector<HTMLElement>(ERROR_SELECTOR);
	const src = player.dataset.src;
	const startSeconds = Number(player.dataset.start ?? 0);
	if (!button || !src || !Number.isFinite(startSeconds)) return;

	button.addEventListener('click', () => {
		const video = createVideo(src, startSeconds, player.dataset.title ?? '');

		video.addEventListener(
			'error',
			() => {
				video.remove();
				player.classList.remove(PLAYING_CLASS);
				if (errorMessage) errorMessage.hidden = false;
			},
			{ once: true },
		);

		if (errorMessage) errorMessage.hidden = true;
		player.classList.add(PLAYING_CLASS);
		player.append(video);
		video.focus();

		// The click allows playback with sound. If the browser still refuses, the controls stay available.
		video.play().catch(() => undefined);
	});
}

export function initEpisodePlayers(): void {
	document.querySelectorAll<HTMLElement>(PLAYER_SELECTOR).forEach(setUpPlayer);
}
