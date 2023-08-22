import { empleadoModel } from "../models/empleadoModel.js";

export const seedDt = async(req, res) => {
    try {
        await empleadoModel.deleteMany();
        const empleados = await empleadoModel.create(data)
        response(res, 201, true, empleados, "empleado creado")
    } catch (error) {
        response(res, 500, false, "", error.message)
    }
}