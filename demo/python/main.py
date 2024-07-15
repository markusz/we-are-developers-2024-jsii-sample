from wearedevelopers.programguide import WeAreDevelopersProgramGuide

if __name__ == "__main__":
    guide = WeAreDevelopersProgramGuide()
    sessions = guide.retrieve_all_sessions()
    print(f"Total number of sessions: {len(guide.retrieve_all_sessions())} \n")
    ai_sessions = guide.find_sessions_by_title("AI")
    ai_titles = [session.title for session in ai_sessions]
    print(f"AI focused sessions: {'\n - '.join(ai_titles)}")
