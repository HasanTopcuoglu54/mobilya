import Foo from '../static/foo.js'

const PopUp = new Foo({
    state: {
        mode: "pop-up d-none",
        mapModal: "modal-map close"
    },
    methods: {
        closePopUp: () => PopUp.set = ["pop-up d-none", "mode"],
        controlMapModal: (mode) => PopUp.set = [`modal-map ${mode ? 'open' : 'close'}`, "mapModal"]
    },
    created: () => {}
})

export default PopUp