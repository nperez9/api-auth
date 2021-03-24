import jwt, { Secret } from 'jsonwebtoken';

/**
 * JWT util to generate and validate tokens, uses env SECRET_TOKEN
 * to work
 */
export class JWTUtil {
  private static secretToken = process.env.SECRET_TOKEN as Secret;

  /**
   * Generates a token whit given data
   * @param tokenData
   */
  public static createToken(tokenData: any): string {
    return jwt.sign(tokenData, this.secretToken);
  }

  /**
   * Returns the content of the token using jwt.verify
   * @param {string} token
   */ 
  public static verifyToken(token: string): any {
    return jwt.verify(token, this.secretToken);
  }
}