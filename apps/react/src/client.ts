import { FormResponse, createFormsClient } from '@contensis/forms';
import { Client as ManagementClient } from 'contensis-management-api';

type CreateClientOptions = {
    alias: string;
    projectId: string;
    clientId: string;
    clientSecret: string;
    versionStatus: null | string;
};

export function createClient({ alias, projectId, clientId, clientSecret, versionStatus }: CreateClientOptions) {
    const managementClient = ManagementClient.create({
        clientType: "client_credentials",
        clientDetails: {
            clientId,
            clientSecret
        },
        projectId,
        rootUrl: `https://cms-${alias}.cloud.contensis.com`
    });

    return createFormsClient(
        managementClient,
        (versionStatus === 'latest') ? 'latest' : 'published'
    );
}