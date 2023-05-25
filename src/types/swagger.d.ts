/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Auction {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  seller?: TokenUser | null;
  /** Token Price */
  price?: AuctionPrice | null;
}

/** Price */
export interface AuctionPrice {
  minOffer?: CurrencyValue | null;
  buyNow?: CurrencyValue | null;
}

export interface Collection {
  /** Collection Name */
  name?: string;
  /** Address */
  contractAddress?: string;
  /** Image Url */
  img?: string;
  /** NFT Standard */
  standard?: NftStandard | null;
  /** NFT Standard */
  currency?: Currency | null;
  /** Floor Price */
  floorPrice?: CurrencyValue | null;
  /** Volume */
  volume?: CurrencyValue | null;
}

/** List Type */
export enum CollectionsOrder {
  Trending = "trending",
  RecentlyListed = "recentlyListed",
  Ascending = "ascending",
  Descending = "descending"
}

/** Nft Standard */
export enum Currency {
  Eth = "eth",
  Sol = "sol"
}

/** Price */
export interface CurrencyValue {
  /** The message */
  currency?: Currency;
  /**
   * Value
   * @format double
   */
  value?: number;
  /**
   * Value
   * @format double
   */
  usdValue?: number | null;
}

export interface ErcWorldUser {
  /**
   * User Internal ID
   * @format int64
   */
  id?: number;
  /** User Internal Name */
  username?: string | null;
  /** User Wallet */
  wallet?: string;
  /** User Bio under the avatarImg in User profile page */
  bio?: string | null;
  /** Background image of the user profile */
  coverSrc?: string | null;
  /** Avatar image of the user profile */
  avatarSrc?: string | null;
  /**
   * User followers
   * @format int32
   */
  followers?: number;
  /**
   * User following
   * @format int32
   */
  following?: number;
  /** @format date-time */
  createDate?: string;
  /**
   * User followers
   * @format int32
   */
  likes?: number;
  /**
   * User following
   * @format int32
   */
  liked?: number;
  /** User Email */
  email?: string | null;
  /** Messengers settings */
  messengers?: UserMessenger[] | null;
  /** Notification and authentication settings */
  settings?: UserSetting | null;
}

export interface ErcWorldUserBo {
  /**
   * User Internal ID
   * @format int64
   */
  id?: number;
  /** User Internal Name */
  username?: string | null;
  /** User Pass */
  password?: string | null;
  /** User Wallet */
  wallet?: string;
  /** User Bio under the avatarImg in User profile page */
  fullname?: string | null;
  /** Background image of the user profile */
  email?: string | null;
  /** Avatar image of the user profile */
  pic?: string | null;
  /** Avatar image of the user profile */
  roles?: string[] | null;
  /** Avatar image of the user profile */
  permissions?: string[] | null;
  /**
   * Avatar image of the user profile
   * @format int32
   */
  status?: number | null;
  /** User Wallet */
  occupation?: string | null;
}

export interface ErcWorldUserDttResponse {
  /**
   * Total
   * @format int32
   */
  recordsTotal?: number;
  /**
   * Filtered
   * @format int32
   */
  recordsFiltered?: number;
  /** Data */
  data?: ErcWorldUser[] | null;
}

/** System Error */
export interface Error {
  /** The message */
  message?: string;
  /** Validation Errors */
  errors?: string[] | null;
}

export interface FileUploadResponse {
  /** File Name */
  Name?: string;
  /** File Hash */
  Hash?: string;
  /** File Hash */
  Size?: string;
}

/** '721' as "type", eventid, parentcontractaddress, calleraddress, creatoraddress, tokenid, royaltyfee, 0 supply, uri, createdate, eventtimestamp_unix, eventtimestamp */
export interface Nft {
  type?: string | null;
  /** @format int64 */
  eventid?: number;
  parentcontractaddress?: string | null;
  calleraddress?: string | null;
  creatoraddress?: string | null;
  /** @format int64 */
  tokenid?: number;
  /** @format double */
  royaltyfee?: number;
  /** @format int64 */
  supply?: number;
  uri?: string | null;
  /** @format date-time */
  createdate?: string;
  /** @format int64 */
  eventtimestamp_unix?: number;
  /** @format date-time */
  eventtimestamp?: string;
}

export interface NftDttResponse {
  /**
   * Total
   * @format int32
   */
  recordsTotal?: number;
  /**
   * Filtered
   * @format int32
   */
  recordsFiltered?: number;
  /** Data */
  data?: Nft[] | null;
}

