// Builds the site the way a preview should be built, then serves it.
//
// Run it with:   npm run preview
//
// Two things make this different from `npm run build`:
//
//  1. It sets VERCEL_ENV=preview, which makes robots.txt say "Disallow: /"
//     and puts "noindex" on every page. That matters because a preview is
//     reachable from the internet through ngrok, and we do not want Google
//     to index it as a second copy of the real site.
//
//  2. It serves on port 3100 instead of 3000, so it does not fight with
//     `npm run dev`.
//
// Setting an environment variable in front of a command only works in
// bash, not in Windows PowerShell, which is why this is a small script
// rather than a line in package.json.

import { spawn } from "node:child_process";

const PORT = 3100;

// Everything below runs with VERCEL_ENV=preview.
const env = { ...process.env, VERCEL_ENV: "preview" };

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", shell: true, env });
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} exited with code ${code}`)),
    );
  });
}

console.log("\nBuilding the preview (search engines will be told to ignore it)...\n");
await run("npx", ["next", "build"]);

console.log(`\nStarting the preview on http://localhost:${PORT}`);
console.log("Share it with:  ngrok http " + PORT);
console.log("Press Ctrl+C to stop.\n");

await run("npx", ["next", "start", "-p", String(PORT)]);
