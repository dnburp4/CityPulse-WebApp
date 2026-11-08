// Kopiert den Vite-Build (dist/) nach ../Backend/assets, damit Sails das Frontend ausliefert.
// Aufruf: npm run build:backend
import { cpSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(root, '../dist');
const target = path.resolve(root, '../../Backend/assets');

if (!existsSync(dist)) {
  console.error('dist/ fehlt - zuerst "vite build" ausfuehren.');
  process.exit(1);
}

// Alte gehashte Bundles entfernen, damit sich keine Builds ansammeln.
rmSync(path.join(target, 'assets'), { recursive: true, force: true });
cpSync(dist, target, { recursive: true });
console.log(`Frontend nach ${target} kopiert.`);
