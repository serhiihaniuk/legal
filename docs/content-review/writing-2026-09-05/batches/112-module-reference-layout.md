# Readable module reference lists

The employer-duties module exposed a shared layout problem: its fourteen explicit references were compressed into an outlined badge above the title. At 360 pixels the small text occupied several tight lines. The previous state is visible in `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789245808944.png`.

The shared overview now renders the complete authored reference list as an ordinary paragraph after the title and Polish terminology. The module number and dates remain in the metadata row. The reference paragraph uses 14-pixel text with a 24-pixel line height in the inspected browser. No references, qualifiers, dates, or introductory text are removed. The renderer still receives explicit typed targets and the same `reference-section` context.

## Checks performed

The existing shared-module and KPA renderer tests passed, 17 tests in two files. They cover typed links, dates, authored explanations and navigation. No new test was added solely to mirror this class change. Log: `.reference/batch112-focused.log`.

Root inspected the changed employer-duties header at 1440×1000 and 360×800. All fourteen scope links remained, along with separate explanation-state, verification and source-edition dates. Document width matched the viewport. Keyboard activation of the scope's article 5a link reached `/law/powierzanie-pracy/provisions/powierzanie-pracy-art-5a`. Inspected after screenshots are `screenshot-1789245860618.png` and `screenshot-1789245880793.png` in the same screenshot directory.

KPA system was checked at both widths, retaining its plain authored scope, single existing date and introductory distinction. Its inspected mobile screenshot is `screenshot-1789245929772.png`. There was no horizontal page overflow. Browser errors were empty; console output contained development connection, hot-update and React DevTools messages.

Peirce independently read the complete overview, its diff and the relevant shared/KPA tests and accepted the saved overview at SHA256 `614C543C642002FDB8F37FC2F4CB65E9B590F4F7B2065F45FAD7846C5B1C6C6C`. The scope text, citation context, date branches and other content are preserved. The reviewer did not rerun root's browser or test checks.

This is a bounded presentation correction, not writing or legal acceptance of all content rendered by this component. Combined verification is recorded with batch 109.
