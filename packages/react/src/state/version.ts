import { VersionStatus } from '../models';

export function isPublishedVersion(versionStatus: VersionStatus) {
    return !versionStatus || (versionStatus === 'published');
}
