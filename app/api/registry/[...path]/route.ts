const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components', 'ui');
const registryDir = path.join(__dirname, 'registry', 'glitchcn');

const componentDeps: Record<string, string[]> = {
  alert: ['class-variance-authority'],
  badge: ['class-variance-authority'],
  button: ['@radix-ui/react-slot', 'class-variance-authority'],
  card: [],
  command: ['cmdk', '@radix-ui/react-dialog'],
  dialog: ['@radix-ui/react-dialog'],
  input: [],
  progress: ['@radix-ui/react-progress'],
  separator: ['@radix-ui/react-separator'],
  sheet: ['@radix-ui/react-dialog', 'class-variance-authority'],
  sidebar: ['@radix-ui/react-separator', '@radix-ui/react-slot'],
  skeleton: [],
  table: [],
  tabs: ['@radix-ui/react-tabs'],
  tooltip: ['@radix-ui/react-tooltip'],
};

const componentFiles = fs.readdirSync(componentsDir);

componentFiles.forEach((file: string) => {
  if (!file.endsWith('.tsx')) return;
  
  const componentName = file.replace('.tsx', '');
  const componentPath = path.join(componentsDir, file);
  const content = fs.readFileSync(componentPath, 'utf8');
  
  const registryData = {
    name: componentName,
    type: 'registry:ui',
    dependencies: componentDeps[componentName] || [],
    devDependencies: [],
    registryDependencies: [],
    files: [
      {
        path: `components/ui/${file}`,
        content: content,
        type: 'registry:ui',
        target: `components/ui/${file}`
      }
    ],
    tailwind: {
      config: {
        theme: {
          extend: {}
        }
      }
    }
  };
  
  const outputPath = path.join(registryDir, `${componentName}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(registryData, null, 2));
  console.log(`Generated: ${componentName}.json`);
});

console.log('\nRegistry generation complete!');
console.log('Note: Fix separator typo (seperator.json -> separator.json)');