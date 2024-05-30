import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudianteModel";
import { Profesor } from "../models/profesorModel";
import { Curso } from "../models/cursoModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "CursosExpressJs",
    synchronize: false,
    logging: true,
    entities: [Estudiante, Profesor, Curso],
    subscribers: [],
    migrations: [],
})
