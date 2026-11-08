import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateProgress,
  isValidIpv4,
  ipToBinary,
  getIpClass,
  getSubnetMaskFromCidr,
  getSubnetCapacity,
} from './networkUtils';

test('calculateProgress calculates bounds correctly', () => {
  assert.equal(calculateProgress(0, 50), 0);
  assert.equal(calculateProgress(25, 50), 50);
  assert.equal(calculateProgress(50, 50), 100);
  assert.equal(calculateProgress(0, 0), 0);
  assert.equal(calculateProgress(60, 50), 100);
});

test('isValidIpv4 validates real addresses', () => {
  assert.equal(isValidIpv4('192.168.1.1'), true);
  assert.equal(isValidIpv4('10.0.0.254'), true);
  assert.equal(isValidIpv4('172.16.254.1'), true);
  assert.equal(isValidIpv4('256.1.1.1'), false);
  assert.equal(isValidIpv4('192.168.1'), false);
  assert.equal(isValidIpv4('abc.def.ghi.jkl'), false);
  assert.equal(isValidIpv4('01.02.03.04'), false); // Leading zeroes
});

test('ipToBinary converts dotted decimal to 8-bit octets', () => {
  assert.equal(ipToBinary('192.168.1.1'), '11000000.10101000.00000001.00000001');
  assert.equal(ipToBinary('10.0.0.1'), '00001010.00000000.00000000.00000001');
});

test('getIpClass determines IPv4 address classes', () => {
  assert.equal(getIpClass('10.10.10.1'), 'A');
  assert.equal(getIpClass('172.16.0.1'), 'B');
  assert.equal(getIpClass('192.168.0.1'), 'C');
  assert.equal(getIpClass('224.0.0.1'), 'D');
  assert.equal(getIpClass('245.0.0.1'), 'E');
});

test('getSubnetMaskFromCidr and getSubnetCapacity calculate network masks and host limits', () => {
  assert.equal(getSubnetMaskFromCidr(24), '255.255.255.0');
  assert.equal(getSubnetMaskFromCidr(16), '255.255.0.0');
  assert.equal(getSubnetMaskFromCidr(8), '255.0.0.0');
  assert.equal(getSubnetMaskFromCidr(28), '255.255.255.240');

  const cap24 = getSubnetCapacity(24);
  assert.equal(cap24.totalHosts, 256);
  assert.equal(cap24.usableHosts, 254);

  const cap30 = getSubnetCapacity(30);
  assert.equal(cap30.totalHosts, 4);
  assert.equal(cap30.usableHosts, 2);
});
