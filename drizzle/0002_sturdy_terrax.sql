ALTER TABLE "vehicle_positions" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "oper" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "veh" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "spd" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "hdg" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "lat" SET DATA TYPE numeric(6, 4);--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "long" SET DATA TYPE numeric(6, 4);--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "acc" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "dl" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "odo" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "drst" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "jrn" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "line" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "vehicle_positions" ALTER COLUMN "occu" SET DATA TYPE integer;