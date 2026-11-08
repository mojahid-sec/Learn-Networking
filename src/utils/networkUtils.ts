/**
 * NETCORE Computer Networking Utilities
 * Pure networking calculations and helper functions
 */

export function calculateProgress(completedCount: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  const percentage = Math.round((completedCount / totalCount) * 100);
  return Math.min(100, Math.max(0, percentage));
}

export function isValidIpv4(ip: string): boolean {
  const parts = ip.trim().split('.');
  if (parts.length !== 4) return false;
  return parts.every(part => {
    if (!/^\d+$/.test(part)) return false;
    const num = parseInt(part, 10);
    return num >= 0 && num <= 255 && part === num.toString();
  });
}

export function ipToBinary(ip: string): string {
  if (!isValidIpv4(ip)) return '';
  return ip
    .split('.')
    .map(octet => parseInt(octet, 10).toString(2).padStart(8, '0'))
    .join('.');
}

export function getIpClass(ip: string): 'A' | 'B' | 'C' | 'D' | 'E' | 'Invalid' {
  if (!isValidIpv4(ip)) return 'Invalid';
  const firstOctet = parseInt(ip.split('.')[0], 10);
  if (firstOctet >= 1 && firstOctet <= 126) return 'A';
  if (firstOctet === 127) return 'A'; // Loopback
  if (firstOctet >= 128 && firstOctet <= 191) return 'B';
  if (firstOctet >= 192 && firstOctet <= 223) return 'C';
  if (firstOctet >= 224 && firstOctet <= 239) return 'D'; // Multicast
  if (firstOctet >= 240 && firstOctet <= 255) return 'E'; // Experimental
  return 'Invalid';
}

export function getSubnetMaskFromCidr(cidr: number): string {
  if (cidr < 0 || cidr > 32) return '255.255.255.0';
  const mask = [];
  for (let i = 0; i < 4; i++) {
    const bits = Math.max(0, Math.min(8, cidr - i * 8));
    mask.push(256 - Math.pow(2, 8 - bits));
  }
  return mask.join('.');
}

export function getSubnetCapacity(cidr: number): { totalHosts: number; usableHosts: number } {
  if (cidr < 0 || cidr > 32) return { totalHosts: 0, usableHosts: 0 };
  const hostBits = 32 - cidr;
  const totalHosts = Math.pow(2, hostBits);
  const usableHosts = cidr >= 31 ? (cidr === 31 ? 2 : 1) : Math.max(0, totalHosts - 2);
  return { totalHosts, usableHosts };
}
