// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 4)
let soupBowl = makePottery("Soup Bowl", 3, 5)
let ramenBowl = makePottery("Ramen Bowl", 5, 7)
let vase = makePottery("Vase", 3, 8)
let dinnerPlate = makePottery("Dinner Plate", 3, 1)
console.log(mug, soupBowl, ramenBowl, vase, dinnerPlate)

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2200)
soupBowl = firePottery(soupBowl, 2000)
ramenBowl = firePottery(ramenBowl, 2500)
vase = firePottery(vase, 2800)
dinnerPlate = firePottery(dinnerPlate, 2100)
console.log(mug, soupBowl, ramenBowl, vase, dinnerPlate)

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
soupBowl = toSellOrNotToSell(soupBowl)
ramenBowl = toSellOrNotToSell(ramenBowl)
vase = toSellOrNotToSell(vase)
dinnerPlate = toSellOrNotToSell(dinnerPlate)
console.log(mug, soupBowl, ramenBowl, vase, dinnerPlate)

const itemsToSell = usePottery()
console.log(itemsToSell)

// Invoke the component function that renders the HTML list



