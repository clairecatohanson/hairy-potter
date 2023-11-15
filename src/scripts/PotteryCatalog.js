const potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40
        }
        else {
            potteryObject.price = 20
        }
        potteryToSell.push(potteryObject)
    }
    return potteryObject
}

export const usePottery = () => {
    return potteryToSell.map((x) => x)
}