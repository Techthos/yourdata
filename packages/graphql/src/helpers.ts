export function createEnumResolvers(enums: {[key: string]: any}): any {
    const resolvers =  Object.keys(enums).reduce((resolvers, enumKey) => {
        const _enum = enums[enumKey]
        resolvers[enumKey] = _enum
        return resolvers
    }, [])
    return resolvers
}