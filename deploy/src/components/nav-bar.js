import { setCss } from '../static/tools.js'
import store from '../store/index.js'

export function NavBar() {
    $["navBarControl"] = function(mode) {
        setCss('.nav-bar-container', {
            opacity: mode ? "0" : "1",
            left: mode ? "-1em" : "0",
            visibility: mode ? "hidden" : "visible"
        })

        setCss('.nav-bar-shadow', {
            opacity: mode ? "0" : "0.4",
            visibility: mode ? "hidden" : "visible"
        })
    }

    return (/*html*/`
        <div class="nav-bar">
            <div class="right">
                <i class="material-icons menu-icon" onclick="$.navBarControl(false)"> menu </i>

                <div class="nav-bar-shadow" onclick="$.navBarControl(true)"></div>
                <div class="nav-bar-container col-xl-6 col-md-5 col-sm-12">
                    <i class="material-icons close-icon" onclick="$.navBarControl(true)"> close </i>
                    <div>
                        <div class="label">
                            <i class="material-icons"> home </i>
                            Anasayfa
                        </div>
                    </div>
                    <div>
                        <div class="label">
                            <i class="material-icons"> event_seat </i>
                            Mobilyalar
                        </div>

                        <div class="more">
                            <li> Mutfak dolapları </li>
                            <li> Yatak odası </li>
                            <li> Çocuk odası </li>
                        </div>
                    </div>
                    <div>
                        <div class="label">
                            <i class="material-icons"> contact_phone </i>
                            İletişim
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle d-none d-md-block">
                <h3> <span>Ecmel</span><span>Dekorasyon</span> </h3>
            </div>
            <div class="left">
                <img src="../src/assets/single-logo.png" />
            </div>
        </div>
    `)
}