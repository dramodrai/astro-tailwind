---
name: "NPM safe update"
slug: "npm-safe-update"
layout: "@/layouts/PostLayout.astro"
---

# How NPM safe Update With Npm Check Updates

When you come back to an old web dev project, it’s important to update your packages to get new features, bug fixes, and security patches. NPM Check Updates is a CLI that will help you safely make those updates. Here’s my general approach.

1. Install NPM Check Updates.
   It’s often best to just install NPM check updates globally. (Alternatively, you can run it with NPX.)

```js
npm install -g npm-check-updates
```

> Markup
> Note: Access the full docs for NPM Check Updates.

2. Run NPM Check Updates.
   cd to a directory with your project and run the following command.

```js
npx ncu
```

Markup
This will return a list of packages that need to be updated. Here’s what it looks like:

[====================] 15/15 100%

- @notionhq/client ^0.4.11 → ^0.4.13
- node-fetch ^2.6.6 → ^3.2.0
- gulp-autoprefixer ^7.0.1 → ^8.0.0
- gulp-imagemin ^7.1.0 → ^8.0.0
- gulp-sass ^5.0.0 → ^5.1.0
- gulp-terser ^2.0.1 → ^2.1.0
- sass ^1.35.2 → ^1.49.7

> Markup
> The existing version is on the left and the latest version is on the right. NPU maintains semantic versioning policies, so you can quickly identify patches, minor updates, or major updates that need fixing.

Note: In semantic versioning, the number on the right stands for patches (bug fixes), the number in the middle stands for minor versions (new features added in a backwards compatible manner), and major versions (new features added in a breaking manner). So … MAJOR.MINOR.PATCH.

3. Update Patches.
   First, I update all patches. Assuming the package maintainers are following semantic versioning, this shouldn’t break anything.

```js
npx ncu -u -t patch
```

> Markup
> Run npm i, ensure everything is still working, and commit the changes (so I can revert if necessary).

4. Update Minor Versions.
   Next, I update all minor updates. Again, assuming the package maintainers are following semantic versioning, this shouldn’t break anything.

```js
npx ncu -u -t minor
```

> Markup
> Run npm i, ensure everything is still working, and commit the changes (so I can revert if necessary).

5. Update Major Versions.
   Finally, I update all major updates. Before you update these, you should read the release note docs to see how the new version will affect your project. Once you know how the updates will affect your code, update each major change in a separate commit.

With NCU, you can filter for a specific package by using the –filter or -f flag. So in this case, let’s say I’m starting with node-fetch. I’d type the following command:

```js
npx ncu -u -f node-fetch
```

> Markup
> Run npm i, ensure everything is still working, and commit the changes (so I can revert if necessary).

Then proceed to the next package to the next major version.
