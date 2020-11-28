import { Header } from '../components/header.js'
import { RandomImages } from '../components/random-images.js'
import { HomePageMiddle } from '../components/home-page-middle.js'
import { PopUp } from '../components/pop-up.js'

export function Home() {
    return {
        html: (/*html*/`
            <div class="home-page">
                <div class="header row align-items-center mt-5 mr-0 p-0">
                    ${Header()}
                </div>
                <div class="line"></div>

                <div class="random-images row m-0 p-0" id="home-page-middle">
                    ${RandomImages()}
                </div>

                ${HomePageMiddle()}
                ${PopUp()}
            </div>
        `),
    }
}