/** Nft Standard */
export enum NftStandard {
  Erc721 = "erc721",
  Erc1155 = "erc1155"
}

/** List Type */
export enum Order {
  Ascending = "ascending",
  Descending = "descending"
}

export interface PublicUser {
  /**
   * User Internal ID
   * @format int64
   */
  id?: number;
  /** User Internal Name */
  username?: string | null;
  /** User Wallet */
  wallet?: string | null;
  /** User Bio under the avatarImg in User profile page */
  userbio?: string | null;
  /** Background image of the user profile */
  coverImg?: string | null;
  /** Avatar image of the user profile */
  avatarImg?: string | null;
  /**
   * User followers
   * @format int32
   */
  followers?: number;
  /**
   * User following
   * @format int32
   */
  following?: number;
  /**
   * User liked
   * @format int32
   */
  liked?: number;
  /**
   * User likes
   * @format int32
   */
  likes?: number;
}

export interface Token {
  /** Token Name */
  id?: string;
  /** Token Name */
  name?: string;
  /** NFT Standard */
  standard?: NftStandard | null;
  /** Token Description */
  description?: string | null;
  /**
   * Favorite Count
   * @format int32
   */
  favoriteCount?: number;
  creator?: TokenUser | null;
  collection?: Collection | null;
  /** @format double */
  royalty?: number;
  availability?: TokenAvailability | null;
  auction?: Auction | null;
  /** Token Price */
  price?: CurrencyValue | null;
  /** Token Sell Methods */
  sale?: TokenSale | null;
}

export interface TokenAvailability {
  /**
   * Total
   * @format double
   */
  total?: number;
  /**
   * Current
   * @format double
   */
  current?: number;
}

export interface TokenBid {
  /** Token Seller */
  from?: TokenUser;
  /**
   * Token Seller
   * @format int64
   */
  timestamp?: number;
  /** Token Seller */
  price?: CurrencyValue | null;
}

/** Token Group */
export enum TokenGroup {
  Auction = "auction",
  Transferred = "transferred",
  Purchases = "purchases",
  Favorites = "favorites",
  Created = "created"
}

export interface TokenSale {
  /** Token Seller */
  seller?: TokenUser;
  /** Token Seller */
  price?: CurrencyValue | null;
}

export interface TokenTransaction {
  /** Token Seller */
  from?: TokenUser;
  /** Token Seller */
  to?: TokenUser;
  /**
   * Token Seller
   * @format int64
   */
  timestamp?: number;
  /** Token Seller */
  price?: CurrencyValue | null;
}

export interface TokenUser {
  /** Creator Name */
  name?: string;
  /** Wallet */
  wallet?: string | null;
  /** Avatar Url */
  avatar?: string | null;
}

export interface UserHistory {
  /** @format int64 */
  users_id?: number;
  useragent?: string;
  ip?: string;
  /** @format date-time */
  createdate?: string;
  os?: string | null;
  client?: string | null;
  device?: string | null;
  brand?: string | null;
  model?: string | null;
  bot?: string | null;
}

export interface UserHistoryDttResponse {
  /**
   * Total
   * @format int32
   */
  recordsTotal?: number;
  /**
   * Filtered
   * @format int32
   */
  recordsFiltered?: number;
  /** Data */
  data?: UserHistory[] | null;
}

export interface UserMessenger {
  /** Messenger Name */
  name?: string;
  /** Messenger Connected or not */
  connected?: boolean;
}

export interface UserNote {
  /**
   * User Internal ID
   * @format int64
   */
  id?: number;
  /** User Internal Name */
  note?: string | null;
  /** @format date-time */
  createdate?: string;
  createuser?: string;
}

export interface UserNotification {
  /** Notification Name */
  name?: string;
  /** Email notification enabled */
  email?: boolean;
  /** Push notification enabled */
  push?: boolean;
}

export interface UserRequest {
  /** User Internal Name */
  username?: string | null;
  /** User Wallet */
  wallet?: string | null;
  /** User Bio under the avatarImg in User profile page */
  bio?: string | null;
  /** User Email */
  email?: string | null;
  /** Messengers settings */
  messengers?: UserMessenger[] | null;
  /** Notification and authentication settings */
  settings?: UserSetting | null;
}

export interface UserRole {
  /**
   * User Wallet
   * @format int64
   */
  id?: number;
  /** User Wallet */
  title?: string | null;
  /** User Wallet */
  description?: string | null;
}

