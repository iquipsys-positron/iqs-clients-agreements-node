import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IServiceAgreementsClientV1 } from './IServiceAgreementsClientV1';
//import { IServiceAgreementsController } from 'iqs-services-agreements-node';
import { ServiceAgreementV1 } from './ServiceAgreementV1';

export class ServiceAgreementsDirectClientV1 extends DirectClient<any> implements IServiceAgreementsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-agreements", "controller", "*", "*", "*"))
    }

    public getAgreements(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ServiceAgreementV1>) => void): void {
        let timing = this.instrument(correlationId, 'service_agreements.get_agreements');
        this._controller.getAgreements(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getAgreementById(correlationId: string, agreementId: string, 
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        let timing = this.instrument(correlationId, 'service_agreements.get_agreement_by_id');
        this._controller.getAgreementById(correlationId, agreementId, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }

    public createAgreement(correlationId: string, agreement: ServiceAgreementV1, 
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        let timing = this.instrument(correlationId, 'service_agreements.create_agreement');
        this._controller.createAgreement(correlationId, agreement, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }

    public updateAgreement(correlationId: string, agreement: ServiceAgreementV1, 
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        let timing = this.instrument(correlationId, 'service_agreements.update_agreement');
        this._controller.updateAgreement(correlationId, agreement, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }

    public deleteAgreementById(correlationId: string, agreementId: string,
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        let timing = this.instrument(correlationId, 'service_agreements.delete_agreement_by_id');
        this._controller.deleteAgreementById(correlationId, agreementId, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }

}