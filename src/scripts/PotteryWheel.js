let primaryKey = 1

export const makePottery = (s, w, h) => {
    const newPotteryObject = {
        shape: s,
        weight: w,
        height: h,
        id: primaryKey
    }
    primaryKey++
    return newPotteryObject
}