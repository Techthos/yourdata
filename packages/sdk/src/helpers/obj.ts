
export function orderObject<T>(keys: Array<[keyof T, object?]>, obj: T): T {

    if (obj === undefined) return obj

    return keys.reduce((orderObj, [key, value]) => {
        if(Object.hasOwn(obj as object, key) === false || obj === undefined || obj === null) {
            return orderObj
        }

        orderObj[key] = value || obj[key]
        return orderObj
    }, {} as any)
}
