export default function formatUsername(username: string, asAbsoluteLink?: boolean) {
  return asAbsoluteLink ? `t.me/${username}` : `@${username}`;
}
