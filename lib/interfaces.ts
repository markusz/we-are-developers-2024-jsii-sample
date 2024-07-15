// Defines a Struct, an immutable pure data entities
export interface Session {
  readonly sessionId: string;
  readonly title: string;
  readonly location: string,
  readonly capacity: number,
  readonly speakers: string[],
  readonly sessionStart: string,
  readonly sessionEnd: string,
  readonly duration: number
}

export interface GetRecommendationsResult {
  readonly session: Session,
  readonly recommendations: Session[]
}