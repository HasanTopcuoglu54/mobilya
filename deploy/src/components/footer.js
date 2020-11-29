import { MapModal } from './map-modal.js'
import PopUp from '../foo/index.js'

export function Footer() {

    return (/*html*/`
        <footer class="row m-0">
            <div class="left col-xl-4 col-md-6 col-sm-12">
                <img src="../src/assets/logo.png" class="w-50 mb-4"/>
                <div>
                    <li> Adres: Altınova Mahallesi Yılmaz Sokak no:9 Sakarya/Serdivan </li>
                    <li> Telefon: 0531 544 7798 </li>
                </div>
                <div class="mt-4">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
            </div>
            <div class="center col-xl-4 col-md-6 col-sm-12">
                <ul>
                    <li> <visage-link path="/"> Anasayfa </visage-link> </li>
                    <li> <visage-link path="/mobilyalar"> Mobilyalar </visage-link> </li>
                    <li> <visage-link path="/mobilyalar"> Mutfak Dolapları </visage-link> </li>
                    <li> <visage-link path="/mobilyalar"> Yatak Odası </visage-link> </li>
                    <li> <visage-link path="/mobilyalar"> Çocuk Odası </visage-link> </li>
                    <li> <visage-link path="/iletişim"> İletişim </visage-link> </li>
                </ul>
            </div>
            <div class="right col-xl-4 col-md-6 col-sm-12">
                <div class="map">
                    <img onclick="$.mapModalControl(true)" src="../src/assets/maps.jpg" class="w-75" />
                </div>
                <br/>
                <a href="https://www.google.com.tr/maps/place/ASKER+KOKORE%C3%87/@40.7710136,30.3808493,277m/data=!3m1!1e3!4m5!3m4!1s0x14ccb2db110ed21d:0x30e72d1c3225928!8m2!3d40.7716925!4d30.3800954">Google Map de görüntüle</a>
            </div>

            ${MapModal()}
            <div class="info"> Ecmel Mobilya Tüm Hakları Saklıdır </div>
        </footer>
    `)
}