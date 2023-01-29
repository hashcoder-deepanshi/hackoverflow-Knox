import LegendItem from "./LegendItem";

const legendItems = [
    new LegendItem(
        "0.300 - 0.400 ",
        "yellow",
        (HDI) => HDI > 0 && HDI < 0.550,
        "black"
    ),
    new LegendItem(
        "0.400 - 0.499",
        "red",
        (HDI) => HDI >= 0.550 && HDI <0.699,
        "black"
    ),
    new LegendItem(
        "0.500 - 0.699",
        "orange",
        (HDI) => HDI >= 0.699 && HDI <0.799,
        "black"
    ),
    new LegendItem(
        "0.699 - 0.799",
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