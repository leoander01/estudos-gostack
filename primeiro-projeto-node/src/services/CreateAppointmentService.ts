import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import appointmentsRepository from '../repositories/AppointmentsRepository';

/*
Recebimento das informações
Tratativa de erros/exceções
Acesso ao repositório
*/

interface Request {
    provider: string;
    date: Date;
}

/*
Dependency Inversion (SOLID)
*/

class CreateAppointmentService {
    private appointmentsRepository: appointmentsRepository;

    constructor(appointmentsRepository: appointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        // Verificar se alguma data é igual a outra
        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);

        if (findAppointmentInSameDate) {
            throw Error('This appointment is already booked');
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}


export default CreateAppointmentService;
