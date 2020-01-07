let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ServiceAgreementsMemoryPersistence } from 'iqs-services-agreements-node';
import { ServiceAgreementsController } from 'iqs-services-agreements-node';
import { ServiceAgreementsHttpServiceV1 } from 'iqs-services-agreements-node';
import { IServiceAgreementsClientV1 } from '../../src/version1/IServiceAgreementsClientV1';
import { ServiceAgreementsHttpClientV1 } from '../../src/version1/ServiceAgreementsHttpClientV1';
import { ServiceAgreementsClientFixtureV1 } from './ServiceAgreementsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ServiceAgreementsRestClientV1', ()=> {
    let service: ServiceAgreementsHttpServiceV1;
    let client: ServiceAgreementsHttpClientV1;
    let fixture: ServiceAgreementsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ServiceAgreementsMemoryPersistence();
        let controller = new ServiceAgreementsController();

        service = new ServiceAgreementsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-agreements', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-agreements', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-agreements', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ServiceAgreementsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ServiceAgreementsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
