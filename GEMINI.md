# Gemini CLI - Project Context and Mandates

# [Comment: This file provides project-specific engineering standards, style conventions, and 
#          workflow preferences. Use it to ensure I maintain consistency across sessions.]

## Interaction Preferences
# [Comment: Define your preferred communication style here. 
#          E.g., "Be concise, use technical jargon, avoid conversational filler."]
- **Tone:** Professional, direct, high-signal.
- **Workflow:** Always follow the Research -> Strategy -> Execution cycle.

## Project Conventions
# [Comment: Specify framework-specific preferences here. 
#          E.g., "Use Signal Inputs," "Prefer Standalone Components," "Vanilla CSS only."]
- **Architecture:** Modern Angular (Standalone, Signals, Functional Route Guards).
- **Styling:** Vanilla CSS (no CSS-in-JS or Tailwind unless requested).
- **Testing:** Always create or update unit tests (Jasmine/Karma or Jest) for every feature.

## Operational Rules
# [Comment: Set security and automation rules.
#          E.g., "Run linter after every change," "Never auto-commit secrets."]
- **Security:** Do not log environment variables or credentials.
- **Validation:** Always execute unit tests and build commands before marking a task complete.
- **Tooling:** Use `ng generate` and `ng test` via provided tools before manual intervention.

## Architectural Notes
# [Comment: Document unique project quirks or legacy constraints here.
#          E.g., "This project uses a custom API service layer," "All components must have OnPush."]
