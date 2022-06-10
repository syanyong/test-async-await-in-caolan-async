import { waterfall } from "async";

waterfall([step1, step2, step3, step4], (err, result) => {
    console.log("stepFinal", err ? err.message: null, result)
    // err.message = Invalid contents
    // err = message + line number
    // if (err) throw err
})

async function step1() {
    console.log("step1")
    return 1
} 

async function step2(arg1) {
    console.log("step2",arg1)
    // throw new Error(`Invalid contents`) // It will step the next step
    return 2
} 

async function step3(arg1) {
    console.log("step3",arg1)
    return 3
} 

async function step4 (arg1) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("step4", arg1)
            // reject ("error")
            resolve(10)
        }, 2000);
    })
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

