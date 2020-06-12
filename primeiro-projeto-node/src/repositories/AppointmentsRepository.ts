import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// DTO: Data Transfer Object
interface CreateAppointmentDTO {
    provider: string;
    date: Date
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    // Retornar todos os agendamentos
    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        // Verificar se alguma data é igual a outra
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date )
        );

        return findAppointment || null;
    }

    // provider: string, date: Date
    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;
