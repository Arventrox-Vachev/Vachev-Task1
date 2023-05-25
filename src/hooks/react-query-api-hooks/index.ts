import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { useQuery, useMutation, useQueryClient, type QueryClient, type UseMutationOptions, type UseQueryOptions, type MutationFunction, type UseMutationResult, type UseQueryResult } from "react-query";
export type Order = {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
};
export type Customer = {
    id?: number;
    username?: string;
    address?: Address[];
};
export type Address = {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
};
export type Category = {
    id?: number;
    name?: string;
};
export type User = {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    userStatus?: number;
};
export type Tag = {
    id?: number;
    name?: string;
};
export type Pet = {
    id?: number;
    name: string;
    category?: Category;
    photoUrls: string[];
    tags?: Tag[];
    status?: "available" | "pending" | "sold";
};
export type ApiResponse = {
    code?: number;
    type?: string;
    message?: string;
};
export type AxiosConfig = {
    paramsSerializer?: AxiosRequestConfig["paramsSerializer"];
};
export type Config = {
    mutations?: MutationConfigs;
    axios?: AxiosConfig;
};
export function initialize(axios: AxiosInstance, config?: Config) {
    const requests = makeRequests(axios, config?.axios);
    return {
        requests,
        queries: makeQueries(requests),
        mutations: makeMutations(requests, config?.mutations)
    };
}
function useRapiniMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationFn: MutationFunction<TData, TVariables>, config?: (queryClient: QueryClient) => Pick<UseMutationOptions<TData, TError, TVariables, TContext>, "onSuccess" | "onSettled" | "onError">, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">): UseMutationResult<TData, TError, TVariables, TContext> {
    const { onSuccess, onError, onSettled, ...rest } = options ?? {};
    const queryClient = useQueryClient();
    const conf = config?.(queryClient);
    const mutationOptions: typeof options = {
        onSuccess: (data: TData, variables: TVariables, context?: TContext) => {
            conf?.onSuccess?.(data, variables, context);
            onSuccess?.(data, variables, context);
        },
        onError: (error: TError, variables: TVariables, context?: TContext) => {
            conf?.onError?.(error, variables, context);
            onError?.(error, variables, context);
        },
        onSettled: (data: TData | undefined, error: TError | null, variables: TVariables, context?: TContext) => {
            conf?.onSettled?.(data, error, variables, context);
            onSettled?.(data, error, variables, context);
        },
        ...rest
    };
    return useMutation({ mutationFn, ...mutationOptions });
}
function nullIfUndefined<T>(value: T): NonNullable<T> | null {
    return typeof value === "undefined" ? null : value as NonNullable<T> | null;
}
export const queryKeys = {
    findPetsByStatus: (status?: "available" | "pending" | "sold") => ["findPetsByStatus", nullIfUndefined(status)] as const,
    findPetsByTags: (tags?: string[]) => ["findPetsByTags", nullIfUndefined(tags)] as const,
    getPetById: (petId: number) => ["getPetById", petId] as const,
    getInventory: () => ["getInventory"] as const,
    getOrderById: (orderId: number) => ["getOrderById", orderId] as const,
    loginUser: (username?: string, password?: string) => ["loginUser", nullIfUndefined(username), nullIfUndefined(password)] as const,
    logoutUser: () => ["logoutUser"] as const,
    getUserByName: (username: string) => ["getUserByName", username] as const
} as const;
export type QueryKeys = typeof queryKeys;
function makeRequests(axios: AxiosInstance, config?: AxiosConfig) {
    return {
        addPet: (payload: Pet) => axios.request<Pet>({
            method: "post",
            url: `/pet`,
            data: payload
        }).then(res => res.data),
        updatePet: (payload: Pet) => axios.request<Pet>({
            method: "put",
            url: `/pet`,
            data: payload
        }).then(res => res.data),
        findPetsByStatus: (status?: "available" | "pending" | "sold") => axios.request<Pet[]>({
            method: "get",
            url: `/pet/findByStatus`,
            params: {
                ...(status !== undefined ? { status } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        findPetsByTags: (tags?: string[]) => axios.request<Pet[]>({
            method: "get",
            url: `/pet/findByTags`,
            params: {
                ...(tags !== undefined ? { tags } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getPetById: (petId: number) => axios.request<Pet>({
            method: "get",
            url: `/pet/${petId}`
        }).then(res => res.data),
        deletePet: (petId: number, api_key?: string) => axios.request<unknown>({
            method: "delete",
            url: `/pet/${petId}`
        }).then(res => res.data),
        updatePetWithForm: (petId: number, name?: string, status?: string) => axios.request<unknown>({
            method: "post",
            url: `/pet/${petId}`,
            params: {
                ...(name !== undefined ? { name } : undefined),
                ...(status !== undefined ? { status } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        uploadFile: (payload: string, petId: number, additionalMetadata?: string) => axios.request<ApiResponse>({
            method: "post",
            url: `/pet/${petId}/uploadImage`,
            params: {
                ...(additionalMetadata !== undefined ? { additionalMetadata } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload
        }).then(res => res.data),
        getInventory: () => axios.request<{
            [key: string]: number;
        }>({
            method: "get",
            url: `/store/inventory`
        }).then(res => res.data),
        placeOrder: (payload: Order) => axios.request<Order>({
            method: "post",
            url: `/store/order`,
            data: payload
        }).then(res => res.data),
        getOrderById: (orderId: number) => axios.request<Order>({
            method: "get",
            url: `/store/order/${orderId}`
        }).then(res => res.data),
        deleteOrder: (orderId: number) => axios.request<unknown>({
            method: "delete",
            url: `/store/order/${orderId}`
        }).then(res => res.data),
        createUser: (payload: User) => axios.request<User>({
            method: "post",
            url: `/user`,
            data: payload
        }).then(res => res.data),
        createUsersWithListInput: (payload: User[]) => axios.request<User>({
            method: "post",
            url: `/user/createWithList`,
            data: payload
        }).then(res => res.data),
        loginUser: (username?: string, password?: string) => axios.request<string>({
            method: "get",
            url: `/user/login`,
            params: {
                ...(username !== undefined ? { username } : undefined),
                ...(password !== undefined ? { password } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        logoutUser: () => axios.request<unknown>({
            method: "get",
            url: `/user/logout`
        }).then(res => res.data),
        getUserByName: (username: string) => axios.request<User>({
            method: "get",
            url: `/user/${username}`
        }).then(res => res.data),
        deleteUser: (username: string) => axios.request<unknown>({
            method: "delete",
            url: `/user/${username}`
        }).then(res => res.data),
        updateUser: (payload: User, username: string) => axios.request<unknown>({
            method: "put",
            url: `/user/${username}`,
            data: payload
        }).then(res => res.data)
    } as const;
}
export type Requests = ReturnType<typeof makeRequests>;
export type Response<T extends keyof Requests> = Awaited<ReturnType<Requests[T]>>;
function makeQueries(requests: Requests) {
    return {
        useFindPetsByStatus: (status?: "available" | "pending" | "sold", options?: Omit<UseQueryOptions<Response<"findPetsByStatus">, unknown, Response<"findPetsByStatus">, ReturnType<QueryKeys["findPetsByStatus"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"findPetsByStatus">, unknown> => useQuery({ queryKey: queryKeys.findPetsByStatus(status), queryFn: () => requests.findPetsByStatus(status), ...options }),
        useFindPetsByTags: (tags?: string[], options?: Omit<UseQueryOptions<Response<"findPetsByTags">, unknown, Response<"findPetsByTags">, ReturnType<QueryKeys["findPetsByTags"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"findPetsByTags">, unknown> => useQuery({ queryKey: queryKeys.findPetsByTags(tags), queryFn: () => requests.findPetsByTags(tags), ...options }),
        useGetPetById: (petId: number, options?: Omit<UseQueryOptions<Response<"getPetById">, unknown, Response<"getPetById">, ReturnType<QueryKeys["getPetById"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getPetById">, unknown> => useQuery({ queryKey: queryKeys.getPetById(petId), queryFn: () => requests.getPetById(petId), ...options }),
        useGetInventory: (options?: Omit<UseQueryOptions<Response<"getInventory">, unknown, Response<"getInventory">, ReturnType<QueryKeys["getInventory"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getInventory">, unknown> => useQuery({ queryKey: queryKeys.getInventory(), queryFn: () => requests.getInventory(), ...options }),
        useGetOrderById: (orderId: number, options?: Omit<UseQueryOptions<Response<"getOrderById">, unknown, Response<"getOrderById">, ReturnType<QueryKeys["getOrderById"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getOrderById">, unknown> => useQuery({ queryKey: queryKeys.getOrderById(orderId), queryFn: () => requests.getOrderById(orderId), ...options }),
        useLoginUser: (username?: string, password?: string, options?: Omit<UseQueryOptions<Response<"loginUser">, unknown, Response<"loginUser">, ReturnType<QueryKeys["loginUser"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"loginUser">, unknown> => useQuery({ queryKey: queryKeys.loginUser(username, password), queryFn: () => requests.loginUser(username, password), ...options }),
        useLogoutUser: (options?: Omit<UseQueryOptions<Response<"logoutUser">, unknown, Response<"logoutUser">, ReturnType<QueryKeys["logoutUser"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"logoutUser">, unknown> => useQuery({ queryKey: queryKeys.logoutUser(), queryFn: () => requests.logoutUser(), ...options }),
        useGetUserByName: (username: string, options?: Omit<UseQueryOptions<Response<"getUserByName">, unknown, Response<"getUserByName">, ReturnType<QueryKeys["getUserByName"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getUserByName">, unknown> => useQuery({ queryKey: queryKeys.getUserByName(username), queryFn: () => requests.getUserByName(username), ...options })
    } as const;
}
type MutationConfigs = {
    useAddPet?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"addPet">, unknown, Parameters<Requests["addPet"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useUpdatePet?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"updatePet">, unknown, Parameters<Requests["updatePet"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useUpdatePetWithForm?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"updatePetWithForm">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeletePet?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deletePet">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useUploadFile?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"uploadFile">, unknown, Parameters<Requests["uploadFile"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePlaceOrder?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"placeOrder">, unknown, Parameters<Requests["placeOrder"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteOrder?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteOrder">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useCreateUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"createUser">, unknown, Parameters<Requests["createUser"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useCreateUsersWithListInput?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"createUsersWithListInput">, unknown, Parameters<Requests["createUsersWithListInput"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useUpdateUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"updateUser">, unknown, Parameters<Requests["updateUser"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteUser">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
};
function makeMutations(requests: Requests, config?: Config["mutations"]) {
    return {
        useAddPet: (options?: Omit<UseMutationOptions<Response<"addPet">, unknown, Parameters<Requests["addPet"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"addPet">, unknown, Parameters<Requests["addPet"]>[0]>(payload => requests.addPet(payload), config?.useAddPet, options),
        useUpdatePet: (options?: Omit<UseMutationOptions<Response<"updatePet">, unknown, Parameters<Requests["updatePet"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"updatePet">, unknown, Parameters<Requests["updatePet"]>[0]>(payload => requests.updatePet(payload), config?.useUpdatePet, options),
        useUpdatePetWithForm: (petId: number, name?: string, status?: string, options?: Omit<UseMutationOptions<Response<"updatePetWithForm">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"updatePetWithForm">, unknown, unknown>(() => requests.updatePetWithForm(petId, name, status), config?.useUpdatePetWithForm, options),
        useDeletePet: (petId: number, api_key?: string, options?: Omit<UseMutationOptions<Response<"deletePet">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deletePet">, unknown, unknown>(() => requests.deletePet(petId, api_key), config?.useDeletePet, options),
        useUploadFile: (petId: number, additionalMetadata?: string, options?: Omit<UseMutationOptions<Response<"uploadFile">, unknown, Parameters<Requests["uploadFile"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"uploadFile">, unknown, Parameters<Requests["uploadFile"]>[0]>(payload => requests.uploadFile(payload, petId, additionalMetadata), config?.useUploadFile, options),
        usePlaceOrder: (options?: Omit<UseMutationOptions<Response<"placeOrder">, unknown, Parameters<Requests["placeOrder"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"placeOrder">, unknown, Parameters<Requests["placeOrder"]>[0]>(payload => requests.placeOrder(payload), config?.usePlaceOrder, options),
        useDeleteOrder: (orderId: number, options?: Omit<UseMutationOptions<Response<"deleteOrder">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteOrder">, unknown, unknown>(() => requests.deleteOrder(orderId), config?.useDeleteOrder, options),
        useCreateUser: (options?: Omit<UseMutationOptions<Response<"createUser">, unknown, Parameters<Requests["createUser"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"createUser">, unknown, Parameters<Requests["createUser"]>[0]>(payload => requests.createUser(payload), config?.useCreateUser, options),
        useCreateUsersWithListInput: (options?: Omit<UseMutationOptions<Response<"createUsersWithListInput">, unknown, Parameters<Requests["createUsersWithListInput"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"createUsersWithListInput">, unknown, Parameters<Requests["createUsersWithListInput"]>[0]>(payload => requests.createUsersWithListInput(payload), config?.useCreateUsersWithListInput, options),
        useUpdateUser: (username: string, options?: Omit<UseMutationOptions<Response<"updateUser">, unknown, Parameters<Requests["updateUser"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"updateUser">, unknown, Parameters<Requests["updateUser"]>[0]>(payload => requests.updateUser(payload, username), config?.useUpdateUser, options),
        useDeleteUser: (username: string, options?: Omit<UseMutationOptions<Response<"deleteUser">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteUser">, unknown, unknown>(() => requests.deleteUser(username), config?.useDeleteUser, options)
    } as const;
}
