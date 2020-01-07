import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { ServiceAgreementV1 } from './ServiceAgreementV1';
import { IServiceAgreementsClientV1 } from './IServiceAgreementsClientV1';
export declare class ServiceAgreementsLambdaClientV1 extends CommandableLambdaClient implements IServiceAgreementsClientV1 {
    constructor(config?: any);
    getAgreements(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ServiceAgreementV1>) => void): void;
    getAgreementById(correlationId: string, agreementId: string, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
    createAgreement(correlationId: string, agreement: ServiceAgreementV1, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
    updateAgreement(correlationId: string, agreement: ServiceAgreementV1, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
    deleteAgreementById(correlationId: string, agreementId: string, callback: (err: any, agreement: ServiceAgreementV1) => void): void;
}
