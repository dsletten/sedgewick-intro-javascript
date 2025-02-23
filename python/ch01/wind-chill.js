#!/home/slytobias/n/bin/node
/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   wind-chill.js
//
//   Description
//
//   Started:           Tue Feb 18 22:06:59 2025
//   Modifications:
//
//   Purpose:
//
//   Calling Sequence:
//
//
//   Inputs:
//
//
//   Outputs:
//
//
//   Example:
//
//   Notes:  Ex. 1.2.22
//
//////////////////////////////////////////////////////////////////////////////
"use strict";



//    "Reference" version!! https://www.weather.gov/epz/wxcalc_windchill
function windChillRef(F, mph) {
    var wChill;

    wChill = 35.74 + .6215*F - 35.75*Math.pow(mph, 0.16) + 0.4275*F*Math.pow(mph, 0.16);
    return wChill;
}

// [40, 37, 12, 0, -7].forEach(t => [5, 20, 45, 75].forEach(v => console.log(`${t} ${v} ${windChillRef(t, v)}`)))

// 40 5 36.47240485832117
// 40 20 30.4807859131122
// 40 45 26.307998160694833
// 40 75 23.387517939630655
// 37 5 32.94872840957032
// 37 20 26.54508526611843
// 37 45 22.085348436356544
// 37 75 18.964036264433663
// 12 5 3.5847580033133504
// 12 20 -6.252420125496235
// 12 45 -13.103399266462443
// 12 75 -17.898311028874513
// 0 5 -10.509947791689996
// 0 20 -21.99522271347127
// 0 45 -29.993998163815554
// 0 75 -35.592237729662436
// -7 5 -18.73185950544195
// -7 20 -31.178524223123375
// -7 45 -39.846847520604875
// -7 75 -45.91369497178873

let args = process.argv.slice(2);

function isValid(n, f) {
    return typeof n !== undefined  &&  !isNaN(n)  &&  f(n);
}

function convert(s, f) {
    let m = Number(s);
    
    return isValid(m, f) ? m : NaN;
}

function windChill(t, v) {
    return 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * (v ** 0.16);
}

if (args.length === 2) {
    let t = convert(args[0], t => Math.abs(t) <= 50);
    let v = convert(args[1], v => 3 <= v && v <= 120);

    if (isNaN(t) || isNaN(v)) {
        console.log("Corrupt");
    } else {
        console.log(`Wind chill: ${windChill(t, v)}`);
        console.log(`Wind chill: ${windChillRef(t, v)}`);
        console.log(windChill(t, v) === windChillRef(t, v));
    }
}
