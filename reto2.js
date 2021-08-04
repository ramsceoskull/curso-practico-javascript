// Forma número 1 con arrays y switch
const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

// Array para forma 1 y 2
// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto"
// ];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento / 100);
    
    return precioConDescuento;
}

/* function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) {
        case "JuanDC_es_Batman":
            descuento = 15;
            break;
        case "pero_no_le_digas_a_nadie":
            descuento = 30;
            break;
        case "es_un_secreto":
            descuento = 25;
            break;
        default:
            descuento = 0;
    }
    
    const resultP = document.getElementById("ResultP");
    if (descuento > 0) {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    } else {
        resultP.innerText = "No pudimos encontrar el cupón que buscas";
    }
} */

// Forma 2 con legibilidad, error first y muerte al switch

/* function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
    } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
        } else if (couponValue === "pero_no_le_digas_a_nadie") {
            descuento = 30;
            } else if (couponValue === "es_un_secreto") {
                descuento = 25;
                }
    
    const resultP = document.getElementById("ResultP");
    if (descuento > 0) {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    } else {
        resultP.innerText = "No pudimos encontrar el cupón que buscas";
    }
} */

// Forma 3 con arrays y condicionales mucho más inteligentes

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
