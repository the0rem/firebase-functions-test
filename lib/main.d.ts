import { CloudFunction, Change } from 'firebase-functions';
/** Fields of the event context that can be overridden/customized. */
export declare type EventContextOptions = {
    /** ID of the event. If omitted, a random ID will be generated. */
    eventId?: string;
    /** ISO time string of when the event occurred. If omitted, the current time is used. */
    timestamp?: string;
    /** The values for the wildcards in the reference path that a database or Firestore function is listening to.
     * If omitted, random values will be generated.
     */
    params?: {
        [option: string]: any;
    };
    /** (Only for database functions.) Firebase auth variable representing the user that triggered
     *  the function. Defaults to null.
     */
    auth?: any;
    /** (Only for database functions.) The authentication state of the user that triggered the function.
     * Default is 'UNAUTHENTICATED'.
     */
    authType?: 'ADMIN' | 'USER' | 'UNAUTHENTICATED';
};
/** A function that can be called with test data and optional override values for the event context.
 * It will subsequently invoke the cloud function it wraps with the provided test data and a generated event context.
 */
export declare type WrappedFunction = (data: any, options?: EventContextOptions) => any | Promise<any>;
/** Takes a cloud function to be tested, and returns a WrappedFunction which can be called in test code. */
export declare function wrap<T>(cloudFunction: CloudFunction<T>): WrappedFunction;
/** Make a Change object to be used as test data for Firestore and real time database onWrite and onUpdate functions. */
export declare function makeChange<T>(before: T, after: T): Change<T>;
/** Mock values returned by `functions.config()`. */
export declare function mockConfig(config: {
    [key: string]: {
        [key: string]: any;
    };
}): void;
