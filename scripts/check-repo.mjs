#!/usr/bin/env node
// Comprobaciones mínimas del repositorio (hito 0).
// Se ejecutan en el CI: `node scripts/check-repo.mjs`.

import { existsSync } from 'node:fs';

const requiredFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'LICENSE',
  '.gitignore',
  '.github/pull_request_template.md',
  '.github/dependabot.yml',
  'docs/README.md',
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    failures.push(`falta el archivo requerido: ${file}`);
  }
}

if (failures.length > 0) {
  console.error('Comprobaciones del repositorio fallidas:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Comprobaciones del repositorio: OK');
