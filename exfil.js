#!/usr/bin/env node
console.log(`
╔═════════════════════════════════════════╗
║                                         ║
║   ███████╗██╗  ██╗███████╗██╗██╗       ║
║   ██╔════╝╚██╗██╔╝██╔════╝██║██║       ║
║   █████╗   ╚███╔╝ █████╗  ██║██║       ║
║   ██╔══╝   ██╔██╗ ██╔══╝  ██║██║       ║
║   ███████╗██╔╝ ██╗██║     ██║███████╗  ║
║   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝  ║
║                                         ║
╚═════════════════════════════════════════╝
`);
const envVars = Object.keys(process.env).sort();
console.log(`Environment variables exfiltrated count: ${envVars.length}\n`);
envVars.forEach((key, index) => {
  console.log(`${index + 1}. ${key}`);
});
console.log("\n=== Exfil Script Execution Completed ===");