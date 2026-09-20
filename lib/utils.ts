
type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean } | ClassValue[]
export function cn(...inputs: ClassValue[]): string {
    return inputs
        .filter(Boolean)
        .map((input) => {
            if (typeof input === "string") return input
            if (typeof input === "object" && !Array.isArray(input)) {
                if (input !== null) {
                    return Object.keys(input)
                        .filter((key) => input[key])
                        .join(" ")
                }
            }
            if (Array.isArray(input)) return cn(...input)
            return ""
        })
        .join(" ")
}
