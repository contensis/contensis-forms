import { FormResponse, FormsClient, ManagementClient } from '../models';

export function createFormsClient(managementClient: ManagementClient, versionStatus: 'latest' | 'published'): FormsClient {
    // todo: should we add these methods to the management api?
    // todo: using the management client / api key you don't get any user info in created by etc
    return {
        forms: {
            get: (id: string) => {
                return managementClient.contentTypes.get({ id, versionStatus });
            },
            save: (response: FormResponse) => {
                // todo: add the save back
                // return managementClient.entries.create(response);
                return Promise.resolve(response);
            }
        }
    };
}