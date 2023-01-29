import features from "../data/countries.json"
import papa from "papaparse";
import legendItems from "../entities/LegendItems";
class LoadCountriesTask{
  DataUrl = "https://raw.githubusercontent.com/Vanshika197/hdi/main/hdi_dataset/HDR21-22_Composite_indices_complete_time_series.csv";
  
  setState = null;
  mapCountries = features;

  load = (setState) => {
    this.setState = setState;
       papa.parse(this.DataUrl,{
        download: true,
        header: true,
        complete: (result) => {
            console.log(result)
            this.#provideData(result.data)
        },
       });   
    };
    #provideData = (covidCountries) =>{
        for(let i = 0; i<this.mapCountries.length; i++){
            const mapCountry = this.mapCountries[i];
            const covidCountry = covidCountries.find((covidCountry)=> covidCountry.ISO3 === mapCountry.properties.ISO_A3);

            mapCountry.properties.confirmed = 0;
            mapCountry.properties.confirmedText = "0";

            if(covidCountry != null){
               const HDI = mapCountry.properties.HDI;

            }
        }
        this.setState(this.mapCountries);
    };
    
}

export default LoadCountriesTask;