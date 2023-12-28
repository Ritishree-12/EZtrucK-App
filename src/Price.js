 const axios = require('axios')
// const getDistanceAndTime = async (origins, destinations) => {
//     const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
//       origins
//     )}&destinations=${encodeURIComponent(destinations)}&key=${"AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0"}`;
//     try {
//       const response = await axios.get(apiUrl);
//       const data = response.data;
//       if (data.status === 'OK' && data.rows.length > 0 && data.rows[0].elements.length > 0) {
//         const distance = data.rows[0].elements[0].distance.text;
//         const duration = data.rows[0].elements[0].duration.text;
//         console.log(distance,duration)
//         return { distance, duration };
//       } else {
//         throw new Error('Error fetching distance and time.');
//       }
//     } catch (error) {
//       throw new Error('Error fetching data:', error);
//     }
//   }
//   getDistanceAndTime("bhubaneswar" , "puri").then((data) => {
//       console.log(data)
//   }).catch((err) => {
//      throw err;
//   })
const calculateTotalPrice = (distanceInKm, truckType) => {
    let baseCostPerKm, baseCostPerKm2;
    switch (truckType) {
      case 'dalaauto':
        baseCostPerKm = 18;
        baseCostPerKm2 = 19;
        break;
      case 'tataace':
        baseCostPerKm = 22;
        baseCostPerKm2 = 23;
        break;
      case 'small_pickup':
        baseCostPerKm = 28;
        baseCostPerKm2 = 29;
        break;
      case 'large_pickup':
        baseCostPerKm = 30;
        baseCostPerKm2 = 31;
        break;
      case 'eicher':
        baseCostPerKm = 41;
        baseCostPerKm2 = 42;
        break;
      default:
        throw new Error('Invalid truck type');
    }
    const totalCost = distanceInKm <= 30 ? baseCostPerKm * distanceInKm : baseCostPerKm2 * distanceInKm;
    // Calculate the commission (15%)
    const commissionAmount = (totalCost * 15) / 100;
    const costAfterCommission = totalCost + commissionAmount;
    // Calculate the GST (5%)
    const gstAmount = (costAfterCommission * 5) / 100;
    const costAfterGst = costAfterCommission + gstAmount;
    // Calculate the TDS (2%)
    const tdsAmount = (costAfterGst * 2) / 100;
    const finalPrice = costAfterGst + tdsAmount;
    console.log(finalPrice)
    return finalPrice;
  }
  calculateTotalPrice(10,'dalaauto')