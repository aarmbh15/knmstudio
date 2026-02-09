import style from "./BrandQue.module.css";
// import A from "../../img/Brand/A.png";
// import B from "../../img/Brand/B.png";
// import C from "../../img/Brand/C.png";
// import E from "../../img/Brand/E.png";
// import F from "../../img/Brand/F.png";
// import I from "../../img/Brand/I.jpg";

import ACS from "../../img/KNMClientLOGO/ACS.png";
import AEG from "../../img/KNMClientLOGO/Aegte.png";
import BAR from "../../img/KNMClientLOGO/Barclays.png";
import BBE from "../../img/KNMClientLOGO/Bharat benz.png";
import BRC from "../../img/KNMClientLOGO/Bryan & Candy.png";
import DIO from "../../img/KNMClientLOGO/Digi Osmosis.png";
import GDG from "../../img/KNMClientLOGO/GDG.png";
import GOP from "../../img/KNMClientLOGO/Godrej properties.png";
import LIVA from "../../img/KNMClientLOGO/Liva.png";
import ONE8 from "../../img/KNMClientLOGO/One8.png";
// import PNG from "../../img/KNMClientLOGO/PNG.png";
import PLO from "../../img/KNMClientLOGO/Plastic Omnium.png";
import SPA from "../../img/KNMClientLOGO/Spardha.png";
import VIP from "../../img/KNMClientLOGO/Vips.png";
import VIVO from "../../img/KNMClientLOGO/Vivo.png";



const BRAND_QUE = () =>{
    return(
        <>
            <div className={style.container}>

                <div className={style.brandList}>
                   <img src={ONE8} alt="" height={150}  />
                   <img src={LIVA} alt="" height={150}  />
                   <img src={BAR} alt="" height={150}  />
                   <img src={VIVO} alt="" height={150}  />
                   <img src={GOP} alt="" height={160} />
                   <img src={BBE} alt="" height={160}  />
                   <img src={BRC} alt="" height={150}  />
                   <img src={PLO} alt="" height={150}  />
                   <img src={AEG} alt="" height={150}  />
                   <img src={GDG} alt="" height={160}  />
                   <img src={ACS} alt="" height={150}  />
                   <img src={DIO} alt="" height={145}  />
                   <img src={SPA} alt="" height={145}  />
                   {/* <img src={PNG} alt="" height={130}  /> */}
                   <img src={VIP} alt="" height={150}  />

                </div>
                <div className={style.brandListPhone}>
                   <div>
                   <img src={ONE8} alt="" height={150}  />
                   <img src={LIVA} alt="" height={150}  />
                   </div>
                   <div>
                   <img src={BAR} alt="" height={150}  />
                   <img src={VIVO} alt="" height={150}  />
                   </div>
                   <div>
                   <img src={GOP} alt="" height={160} />
                   <img src={BBE} alt="" height={160}  />
                   </div>
                   <div>
                   <img src={BRC} alt="" height={150}  />
                   <img src={PLO} alt="" height={150}  />
                   </div>
                   <div>
                   <img src={AEG} alt="" height={150}  />
                   <img src={GDG} alt="" height={160}  />
                   </div>
                   <div>
                   <img src={ACS} alt="" height={150}  />
                   <img src={DIO} alt="" height={145}  />
                   </div>
                   <div>
                   <img src={SPA} alt="" height={145}  />
                   {/* <img src={PNG} alt="" height={130}  /> */}
                   <img src={VIP} alt="" height={150}  />
                   </div>
                </div>

                {/* <div className={style.brandList}>
                    <img src={A} alt="" height={130}  />
                    <img src={B} alt="" height={130}  />
                    <img src={C} alt="" height={130}  />
                    <img src={E} alt="" height={130}  />
                    <img src={F} alt="" height={130}  />
                    <img src={I} alt="" height={130}  />
                </div>
                <div className={style.brandListPhone}>
                    <div>
                    <img src={A} alt="" height={130}  />
                    <img src={B} alt="" height={130}  />
                    </div>
                    <div>
                    <img src={C} alt="" height={130}  />
                    <img src={E} alt="" height={130}  />
                    </div>
                    <div>
                    <img src={F} alt="" height={130}  />
                    <img src={I} alt="" height={130}  />
                    </div>
                </div> */}
            </div>

        </>
    );
}
export default BRAND_QUE;