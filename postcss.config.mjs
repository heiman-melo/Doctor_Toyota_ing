/** @type {import('postcss-load-config').Config} */
let plugins = {};

try {
  // Only activate tailwindcss if installed in node_modules to avoid crash
  await import('tailwindcss');
  plugins = {
    tailwindcss: {},
    autoprefixer: {},
  };
} catch {
  // If tailwindcss is not yet installed via npm, avoid breaking Next.js build
  plugins = {};
}

const config = {
  plugins,
};

export default config;
