"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyBcrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
class MyBcrypt {
    // Method to hash a password
    static hash(password, // The plain text password to be hashed
    saltRounds = MyBcrypt.SALT_ROUNDS // Number of salt rounds, default to SALT_ROUNDS if not provided
    ) {
        // Generate a random 16-byte salt and convert it to a hexadecimal string
        const salt = crypto_1.default.randomBytes(16).toString("hex");
        // Compute the PBKDF2 hash using the provided password, generated salt, salt rounds, key length, and hash algorithm
        const hash = crypto_1.default
            .pbkdf2Sync(password, salt, saltRounds, 64, "sha512") // 64 bytes length and sha512 hashing algorithm
            .toString("hex"); // Convert the binary hash output to a hexadecimal string
        // Return the combined salt and hash, separated by a dollar sign
        return `${salt}$${hash}`;
    }
    // Method to compare a plain text password with a hashed password
    static compare(password, hash) {
        // Split the stored hash into salt and hash components
        const [salt, originalHash] = hash.split("$");
        // Recompute the hash using the provided password and extracted salt
        const newHash = crypto_1.default
            .pbkdf2Sync(password, salt, MyBcrypt.SALT_ROUNDS, 64, "sha512") // Ensure to use the same parameters as in hashing
            .toString("hex"); // Convert the binary hash output to a hexadecimal string
        // Return true if the newly computed hash matches the original hash, otherwise false
        return newHash === originalHash;
    }
}
exports.MyBcrypt = MyBcrypt;
// Default number of salt rounds for PBKDF2, higher is more secure but slower
MyBcrypt.SALT_ROUNDS = 10;
