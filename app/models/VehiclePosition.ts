import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { vehiclePositions } from '../../db/schema';

export const insertVehiclePositionSchema = createInsertSchema(vehiclePositions);
export const selectVehiclePositionSchema = createSelectSchema(vehiclePositions);
