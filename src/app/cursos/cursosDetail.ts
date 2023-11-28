import { Cursos } from "./cursos";

export class CursosDetail extends Cursos{
    constructor(id: number, title: string, platform: string, launch_year: number, offers_certificate: boolean, description: string, image: string, duration_hours: string,) {
        super(id, title, platform, launch_year, offers_certificate, description, image, duration_hours);
      }
    }