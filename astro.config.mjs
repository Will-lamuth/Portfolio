import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://wills-portfolio-site.s3-website.us-east-2.amazonaws.com',
  integrations: [mdx(), sitemap(), tailwind()]
});