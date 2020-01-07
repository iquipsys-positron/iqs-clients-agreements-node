import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IServiceAgreementsClientV1 } from './IServiceAgreementsClientV1';
import { ServiceAgreementV1 } from './ServiceAgreementV1';

export class ServiceAgreementsNullClientV1 implements IServiceAgreementsClientV1 {
            
    public getAgreements(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ServiceAgreementV1>) => void): void {
        callback(null, new DataPage<ServiceAgreementV1>([], 0));
    }

    public getAgreementById(correlationId: string, agreementId: string, 
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        callback(null, null);
    }

    public createAgreement(correlationId: string, agreement: ServiceAgreementV1, 
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        callback(null, agreement);
    }

    public updateAgreement(correlationId: string, agreement: ServiceAgreementV1, 
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        callback(null, agreement);
    }

    public deleteAgreementById(correlationId: string, agreementId: string,
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        callback(null, null);
    }

}