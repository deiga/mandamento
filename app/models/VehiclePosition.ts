import { vehiclePositions } from '../../db/schema';
import { db } from '../services/persistentStorage';

export const addVehiclePosition = async (rawVehiclePosition: any) => {
  await db.insert(vehiclePositions).values(rawVehiclePosition);
};
