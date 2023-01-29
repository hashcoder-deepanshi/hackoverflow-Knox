import LegendItem from "./LegendItem";

const legendItems = [
    new LegendItem(
        "0 - 0.550 ",
        "#FBB4B9",
        (HDI) => HDI > 0 && HDI < 0.550,
        "black"
    ),
    new LegendItem(
        "0.55 - 0.699",
        "#F768A1",
        (HDI) => HDI >= 0.550 && HDI <0.699,
        "black"
    ),
    new LegendItem(
        "0.6.99 - 0.799",
        "#C51B8A",
        (HDI) => HDI >= 0.699 && HDI <0.799,
        "black"
    ),
    new LegendItem(
        "0.800 +",
        "#FA0177",
        (HDI) => HDI >= 0.800,
        "black"
    ),
    new LegendItem("No Data" ,"#ffffff",(HDI)=>true),
];

export default legendItems;

//#7A0177
//C51B8A

//#FBB4B9
//#F768A1