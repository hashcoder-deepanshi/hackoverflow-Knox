import React,{useState , useEffect} from "react";
import Loading from "./Loading";
import HdiMap from "./HdiMap";
import Legend from "./Legend";
import LoadCountriesTask from "../Tasks/LoadCountriesTask";
import features from './../data/countries.json';
import legendItems from "../entities/LegendItems";


const Hdi = () => {
    const [countrie, setCountries] = useState([]);
    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
       const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };
    
    useEffect(load,[]);
    return(
        <div>
            {countrie.length === 0 ? 
            <Loading/> 
            :<div>
                <HdiMap/>
                <Legend legendItems={legendItemsInReverse}/>
            </div>
            }
        </div>
    )
}

export default Hdi;