#!/bin/sh

SOURCE_DIR="/app/dist-src"
TARGET_DIR="/app/dist"

echo "Populating volume with built files..."
cp -r $SOURCE_DIR/* $TARGET_DIR/

# Execute the container's main command
exec "$@"
