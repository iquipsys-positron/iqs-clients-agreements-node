"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ServiceAgreementsNullClientV1 {
    getAgreements(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getAgreementById(correlationId, agreementId, callback) {
        callback(null, null);
    }
    createAgreement(correlationId, agreement, callback) {
        callback(null, agreement);
    }
    updateAgreement(correlationId, agreement, callback) {
        callback(null, agreement);
    }
    deleteAgreementById(correlationId, agreementId, callback) {
        callback(null, null);
    }
}
exports.ServiceAgreementsNullClientV1 = ServiceAgreementsNullClientV1;
//# sourceMappingURL=ServiceAgreementsNullClientV1.js.map