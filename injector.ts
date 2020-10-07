class Injector {
    private static dependencies: Map<string, any> = new Map<string, any>()

    static async register(dependency: any, key: string): Promise<void> {
        this.dependencies.set(key, dependency)
    }

    static retrieve<T>(key: string): T {
        return this.dependencies.get(key);
    }
}

export = Injector;