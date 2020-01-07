import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IServiceAgreementsClientV1 } from './IServiceAgreementsClientV1';
import { ServiceAgreementV1 } from './ServiceAgreementV1';
export declare class ServiceAgreementsDirectClientV1 extends DirectClient<any> implements IServiceAgreementsClientV1 {
    constructor();
    getAgreements(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ServiceAgreementV1>) => void): void;
    getAgreementById(correlationId: string, agreementId: string, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
    createAgreement(correlationId: string, agreement: ServiceAgreementV1, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
    updateAgreement(correlationId: string, agreement: ServiceAgreementV1, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
    deleteAgreementById(correlationId: string, agreementId: string, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
}
