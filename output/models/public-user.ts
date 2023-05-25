/* tslint:disable */
/* eslint-disable */
/**
 * ErcWorld Marketplace
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface PublicUser
 */
export interface PublicUser {
    /**
     * User Internal ID
     * @type {number}
     * @memberof PublicUser
     */
    id?: number;
    /**
     * User Internal Name
     * @type {string}
     * @memberof PublicUser
     */
    username?: string | null;
    /**
     * User Wallet
     * @type {string}
     * @memberof PublicUser
     */
    wallet?: string | null;
    /**
     * User Bio under the avatarImg in User profile page
     * @type {string}
     * @memberof PublicUser
     */
    userbio?: string | null;
    /**
     * Background image of the user profile
     * @type {string}
     * @memberof PublicUser
     */
    coverImg?: string | null;
    /**
     * Avatar image of the user profile
     * @type {string}
     * @memberof PublicUser
     */
    avatarImg?: string | null;
    /**
     * User followers
     * @type {number}
     * @memberof PublicUser
     */
    followers?: number;
    /**
     * User following
     * @type {number}
     * @memberof PublicUser
     */
    following?: number;
    /**
     * User liked
     * @type {number}
     * @memberof PublicUser
     */
    liked?: number;
    /**
     * User likes
     * @type {number}
     * @memberof PublicUser
     */
    likes?: number;
}
