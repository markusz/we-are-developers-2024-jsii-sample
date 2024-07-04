import { WeAreDevelopersProgramGuide } from "../lib/index";

describe('WeAreDevelopersProgramGuide', () => {
  describe('.findSessionsByTitle(..)', () => {
    test('gets all sessions with AI in title', () => {
      const guide = new WeAreDevelopersProgramGuide({
        user: "Markus"
      })

      expect(guide.findSessionsByTitle("AI")).toHaveLength(8)
    });
  });

  describe('.findSessionsByTime(..)', () => {
    test('gets all sessions by time', () => {

    });
  });
});
