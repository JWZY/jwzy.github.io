#!/bin/bash

# Build the Next.js site
npm run build

# Copy the output to the root directory
cp -r out/* ../

# Commit and push the changes
cd ..
git add .
git commit -m "Deploy Next.js site"
git push origin main 