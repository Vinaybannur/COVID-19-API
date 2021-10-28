
async function getData(){
    const reponse = await fetch("https://api.covid19api.com/summary");
    const data = await reponse.json();
    getcountries(data);
}

function getcountries(data){
     let country = data.Countries.map(value=> value);
     let container = document.querySelector(".container");
     country.forEach(elements=>{
         container.innerHTML +=`
         <div class="content">
          <p class="countryName"><b>${elements.Country}, ${elements.CountryCode}</b></p>
            <div class="other">
              <p class="newConfirmedCases"><b>New Confirmed Cases: </b> ${elements.NewConfirmed}</p>
              <p class="totalConfirmedCases"><b>Total Confirmed Cases: </b> ${elements.TotalConfirmed}</p>
              <p class="newDeath"><b>New Death:   </b> ${elements.NewDeaths}</p>
              <p class="totalDeath"><b>Total Death: </b> ${elements.TotalDeaths}</p>
              <p class="newRecovered"><b>New Recovered Cases: </b> ${elements.NewRecovered}</p>
              <p class="totalRecovered"><b>Total Recovered Cases: </b> ${elements.TotalRecovered}</p>
              <p class="date"><b>Date: </b> ${elements.Date}</p>
            </div>
        </div>
         `;
     })
   
}
getData();