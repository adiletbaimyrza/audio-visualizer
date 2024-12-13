import { html } from '../utils'

export function AudioControls() {
  return html`
    <div class="controls">
    <div class="controls__btns">
      <button type="button" id="backward-step-btn" class="controls-btn">
        <img
          src="/audio_visualizer/svg/backward-step.svg"
          alt="backward-step icon"
        />
      </button>
      <button id="backward-btn" type="button" class="controls-btn">
        <img
          src="/audio_visualizer/svg/backward.svg"
          alt="backward-step icon"
        />
      </button>
      <button id="play-btn" type="button" class="controls-btn playback-btn">
        <img src="/audio_visualizer/svg/circle-play.svg" alt="play icon" />
      </button>
      <button
        id="pause-btn"
        type="button"
        class="controls-btn playback-btn"
      >
        <img
          src="/audio_visualizer/svg/circle-pause.svg"
          alt="pause icon"
        />
      </button>
      <button id="forward-btn" type="button" class="controls-btn">
        <img
          src="/audio_visualizer/svg/forward.svg"
          alt="forward-step icon"
        />
      </button>
      <button type="button" id="forward-step-btn" class="controls-btn">
        <img
          src="/audio_visualizer/svg/forward-step.svg"
          alt="forward-step icon"
        />
      </button>
    </div>
   
    <div class="controls__progress">
      <time id="current-duration"></time>
      <div id="controls-progress" class="progress">
        <div class="progress-filled"></div>
      </div>
      <time id="total-duration"></time>
    </div>
   </div>
   
   <div class="volume">
    <button id="volume-high-btn">
      <img
        src="/audio_visualizer/svg/volume-high.svg"
        alt="volume high icon"
      />
    </button>
    <button id="muted-btn">
      <img src="/audio_visualizer/svg/volume-xmark.svg" alt="muted icon" />
    </button>
   
    <div id="volume-progress" class="progress">
      <div class="progress-filled"></div>
    </div>
   </div>
   </section>
   `
}
