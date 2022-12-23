/// version 1.2.0
/// copy tc-types.d.ts file for vscode autocompletion on tc object
/// <reference path="./tc-types.d.ts" />

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

function setEnvVariables() {

const bizPhoneAreaCode = randomNumber (212,941)
const bizPhone3Digits = randomNumber (111,999)
const bizPhone4Digits = randomNumber (1111,9999)
const bizPhoneFormatted = bizPhoneAreaCode+"-"+bizPhone3Digits+"-"+bizPhone4Digits
tc.setVar("bizPhone", bizPhoneFormatted);
///console.log("Party1 bizPhone:", bizPhoneFormatted);

const mobilePhoneAreaCode = randomNumber (212,941)
const mobilePhone3Digits = randomNumber (111,999)
const mobilePhone4Digits = randomNumber (1111,9999)
const mobilePhoneFormatted = mobilePhoneAreaCode+"-"+mobilePhone3Digits+"-"+mobilePhone4Digits
tc.setVar("mobilePhone", mobilePhoneFormatted);
///console.log("Party1 mobilePhone:", mobilePhoneFormatted);

const personalPhoneAreaCode = randomNumber (212,941)
const personalPhone3Digits = randomNumber (111,999)
const personalPhone4Digits = randomNumber (1111,9999)
const personalPhoneFormatted = personalPhoneAreaCode+"-"+personalPhone3Digits+"-"+personalPhone4Digits
tc.setVar("personalPhone", personalPhoneFormatted);
///console.log("Party1 personalPhone:", personalPhoneFormatted);

const homePhoneAreaCode = randomNumber (212,941)
const homePhone3Digits = randomNumber (111,999)
const homePhone4Digits = randomNumber (1111,9999)
const homePhoneFormatted = homePhoneAreaCode+"-"+homePhone3Digits+"-"+homePhone4Digits
tc.setVar("homePhone", homePhoneFormatted);
///console.log("Party1 homePhone:", homePhoneFormatted);

const randomMonth = randomNumber (10,12)
const randomDay = randomNumber (10,30)
const randomBirthYear = randomNumber (1945,1995)
const randomDOB = randomBirthYear+"-"+randomMonth+"-"+randomDay
tc.setVar("randomDOB", randomDOB);
///console.log("Party1 DOB:", randomDOB);

const randomTaxID = randomNumber (111111111,999999999)
tc.setVar("randomTaxID", randomTaxID);
///console.log("Party1 TIN:", randomTaxID);

const randomEmpStartYear = randomNumber (2007,2020)
const randomEmpStartDate = randomEmpStartYear+"-"+randomMonth+"-"+randomDay
tc.setVar("randomEmpStartDate", randomEmpStartDate);
///console.log("Party1 randomEmpStartDate:", randomEmpStartDate);

const randomBizFormedYear = randomNumber (1986,2021)
const randomBizFormedDate = randomBizFormedYear+"-"+randomMonth+"-"+randomDay
tc.setVar("randomBizFormedDate", randomBizFormedDate);
///console.log("Party1 randomBizFormedDate:", randomBizFormedDate);
}
module.exports = [randomNumber, setEnvVariables];
