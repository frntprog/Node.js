import { log } from "console";
import { pbkdf2 } from "crypto";

const start = Date.now();

pbkdf2("123ttt", "5", 100000, 64, "sha512", () => {
  console.log("1 end", Date.now() - start);
});

pbkdf2("123ttt", "5", 100000, 64, "sha512", () => {
  console.log("2 end", Date.now() - start);
});

pbkdf2("123ttt", "5", 100000, 64, "sha512", () => {
  console.log("3 end", Date.now() - start);
});

pbkdf2("123ttt", "5", 100000, 64, "sha512", () => {
  console.log("4 end", Date.now() - start);
});

pbkdf2("123ttt", "5", 100000, 64, "sha512", () => {
  console.log("5 end", Date.now() - start);
});

console.log(start);
