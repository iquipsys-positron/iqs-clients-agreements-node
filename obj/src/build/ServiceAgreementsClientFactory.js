"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ServiceAgreementsNullClientV1_1 = require("../version1/ServiceAgreementsNullClientV1");
const ServiceAgreementsDirectClientV1_1 = require("../version1/ServiceAgreementsDirectClientV1");
const ServiceAgreementsHttpClientV1_1 = require("../version1/ServiceAgreementsHttpClientV1");
const ServiceAgreementsLambdaClientV1_1 = require("../version1/ServiceAgreementsLambdaClientV1");
class ServiceAgreementsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ServiceAgreementsClientFactory.NullClientV1Descriptor, ServiceAgreementsNullClientV1_1.ServiceAgreementsNullClientV1);
        this.registerAsType(ServiceAgreementsClientFactory.DirectClientV1Descriptor, ServiceAgreementsDirectClientV1_1.ServiceAgreementsDirectClientV1);
        this.registerAsType(ServiceAgreementsClientFactory.HttpClientV1Descriptor, ServiceAgreementsHttpClientV1_1.ServiceAgreementsHttpClientV1);
        this.registerAsType(ServiceAgreementsClientFactory.LambdaClientV1Descriptor, ServiceAgreementsLambdaClientV1_1.ServiceAgreementsLambdaClientV1);
    }
}
exports.ServiceAgreementsClientFactory = ServiceAgreementsClientFactory;
ServiceAgreementsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-agreements', 'factory', 'default', 'default', '1.0');
ServiceAgreementsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-agreements', 'client', 'null', 'default', '1.0');
ServiceAgreementsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-agreements', 'client', 'direct', 'default', '1.0');
ServiceAgreementsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-agreements', 'client', 'http', 'default', '1.0');
ServiceAgreementsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-agreements', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ServiceAgreementsClientFactory.js.map