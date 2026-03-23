#!/bin/bash

events_dir="/Users/mihawii/Mentorschools/mentor-school/src/app/images/events"

# Create directory if it doesn't exist
mkdir -p "$events_dir"

cd "$events_dir"

# Download science fair image
curl -o science-fair.jpg https://images.unsplash.com/photo-1526336024174-e58f5cdd8e09?auto=format&fit=crop&w=400&q=80

# Download open house image
curl -o open-house.jpg https://images.unsplash.com/photo-1516896352165-706575b38439?auto=format&fit=crop&w=400&q=80

# Download summer camp image
curl -o summer-camp.jpg https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80
