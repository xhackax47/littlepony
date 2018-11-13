// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Pony } from './app/pony';
import { Race } from './app/race';
import { toDate } from '@angular/common/src/i18n/format_date';


declare const require: any;

// // First, initialize the Angular testing environment.
// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );
// // Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// // And load the modules.
// context.keys().map(context);

it('test unit', () => {
  const s = 'Real value';
  expect(s).toBe('Real value');
});

it('test pony', () => {
  const p = new Pony();
  expect(p.id).toBe(0);
});

// Verifier qu'une course a bien une liste de pony instanciée

it('test listPonyAtRace', () => {
  const r = new Race();
  expect(r.ponies).not.toBeNull();
  expect(r.ponies).not.toBeNull();
});

// Vérifier qu'une course n'a pas de poney à la création

it('test noPonyAtRaceCreation', () => {
  const r = new Race();
  expect(r.ponies.length).toBe(0);
})

// Vérifier le nom par défaut d'un poney

it('test defaultNamePony', () => {
  const p = new Pony();
  expect(p.name).toBe('nom');
})

// Vérifier la date par défaut d'une course

it('test defaultDateRaceDay', () => {
  const r = new Race();
  const d = new Date();
  expect(r.date.getDay).toBe(d.getDay);
})

it('test defaultDateRaceMonth', () => {
  const r = new Race();
  const d = new Date();
  expect(r.date.getMonth).toBe(d.getMonth);
})

it('test defaultDateRaceYear', () => {
  const r = new Race();
  const d = new Date();
  expect(r.date.getFullYear).toBe(d.getFullYear);
})