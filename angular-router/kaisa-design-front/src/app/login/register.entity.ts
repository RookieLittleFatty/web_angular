import {RegisterUserEntity} from './register.user.entity';
import {RegisterQuotaEntity} from './register.quota.entity';

export class RegisterEntity {
  designInstituteName: any;
  mainPersonTelephone: any;
  cityName: any;
  projectCode: any;
  projectMan: any;
  category: any;
  jointerName: any;
  jointerTelephone: any;
  jzyRegistOuterUserEntityList: RegisterUserEntity[];
  jzyRegistQuotaEntityList: RegisterQuotaEntity[];
}
