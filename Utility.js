var read = require('readline-sync');


module.exports = 
{
    leapYear(year)
    {
        var count=0;
        var format=/[0-9]/;
        var temp=year;
        while(format.test(temp!=0))
        {
            temp=parseInt(temp/10);
            count++;
        }
        if(count == 4)
        {
            if(year % 4 === 0 && (year % 100 !=0 || year % 400 ===0 ))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            console.log("Enter only Four Digit Year");
        }
    
    },
    calender(month,year)
    {

        var months=[
            "",
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        var days=[0,31,28,31,30,31,30,31,30,31,30,31,30];
        if(month === 2 && this.leapYear(year))
        {
            days[months]=29;
        }

        var day=this.day(month,1,year);
        console.log("Day "+day)

        console.log("   " + months[month] + " " + year);
            console.log(" S  M  T  W  T  F  S");
            for (let i = 0; i < day; i++) 
            {
              process.stdout.write("   ");
            
            }
            for (var i = 1; i <= days[month]; i++) 
            {
                
                if (i <= 9)
                {
                    process.stdout.write(" 0"+i)
                }
                else
                {
                    process.stdout.write(" "+i)
                }
               
                if (((i + day) % 7 == 0) || (i == days[month])) 
                { 
                    console.log(" ")
                } 
            }
    },
    day(month,days, year) {
        var y = year - Math.floor((14 - month) / 12);
        var x = y + Math.floor((y / 4)) - Math.floor((y / 100)) + Math.floor((y / 400));
        m = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d = (days + x + Math.floor((31 * m) / 12)) % 7;
        return d;
    }
}