export class AuthResponseDto {
  access_token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
} 