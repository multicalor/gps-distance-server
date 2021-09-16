const ApiError = require("../error/ApiError")

const R = 6371 //Earth radius and if you need another planet 


class DistanceService {

    // higher order method combining basic logic
    fromGps = (coordinateA, coordinateB) => {
        if (coordinateA.N.length === coordinateA.S.length  && coordinateB.N.length ===  coordinateB.S.length ) {
          const nA = this.fromMinSecToDcm(coordinateA.N)
          const sA = this.fromMinSecToDcm(coordinateA.S)
          const nB = this.fromMinSecToDcm(coordinateB.N)
          const sB = this.fromMinSecToDcm(coordinateB.S)

          console.log(nA, sA, nB, sB);
          return this.calculateDistance(nA, sA, nB, sB)
        } else {
          throw ApiError.badRequest('coordinates entered incorrectly')
        }
    }

    // Method of Haversine formula for calculate distance from decimal gps coordinates 
    calculateDistance = (lat1,lon1,lat2,lon2) => {
    
    let dLat = this.deg2rad(lat2-lat1); 
    let dLon = this.deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; 
    return d;
  }
  
  deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }

  // Adapter for gps formats 
  fromMinSecToDcm = (arr) => {
    let result = 0;
    let min = 0;
    let sec = 0;
    if (arr.length === 1) return arr[0]

    arr.reverse().forEach((element, i, arr) => {
      
      element = +element
      
      if(i === 0){
        sec = ((element*60000)/60)/60000
      }else if (i === 1) {
        min = ((((element + sec)*60000)/60)/60000)
        result = element + sec
      }else if (i === 2) {
        result = element + min
      }
    });
    console.log(result)
    return result
  }
   
}


module.exports = new DistanceService();
