import {
  date,
  doublePrecision,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const vehiclePositions = pgTable('vehicle_positions', {
  id: serial('id').primaryKey(),
  desi: text('desi'),
  dir: text('dir'),
  oper: integer('oper'),
  veh: integer('veh'),
  tst: text('tst'),
  tsi: text('tsi'),
  spd: doublePrecision('spd'),
  hdg: integer('hdg'),
  lat: numeric('lat', { precision: 6, scale: 4 }),
  long: numeric('long', { precision: 6, scale: 4 }),
  acc: doublePrecision('acc'),
  dl: integer('dl'),
  odo: integer('odo'),
  drst: integer('drst'),
  oday: date('oday'),
  jrn: integer('jrn'),
  line: integer('line'),
  start: text('start'),
  loc: text('loc'),
  stop: text('stop'),
  route: text('route'),
  occu: integer('occu'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
