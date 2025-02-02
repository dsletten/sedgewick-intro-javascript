/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   parabola.js
//
//   Description
//
//   Started:           Thu Jan 23 00:38:30 2025
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

function Parabola({a = 0, b = 0, c = 0}) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.root1 = null;
    this.root2 = null;

    Parabola.calculateRoots(this);
}

Parabola.prototype.constructor = Parabola;
Object.defineProperty(Parabola.prototype, "constructor", {enumerable: false, configurable: false});

Parabola.calculateRoots = function(parabola) {
    function normalize(root) {
        return root === 0 ? Math.abs(root) : root;
    }

    let discriminant = parabola.getB() * parabola.getB() - 4 * parabola.getA() * parabola.getC();
    let d = Math.sqrt(discriminant);

    if (parabola.getB() >= 0) {
        parabola.root1 = normalize((2 * parabola.getC()) / (-parabola.getB() - d));
        parabola.root2 = normalize((-parabola.getB() - d) / (2 * parabola.getA()));
    } else {
        parabola.root1 = normalize((-parabola.getB() + d) / (2 * parabola.getA()));
        parabola.root2 = normalize((2 * parabola.getC()) / (-parabola.getB() + d));
    }
};        

Parabola.prototype.getA = function() {
    return this.a;
};

Parabola.prototype.getB = function() {
    return this.b;
};

Parabola.prototype.getC = function() {
    return this.c;
};

Parabola.prototype.firstRoot = function() {
    return this.root1;
};

Parabola.prototype.secondRoot = function() {
    return this.root2;
};

Parabola.prototype.toString = function() {
    function quadraticTerm(a) {
        if (a === 0) {
            return "";
        } else if (a === 1) {
            return `x²`;
        } else {
            return `${a}x²`;
        }
    }

    function linearTerm(b) {
        if (b === 0) {
            return "";
        } else if (b === 1) {
            return "x";
        } else if (b === -1) {
            return "-x";
        } else {
            return (b > 0 ? "+" : "") + `${b}x`;
        }
    }

    function constantTerm(c) {
        if (c === 0) {
            return "";
        } else {
            return (c > 0 ? "+" : "") + c;
        }
    }

    return `${quadraticTerm(this.getA())}${linearTerm(this.getB())}${constantTerm(this.getC())} [${this.firstRoot()} ${this.secondRoot()}]`;
};

            
