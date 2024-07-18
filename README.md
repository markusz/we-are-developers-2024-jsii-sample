### WeAreDevelopers Program Guide

This is a sample project I used for my talk [How AWS generates polyglot libraries based on a single TypeScript codebase](wad24.markusziller.de) at WeAreDevelopers World Congress 2024.

### Prerequisites

- node.js >= 18

Depending on the target languages you want to support, you need the following runtimes. Check the jsii property in `package.json` to disable languages
- Java >= 8
- Python >= 3.8
- .NET >= 6.0
- Go >= 1.18

### Run the sample

You can build the JSii packages by running the following commands

```
# Install dependencies
npm i
# Compile TS to JS and create .jsii file
npm run build:watch
# Create packages in the Python, Java, Go and C#. You can also run package:code to create unpackaged code.
npm run package:bundle
```
You can than use the created packages via the sample applications in `/demo`, e.g. `cd demo/python && python3 main.py`

This will print the following output to the console:

```
Total number of sessions: 20 

AI focused sessions: 
 - Developer Experience in the Age of AI
 - Beyond the Hype: Real-World AI Strategies
 - The shadows of reasoning – new design paradigms for a gen AI world
 - Mastering AI-Driven Problem Solving in Engineering with Observability
 - What AI Can, Can't, and Shouldn't do for Games
 - AI: Superhero or Supervillain? How and Why with Scott Hanselman
 - The transformative impact of GenAI for software development and its implications for cybersecurity
 - Collaborative Intelligence: The Human & AI Partnership
```

### More info

Check the [event landing page](wad24.markusziller.de) of my talk.