//countdown timer project
//in this project you will buila countdown timeer using the date module
//date module install command
//npm install date -funs
//coding
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userinput",
    type: "number",
    message: "Plese enter the acoumt of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "second must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userinput;
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervaltime = new Date(inTime);
    setInterval((() => {
        const currtime = new Date();
        const timediff = differenceInSeconds(intervaltime, currtime);
        if (timediff <= 0) {
            console.log("timer has Expired");
            process.exit();
        }
        const min = Math.floor((timediff % (3600 * 24)) / 3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }), 1000);
}
startTime(input);
