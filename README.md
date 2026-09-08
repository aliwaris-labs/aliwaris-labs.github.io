# Ali Waris — Test Automation Engineer

Portfolio source prepared for https://aliwaris1.github.io/.

The site showcases [OrderFlow](https://github.com/Aliwaris1/orderflow-api-quality)
and [LedgerGuard](https://github.com/Aliwaris1/ledgerguard-api-quality), including
API integration tests and performance testing with Cucumber, JMeter and Grafana.

## Local development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Edit `app/page.tsx` for content, `app/globals.css` for styling and
`app/layout.tsx` for metadata.

## GitHub Pages

The repository must be public and named `aliwaris1.github.io` under `Aliwaris1`.
In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
Push to `main` to build and publish, or run **Publish portfolio** manually.

`npm run build` exports the website to `dist/client`, including its fonts and
other assets. The workflow uploads only this static output. No paid domain,
API keys or server runtime are required.
