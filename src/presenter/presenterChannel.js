// ─── Gelamang Presenter Channel ────────────────────────────────────────────
// Shared BroadcastChannel utility used by both the presenter and audience
// windows. Both windows import this module and join the same channel.

export const CHANNEL_NAME = 'gelamang-presenter'

export const MSG = {
  /** Presenter → Audience: jump to a specific slide index */
  GOTO_SLIDE: 'GOTO_SLIDE',
  /** Audience → Presenter: audience window is ready and requesting current state */
  AUDIENCE_READY: 'AUDIENCE_READY',
  /** Presenter → Audience: full state sync (sent in response to AUDIENCE_READY) */
  SYNC_STATE: 'SYNC_STATE',
}

/**
 * Creates a new BroadcastChannel instance on the shared channel name.
 * Each window should create its own instance and close it on unmount.
 */
export function createChannel() {
  return new BroadcastChannel(CHANNEL_NAME)
}
