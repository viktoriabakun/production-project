type Mods = Record<string, boolean | string>

/**
 * Combines basic className with additional(s), enables modes
 */
const  classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(" ");

export default classNames;
