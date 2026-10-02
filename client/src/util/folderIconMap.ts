import type { IconName } from '../types/icons';

export type FolderPickerIcon = {
  emoji: string;
  icon: IconName;
};

export const FOLDER_PICKER_ICONS: FolderPickerIcon[] = [
  { emoji: '📁', icon: 'folder-tabs-folder' },
  { emoji: '💬', icon: 'folder-tabs-chats' },
  { emoji: '✅', icon: 'folder-tabs-chat' },
  { emoji: '📢', icon: 'folder-tabs-channel' },
  { emoji: '👥', icon: 'folder-tabs-group' },
  { emoji: '👤', icon: 'folder-tabs-user' },
  { emoji: '🤖', icon: 'folder-tabs-bot' },
  { emoji: '⭐', icon: 'folder-tabs-star' },
  { emoji: '🐱', icon: 'folder-tabs-cat' },
  { emoji: '👑', icon: 'folder-tabs-crown' },
  { emoji: '📕', icon: 'folder-tabs-book' },
  { emoji: '💰', icon: 'folder-tabs-bitcoin' },
  { emoji: '🎮', icon: 'folder-tabs-gamepad' },
  { emoji: '💡', icon: 'folder-tabs-bulb2' },
  { emoji: '👍', icon: 'folder-tabs-like2' },
  { emoji: '🎵', icon: 'folder-tabs-music' },
  { emoji: '🎨', icon: 'folder-tabs-paintbrush' },
  { emoji: '✈️', icon: 'folder-tabs-airplane' },
  { emoji: '🏀', icon: 'folder-tabs-sport' },
  { emoji: '🎓', icon: 'folder-tabs-graduation' },
  { emoji: '🌹', icon: 'folder-tabs-mountain' },
  { emoji: '🏠', icon: 'folder-tabs-home' },
  { emoji: '❤️', icon: 'folder-tabs-heart' },
  { emoji: '🎭', icon: 'folder-tabs-mask' },
  { emoji: '🍸', icon: 'folder-tabs-wineglass' },
  { emoji: '📈', icon: 'folder-tabs-chart' },
  { emoji: '💼', icon: 'folder-tabs-briefcase' },
  { emoji: '🔔', icon: 'folder-tabs-notification' },
  { emoji: '📋', icon: 'folder-tabs-clipboard' },
];

export const folderIconMap: Record<string, IconName> = {
  // Folder
  '🗂': 'folder-tabs-folder',
  '📁': 'folder-tabs-folder',
  '📂': 'folder-tabs-folder',

  // Chats / All
  '💬': 'folder-tabs-chats',
  '🗨️': 'folder-tabs-chats',
  '🗨': 'folder-tabs-chats',

  // Chat / Unread
  '✅': 'folder-tabs-chat',
  '✔️': 'folder-tabs-chat',
  '✔': 'folder-tabs-chat',

  // Channels
  '📢': 'folder-tabs-channel',
  '📣': 'folder-tabs-channel',

  // Groups
  '👥': 'folder-tabs-group',

  // Users
  '👤': 'folder-tabs-user',

  // Bots
  '🤖': 'folder-tabs-bot',

  // Star / Favorites
  '⭐': 'folder-tabs-star',
  '⭐️': 'folder-tabs-star',
  '🌟': 'folder-tabs-star',

  // Cat
  '🐱': 'folder-tabs-cat',
  '🐈': 'folder-tabs-cat',

  // Crown
  '👑': 'folder-tabs-crown',

  // Book
  '📕': 'folder-tabs-book',
  '📖': 'folder-tabs-book',
  '📚': 'folder-tabs-book',
  '📗': 'folder-tabs-book',
  '📘': 'folder-tabs-book',
  '📙': 'folder-tabs-book',

  // Bitcoin / Money
  '💰': 'folder-tabs-bitcoin',
  '₿': 'folder-tabs-bitcoin',
  '🪙': 'folder-tabs-bitcoin',
  '💵': 'folder-tabs-bitcoin',

  // Gamepad
  '🎮': 'folder-tabs-gamepad',

  // Light / Bulb
  '💡': 'folder-tabs-bulb2',

  // Like
  '👍': 'folder-tabs-like2',

  // Music / Note
  '🎵': 'folder-tabs-music',
  '🎶': 'folder-tabs-music',

  // Paintbrush / Palette
  '🎨': 'folder-tabs-paintbrush',
  '🖌️': 'folder-tabs-paintbrush',
  '🖌': 'folder-tabs-paintbrush',

  // Airplane / Travel
  '✈️': 'folder-tabs-airplane',
  '✈': 'folder-tabs-airplane',
  '🛫': 'folder-tabs-airplane',
  '🛬': 'folder-tabs-airplane',

  // Sport / Basketball / Football
  '🏀': 'folder-tabs-sport',
  '⚽️': 'folder-tabs-sport',
  '⚽': 'folder-tabs-sport',

  // Graduation / Study
  '🎓': 'folder-tabs-graduation',

  // Mountain / Flower
  '🌹': 'folder-tabs-mountain',
  '🌸': 'folder-tabs-mountain',
  '🌺': 'folder-tabs-mountain',
  '🌻': 'folder-tabs-mountain',
  '🌷': 'folder-tabs-mountain',
  '💐': 'folder-tabs-mountain',
  '⛰️': 'folder-tabs-mountain',
  '⛰': 'folder-tabs-mountain',
  '🏔️': 'folder-tabs-mountain',
  '🏔': 'folder-tabs-mountain',
  '🗻': 'folder-tabs-mountain',

  // Home
  '🏠': 'folder-tabs-home',
  '🏡': 'folder-tabs-home',

  // Heart / Love
  '❤️': 'folder-tabs-heart',
  '❤': 'folder-tabs-heart',

  // Mask
  '🎭': 'folder-tabs-mask',

  // Wineglass / Party
  '🍸': 'folder-tabs-wineglass',
  '🍷': 'folder-tabs-wineglass',
  '🥂': 'folder-tabs-wineglass',

  // Chart / Trade
  '📈': 'folder-tabs-chart',
  '📊': 'folder-tabs-chart',
  '📉': 'folder-tabs-chart',

  // Briefcase / Work
  '💼': 'folder-tabs-briefcase',

  // Notification / Unmuted
  '🔔': 'folder-tabs-notification',
  '🔕': 'folder-tabs-notification',

  // Clipboard / Setup
  '📋': 'folder-tabs-clipboard',
  '📄': 'folder-tabs-clipboard',
  '📑': 'folder-tabs-clipboard',
};

export const emojiToFolderIcon = (emoji?: string): IconName | undefined => {
  if (!emoji) return undefined;
  if (folderIconMap[emoji]) return folderIconMap[emoji];
  const normalized = emoji.replace(/[\uFE0E\uFE0F]/g, '');
  return folderIconMap[normalized];
};

