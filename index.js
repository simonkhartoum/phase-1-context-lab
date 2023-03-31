/* Your Code Here */

let createEmployeeRecord = (employeeCard) => {
    let employee
      return employee = {
         firstName: employeeCard[0],
         familyName: employeeCard[1],
          title: employeeCard[2],
           payPerHour: employeeCard[3],
           timeInEvents: [],
            timeOutEvents: []
         }
     }

// Converts each employee Array into an employee record using createEmployeeRecord and accumulates it to a new Array
let createEmployeeRecords = (employeesCardsData) => {
    return employeesCardsData.map(createEmployeeRecord)
 }

// Employee's check in time provided date
function createTimeInEvent(dateStamp) {
   let [date, hour] = dateStamp.split(' ');
     this.timeInEvents.push({
       type: "TimeIn",
         hour: parseInt(hour, 10),
           date
    })
       return this
    }

// Employee's check out time provided date
function createTimeOutEvent(dateStamp) {
   let [date, hour] = dateStamp.split(' ');
     this.timeOutEvents.push({
       type: "TimeOut",
         hour: parseInt(hour, 10),
           date
     })
          return this
    }

// Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
function hoursWorkedOnDate(dateOfTheForm) {
   let clockIn = this.timeInEvents.find((e) => e.date == dateOfTheForm).hour
     let clockOut = this.timeOutEvents.find((e) => e.date == dateOfTheForm).hour
     return (clockOut - clockIn)/100
    }

// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
function wagesEarnedOnDate(dateOfTheForm) {
  const payPerHour = parseInt(this.payPerHour)
    const hoursWorked = hoursWorkedOnDate.call(this, dateOfTheForm)
      return payPerHour * hoursWorked
    }

function findEmployeeByFirstName(AllEmployeeRecords, firstName) {
  return AllEmployeeRecords.find((e) => {
    return e.firstName
   })
 }

// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record 
function calculatePayroll(AllEmployeeRecords) {
  return AllEmployeeRecords.reduce((previoutAmount, employee) => {
    return previoutAmount + allWagesFor.call(employee)
     }, 0)
    }


