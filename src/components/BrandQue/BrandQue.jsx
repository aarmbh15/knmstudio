import style from "./BrandQue.module.css";

import L1 from "../../img/KNMClientLOGO/1.png";
import L2 from "../../img/KNMClientLOGO/2.png";
import L3 from "../../img/KNMClientLOGO/3.png";
import L4 from "../../img/KNMClientLOGO/4.png";
import L5 from "../../img/KNMClientLOGO/5.png";
import L6 from "../../img/KNMClientLOGO/6.png";
import L7 from "../../img/KNMClientLOGO/7.png";
import L8 from "../../img/KNMClientLOGO/8.png";
import L9 from "../../img/KNMClientLOGO/9.png";
import L10 from "../../img/KNMClientLOGO/10.png";
import L11 from "../../img/KNMClientLOGO/11.png";
import L12 from "../../img/KNMClientLOGO/12.png";
import L13 from "../../img/KNMClientLOGO/13.png";
import L14 from "../../img/KNMClientLOGO/14.png";
import L15 from "../../img/KNMClientLOGO/15.png";
import L16 from "../../img/KNMClientLOGO/16.png";
import L17 from "../../img/KNMClientLOGO/17.png";
import L18 from "../../img/KNMClientLOGO/18.png";
import L19 from "../../img/KNMClientLOGO/19.png";
import L20 from "../../img/KNMClientLOGO/20.png";
import L21 from "../../img/KNMClientLOGO/21.png";

import L22 from "../../img/KNMClientLOGO/22.png";
import L23 from "../../img/KNMClientLOGO/23.png";
import L24 from "../../img/KNMClientLOGO/24.png";
import L25 from "../../img/KNMClientLOGO/25.png";
import L26 from "../../img/KNMClientLOGO/26.png";
import L27 from "../../img/KNMClientLOGO/27.png";
import L28 from "../../img/KNMClientLOGO/28.png";
import L29 from "../../img/KNMClientLOGO/29.png";
import L30 from "../../img/KNMClientLOGO/30.png";
import L31 from "../../img/KNMClientLOGO/31.png";
import L32 from "../../img/KNMClientLOGO/32.png";
import L33 from "../../img/KNMClientLOGO/33.png";
import L34 from "../../img/KNMClientLOGO/34.png";
import L35 from "../../img/KNMClientLOGO/35.png";
import L36 from "../../img/KNMClientLOGO/36.png";
import L37 from "../../img/KNMClientLOGO/37.png";
import L38 from "../../img/KNMClientLOGO/38.png";
import L39 from "../../img/KNMClientLOGO/39.png";
import L40 from "../../img/KNMClientLOGO/40.png";
import L41 from "../../img/KNMClientLOGO/41.png";
import L42 from "../../img/KNMClientLOGO/42.png";

const BRAND_QUE = () => {

const row1 = [
L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,
L11,L12,L13,L14,L15,L16,L17,L18,L19,L20,L21
];

const row2 = [
L22,L23,L24,L25,L26,L27,L28,L29,L30,L31,
L32,L33,L34,L35,L36,L37,L38,L39,L40,L41,L42
];

return(
<div className={style.container}>

{/* Row 1 */}
<div className={style.marquee}>
<div className={style.track}>

{[...row1,...row1].map((logo,index)=>(
<img key={index} src={logo} alt="brand"/>
))}

</div>
</div>

{/* Row 2 */}
<div className={style.marqueeReverse}>
<div className={style.track}>

{[...row2,...row2].map((logo,index)=>(
<img key={index} src={logo} alt="brand"/>
))}

</div>
</div>

</div>
)
}

export default BRAND_QUE;