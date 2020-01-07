import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ServiceAgreementsNullClientV1 } from '../version1/ServiceAgreementsNullClientV1';
import { ServiceAgreementsDirectClientV1 } from '../version1/ServiceAgreementsDirectClientV1';
import { ServiceAgreementsHttpClientV1 } from '../version1/ServiceAgreementsHttpClientV1';
import { ServiceAgreementsLambdaClientV1 } from '../version1/ServiceAgreementsLambdaClientV1';

export class ServiceAgreementsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-agreements', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-agreements', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-agreements', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-agreements', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-agreements', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ServiceAgreementsClientFactory.NullClientV1Descriptor, ServiceAgreementsNullClientV1);
		this.registerAsType(ServiceAgreementsClientFactory.DirectClientV1Descriptor, ServiceAgreementsDirectClientV1);
		this.registerAsType(ServiceAgreementsClientFactory.HttpClientV1Descriptor, ServiceAgreementsHttpClientV1);
		this.registerAsType(ServiceAgreementsClientFactory.LambdaClientV1Descriptor, ServiceAgreementsLambdaClientV1);
	}
	
}
