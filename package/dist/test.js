"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// src/test.ts
const password = "superSecretPassword";
// Hash the password
const hashedPassword = index_1.MyBcrypt.hash(password);
console.log("Hashed Password:", hashedPassword);
// Compare the password
const isMatch = index_1.MyBcrypt.compare(password, hashedPassword);
console.log("Password match:", isMatch);
