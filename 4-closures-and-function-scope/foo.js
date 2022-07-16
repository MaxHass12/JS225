function getCollisionIndex(particles) {
  return particles.findIndex((currentParticle, idx) => {
    const nextParticle = particles[idx + 1];
    return currentParticle > 0 && nextParticle <= 0;
  });
}

function calculateNewWeight(leftWeight, rightWeight) {
  const magnitudeOfRightWeight = Math.abs(rightWeight);
  const signOfNewWeight = leftWeight >= magnitudeOfRightWeight ? 1 : -1;
  const magnitudeOfNewWeight = leftWeight + magnitudeOfRightWeight;
  const newWeight = signOfNewWeight * magnitudeOfNewWeight;

  return newWeight;
}

function collideParticles(particles, leftParticleIndex, rightParticleIndex) {
  const particlesCopy = [...particles];
  particles = null;

  const leftParticleWeight = particlesCopy[leftParticleIndex];
  const rightParticleWeight = particlesCopy[rightParticleIndex];

  const newWeight = calculateNewWeight(leftParticleWeight, rightParticleWeight);

  particlesCopy[leftParticleIndex] = newWeight;
  particlesCopy.splice(rightParticleIndex, 1);

  return particlesCopy;
}


function movingParticles(particles) {
  if (particles.every(elem => elem === 0)) return [];

  while(true) {
    const leftCollisionIndex = getCollisionIndex(particles);
    if (leftCollisionIndex === -1) break;

    const rightCollisionIndex = leftCollisionIndex + 1;
    particles = collideParticles(particles, leftCollisionIndex, rightCollisionIndex);
  }
  
  return particles;
}

// console.log(movingParticles([3, -1]), [4]);
// // // 3 absorbs -1.

// console.log(movingParticles([-1, 3, -1, 2]), [-1, 4, 2]);
// // // -1 is moving to the left, 2 is moving to the right, 3 absorbs -1.

// console.log(movingParticles([]), []);
// // // No particles are in the list.

// console.log(movingParticles([5, -1, -2, -9]), [-17]);
// // 5 absorbs -1, new 6 absorbs -2, new 8 is being absorbed by -9.

// console.log(movingParticles([5, -5]), [10]);

// console.log(movingParticles([10, 5, 1], ), [10, 5, 1]);

// console.log(movingParticles([-10, -5, -1], ), [-10, -5, -1]);
// console.log(movingParticles([5, 0, -10, 10, 0, -5, -1, 0, 3], ), [-15, 16, 3])

console.log(movingParticles([0, 0, 0]), []);


