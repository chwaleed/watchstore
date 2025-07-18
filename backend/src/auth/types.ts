export interface generateTokenType {
  userId: string | number;
  role: string;
  email: string;
  tokenType: 'access' | 'refresh';
}
