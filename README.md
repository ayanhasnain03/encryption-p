# encryption-p

<p><code>encryption-p</code> is a lightweight password hashing library written in TypeScript, similar to bcrypt. It provides simple utilities for securely hashing and comparing passwords using Node.js' <code>crypto</code> module.</p>

## Features

<ul>
  <li>Secure password hashing using <code>pbkdf2Sync</code>.</li>
  <li>Customizable salt rounds.</li>
  <li>Easy-to-use API for hashing and comparing passwords.</li>
</ul>

## Installation

<p>Install the package using npm:</p>

<pre><code>npm install encryption-p
</code></pre>

## Usage

### Hashing a Password

<pre><code>import { MyBcrypt } from "encryption-p";

const password = "mysecretpassword";
const hashedPassword = MyBcrypt.hash(password);

console.log(hashedPassword); // Outputs hashed password with salt
</code></pre>

### Comparing a Password

<pre><code>import { MyBcrypt } from "encryption-p";

const password = "mysecretpassword";
const hashedPassword = "stored_hashed_password";

const isMatch = MyBcrypt.compare(password, hashedPassword);

if (isMatch) {
  console.log("Password matches!");
} else {
  console.log("Invalid password.");
}
</code></pre>

## API

### <code>MyBcrypt.hash(password: string, saltRounds?: number): string</code>

<p>Hashes the provided password using the given number of salt rounds (default is 10). Returns the hashed password along with the salt.</p>

<ul>
  <li><code>password</code> - The plain text password to be hashed.</li>
  <li><code>saltRounds</code> - (Optional) Number of salt rounds to apply.</li>
</ul>

### <code>MyBcrypt.compare(password: string, hash: string): boolean</code>

<p>Compares a plain text password with a previously hashed password. Returns <code>true</code> if the password matches, otherwise <code>false</code>.</p>

<ul>
  <li><code>password</code> - The plain text password to compare.</li>
  <li><code>hash</code> - The hashed password to compare against.</li>
</ul>

## License

<p>This project is licensed under the MIT License.</p>

## Author

<<<<<<< HEAD
<p><a href="https://github.com/yourgithubprofile">Ayan Hasnain</a></p>
=======
<p><a href="https://github.com/ayanhasnain03">Ayan Hasnain</a></p>
>>>>>>> 09dce16c01c8dfa617e30f55c85bf8315a9b1dfe
