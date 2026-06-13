# Git Setup & Daily Commit Guide

## Step 1 — Create the repo on GitHub
1. Go to https://github.com/new
2. Repository name: dsa-solutions
3. Description: LeetCode solutions in JavaScript — 2 problems every day
4. Set to Public
5. Do NOT add README (you already have one)
6. Click "Create repository"

## Step 2 — Set up on your computer
Open your terminal and run these commands one by one:

```bash
cd ~
git clone https://github.com/muhammedirfan07/dsa-solutions.git
cd dsa-solutions
```

Then copy all the files from this download into that folder.

Then push:
```bash
git add .
git commit -m "init: add first 4 solutions and notes"
git push origin main
```

## Step 3 — Your daily routine (5 minutes)

After solving a problem on LeetCode, save the file and run:

```bash
cd dsa-solutions
git add .
git commit -m "solve: two-sum — arrays, hash map (easy)"
git push
```

## Good commit message format
```
solve: problem-name — topic (difficulty)

Examples:
solve: valid-parentheses — stack (easy)
solve: longest-substring — sliding window (medium)
solve: binary-search — arrays (easy)
notes: add sliding window pattern explanation
fix: two-sum — cleaner variable names
```

## Update the README progress table
Every week, update this line in README.md:
```md
| 🟢 Easy    | 14     |   ← change the number
```
Then commit:
```bash
git commit -m "chore: update progress — 14 easy solved"
```
