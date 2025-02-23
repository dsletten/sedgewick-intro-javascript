#!/home/slytobias/n/bin/node
/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   polar-coordinates2.js
//
//   Description
//
//   Started:           Sun Feb 23 14:14:26 2025
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
//   Notes:
//
//////////////////////////////////////////////////////////////////////////////
"use strict";

function PolarCoordinates(r, θ) {
    this.r = r;
    this.θ = θ;
}

PolarCoordinates.prototype.constructor = PolarCoordinates;
Object.defineProperty(PolarCoordinates.prototype, "constructor", {enumerable: false, configurable: false});

PolarCoordinates.prototype.toString = function() {
    return `r: ${this.r} θ: ${this.θ}`;
};

PolarCoordinates.cartesianToPolar = function(x, y) {
    return new PolarCoordinates(Math.hypot(x, y), Math.atan2(y, x));
};

let args = process.argv.slice(2);

function isValid(n) {
    return typeof n !== undefined  &&  !isNaN(n);
}

function convert(s) {
    let m = Number(s);
    
    return isValid(m) ? m : NaN;
}

if (args.length === 2) {
    let x = convert(args[0]);
    let y = convert(args[1]);

    if (isNaN(x) || isNaN(y)) {
        console.log("Corrupt");
    } else {
        let polar = PolarCoordinates.cartesianToPolar(x, y);
        console.log(`(${x},${y}) -> ${polar}`);
    }
}
