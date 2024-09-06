export declare class MyBcrypt {
    private static SALT_ROUNDS;
    static hash(password: string, // The plain text password to be hashed
    saltRounds?: number): string;
    static compare(password: string, hash: string): boolean;
}
