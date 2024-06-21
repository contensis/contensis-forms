import { Dictionary, Nullable, ValidationError } from '../models';

function handleError(error: unknown) {
    console.log(error);
}

function getErrorMessages(errors: Nullable<Dictionary<ValidationError>>) {
    return !!errors ? Object.values(errors).map((e) => e.message) : null;
}

export const Errors = {
    handleError,
    getErrorMessages
};