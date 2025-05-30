# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e6627dba-10a9-49d6-8314-b2be81faa951

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e6627dba-10a9-49d6-8314-b2be81faa951) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy with Lovable (Recommended)

Simply open [Lovable](https://lovable.dev/projects/e6627dba-10a9-49d6-8314-b2be81faa951) and click on Share -> Publish.

### Option 2: Deploy to GitHub Pages

This project is configured for GitHub Pages deployment with automatic CI/CD.

#### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code to the main branch:**
   ```sh
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **The GitHub Action will automatically:**
   - Build your project
   - Deploy it to GitHub Pages
   - Your site will be available at: `https://yourusername.github.io/hussle-space-ai-forge/`

#### Manual Deployment

You can also deploy manually using the gh-pages package:

```sh
# Build and deploy to GitHub Pages
npm run deploy
```

**Note:** Make sure you have enabled GitHub Pages in your repository settings and set the source to "Deploy from a branch" with the `gh-pages` branch selected.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Troubleshooting GitHub Pages Deployment

### Getting 404 errors after deployment?

This project has been configured to handle GitHub Pages routing issues:

1. **HashRouter**: The app uses HashRouter instead of BrowserRouter for better compatibility with GitHub Pages
2. **404.html fallback**: A 404.html file redirects users back to the main app
3. **SPA redirect script**: The main index.html includes a script to handle direct URL access

### Common issues and solutions:

- **404 on page refresh**: Fixed by the HashRouter and redirect scripts
- **Assets not loading**: Make sure the `base` path in `vite.config.ts` matches your repository name
- **Deployment not updating**: Check the Actions tab in your GitHub repository for build status
- **Custom domain issues**: Make sure to add a CNAME file in the public directory with your domain name

### Checking deployment status:

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. Check the latest workflow run for any errors
4. Your site should be available at: `https://yourusername.github.io/hussle-space-ai-forge/`
