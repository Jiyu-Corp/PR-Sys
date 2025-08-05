import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./Brand";
import { VehicleType } from "./VehicleType";
import { Vehicle } from "./Vehicle";

@Index("model_pkey", ["idModel"], { unique: true })
@Entity("model", { schema: "public" })
export class Model {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_model" })
  idModel: number;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @ManyToOne(() => Brand, (brand) => brand.models, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_brand", referencedColumnName: "idBrand" }])
  idBrand: Brand;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.models, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "id_vehicle_type", referencedColumnName: "idVehicleType" },
  ])
  idVehicleType: VehicleType;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.idModel)
  vehicles: Vehicle[];
}
