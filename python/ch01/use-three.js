/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   use-three.js
//
//   Description
//
//   Started:           Mon Jan  6 01:55:59 2025
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

function commifyList(elts) {
    if (elts === null  ||  elts.length === 0) {
        return "";
    } else if (elts.length === 1) {
        return elts[0];
    } else if (elts.length === 2) {
        return `${elts[0]} and ${elts[1]}`;
    } else {
        let result = '';

        for (let i = 0; i < elts.length - 1; i++ ) {
            result += elts[i];
            result += ", ";
        }
        
        result += `and ${elts[elts.length-1]}`;

        return result;
    }
}
