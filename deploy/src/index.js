import Visage from '../managment/visage.js'

import { Home } from './pages/Home.js'
import { DefaultRequire } from './pages/default-require.js'

// first foo: foo/index.js
import PopUp from './foo/index.js'

const VisageRoots = [
    {
        path: "/",
        page: Home
    },
]

export default new Visage({ // create new Visage App
    router: VisageRoots, // router system
    defaultPage: DefaultRequire, // default page
    fooList: [PopUp] // foo list
})