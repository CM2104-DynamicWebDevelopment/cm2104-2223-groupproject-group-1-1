fetch('https://api.tomtom.com/search/2/categorySearch/electric%20vehicle%20station.json?lat=51.5072&lon=0.1276&view=Unified&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
        //console.log(data);
        return data.json();
     }).then((completedata)=>{
         console.log(completedata.results[0].poi.name);
         console.log(completedata.results[1].poi.name);
         console.log(completedata.results[2].poi.name);
         console.log(completedata.results[3].poi.name);
         console.log(completedata.results[4].poi.name);
         console.log(completedata.results[5].poi.name);
         console.log(completedata.results[6].poi.name);
         console.log(completedata.results[7].poi.name);
         console.log(completedata.results[8].poi.name);
         console.log(completedata.results[9].poi.name);
         document.getElementById("locations1").innerHTML=completedata.results[0].poi.name;
         document.getElementById("locations2").innerHTML=completedata.results[1].poi.name;
         document.getElementById("locations3").innerHTML=completedata.results[2].poi.name;
         document.getElementById("locations4").innerHTML=completedata.results[3].poi.name;
         document.getElementById("locations5").innerHTML=completedata.results[4].poi.name;
         document.getElementById("locations6").innerHTML=completedata.results[5].poi.name;
         document.getElementById("locations7").innerHTML=completedata.results[6].poi.name;
         document.getElementById("locations8").innerHTML=completedata.results[7].poi.name;
         document.getElementById("locations9").innerHTML=completedata.results[8].poi.name;
         document.getElementById("locations10").innerHTML=completedata.results[9].poi.name;
     });
 
     fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009040049359&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available1").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied1").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved1").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009041589985&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available2").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied2").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved2").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009041550173&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available3").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied3").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved3").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009040039657&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available4").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied4").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved4").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009041569611&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available5").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied5").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved5").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009041544597&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available6").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied6").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved6").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009040044967&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available7").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied7").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved7").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009040832972&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available8").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied8").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved8").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009041543649&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available9").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied9").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved9").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      fetch('https://api.tomtom.com/search/2/chargingAvailability.json?chargingAvailability=826009041541901&key=N8EXpGYR1ew6XZ8B1JokDahxTLfA5gwb').then((data)=>{
         //console.log(data);
         return data.json();
      }).then((completedata)=>{
          console.log(completedata.connectors[0].availability.current.available);
          document.getElementById("available10").innerHTML=completedata.connectors[0].availability.current.available;
          document.getElementById("occupied10").innerHTML=completedata.connectors[0].availability.current.occupied;
          document.getElementById("reserved10").innerHTML=completedata.connectors[0].availability.current.reserved;
      });
      