export interface UserSetting {
  /** Two factor authentication enabled */
  twoFactorEnabled?: boolean | null;
  /** Two factor authentication enabled */
  antiPhishingEnabled?: boolean | null;
  /** Notifications settings */
  notifications?: UserNotification[] | null;
}

export interface UsersHistoryRequest {
  /**
   * User Id
   * @format int64
   */
  id?: number;
  /**
   * Number of rows
   * @format int32
   */
  count?: number;
}

export interface UsersNoteRequest {
  /** User Wallet */
  note?: string;
}

export interface UsersSearchRequest {
  /** User Wallet */
  searchTerm?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain"
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer"
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(key => "undefined" !== typeof query[key]);
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {})
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body)
      }
    ).then(async response => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ErcWorld Marketplace
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bo = {
    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name UsersCreate
     * @summary List Users
     * @request POST:/bo/users
     * @secure
     */
    usersCreate: (data: UsersSearchRequest, params: RequestParams = {}) =>
      this.request<ErcWorldUser[], void | Error>({
        path: `/bo/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name UsersDetail
     * @summary Get public User Profile
     * @request GET:/bo/users/{id}
     * @secure
     */
    usersDetail: (id: number, params: RequestParams = {}) =>
      this.request<ErcWorldUser, void | Error>({
        path: `/bo/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name UsersNotesDetail
     * @request GET:/bo/users/{id}/notes
     * @secure
     */
    usersNotesDetail: (id: number, params: RequestParams = {}) =>
      this.request<UserNote[], void | Error>({
        path: `/bo/users/${id}/notes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name UsersNotesCreate
     * @request POST:/bo/users/{id}/notes
     * @secure
     */
    usersNotesCreate: (id: number, data: UsersNoteRequest, params: RequestParams = {}) =>
      this.request<UserNote[], void | Error>({
        path: `/bo/users/${id}/notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name UsersNotesDelete
     * @request DELETE:/bo/users/{id}/notes/{noteId}
     * @secure
     */
    usersNotesDelete: (id: number, noteId: number, params: RequestParams = {}) =>
      this.request<UserNote[], void | Error>({
        path: `/bo/users/${id}/notes/${noteId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name BousersCreate
     * @summary List Users
     * @request POST:/bo/bousers
     * @secure
     */
    bousersCreate: (data: UsersSearchRequest, params: RequestParams = {}) =>
      this.request<ErcWorldUserBo[], void | Error>({
        path: `/bo/bousers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name BousersHistoryCreate
     * @summary get all BO users History
     * @request POST:/bo/bousers/history
     * @secure
     */
    bousersHistoryCreate: (data: UsersHistoryRequest, params: RequestParams = {}) =>
      this.request<UserHistory[], void | Error>({
        path: `/bo/bousers/history`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Bo
     * @name BorolesList
     * @summary List Roles
     * @request GET:/bo/boroles
     * @secure
     */
    borolesList: (params: RequestParams = {}) =>
      this.request<UserRole[], void | Error>({
        path: `/bo/boroles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoDatatables
     * @name DttUsersList
     * @request GET:/bo/dtt/users
     * @secure
     */
    dttUsersList: (
      query?: {
        /** @format int32 */
        start?: number;
        /** @format int32 */
        length?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ErcWorldUserDttResponse, void | Error>({
        path: `/bo/dtt/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoDatatables
     * @name DttUsersHistoryDetail
     * @request GET:/bo/dtt/users/{id}/history
     * @secure
     */
    dttUsersHistoryDetail: (
      id: number,
      query?: {
        /** @format int32 */
        start?: number;
        /** @format int32 */
        length?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserHistoryDttResponse, void | Error>({
        path: `/bo/dtt/users/${id}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoDatatables
     * @name DttUsersNftCreatedDetail
     * @request GET:/bo/dtt/users/{walletAddress}/nft/created
     * @secure
     */
    dttUsersNftCreatedDetail: (
      walletAddress: string,
      query?: {
        /** @format int32 */
        start?: number;
        /** @format int32 */
        length?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<NftDttResponse, void | Error>({
        path: `/bo/dtt/users/${walletAddress}/nft/created`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoDatatables
     * @name DttUsersNftListedDetail
     * @request GET:/bo/dtt/users/{walletAddress}/nft/listed
     * @secure
     */
    dttUsersNftListedDetail: (
      walletAddress: string,
      query?: {
        /** @format int32 */
        start?: number;
        /** @format int32 */
        length?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<NftDttResponse, void | Error>({
        path: `/bo/dtt/users/${walletAddress}/nft/listed`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoDatatables
     * @name DttUsersNftTransactionsDetail
     * @request GET:/bo/dtt/users/{walletAddress}/nft/transactions
     * @secure
     */
    dttUsersNftTransactionsDetail: (
      walletAddress: string,
      query?: {
        /** @format int32 */
        start?: number;
        /** @format int32 */
        length?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<NftDttResponse, void | Error>({
        path: `/bo/dtt/users/${walletAddress}/nft/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      })
  };
  users = {
    /**
     * @description Roles: admin
     *
     * @tags BoUser
     * @name BoMeList
     * @summary Get User Profile
     * @request GET:/users/bo/me
     * @secure
     */
    boMeList: (params: RequestParams = {}) =>
      this.request<ErcWorldUserBo, void | Error>({
        path: `/users/bo/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoUser
     * @name GetUsers
     * @summary Get User Profile
     * @request GET:/users/bo/{userId}
     * @secure
     */
    getUsers: (userId: number, params: RequestParams = {}) =>
      this.request<ErcWorldUserBo, void | Error>({
        path: `/users/bo/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags BoUser
     * @name PutUsers
     * @summary Set User Profile
     * @request PUT:/users/bo
     * @secure
     */
    putUsers: (data: ErcWorldUserBo, params: RequestParams = {}) =>
      this.request<ErcWorldUserBo, void | Error>({
        path: `/users/bo`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name GetUsers2
     * @summary Get User Profile
     * @request GET:/users/me
     * @originalName getUsers
     * @duplicate
     * @secure
     */
    getUsers2: (params: RequestParams = {}) =>
      this.request<ErcWorldUser, void | Error>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name PutUsers2
     * @summary Update user profile endpoint
     * @request PUT:/users/me
     * @originalName putUsers
     * @duplicate
     * @secure
     */
    putUsers2: (data: UserRequest, params: RequestParams = {}) =>
      this.request<ErcWorldUser, void | Error>({
        path: `/users/me`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeUploaduserimagesUpdate
     * @summary Update user profile images endpoint
     * @request PUT:/users/me/uploaduserimages
     * @secure
     */
    meUploaduserimagesUpdate: (
      data: {
        /** User Wallet */
        Wallet?: string;
        /** @format binary */
        avatarImgFile?: File;
        /** @format binary */
        coverImgFile?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<ErcWorldUser, void | Error>({
        path: `/users/me/uploaduserimages`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeFollowUpdate
     * @summary Update user profile endpoint
     * @request PUT:/users/me/follow/{walletAddress}
     * @secure
     */
    meFollowUpdate: (walletAddress: string, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/users/me/follow/${walletAddress}`,
        method: "PUT",
        secure: true,
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeFollowDelete
     * @summary Update user profile endpoint
     * @request DELETE:/users/me/follow/{walletAddress}
     * @secure
     */
    meFollowDelete: (walletAddress: string, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/users/me/follow/${walletAddress}`,
        method: "DELETE",
        secure: true,
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeLikeUpdate
     * @summary Add like
     * @request PUT:/users/me/like/{walletAddress}
     * @secure
     */
    meLikeUpdate: (walletAddress: string, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/users/me/like/${walletAddress}`,
        method: "PUT",
        secure: true,
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeLikeDelete
     * @summary Dislike Wallet
     * @request DELETE:/users/me/like/{walletAddress}
     * @secure
     */
    meLikeDelete: (walletAddress: string, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/users/me/like/${walletAddress}`,
        method: "DELETE",
        secure: true,
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeFavoriteUpdate
     * @request PUT:/users/me/favorite/{contractAddress}/{tokenId}
     * @secure
     */
    meFavoriteUpdate: (contractAddress: string, tokenId: number, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/users/me/favorite/${contractAddress}/${tokenId}`,
        method: "PUT",
        secure: true,
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags User
     * @name MeFavoriteDelete
     * @request DELETE:/users/me/favorite/{contractAddress}/{tokenId}
     * @secure
     */
    meFavoriteDelete: (contractAddress: string, tokenId: number, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/users/me/favorite/${contractAddress}/${tokenId}`,
        method: "DELETE",
        secure: true,
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Users
     * @name UsersDetail
     * @summary Get public User Profile
     * @request GET:/users/{walletAddress}
     * @secure
     */
    usersDetail: (walletAddress: string, params: RequestParams = {}) =>
      this.request<PublicUser, void | Error>({
        path: `/users/${walletAddress}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Users
     * @name FollowersDetail
     * @request GET:/users/{walletAddress}/followers
     * @secure
     */
    followersDetail: (
      walletAddress: string,
      query?: {
        /** List Type */
        order?: Order;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PublicUser[], void | Error>({
        path: `/users/${walletAddress}/followers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Users
     * @name FollowingDetail
     * @request GET:/users/{walletAddress}/following
     * @secure
     */
    followingDetail: (
      walletAddress: string,
      query?: {
        /** List Type */
        order?: Order;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PublicUser[], void | Error>({
        path: `/users/${walletAddress}/following`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Users
     * @name LikedDetail
     * @request GET:/users/{walletAddress}/liked
     * @secure
     */
    likedDetail: (
      walletAddress: string,
      query?: {
        /** List Type */
        order?: Order;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<string[], void | Error>({
        path: `/users/${walletAddress}/liked`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * @description Roles: admin
     *
     * @tags Users
     * @name LikesDetail
     * @request GET:/users/{walletAddress}/likes
     * @secure
     */
    likesDetail: (
      walletAddress: string,
      query?: {
        /** List Type */
        order?: Order;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<string[], void | Error>({
        path: `/users/${walletAddress}/likes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name TokensDetail
     * @request GET:/users/{walletAddress}/tokens
     * @secure
     */
    tokensDetail: (
      walletAddress: string,
      query?: {
        /** List Type */
        order?: CollectionsOrder;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Token[], void | Error>({
        path: `/users/${walletAddress}/tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name TokensDetail2
     * @request GET:/users/{walletAddress}/tokens/{group}
     * @originalName tokensDetail
     * @duplicate
     * @secure
     */
    tokensDetail2: (
      walletAddress: string,
      group: TokenGroup,
      query?: {
        /** List Type */
        order?: CollectionsOrder;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Token[], void | Error>({
        path: `/users/${walletAddress}/tokens/${group}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      })
  };
  collections = {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionsList
     * @request GET:/collections
     * @secure
     */
    collectionsList: (
      query?: {
        /** List Type */
        order?: CollectionsOrder;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Collection[], void | Error>({
        path: `/collections`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name CollectionsDetail
     * @request GET:/collections/{contractAddress}
     * @secure
     */
    collectionsDetail: (contractAddress: string, params: RequestParams = {}) =>
      this.request<Collection, void | Error>({
        path: `/collections/${contractAddress}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name TokensDetail
     * @request GET:/collections/{contractAddress}/tokens
     * @secure
     */
    tokensDetail: (contractAddress: string, params: RequestParams = {}) =>
      this.request<Token[], void | Error>({
        path: `/collections/${contractAddress}/tokens`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name TokensDetail2
     * @request GET:/collections/{contractAddress}/tokens/{tokenId}
     * @originalName tokensDetail
     * @duplicate
     * @secure
     */
    tokensDetail2: (contractAddress: string, tokenId: string, params: RequestParams = {}) =>
      this.request<Token, void | Error>({
        path: `/collections/${contractAddress}/tokens/${tokenId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name TokensTransactionsDetail
     * @request GET:/collections/{contractAddress}/tokens/{tokenId}/transactions
     * @secure
     */
    tokensTransactionsDetail: (
      contractAddress: string,
      tokenId: string,
      query?: {
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<TokenTransaction[], void | Error>({
        path: `/collections/${contractAddress}/tokens/${tokenId}/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name TokensBidsDetail
     * @request GET:/collections/{contractAddress}/tokens/{tokenId}/bids
     * @secure
     */
    tokensBidsDetail: (
      contractAddress: string,
      tokenId: string,
      query?: {
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<TokenBid[], void | Error>({
        path: `/collections/${contractAddress}/tokens/${tokenId}/bids`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      })
  };
  files = {
    /**
     * @description Roles: admin
     *
     * @tags Files
     * @name UploadCreate
     * @summary Update user profile endpoint
     * @request POST:/files/upload
     * @secure
     */
    uploadCreate: (
      data: {
        /**
         * File
         * @format binary
         */
        content?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<FileUploadResponse, void | Error>({
        path: `/files/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params
      })
  };
  tokens = {
    /**
     * No description
     *
     * @tags Tokens
     * @name TokensList
     * @request GET:/tokens
     * @secure
     */
    tokensList: (
      query?: {
        /** List Type */
        order?: CollectionsOrder;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Token[], void | Error>({
        path: `/tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name TokensDetail
     * @request GET:/tokens/{tokenId}
     * @secure
     */
    tokensDetail: (tokenId: string, params: RequestParams = {}) =>
      this.request<Token, void | Error>({
        path: `/tokens/${tokenId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      })
  };
}
