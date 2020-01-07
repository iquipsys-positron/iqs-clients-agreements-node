"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ServiceAgreementsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/service_agreements');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getAgreements(correlationId, filter, paging, callback) {
        this.callCommand('get_agreements', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getAgreementById(correlationId, agreementId, callback) {
        this.callCommand('get_agreement_by_id', correlationId, {
            agreement_id: agreementId
        }, callback);
    }
    createAgreement(correlationId, agreement, callback) {
        this.callCommand('create_agreement', correlationId, {
            agreement: agreement
        }, callback);
    }
    updateAgreement(correlationId, agreement, callback) {
        this.callCommand('update_agreement', correlationId, {
            agreement: agreement
        }, callback);
    }
    deleteAgreementById(correlationId, agreementId, callback) {
        this.callCommand('delete_agreement_by_id', correlationId, {
            agreement_id: agreementId
        }, callback);
    }
}
exports.ServiceAgreementsHttpClientV1 = ServiceAgreementsHttpClientV1;
//# sourceMappingURL=ServiceAgreementsHttpClientV1.js.map