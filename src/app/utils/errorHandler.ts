import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export function errorHandler(err: HttpErrorResponse) {
    let msg = '';
    if (err.error instanceof ErrorEvent) {
        msg = `Client Error Occured: ${err.error.message}`;
    } else {
        msg = `Server Error Occured: ${err.status} ${err.statusText}`;
    }
    return throwError(() => ({
        error: err.error,
        message: msg,
        messageDesc: err.message,
    }));
}
