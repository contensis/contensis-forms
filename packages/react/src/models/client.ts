import { ContentType } from './api';

export type FormsClient = {
    forms: FormsOperations;
};

type FormsOperations = {
    get(formId: string): Promise<ContentType>;
    save(response: FormResponse): Promise<Record<string, any>>;
};

export type FormResponse = {
    sys: FormResponseSys;
    [key: string]: any;
};

export interface FormResponseSys {
	contentTypeId: string;
	dataFormat: 'form';
	language: string;
}

export type ManagementClientGetOptions = {
    id: string;
    versionStatus: 'latest' | 'published'
};

export type ManagementClient = {
    contentTypes: ManagementContentTypeOperations;
    entries: ManagementEntryOperations;
};

type ManagementContentTypeOperations = {
    get(options: ManagementClientGetOptions): Promise<any>;
};

type ManagementEntryOperations = {
    create(response: any): Promise<any>;
};
