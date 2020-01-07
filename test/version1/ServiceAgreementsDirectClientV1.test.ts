let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ServiceAgreementsMemoryPersistence } from 'iqs-services-agreements-node';
import { ServiceAgreementsController } from 'iqs-services-agreements-node';
import { IServiceAgreementsClientV1 } from '../../src/version1/IServiceAgreementsClientV1';
import { ServiceAgreementsDirectClientV1 } from '../../src/version1/ServiceAgreementsDirectClientV1';
import { ServiceAgreementsClientFixtureV1 } from './ServiceAgreementsClientFixtureV1';

suite('ServiceAgreementsDirectClientV1', ()=> {
    let client: ServiceAgreementsDirectClientV1;
    let fixture: ServiceAgreementsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ServiceAgreementsMemoryPersistence();
        let controller = new ServiceAgreementsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-agreements', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-agreements', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ServiceAgreementsDirectClientV1();
        client.setReferences(references);

        fixture = new ServiceAgreementsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
