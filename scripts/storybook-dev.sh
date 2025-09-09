#!/bin/bash

# Storybook Development Script
echo "🚀 Starting Storybook for Webflow Components..."

# Check if Storybook is already running
if lsof -Pi :6006 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Storybook is already running on port 6006"
    echo "📖 Open http://localhost:6006 to view your stories"
    exit 0
fi

# Start Storybook
echo "📚 Starting Storybook server..."
npm run storybook

echo "✅ Storybook started successfully!"
echo "📖 Open http://localhost:6006 to view your stories"
echo ""
echo "Available stories:"
echo "  • FeaturedJobsSlider - Job slider component"
echo "  • JobsPage - Full job listings page"
echo ""
echo "Press Ctrl+C to stop Storybook"
