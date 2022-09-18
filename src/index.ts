/**
 * This program calculates energy
 *  in joules (speed of light)
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-09-18
 */

import promptSync from 'prompt-sync'

try {
  const prompt = promptSync()
  const SPEED_OF_LIGHT = 299800000
  const TWO = 2

  const massString = prompt('Enter the mass of your object (kg): ')
  const mass = parseFloat(massString)

  if (mass < 0) {
    console.log('Number cannot be negative.')
  } else if (isNaN(mass)) {
    console.log('Invalid Input.')
  } else {
    const energy = mass * SPEED_OF_LIGHT ** TWO
    console.log(
      `Your object would produce ${energy} Joules at the speed of light.`
    )
  }
} catch (e) {
  console.log('Invalid Input.')
}
console.log('\nDone.')
