export const convertToTitle = (s:any): string => {
    return s.replace (/^[-_]*(.)/, (_:any, c:any) => c.toUpperCase())       // Initial char (after -/_)
        .replace (/[-_]+(.)/g, (_:any, c:any) => ' ' + c.toUpperCase())
}