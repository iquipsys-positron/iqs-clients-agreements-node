let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ServiceAgreementV1 } from '../../src/version1/ServiceAgreementV1';
import { IServiceAgreementsClientV1 } from '../../src/version1/IServiceAgreementsClientV1';

let AGREEMENT1: ServiceAgreementV1 = {
    id: '1',
    number: 'A',
    create_time: new Date(),
    active: true,
    start_time: new Date(2017, 2, 1),
    end_time: new Date(2017, 3, 1),
    company: 'Company 1'
};
let AGREEMENT2: ServiceAgreementV1 = {
    id: '2',
    number: 'B',
    create_time: new Date(),
    active: true,
    start_time: new Date(2017, 2, 1),
    end_time: new Date(2017, 3, 1),
    company: 'Company 2'
};

export class ServiceAgreementsClientFixtureV1 {
    private _client: IServiceAgreementsClientV1;
    
    constructor(client: IServiceAgreementsClientV1) {
        this._client = client;
    }
        
    testCrudOperations(done) {
        let agreement1, agreement2;

        async.series([
        // Create one agreement
            (callback) => {
                this._client.createAgreement(
                    null,
                    AGREEMENT1,
                    (err, agreement) => {
                        assert.isNull(err);

                        assert.isObject(agreement);
                        assert.equal(agreement.number, AGREEMENT1.number);
                        assert.equal(agreement.active, AGREEMENT1.active);
                        assert.equal(agreement.company, AGREEMENT1.company);
                    
                        agreement1 = agreement;

                        callback();
                    }
                );
            },
        // Create another agreement
            (callback) => {
                this._client.createAgreement(
                    null,
                    AGREEMENT2,
                    (err, agreement) => {
                        assert.isNull(err);

                        assert.isObject(agreement);
                        assert.equal(agreement.number, AGREEMENT2.number);
                        assert.equal(agreement.active, AGREEMENT2.active);
                        assert.equal(agreement.company, AGREEMENT2.company);
                    
                        agreement2 = agreement;

                        callback();
                    }
                );
            },
        // Get all agreements
            (callback) => {
                this._client.getAgreements(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, agreements) => {
                        assert.isNull(err);

                        assert.isObject(agreements);
                        assert.isTrue(agreements.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the agreement
            (callback) => {
                agreement1.number = 'A1';

                this._client.updateAgreement(
                    null,
                    agreement1,
                    (err, agreement) => {
                        assert.isNull(err);

                        assert.isObject(agreement);
                        assert.equal(agreement.number, 'A1');
                        assert.equal(agreement.id, agreement1.id);

                        agreement1 = agreement;

                        callback();
                    }
                );
            },
        // Delete agreement
            (callback) => {
                this._client.deleteAgreementById(
                    null,
                    agreement1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete agreement
            (callback) => {
                this._client.getAgreementById(
                    null,
                    agreement1.id,
                    (err, agreement) => {
                        assert.isNull(err);
                        
                        assert.isNull(agreement || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
