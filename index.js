/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


//calcultes new distance by converting time to hours
const newDistance = distance + (velocity*(time/3600)) 

//calculates remaining fuel
const calcRemainingFuel = remainingFuel - (fuelBurnRate * time)


// Convert km/h to m/s
function convertKmHToMS(velocityKmH) {
  return velocityKmH * 1000 / 3600; 
}

// Convert m/s back to km/h
function convertMSToKmH(velocityMS) {
  return velocityMS * 3600 / 1000; 
}

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(acceleration, velocity, time) {
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof time !== 'number') {
    throw new Error('All parameters must be numbers.');
  }
  
  // Convert velocity to m/s before calculation
  const velocityMS = convertKmHToMS(velocity);
  const newVelocityMS = velocityMS + (acceleration * time);

  // Convert back to km/h
  return convertMSToKmH(newVelocityMS);
}

try {
  const newVelocity = calcNewVel(acceleration, velocity, time);
  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
} catch (error) {
  console.error(error.message);
}

console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${calcRemainingFuel.toFixed(2)} kg`);





