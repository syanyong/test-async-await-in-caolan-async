import {eachSeries, each, everySeries } from "async";

/**
 *  Noted
 *  each: 
 *          The final process will be called when all function has been done.
 *          The result value is only error message.
 * 
 *  every:
 *          If some function returns FALSE, it will jump to final process immediately.
 *  some:
 *          If some function returns TRUE, it will jump to final process immediately.
 */

const datas = ["1", "2", "3"]

async function tryNestAsync() {
    console.log("start")
    await timeout(2000);
    try {
        let results =  await eachSeries(datas, listAction);
        console.log("print", results)
    }
    catch (err) {
        console.log("err final", err ? err.message : null)
    }
    console.log("end")
    console.log("start")
}

function tryAsync() {
    each(datas, listAction, (err, result) => {
    console.log(err ? err.message : false, result);
});
}

async function listAction (data) {
    console.log("start", data)
    if (data === "2")  throw new Error(`Invalid contents`)
    await timeout(2000);
    console.log("done", data)
    return false
}


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


tryNestAsync()

