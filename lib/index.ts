import {
  readFileSync
} from 'fs';

export interface SessionFinderProps {
  readonly user: string;
}

// Defines a Struct, an immutable pure data entities
export interface Session {
  readonly sessionId: string;
  readonly title: string;
  readonly location: string,
  readonly capacity: number,
  readonly speaker: string,
  readonly sessionStart: string,
  readonly sessionEnd: string,
  readonly duration: number
}

export interface GetRecommendationsResult {
  readonly session: Session,
  readonly recommendations: Session[]
}


export class WeAreDevelopersProgramGuide {
  private readonly user: string;
  private readonly program: Session[];

  public constructor(props: SessionFinderProps) {
    console.log(__dirname)
    const jsonData = readFileSync(`${__dirname}/sessions.json`, 'utf8');
    const data = JSON.parse(jsonData);

    this.user = props.user;
    this.program = data
  }

  public getRecommendedSessionsForSession(sessionId: string, numberOfRecommendations: number = 3): GetRecommendationsResult {
    const session = this.program.find((session) => session.sessionId === sessionId)!
    const recommendations = this.program
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfRecommendations);

    return {
      session,
      recommendations
    }
  }

  public findSessionsByTitle(title: string): Session[] {
    return this.program.filter((session: Session) => session.title.includes(title))
  }

  public findSessionsByTime(title: string): string {
    return `Hello, ${this.user}. You searched for ${title}!`
  }
}
