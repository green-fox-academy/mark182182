'use strict';

import { Sum } from './sum';

const test = require('tape');

test('This checks if numbers are added correctly', t => {
  const sumAll: Sum = new Sum();
  const testIntegers: number[] = [1, 2, 3];
  t.deepEqual(sumAll.sumOfTheElements(testIntegers), [6], 'Should be equal');
  t.end();
});

test('This checks if numbers are added correctly', t => {
  const sumAll: Sum = new Sum();
  const testIntegers: number[] = [];
  t.deepEqual(sumAll.sumOfTheElements(testIntegers), [], 'Should be equal');
  t.end();
});

test('This checks if numbers are added correctly', t => {
  const sumAll: Sum = new Sum();
  const testIntegers: number[] = [1];
  t.deepEqual(sumAll.sumOfTheElements(testIntegers), [1], 'Should be equal');
  t.end();
});

test('This checks if numbers are added correctly', t => {
  const sumAll: Sum = new Sum();
  const testIntegers: number[] = [null];
  t.deepEqual(sumAll.sumOfTheElements(testIntegers), [null], 'Should be equal');
  t.end();
});

test('This checks if numbers are added correctly', t => {
  const sumAll: Sum = new Sum();
  const testIntegers: number[] = [1, 2, 3];
  t.notEqual(sumAll.sumOfTheElements(testIntegers), ['a string'], 'Should not be equal');
  t.end();
});