import { I18n } from '@i18n/i18n';

export class I18nAppNavBarMenu extends I18n<{
  HOME: string;
  ABOUT: string;
  SERVICES: string;
  CONTACT_US: string;
  GALLERY: string;
  LOGIN: string;
}> {

  public constructor() {
    super();
    this.loadI18n();
  }

  protected get en() {
    return {
      HOME: 'Home',
      ABOUT: 'About',
      SERVICES: 'Services',
      CONTACT_US: 'Contact us',
      GALLERY: 'Gallery',
      LOGIN: 'Login',
    };
  }

  protected override get es() {
    return {
      HOME: 'Inicio',
      ABOUT: 'Acerca de',
      SERVICES: 'Servicios',
      CONTACT_US: 'Contáctenos',
      GALLERY: 'Galería',
      LOGIN: 'Conectarse',
    };
  }

  protected override get fr() {
    return {
      HOME: 'Accueil',
      ABOUT: 'À propos',
      SERVICES: 'Prestations',
      CONTACT_US: 'Nous contacter',
      GALLERY : 'Galerie',
      LOGIN: 'Se connecter',
    };
  }

  protected override get de() {
    return {
      HOME: 'Heim',
      ABOUT: 'Um',
      SERVICES: 'Dienstleistungen',
      CONTACT_US: 'Kontaktiere uns',
      GALLERY: 'Galerie',
      LOGIN: 'Login',
    };
  }

  protected override get it() {
    return {
      HOME: 'Casa',
      ABOUT: 'Informazioni',
      SERVICES: 'Servizi',
      CONTACT_US: 'Contattaci',
      GALLERY: 'Galleria',
      LOGIN: 'Login',
    };
  }
}