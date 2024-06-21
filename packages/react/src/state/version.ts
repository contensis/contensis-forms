import { Nullable, VersionStatus } from '../models';

function isPublishedVersion(versionStatus: Nullable<VersionStatus>) {
    return !versionStatus || (versionStatus === 'published');
}

export const Version = {
    isPublishedVersion
};