import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';
import appointmentsRepository from '../repositories/AppointmentsRepository';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import appointmentsRouter from '../routes/appointments.routes';

/*
Recebimento das informações
Tratativa de erros/exceções
Acesso ao repositório
*/

interface Request {
    provider_id: string;
    date: Date;
}

/*
Dependency Inversion (SOLID)
*/

class CreateAppointmentService {
    public async execute({ date, provider_id }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);

        const appointmentDate = startOfHour(date);

        // Verificar se alguma data é igual a outra
        const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

        if (findAppointmentInSameDate) {
            throw new AppError('This appointment is already booked');
        }

        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });

        await appointmentsRepository.save(appointment);

        return appointment;
    }
}


export default CreateAppointmentService;
