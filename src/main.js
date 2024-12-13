import { SceneComponent } from "./components/scene/scene"
import { PlayerComponent } from "./components/player/player"
import { uiRefs } from "./shared/ui-refs"
import { songs } from "./shared/songs"
import { getState } from "./shared/state"
import { initCurrSong } from "./init/initCurrSong"

import "./style.css"
import "./components/shared/styles/progress.css"
import { toggleVolumeBtn } from "./logic/toggleVolumeBtn"
import { togglePlaybackBtn } from "./logic/togglePlaybackBtn"

const scene = SceneComponent()
const player = PlayerComponent()

const app = document.querySelector("#app")

app.appendChild(scene)
app.appendChild(player)

const ui = uiRefs()
const state = getState(ui, songs)

initCurrSong(ui, songs)
togglePlaybackBtn(ui, state)
toggleVolumeBtn(ui, state)
