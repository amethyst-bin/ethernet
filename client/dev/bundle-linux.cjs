const fs = require('fs');
const path = require('path');

const releaseDir = path.resolve(__dirname, '../../release');
const linuxUnpacked = path.join(releaseDir, 'linux-unpacked');
const portableDir = path.join(releaseDir, 'Ethernet-Linux-x64-Portable');
const tarGzPath = path.join(releaseDir, 'ethernet-12.0.41.tar.gz');

// 1. Update Ethernet-Linux-x64-Portable folder
if (fs.existsSync(linuxUnpacked)) {
  console.log('[1/3] Updating Ethernet-Linux-x64-Portable directory...');
  if (!fs.existsSync(portableDir)) fs.mkdirSync(portableDir, { recursive: true });
  fs.cpSync(linuxUnpacked, portableDir, { recursive: true });
}

// 2. Self-extracting runner header
const launcherHeader = `#!/usr/bin/env bash
# Ethernet Telegram Client - Self-Extracting Linux Portable Bundle
set -e

SCRIPT_PATH="$(readlink -f "\${BASH_SOURCE[0]}" 2>/dev/null || realpath "\${BASH_SOURCE[0]}" 2>/dev/null || echo "$0")"
SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" >/dev/null 2>&1 && pwd)"

INSTALL_DIR="\${XDG_DATA_HOME:-\$HOME/.local/share}/Ethernet"
mkdir -p "$INSTALL_DIR"

VERSION_FILE="$INSTALL_DIR/.version"
CURRENT_VERSION="12.0.41"

if [ ! -f "$INSTALL_DIR/Ethernet" ] || [ ! -f "$VERSION_FILE" ] || [ "$(cat "$VERSION_FILE" 2>/dev/null)" != "$CURRENT_VERSION" ]; then
  echo "[Ethernet] Распаковка компонентов в $INSTALL_DIR..."
  PAYLOAD_LINE=$(grep -a -n '^__PAYLOAD_BEGINS__' "$SCRIPT_PATH" | cut -d: -f1)
  PAYLOAD_LINE=$((PAYLOAD_LINE + 1))
  tail -n +$PAYLOAD_LINE "$SCRIPT_PATH" | tar -xzf - -C "$INSTALL_DIR" --strip-components=1
  echo "$CURRENT_VERSION" > "$VERSION_FILE"
  echo "[Ethernet] Успешно распаковано!"
fi

chmod +x "$INSTALL_DIR/start.sh" "$INSTALL_DIR/run.sh" "$INSTALL_DIR/Ethernet" "$INSTALL_DIR/chrome-sandbox" "$INSTALL_DIR/chrome_crashpad_handler" 2>/dev/null || true

# Register desktop shortcut if not already present
DESKTOP_DIR="\${XDG_DATA_HOME:-\$HOME/.local/share}/applications"
if [ -d "$DESKTOP_DIR" ]; then
  cat > "$DESKTOP_DIR/Ethernet.desktop" <<EOF
[Desktop Entry]
Name=Ethernet
Comment=Ethernet Telegram Desktop Client
Exec="$INSTALL_DIR/start.sh" %U
Icon=$INSTALL_DIR/resources/app/public/icon-512x512.png
Terminal=false
Type=Application
Categories=Network;Chat;InstantMessaging;
StartupWMClass=ethernet
MimeType=x-scheme-handler/tg;x-scheme-handler/tonsite;
EOF
  chmod +x "$DESKTOP_DIR/Ethernet.desktop" 2>/dev/null || true
fi

exec "$INSTALL_DIR/start.sh" "$@"
exit 0
__PAYLOAD_BEGINS__
`;

// 3. Create Ethernet-Linux-x64.AppImage and Ethernet-Linux-x64.run
if (fs.existsSync(tarGzPath)) {
  console.log('[2/3] Generating self-extracting Linux portable executables...');
  const headerBuffer = Buffer.from(launcherHeader, 'utf8');
  const tarGzBuffer = fs.readFileSync(tarGzPath);
  const bundleBuffer = Buffer.concat([headerBuffer, tarGzBuffer]);

  fs.writeFileSync(path.join(releaseDir, 'Ethernet-Linux-x64.AppImage'), bundleBuffer);
  fs.writeFileSync(path.join(releaseDir, 'Ethernet-Linux-x64.run'), bundleBuffer);

  console.log('[3/3] Creating Ethernet-Linux-x64-Portable.tar.gz...');
  fs.copyFileSync(tarGzPath, path.join(releaseDir, 'Ethernet-Linux-x64-Portable.tar.gz'));

  console.log('✓ All Linux Portable artifacts generated successfully!');
} else {
  console.error('Error: tar.gz archive not found at ' + tarGzPath);
  process.exit(1);
}
