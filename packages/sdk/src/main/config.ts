export enum AADE_ENVIRONMENTS {
    TEST = "https://mydataapidev.aade.gr",
    PROD = "https://mydatapi.aade.gr/myDATA"
}

export enum AADE_ENVIRONMENTS_KEYS {
    TEST = "TEST",
    PROD = "PROD",
}

const { AADE_USER_ID = "", AADE_SUB_KEY = "", AADE_ENDPOINT = AADE_ENVIRONMENTS.TEST } = process.env

export const ENV = { AADE_USER_ID, AADE_SUB_KEY, AADE_ENDPOINT }
