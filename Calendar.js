var read = require('readline-sync');
var utility = require('../CalendarDemo/Utility');
var month = read.questionInt("Enter month : ");
var year = read.questionInt("Enter year : ");
var display = require('util');

var format=/[0-9]/;

if(format.test(month) && format.test(year))
{
    utility.calender(month,year);
}
else
{
    console.log("Invalid month or year ");
}