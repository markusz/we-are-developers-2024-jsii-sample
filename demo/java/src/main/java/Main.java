import wearedevelopers.programguide.Session;
import wearedevelopers.programguide.WeAreDevelopersProgramGuide;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        var guide = new WeAreDevelopersProgramGuide();
        var allSessions = guide.retrieveAllSessions();
        System.out.println("Total number of sessions: " + allSessions.size());
        var aiSessions = guide.findSessionsByTitle("AI");
        var aiTitles = aiSessions.stream().map(Session::getTitle).toList();
        System.out.println("\nAI focused sessions: " + String.join("\n - ", aiTitles));
    }
}
