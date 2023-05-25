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
import { Currency } from './currency';
import { CurrencyValue } from './currency-value';
import { NftStandard } from './nft-standard';
/**
 * 
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * Collection Name
     * @type {string}
     * @memberof Collection
     */
    name?: string;
    /**
     * Address
     * @type {string}
     * @memberof Collection
     */
    contractAddress?: string;
    /**
     * Image Url
     * @type {string}
     * @memberof Collection
     */
    img?: string;
    /**
     * NFT Standard
     * @type {NftStandard}
     * @memberof Collection
     */
    standard?: NftStandard | null;
    /**
     * NFT Standard
     * @type {Currency}
     * @memberof Collection
     */
    currency?: Currency | null;
    /**
     * Floor Price
     * @type {CurrencyValue}
     * @memberof Collection
     */
    floorPrice?: CurrencyValue | null;
    /**
     * Volume
     * @type {CurrencyValue}
     * @memberof Collection
     */
    volume?: CurrencyValue | null;
}
