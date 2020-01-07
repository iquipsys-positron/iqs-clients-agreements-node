let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ServiceAgreementV1 } from './ServiceAgreementV1';
import { IServiceAgreementsClientV1 } from './IServiceAgreementsClientV1';

export class ServiceAgreementsLambdaClientV1 extends CommandableLambdaClient implements IServiceAgreementsClientV1 {       

    constructor(config?: any) {
        super('service_agreements');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getAgreements(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ServiceAgreementV1>) => void): void {
        this.callCommand( 
            'get_agreements', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getAgreementById(correlationId: string, agreementId: string,
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        this.callCommand( 
            'get_agreement_by_id',
            correlationId,
            {
                agreement_id: agreementId
            }, 
            callback
        );        
    }

    public createAgreement(correlationId: string, agreement: ServiceAgreementV1,
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        this.callCommand(
            'create_agreement',
            correlationId,
            {
                agreement: agreement
            }, 
            callback
        );
    }

    public updateAgreement(correlationId: string, agreement: ServiceAgreementV1,
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        this.callCommand(
            'update_agreement', 
            correlationId,
            {
                agreement: agreement
            }, 
            callback
        );
    }

    public deleteAgreementById(correlationId: string, agreementId: string,
        callback: (err: any, agreement: ServiceAgreementV1) => void): void {
        this.callCommand(
            'delete_agreement_by_id', 
            correlationId,
            {
                agreement_id: agreementId
            }, 
            callback
        );
    }

}
