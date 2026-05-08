#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const RESET  = '\x1b[0m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE   = '\x1b[34m';
const RED    = '\x1b[31m';

console.log('');
console.log(`${BLUE}\u2554${'\u2550'.repeat(42)}\u2557${RESET}`);
console.log(`${BLUE}\u2551   ui-redesign-director installer      \u2551${RESET}`);
console.log(`${BLUE}\u255a${'\u2550'.repeat(42)}\u255d${RESET}`);
console.log('');

const SKILL_DIR = path.join(os.homedir(), '.codex', 'skills', 'ui-redesign-director');
const REPO      = 'https://github.com/afu-it/ui-redesign-director.git';

try {
  if (fs.existsSync(path.join(SKILL_DIR, '.git'))) {
    console.log(`${YELLOW}\u25ba Updating existing skill...${RESET}`);
    execSync(`git -C "${SKILL_DIR}" pull --quiet`, { stdio: 'inherit' });
  } else {
    console.log(`${YELLOW}\u25ba Installing skill to ${SKILL_DIR}...${RESET}`);
    fs.mkdirSync(path.dirname(SKILL_DIR), { recursive: true });
    execSync(`git clone --quiet "${REPO}" "${SKILL_DIR}"`, { stdio: 'inherit' });
  }
  console.log(`${GREEN}\u2713 Skill installed${RESET}`);
} catch (err) {
  console.error(`${RED}\u2717 Failed to install skill: ${err.message}${RESET}`);
  process.exit(1);
}

console.log('');
console.log(`${GREEN}\u2554${'\u2550'.repeat(42)}\u2557${RESET}`);
console.log(`${GREEN}\u2551        Installation complete!          \u2551${RESET}`);
console.log(`${GREEN}\u255a${'\u2550'.repeat(42)}\u255d${RESET}`);
console.log('');
console.log(`${BLUE}Skill installed to:${RESET}`);
console.log(`  ${SKILL_DIR}`);
console.log('');
console.log(`${BLUE}Docs:${RESET} https://github.com/afu-it/ui-redesign-director`);
console.log('');
