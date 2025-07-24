# Publishing Checklist

## Automated Publishing Setup (One-time setup)

### 1. Get your npm token

- Login to [npmjs.com](https://www.npmjs.com)
- Go to Account Settings → Access Tokens
- Generate a new token (choose "Automation" type)
- Copy the token

### 2. Add npm token to GitHub secrets

- Go to your GitHub repository
- Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `NPM_TOKEN`
- Value: paste your npm token

## Automated Publishing Workflow

With the GitHub Actions workflow, publishing happens automatically when:

1. **On every push to master** (if version in package.json changed)

   - Tests run automatically
   - If tests pass and version is new, publishes to npm
   - Creates a git tag automatically

2. **On GitHub release creation**
   - When you create a release on GitHub
   - Tests run, then publishes to npm

## Manual Publishing Process

## Before Publishing

- [ ] Update version in `package.json` using semantic versioning
  - `npm version patch` for bug fixes (1.0.0 → 1.0.1)
  - `npm version minor` for new features (1.0.0 → 1.1.0)
  - `npm version major` for breaking changes (1.0.0 → 2.0.0)
- [ ] Update CHANGELOG.md (if you have one)
- [ ] Run tests: `npm test`
- [ ] Build the library: `npm run build`
- [ ] Test the build locally with `npm link`
- [ ] Commit all changes
- [ ] Push to GitHub

## Publishing

```bash
# Login to npm (if not already)
npm login

# Publish to npm
npm publish

# For scoped packages on first publish
npm publish --access public
```

## After Publishing

- [ ] Create a git tag: `git tag v{version}`
- [ ] Push tags: `git push --tags`
- [ ] Create a GitHub release
- [ ] Update documentation/examples if needed

## Troubleshooting

- **Name already taken**: Use a scoped package `@username/package-name`
- **Authentication error**: Run `npm login`
- **Version already exists**: Bump the version number
- **Files too large**: Check your `.npmignore` or `files` field in package.json
