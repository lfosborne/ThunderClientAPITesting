pm.environment.set("Authorization", pm.collectionVariables.get("access_token"));

pm.collectionVariables.set ("randomAppNumber", _.random (13000,99999999));
pm.collectionVariables.set ("randomTIN", _.random (111111111,999999999));
pm.collectionVariables.set ("randomTermLength", _.random (12,120));
pm.collectionVariables.set ("randomLoanAmount", _.random (25000,75000));
pm.collectionVariables.set ("randomEEAmount", _.random (55000,275000));
pm.collectionVariables.set ("randomBonusAmount", _.random (1000,15000));
pm.collectionVariables.set ("randomMileage", _.random (35000,175000));


//Random Date
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 
const randomMonth = randomNumber (10,12)
const randomDay = randomNumber (10,29)

const randomBirthYear = randomNumber (1945,1995)
const randomDOB = randomBirthYear+"-"+randomMonth+"-"+randomDay
pm.collectionVariables.set ("randomDOB", randomDOB);

const randomEmpStartYear = randomNumber (2007,2020)
const randomEmpStartDate = randomEmpStartYear+"-"+randomMonth+"-"+randomDay
pm.collectionVariables.set ("randomEmpStartDate", randomEmpStartDate);

const randomCurrAddrStartYear = randomNumber (2012,2022)
const randomCurrAddrStartDate = randomCurrAddrStartYear+"-"+randomMonth+"-"+randomDay
pm.collectionVariables.set ("randomCurrAddrStartDate", randomCurrAddrStartDate);

const randomPrevAddrStartYear = randomCurrAddrStartYear - 5;
const randomPrevAddrStartDate = randomPrevAddrStartYear+"-"+randomMonth+"-"+randomDay
pm.collectionVariables.set ("randomPrevAddrStartDate", randomPrevAddrStartDate);

const randomBizFormedYear = randomNumber (1986,2021)
const randomBizFormedDate = randomBizFormedYear+"-"+randomMonth+"-"+randomDay
pm.collectionVariables.set ("randomBizFormedDate", randomBizFormedDate);

const loanAmount =  pm.collectionVariables.replaceIn("{{randomLoanAmount}}")
const randomMarketValue =  (loanAmount * 1.25)
pm.collectionVariables.set ("randomMarketValue", randomMarketValue);

//Reuse PartyName
const party1FirstName = pm.collectionVariables.replaceIn("{{$randomFirstName}}")
pm.collectionVariables.set ("party1FirstName",party1FirstName);
const party1MiddleName = pm.collectionVariables.replaceIn("{{$randomFirstName}}")
pm.collectionVariables.set ("party1MiddleName",party1MiddleName);
const party1LastName = pm.collectionVariables.replaceIn("{{$randomLastName}}")
pm.collectionVariables.set ("party1LastName",party1LastName);
const party1FullName = party1FirstName + " " + party1LastName
pm.collectionVariables.set("party1FullName",party1FullName);
const party1Email = (party1FirstName+ "." +party1LastName + '@mailinator.com')
pm.collectionVariables.set("party1Email", party1Email);

