/* tslint:disable */
/* eslint-disable */
/**
 * SampleAPI
 * サンプルののAPI定義です。 
 *
 * The version of the OpenAPI document: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 会員情報
 * @export
 * @interface Member
 */
export interface Member {
    /**
     * メンバーID
     * @type {number}
     * @memberof Member
     */
    memberId: number;
    /**
     * メールアドレス
     * @type {string}
     * @memberof Member
     */
    email: string;
    /**
     * メールアドレス2
     * @type {string}
     * @memberof Member
     */
    email2?: string;
}

export function MemberFromJSON(json: any): Member {
    return MemberFromJSONTyped(json, false);
}

export function MemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): Member {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'memberId': json['memberId'],
        'email': json['email'],
        'email2': !exists(json, 'email2') ? undefined : json['email2'],
    };
}

export function MemberToJSON(value?: Member | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'memberId': value.memberId,
        'email': value.email,
        'email2': value.email2,
    };
}


