# Deployment Guide

This portfolio app is now fully functional and ready for deployment to Vercel.

## Prerequisites

- Node.js 18+
- pnpm (package manager)
- Vercel account

## Build Status

✅ All components successfully compile
✅ TypeScript checks pass
✅ Build artifacts generated:
  - `artifacts/portfolio/dist/` - Main portfolio website
  - `artifacts/mockup-sandbox/dist/` - Component showcase
  - `artifacts/api-server/dist/` - Backend API server

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
cd Desktop/Portfolio/Portfolio
vercel
```

### Option 2: GitHub Integration (Recommended)

1. Push code to GitHub repository
2. Go to https://vercel.com/new
3. Import the GitHub repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"

### Configuration

The `vercel.json` at the root specifies:
- **buildCommand**: `pnpm install --frozen-lockfile && pnpm run build`
- **outputDirectory**: `artifacts/portfolio/dist`
- **framework**: Vite
- **cleanUrls**: enabled

## Environment Variables

Currently, the app doesn't require environment variables for deployment. If needed in the future:

1. Create a `.env.local` file locally with your variables
2. In Vercel dashboard: Project Settings → Environment Variables
3. Add each variable as a secret or public variable

## Post-Deployment

After deploying to Vercel:

1. Your portfolio will be available at: `https://<your-vercel-domain>.vercel.app`
2. You can set a custom domain in Vercel project settings
3. SSL certificate is automatically provisioned

## Troubleshooting

### Build Fails
- Check that all dependencies are properly listed in `package.json` files
- Verify TypeScript compilation: `pnpm run typecheck`
- Check environment variables are not required during build

### Assets Not Loading
- Ensure `BASE_PATH` and `PORT` environment variables are set (they now have defaults in vite.config.ts)
- Check that static assets in `public/` folder are included in the build output

### Performance Issues
- Monitor Vercel Analytics for slow pages
- Check gzip compression is enabled for assets
- Review bundle size with `pnpm run build` output

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server for portfolio
cd artifacts/portfolio
pnpm run dev

# Build for production
pnpm run build
```

## Project Structure

```
Portfolio/
├── artifacts/
│   ├── portfolio/          # Main portfolio website (Vite + React)
│   ├── mockup-sandbox/     # UI component showcase
│   └── api-server/         # Backend API (Node.js with Pino logging)
├── lib/
│   ├── api-client-react/   # React API client
│   ├── api-spec/           # OpenAPI specification
│   ├── api-zod/            # Zod schema validation
│   └── db/                 # Database schemas (Drizzle ORM)
├── scripts/                # Utility scripts
├── package.json            # Workspace root
├── pnpm-workspace.yaml     # Monorepo workspace config
└── vercel.json            # Vercel deployment config
```

## What's Fixed

1. ✅ Fixed TypeScript compilation errors in `RightDecor.tsx`
2. ✅ Installed ARM64 native dependencies (@rollup/rollup-darwin-arm64, lightningcss-darwin-arm64, @tailwindcss/oxide-darwin-arm64)
3. ✅ Fixed Vite config to provide default values for PORT and BASE_PATH
4. ✅ Created root-level `vercel.json` for proper Vercel deployment
5. ✅ Clean successful build of all artifacts

## Next Steps

1. Push to GitHub
2. Connect to Vercel
3. Deploy with one click
4. Monitor performance in Vercel dashboard

---

For more information, visit:
- [Vercel Docs](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [pnpm Documentation](https://pnpm.io/)
