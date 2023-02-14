// import React from 'react'
// import marketOpenDates from './marketopenDates.json'

const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
// const currentMonth = new Date().getMonth() + 1
// const currentDayOfMonth = new Date().getDate() + 1
// const currentYear = new Date().getFullYear()
const splitTime = usaTime.split(' ')
// const todaysDate = splitTime[0]
// const dateArray = [currentMonth, currentDayOfMonth]

// const dateStrToArr = (str: string) => {
//   let arr:[...any] = []
//   if (typeof str === 'string') {
//     str.split('/').forEach(elem => arr.push(Number.parseInt(elem)))
//   }
//   return arr
// }

const splitHour = splitTime[4].split(":").slice(0, 2)

// const thisYearsHolidays: Array<any> = () => marketOpenDates.stockMarketHolidays.filter(ele => ele.year === currentYear)

// console.log(dateStrToArr('05/22'))
// console.log(todaysDate.slice(0, 5))
// console.log(dateArray)
// console.log(currentYear)
// console.log(thisYearsHolidays())

const isMarketOpenFunction = {



  isItAfterHours: () => {
    if (Number.parseInt(splitHour[0]) >= 16 && Number.parseInt(splitHour[0]) <= 20) {
      return true
    } else {
      return false
    }
  },



  // isItAHoliday: () => {
  //   let newArr = []
  //   Object.values(
  //     thisYearsHolidays()[0]).forEach((ele: string) => dateStrToArr(ele)[0] === dateArray[0] && dateStrToArr(ele)[1] === dateArray[1] ? newArr.push(true) : false)
  //   return newArr.length > 0 ? true : false
  // }
  // ,



  isItPremarket: () => {
    if ((Number.parseInt(
      splitHour[0]) >= 4
      &&
      Number.parseInt(splitHour[0]) <= 9)
      ||
      (Number.parseInt(splitHour[0]) === 9 && Number.parseInt(splitHour[1]) < 30)) {
      return true
    } else {
      return false
    }
  },





}


export default isMarketOpenFunction

// eastern time
// premarket is 4am to 9:30am
// afterhours is 4pm to 8pm
