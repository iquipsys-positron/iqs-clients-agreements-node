"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ServiceAgreementsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-agreements", "controller", "*", "*", "*"));
    }
    getAgreements(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'service_agreements.get_agreements');
        this._controller.getAgreements(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getAgreementById(correlationId, agreementId, callback) {
        let timing = this.instrument(correlationId, 'service_agreements.get_agreement_by_id');
        this._controller.getAgreementById(correlationId, agreementId, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }
    createAgreement(correlationId, agreement, callback) {
        let timing = this.instrument(correlationId, 'service_agreements.create_agreement');
        this._controller.createAgreement(correlationId, agreement, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }
    updateAgreement(correlationId, agreement, callback) {
        let timing = this.instrument(correlationId, 'service_agreements.update_agreement');
        this._controller.updateAgreement(correlationId, agreement, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }
    deleteAgreementById(correlationId, agreementId, callback) {
        let timing = this.instrument(correlationId, 'service_agreements.delete_agreement_by_id');
        this._controller.deleteAgreementById(correlationId, agreementId, (err, agreement) => {
            timing.endTiming();
            callback(err, agreement);
        });
    }
}
exports.ServiceAgreementsDirectClientV1 = ServiceAgreementsDirectClientV1;
//# sourceMappingURL=ServiceAgreementsDirectClientV1.js.map