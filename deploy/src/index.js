import Visage from '../managment/visage.js'

import { Home } from './pages/Home.js'
import { Furnitures } from './pages/Mobilyalar.js'
import { DefaultRequire } from './pages/default-require.js'

const VisageRoots = [
    {
        path: "/",
        page: Home
    },
    {
        path: "/mobilyalar",
        page: Furnitures
    }
]

export default new Visage({ // create new Visage App
    router: VisageRoots, // router system
    defaultPage: DefaultRequire, // default page
    fooList: [] // foo list
})