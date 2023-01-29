import React,{useState , useEffect} from "react";
import Loading from "./Loading";
import HdiMap from "./HdiMap";
import Legend from "./Legend";
import LoadCountriesTask from "../Tasks/LoadCountriesTask";
import features from './../data/countries.json';
import legendItems from "../entities/LegendItems";
import { Typography } from "@mui/material";
import Img1 from "./6.png";
import Img2 from "./7.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import img3 from "./1.png";
import img4 from "./2.png";
import img5 from "./3.png";
import img6 from "./4.png";
import img7 from "./5.png";
import img8 from "./8.png";
import img9 from "./Screenshot (509).png"
import img10 from "./Screenshot (510).png"
import img11 from "./Screenshot (511).png"
import img12 from "./Screenshot (512).png"
import img13 from "./Screenshot (513).png"
import img14 from "./Screenshot (514).png"


const Hdi = () => {
    const [countrie, setCountries] = useState([]);
    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
       const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };
    
    useEffect(load,[]);
    return(
        <>
        <header>
            <Typography variant="h2" align="center" sx={{color:"white", margin:8}}>HUMAN <span>DEVELOPMENT </span> INDEX</Typography>
            <Typography variant="h4" sx={{color:"white" , marginLeft:"100px"}}>
                What is HDI ?
            </Typography>
            <p>The Human Development Index (HDI) was created to emphasize that people and their capabilities should be the ultimate criteria for assessing the development of a country, not economic growth alone. The HDI can also be used to question national policy choices, asking how two countries with the same level of GNI per capita can end up with different human development outcomes. These contrasts can stimulate debate about government policy priorities.</p>
            <p>The HDI a summary measure of average achievement in key dimensions of human development:
<br></br>
            <br></br><b>a long and healthy life,</b>
            <br></br><b>being knowledgeable and</b>
            <br></br><b>have a decent standard of living.</b>
            <br></br>
            <br></br>

The health dimension is assessed by life expectancy at birth, using a minimum value of 20 years and maximum value of 85 years. The education dimension is measured by mean of years of schooling for adults aged 25 years and expected years of schooling for children of school entering age. The standard of living dimension is measured by gross national income per capita. The scores for the three HDI dimension indices are then aggregated into a composite index using geometric mean.

</p>
            <img class="img1" src={Img1} alt="" />
            <img class="img2" src={Img2} alt="" />
        </header>
        <div>
        <Card sx={{ maxWidth: 1600,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white"}}>
      <CardActionArea>
        <Typography variant="h4" align="center" sx={{marginTop:2}}> Analysis using Linear Regression</Typography>
        <CardContent>
        <img class="img-wrapper" src={img9} alt="" />
        <img class="img-wrapper" src={img13} alt="" />
          <Typography gutterBottom variant="h5" component="div">
          Linear regression applied on dataset with x = HDI in 2000 and y = GDI in 2000 (on left) and x = HDI in 2021 and y =  GDI in 2021
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card><Card sx={{ maxWidth: 1600,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white", }}>
      <CardActionArea>
        
        <CardContent>
        <img class="img-wrapper" src={img10} alt="" />
        <img class="img-wrapper" src={img11} alt="" />
          <Typography gutterBottom variant="h5" component="div">
          Linear regression applied on dataset with x = leI in 2000 and y = eysin 2000 (on right) and x =le in 2021 and y =  eys in 2021 (on left)
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card><Card sx={{ maxWidth: 1600,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white", }}>
      <CardActionArea>
        
        <CardContent>
        <img class="img-wrapper" src={img12} alt="" />
        <img class="img-wrapper" src={img14} alt="" />
          <Typography gutterBottom variant="h5" component="div">
          Linear regression applied on dataset with x = mys in 2000 and y = eysin 2000 (on right) and x = mys in 2021 and y =  gnipc in 2021 (on left)
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        

        </div>
<Typography variant="h3" align="center"sx={{color:"white", margin:6, marginLeft:"100px"}}>HDI Visualization on Map</Typography>
        <div>
            {countrie.length === 0 ? 
            <Loading/> 
            :<div>
                <HdiMap/>
                <Legend legendItems={legendItemsInReverse}/>
            </div>
            }
        </div>
        <br></br>
        <br></br>
        <Typography variant="h3" align="center" sx={{color:"white"}}>ANALYSIS OF UNDP DATA</Typography><br></br>

        <div className="cards-wrapper">
        <Card sx={{ maxWidth: 445, margin:0.5,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          image={img8}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Relationship between Country and its HDI Code
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 445 , margin:0.5,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white",}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          image={img7}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Relation between HDI Rank in 2020 and HDI Code 
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 405, margin:0.5,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          width="40"
          image={img6}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pie Chart depicting HDI Rank of following 5 Countries
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className="cards-wrapper">
    <Card sx={{ maxWidth: 405 , margin:0.5,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white",}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          image={img5}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HDI Rank of all countries in 2021 Distribution Plot 
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 435, margin:0.5,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          image={img4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HDI Rank in 2021 of different country plot distribution
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 405, margin:0.5 ,backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white",}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          image={img3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HDI Rank Distribution of 2021 year
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        <div className="future-scope">
          <Typography variant="h3" align="center"sx={{color:"white"}}>OUR CONCLUSION</Typography>
          <p>We draw the conclusion that the nation that prioritized healthcare and education has shown higher annual income by showing the statistics using a variety of techniques applied to the dataset. Enhanced healthcare has increased the life expectancy rate and education along with enhanced citizens' ability to become assets for the nation. For instance countries such as Switzerland, Norway, Australia have high gdi mainly due to a rise in life expectancy and a rebound of its income per capita, following the end of all Covid-19 restrictions in the country.Whreas countries such as Sudan have low HDI index , In terms of annual HDI gains, Sudan still ranked behind war-torn countries such as Afghanistan, Liberia, Mali and the Democratic Republic of Congo (DRC), who have all made significant recent progress in school attendance, life expectancy and per capita income growth, despite being at the bottom end of the overall index scale.
</p>
          <br></br>
          <p>The countries that displayed the greatest improvement in HDI from 1975 to 1998 are from Africa and Asia: Nepal (by 63 percent), Mali (53 percent), Pakistan (48 percent), The Gambia (47 percent), and Chad (45 percent). The countries with the least improvement were Guyana (5 percent), the Democratic Republic of the Congo (3 percent), Romania (3 percent), and Zambia (-5 percent).Some of the steps that could be taken to enhance the ranking after analysis are as follows:<br></br>
<br></br>1. It is important to achieve universal access to health and education. Without any delays, the national policy should be put into practise, and the quality and dropout rates in public schools should be monitored.<br></br>
<br></br>2. Regional differences in development and social indicators, such as infant mortality, literacy, etc., should be reduced. States that are falling behind should encourage investment, especially in industries with high employment rates. Additionally, the central government should offer them performance-based incentives to raise their social indicators.<br></br>
<br></br>3. You should also look into the gender pay gap in the workplace. Workplaces need to be made more gender inclusive, along with changing how families view working women and encouraging spouses to help out around the house.<br></br>
<br></br>4.The social justice system needs to be improved. Even though Dalits are given preference for employment and college admissions, their representation in higher positions is still insignificant when compared to their overall population. Additionally, it is important to address the discrimination people experience when using public services and in society at large.<br></br>
</p>
          
          <Typography variant="h3" align="center" sx={{color:"white"}}> What's in Future Scope ?</Typography>
          <Typography variant="h6" sx={{color:"purple"}}>Making more customized solutions for countries to enhance hdi depending on the current status of resources of any country using more advanced ML Models.</Typography>
        </div>
        </>
    )
}

export default Hdi;