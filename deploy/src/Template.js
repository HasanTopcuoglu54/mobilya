import { NavBar } from './components/nav-bar.js'
import { Footer } from './components/footer.js'

export const Template = (view) => {
    return {content: (/*html*/`
        <div class="template row p-0 m-0">
            <div class="col-12 p-0"> ${NavBar()} </div>
            <VisageRouter class="mb-5">
                ${view}
            </VisageRouter>
            ${Footer()}
        </div>
    `), templateLoad: () => {}}
}

/*
export const Template = (view) => {
    return {content: (
        div({class: "template"}, "", [
            VisageRouter({}, "", [view])
        ])
    ), templateLoad: () => {}}
}
*/