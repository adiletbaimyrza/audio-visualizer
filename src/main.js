import "./style.css"
import { SceneComponent } from "./components/scene/scene"
import { CurrentSongComponent } from "./components/current-song/current-song"
import { ControlsComponent } from "./components/controls/controls"
import { PlayerComponent } from "./components/player/player"
import "./components/shared/styles/progress.css"

const scene = SceneComponent()
const player = PlayerComponent()

const app = document.querySelector("#app")
app.appendChild(scene)
app.appendChild(player)
