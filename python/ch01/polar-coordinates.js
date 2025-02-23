#!/home/slytobias/n/bin/node
/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   polar-coordinates.js
//
//   Description
//
//   Started:           Sat Feb 22 19:49:20 2025
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
//   Notes:  Ex. 1.2.23
//
//////////////////////////////////////////////////////////////////////////////
"use strict";

let args = process.argv.slice(2);

function isValid(n) {
    return typeof n !== undefined  &&  !isNaN(n);
}

function convert(s) {
    let m = Number(s);
    
    return isValid(m) ? m : NaN;
}

function cartesianToPolar(x, y) {
    return [Math.hypot(x, y), Math.atan2(y, x)];
}

if (args.length === 2) {
    let x = convert(args[0]);
    let y = convert(args[1]);

    if (isNaN(x) || isNaN(y)) {
        console.log("Corrupt");
    } else {
        let [r, θ] = cartesianToPolar(x, y);
        console.log(`(${x},${y}) -> r: ${r}, θ: ${θ}`);
    }
}
