import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    public async findByDate(date: Date): Promise<Appointment | null> {
        // Verificar se alguma data é igual a outra
        // const findAppointment = this.appointments.find(appointment =>
        //     isEqual(date, appointment.date )
        // );

        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }

}

export default AppointmentsRepository;
