# Ingenii Figma layout notes

The application intentionally has four distinct UI states:

- `#/get-started` — the Figma landing/Get Started screen with expanded sidebar.
- `#/solution` — Dashcam Footage Detection solution builder with compact sidebar.
- `#/dashboard` — Dashboard/Home screen with progress, Source pending card and Ask AI.
- `#/source` (and other module IDs) — module workspace with progress, activity, capabilities and Ask AI.

Get Started does not render Dashboard content. Dashboard does not render the Get Started prompt/module chooser.

The compact module workspace uses a flexible main column plus a 352px Ask AI panel with a 30px gap, so wide screens do not leave a large unused region.
